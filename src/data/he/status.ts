import { currentStatus } from '../status';
import { en } from './en';

const WT = en('War Thunder');
const WTH = en('War Thunder Hacks');

export const statusSeoHe = {
  title: `סטטוס זיהוי | ${WTH}`,
  description: `סטטוס זיהוי של צ'יטים ל-${WT}. אחרי ${en('Patch')} של ${WT}, ${en('BattlEye')} או ${en('Viking')} — בודקים כאן לפני שנכנסים לקרב.`,
};

export const statusPageHe = {
  h1: 'סטטוס זיהוי',
  lede: `כאן רואים אם ${WTH} מאושר לקרב עכשיו. קודם סטטוס, אחר כך משחק.`,
} as const;

export const currentStatusHe = {
  state: currentStatus.state,
  label: currentStatus.state === 'green' ? 'לא מזוהה כרגע' : `ב-${en('rebuild')}`,
  playLine: `אם כתוב שלא מזוהה כרגע, אפשר להיכנס לקרב. אם יש ${en('rebuild')}, חכו להודעה הבאה.`,
} as const;

export const statusNotesHe = [
  {
    title: `מה קורה אחרי ${en('Patch')}`,
    body: `אם ${en('Patch')} של ${WT}, ${en('BattlEye')} או ${en('Viking')} דורש ${en('rebuild')}, נעדכן את הסטטוס כאן.`,
  },
] as const;

export const statusRulesHe = [
  `אם כתוב שלא מזוהה כרגע, אפשר להיכנס לקרב. אם יש ${en('rebuild')}, חכו להודעה הבאה.`,
  `אחרי ${en('Patch')} חדש, מומלץ לבדוק כאן את הסטטוס לפני שנכנסים לקרב.`,
  `רישיון חודשי או ${en('lifetime')} מקבל ${en('rebuild')} כל עוד הוא פעיל.`,
  `אף צ'יט לא נשאר לא מזוהה לנצח. קודם סטטוס, אחר כך משחק.`,
] as const;

export const statusChromeHe = {
  liveEyebrow: `סטטוס ${WT}`,
  statusPrefix: 'סטטוס',
  notesEyebrow: `אחרי ${en('Patch')}`,
  notesHeading: `מה קורה אחרי ${en('Patch')}`,
  rulesEyebrow: 'לפני קרב',
  rulesHeading: 'בקצרה',
  closeHeading: 'לרכישה',
  closeCopy: `רישיון אחד ל-${en('Aimbot')}, ${en('ESP')}, ${en('Radar')} ו-${en('Wallhack')}. אחרי ${en('Patch')} בודקים סטטוס, ורק אז נכנסים לקרב.`,
} as const;
