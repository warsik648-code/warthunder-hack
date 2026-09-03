import {
  isoCalendarDate,
  millisecondsUntilNextLocalMidnight,
  updatedAsOfLabel,
} from '../lib/formatUpdatedAsOf';

function paintStamp(root: Element, timeZone?: string, locale?: string): void {
  const now = new Date();
  const time = root.querySelector('time');
  const stampLocale = locale === 'he' ? 'he' : 'en';
  const label = updatedAsOfLabel(now, timeZone, stampLocale);

  root.setAttribute('data-stamp', label);

  if (time instanceof HTMLTimeElement) {
    time.dateTime = isoCalendarDate(now, timeZone);
    time.textContent = label;
  } else {
    root.textContent = label;
  }
}

function paintAll(): void {
  document.querySelectorAll('[data-updated-as-of]').forEach((root) => {
    const timeZone = root.getAttribute('data-timezone') || undefined;
    const locale = root.getAttribute('data-locale') || 'en';
    paintStamp(root, timeZone, locale);
  });
}

let started = false;

export function initUpdatedAsOf(): void {
  paintAll();

  if (started) return;
  started = true;

  window.setTimeout(function refreshAtMidnight() {
    paintAll();
    window.setTimeout(refreshAtMidnight, millisecondsUntilNextLocalMidnight());
  }, millisecondsUntilNextLocalMidnight());

  window.setInterval(paintAll, 30_000);
}
