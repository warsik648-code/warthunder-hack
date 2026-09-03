import type { Locale } from '../i18n/locale';

/**
 * Visitor-facing status stamp.
 * English: "Updated as of Month D, YYYY"
 * Hebrew: "עודכן בתאריך D בMONTH YYYY" via he-IL
 * Pass a timeZone to format for a specific region; omit it to use the runtime default
 * (the visitor’s local timezone in the browser).
 */
const EN_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
};

const HE_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

export function formatStampDate(
  date: Date,
  timeZone?: string,
  locale: Locale = 'en',
): string {
  const tag = locale === 'he' ? 'he-IL' : 'en-US';
  const options = locale === 'he' ? HE_DATE_OPTIONS : EN_DATE_OPTIONS;
  return new Intl.DateTimeFormat(tag, {
    ...options,
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
  return locale === 'he' ? `עודכן בתאריך ${formatted}` : `Updated as of ${formatted}`;
}

export function millisecondsUntilNextLocalMidnight(from = new Date()): number {
  const next = new Date(from);
  next.setHours(24, 0, 0, 0);
  return Math.max(1000, next.getTime() - from.getTime());
}
