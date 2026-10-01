import { currentStatus } from '../status';

export const statusSeoPl = {
  title: 'Status wykrywalności | War Thunder Hacks',
  description:
    'Aktualny status wykrywalności War Thunder Hacks. Sprawdź ostatnią notatkę, zanim wejdziesz do bitwy po patchu gry, BattlEye albo Viking.',
};

export const statusPagePl = {
  h1: 'Status wykrywalności',
  lede: 'Ta strona pokazuje, czy War Thunder Hacks jest dopuszczony do bitwy. Najpierw status. Potem gra.',
} as const;

export const currentStatusPl = {
  state: currentStatus.state,
  label: currentStatus.state === 'green' ? 'Zielony' : 'Przebudowa',
  playLine:
    'Jeśli status jest zielony, możesz wejść do bitwy. Jeśli trwa przebudowa, czekaj na następną notatkę.',
} as const;

export const statusNotesPl = [
  {
    title: 'Aktualna notatka',
    body: 'Publikujemy tu nową notatkę, gdy patch gry, BattlEye albo Viking wymaga przebudowy.',
  },
] as const;

export const statusRulesPl = [
  'Jeśli status jest zielony, możesz wejść do bitwy. Jeśli trwa przebudowa, czekaj na następną notatkę.',
  'Sprawdzaj tę stronę przed każdą bitwą po patchu.',
  'Licencje miesięczne i dożywotnie dostają przebudowy, dopóki są aktywne.',
  'Żaden cheat nie zostaje niewykrywalny na zawsze — najpierw status, potem gra.',
] as const;

export const statusChromePl = {
  liveEyebrow: 'Aktualna kompilacja',
  statusPrefix: 'Status:',
  notesEyebrow: 'Po patchu',
  notesHeading: 'Notatki o przebudowie',
  rulesEyebrow: 'Zanim wejdziesz do kolejki',
  rulesHeading: 'Jak korzystać z tej strony',
  closeHeading: 'Weź nakładkę',
  closeCopy:
    'Jedna licencja na ESP, celowanie, radar i wallhack. Po patchu sprawdź tę stronę i graj tylko wtedy, gdy status jest zielony.',
  supportLabel: 'Uzyskaj wsparcie',
} as const;
