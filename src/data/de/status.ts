import { currentStatus } from '../status';

export const statusSeoDe = {
  title: 'Status unerkannt | War Thunder Hacks',
  description:
    'Aktueller unerkannt-Status von War Thunder Hacks. Lies die letzte Notiz, bevor du nach einem Spiel-, BattlEye- oder Viking-Patch ins Gefecht gehst.',
};

export const statusPageDe = {
  h1: 'Status unerkannt',
  lede: 'Diese Seite zeigt, ob War Thunder Hacks für ein Gefecht freigegeben ist. Zuerst der Status. Dann spielen.',
} as const;

export const currentStatusDe = {
  state: currentStatus.state,
  label: currentStatus.state === 'green' ? 'Grün' : 'Neuaufbau',
  playLine:
    'Wenn der Status grün ist, kannst du ins Gefecht. Wenn wir neu aufbauen, warte auf die nächste Notiz.',
} as const;

export const statusNotesDe = [
  {
    title: 'Aktuelle Notiz',
    body: 'Wir schreiben hier eine neue Notiz, wenn ein Spiel-, BattlEye- oder Viking-Patch einen Neuaufbau braucht.',
  },
] as const;

export const statusRulesDe = [
  'Wenn der Status grün ist, kannst du ins Gefecht. Wenn wir neu aufbauen, warte auf die nächste Notiz.',
  'Prüfe diese Seite vor jedem Gefecht nach einem Patch.',
  'Monats- und Lebenszeit-Lizenzen bekommen Neuaufbauten, solange sie aktiv sind.',
  'Kein Cheat bleibt für immer unerkannt — zuerst der Status, dann spielen.',
] as const;

export const statusChromeDe = {
  liveEyebrow: 'Aktueller Build',
  statusPrefix: 'Status:',
  notesEyebrow: 'Nach einem Patch',
  notesHeading: 'Notizen zum Neuaufbau',
  rulesEyebrow: 'Bevor du die Warteschlange öffnest',
  rulesHeading: 'So nutzt du diese Seite',
  closeHeading: 'Overlay holen',
  closeCopy:
    'Eine Lizenz für ESP, Zielhilfe, Radar und Wallhack. Prüfe diese Seite nach einem Patch und spiel nur, solange der Status grün ist.',
  supportLabel: 'Support erhalten',
} as const;
