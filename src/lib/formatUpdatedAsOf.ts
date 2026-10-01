import { localeConfig, type Locale } from '../i18n/locale';

/**
 * Visitor-facing page stamp. Not a detection-test date.
 * English: "Updated as of Month D, YYYY"
 * Hebrew: "עודכן בתאריך D בMONTH YYYY"
 * Polish: "Zaktualizowano D MONTH YYYY"
 * German: "Aktualisiert am D. MONTH YYYY"
 */
const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
};

export function formatStampDate(
  date: Date,
  timeZone?: string,
  locale: Locale = 'en',
): string {
  return new Intl.DateTimeFormat(localeConfig[locale].dateLocale, {
    ...DATE_OPTIONS,
    ...(timeZone ? { timeZone } : {}),
  }).format(date);
}

export function isoCalendarDate(date: Date, timeZone?: string): string {
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    ...(timeZone ? { timeZone } : {}),
  }).format(date);
}

export function updatedAsOfLabel(
  date: Date,
  timeZone?: string,
  locale: Locale = 'en',
): string {
  const formatted = formatStampDate(date, timeZone, locale);
  if (locale === 'he') return `עודכן בתאריך ${formatted}`;
  if (locale === 'pl') return `Zaktualizowano ${formatted}`;
  if (locale === 'de') return `Aktualisiert am ${formatted}`;
  return `Updated as of ${formatted}`;
}

export function millisecondsUntilNextLocalMidnight(from = new Date()): number {
  const next = new Date(from);
  next.setHours(24, 0, 0, 0);
  return Math.max(1000, next.getTime() - from.getTime());
}
