/**
 * Isolate Latin game terms inside Hebrew so RTL punctuation
 * and hyphens do not jump to the wrong side.
 */
const LRI = '\u2066';
const PDI = '\u2069';

export function en(term: string): string {
  return `${LRI}${term}${PDI}`;
}
