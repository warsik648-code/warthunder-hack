import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HOST = '0.0.0.0';
const PORT = Number.parseInt(process.env.PORT || '3000', 10) || 3000;
const HERE = path.dirname(fileURLToPath(import.meta.url));
const CANONICAL_HOST = (process.env.CANONICAL_HOST || 'warthunderhack.com').toLowerCase();

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webmanifest': 'application/manifest+json',
  '.map': 'application/json; charset=utf-8',
};

function stat(file) {
  try {
    return fs.statSync(file);
  } catch {
    return null;
  }
}

function findRoot() {
  const dist = path.resolve(HERE, 'dist');
  if (stat(path.join(dist, 'index.html'))?.isFile()) return dist;
  if (stat(path.join(HERE, 'index.html'))?.isFile()) return HERE;
  return dist;
}

const ROOT = findRoot();

function resolveSafe(urlPath) {
  const resolved = path.resolve(ROOT, `.${urlPath}`);
  if (resolved !== ROOT && !resolved.startsWith(ROOT + path.sep)) return null;
  return resolved;
}

function sendFile(res, status, file) {
  const ext = path.extname(file).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';
  const immutable = file.includes(`${path.sep}_astro${path.sep}`);
  res.writeHead(status, {
    'Content-Type': type,
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control':
      ext === '.html' ? 'no-cache' : immutable ? 'public, max-age=31536000, immutable' : 'public, max-age=86400',
  });
  const stream = fs.createReadStream(file);
  stream.on('error', () => {
    if (!res.headersSent) res.writeHead(500);
    res.end();
  });
  stream.pipe(res);
}

function resolveFile(urlPath) {
  const target = resolveSafe(urlPath);
  if (!target) return { error: 400 };

  const candidates = [];
  const info = stat(target);
  if (info?.isFile()) candidates.push(target);
  if (info?.isDirectory()) candidates.push(path.join(target, 'index.html'));
  if (!path.extname(path.basename(target))) {
    candidates.push(`${target}.html`);
    candidates.push(path.join(target, 'index.html'));
  }

  const file = candidates.find((candidate) => stat(candidate)?.isFile());
  return file ? { file } : { missing: true };
}

function targetOf(req) {
  try {
    const url = new URL(req.url || '/', 'http://127.0.0.1');
    return { pathname: url.pathname, search: url.search };
  } catch {
    return null;
  }
}

function hostnameOf(req) {
  const fwd = req.headers['x-forwarded-host'];
  const raw = (Array.isArray(fwd) ? fwd[0] : fwd) || req.headers.host || '';
  return raw.split(',')[0].trim().replace(/:\d+$/, '').toLowerCase();
}

function isFilePath(pathname) {
  const last = pathname.split('/').pop() || '';
  return last.includes('.');
}

function withTrailingSlash(pathname) {
  if (pathname === '/' || isFilePath(pathname) || pathname.endsWith('/')) return pathname;
  return `${pathname}/`;
}

if (!stat(path.join(ROOT, 'index.html'))?.isFile()) {
  console.error(`Missing build output at ${ROOT}. Run npm run build before start.`);
  process.exit(1);
}

const server = http.createServer((req, res) => {
  try {
    const target = targetOf(req);
    if (!target) {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Bad request');
      return;
    }

    const { pathname: urlPath, search } = target;
    const slashed = withTrailingSlash(urlPath);

    if (hostnameOf(req) === `www.${CANONICAL_HOST}`) {
      res.writeHead(301, { Location: `https://${CANONICAL_HOST}${slashed}${search}` });
      res.end();
      return;
    }

    if (slashed !== urlPath) {
      res.writeHead(301, { Location: `${slashed}${search}` });
      res.end();
      return;
    }

    const result = resolveFile(urlPath);
    if (result.error) {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Bad request');
      return;
    }

    if (result.file) {
      if (req.method === 'HEAD') {
        res.writeHead(200, {
          'Content-Type': MIME[path.extname(result.file).toLowerCase()] || 'application/octet-stream',
        });
        res.end();
        return;
      }
      sendFile(res, 200, result.file);
      return;
    }

    const notFound = path.join(ROOT, '404.html');
    if (stat(notFound)?.isFile()) {
      sendFile(res, 404, notFound);
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  } catch (err) {
    console.error(err);
    if (!res.headersSent) res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Server error');
  }
});

server.on('error', (err) => {
  console.error('Server failed to start:', err);
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  console.log(`Serving ${ROOT} on http://${HOST}:${PORT}`);
});

function shutdown() {
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 3000).unref();
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
