export type BuildStatus = 'green' | 'rebuilding';

export const statusSeo = {
  title: 'Undetected Status | War Thunder Hacks',
  description:
    'Current War Thunder Hacks undetected status. Check the latest note before you battle after a game, BattlEye, or Viking patch.',
};

export const statusPage = {
  h1: 'Undetected status',
  lede: 'This page is the live read on whether War Thunder Hacks is cleared for a match. Status comes first. Play second.',
} as const;

export const currentStatus: {
  state: BuildStatus;
  label: string;
  playLine: string;
} = {
  state: 'green',
  label: 'Green',
  playLine:
    'If Status is green, you can battle. If we are rebuilding, wait for the next note.',
};

export const statusNotes = [
  {
    title: 'Current note',
    body: 'We post a new note here when a game, BattlEye, or Viking patch needs a rebuild.',
  },
] as const;

export const statusRules = [
  'If Status is green, you can battle. If we are rebuilding, wait for the next note.',
  'Check this page before every battle after a patch.',
  'Monthly and lifetime licenses get rebuilds while active.',
  'No cheat stays undetected forever — status first, then play.',
] as const;

/**
 * Documentation-only timezones. The visitor stamp always uses the device timezone.
 */
export const timezoneExamples = [
  {
    flag: '🇬🇧',
    region: 'United Kingdom',
    timeZone: 'Europe/London',
    note: 'UK visitors see the calendar date in Britain (GMT or BST).',
  },
  {
    flag: '🇮🇱',
    region: 'Israel',
    timeZone: 'Asia/Jerusalem',
    note: 'Israel can already be on the next calendar day while the UK is still on the previous evening.',
  },
  {
    flag: '🇶🇦',
    region: 'Qatar',
    timeZone: 'Asia/Qatar',
    note: 'Qatar stays on UTC+3. After local midnight, this stamp rolls even if London has not.',
  },
  {
    flag: '🇪🇺',
    region: 'European Union',
    timeZone: 'Europe/Berlin',
    note: 'Shown as Central European Time. EU visitors still get their own device timezone (WET, CET, or EET).',
  },
] as const;

export const timezoneExplainer = {
  heading: 'How the date is shown',
  body: [
    'The line “Local date: …” is generated in your browser from your device timezone. It is not a single office clock, and it is not frozen at build time.',
    'If the calendar date has already changed in Qatar or Israel but it is still the previous day in the United Kingdom, each visitor sees the date that is correct where they are. Someone in the European Union sees the date for the timezone on their own device.',
    'The stamp refreshes automatically at local midnight, so the date advances every day without a site deploy.',
  ],
} as const;
