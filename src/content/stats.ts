import type { Stat } from './types';

/** Headline numbers shown on the home page. Animated count-up on scroll. */
export const stats: Stat[] = [
  { value: 2.5, prefix: '$', suffix: 'M', decimals: 1, label: 'Annual revenue managed', note: 'AEC business unit P&L' },
  { value: 60, prefix: '~', suffix: '%', label: 'Gross margin delivered', note: 'Across ODC & project work' },
  { value: 70, suffix: '+', label: 'Engineers led', note: 'Hired, trained and retained' },
  { value: 50, suffix: '+', label: 'POCs turned into products', note: 'Often from a one-line requirement' },
  { value: 10, suffix: '+', label: 'Years in AEC / CAD / BIM', note: 'Developer to BU head' },
  { value: 7, label: 'Countries engaged on-site', note: 'US, UK, IE, DE, ES, FR, KR' },
];
