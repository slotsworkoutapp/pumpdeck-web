// One source of truth for the persona split, shared by every section that
// tailors itself. The app asks this same question first in onboarding and
// tailors everything downstream from the answer; the site now does the same.
//
// Copy for the compare card is lifted from the app's own MeetTheSlotStep,
// which already has a follower and a winger variant of the "before" side.

export type PersonaId = 'follower' | 'winger' | 'hybrid';

/** Pre-selected on arrival. Nothing is ever hidden behind the question — the
 *  page is complete for a visitor who never answers, and for crawlers. */
export const DEFAULT_PERSONA: PersonaId = 'hybrid';

export interface CompareRow {
  name: string;
  /** Only the "making it up" rows carry one; a fixed-exercise day is just lifts. */
  sub?: string;
  /** Muscle map for the thumbnail; omitted when there's no exercise yet. */
  map?: string;
}

export interface Persona {
  id: PersonaId;
  label: string;
  detail: string;

  /** The answer to the question, shown as "Slots — {headline}". */
  headline: string;
  recognition: string;

  /** Compare section: the left-hand card is a different life per persona. */
  compareBadge: string;
  /** Blank on the fixed-exercise variants — a normal app doesn't explain itself. */
  compareSubtitle?: string;
  compareRows: CompareRow[];

  /** Save-to-set section: where the exercise stalls, per persona. */
  journeyBranches: { who: string; text: string }[];
}

const fixedRows: CompareRow[] = [
  { name: 'Incline Dumbbell Press', map: 'chest' },
  { name: 'Machine Shoulder Press', map: 'shoulders' },
  { name: 'Rope Pushdown', map: 'triceps' },
];

const followerBranch = {
  who: 'You follow a program',
  text: 'There’s no room for it. Fitting it in means dropping something else — and hoping you don’t throw off your programming.',
};

const wingerBranch = {
  who: 'You make it up at the gym',
  text: 'There’s no way to track it, so there’s no progress to see. And nothing brings it up again — remembering it is on you, forever.',
};


export const personas: Persona[] = [
  {
    id: 'follower',
    label: 'I follow a program',
    detail: 'I usually know my exercises before I get to the gym.',
    headline: 'Your program, without the friction.',
    recognition: 'You like knowing the plan. You just need it to bend when real life does.',
    compareBadge: 'Traditional workout apps',
    compareRows: fixedRows,
    journeyBranches: [followerBranch],
  },
  {
    id: 'winger',
    label: 'I make it up as I go',
    detail: 'I decide what I’m doing when I get there.',
    headline: 'Your freedom, with a plan.',
    recognition:
      'You want to keep choosing your exercises without starting every workout from scratch.',
    compareBadge: 'Making it up',
    compareSubtitle: 'Choose everything while you’re at the gym',
    compareRows: [
      { name: 'What should I train?', sub: 'No muscle plan yet' },
      { name: 'Probably shoulders', sub: 'Decide as you go' },
      { name: 'Whatever is open', sub: 'Hope it covers everything' },
    ],
    journeyBranches: [wingerBranch],
  },
  {
    id: 'hybrid',
    label: 'A little of both',
    detail: 'I like structure, but I change things often.',
    headline: 'Structure when you want it. Flexibility when you need it.',
    recognition:
      'You want enough structure to stay on track and enough freedom to change the lift.',
    compareBadge: 'The usual way',
    compareRows: fixedRows,
    journeyBranches: [
      { ...followerBranch, who: 'If you follow a program' },
      { ...wingerBranch, who: 'If you make it up at the gym' },
    ],
  },
];
