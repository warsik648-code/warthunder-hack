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

