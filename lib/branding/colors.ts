export const brandColors = {
  navy900: '#071521',
  navy800: '#0A2235',
  navy700: '#10364E',
  white: '#F7FBFF',
  muted: '#B8CAD8',
  teal: '#32D6B2',
  blue: '#54A7FF',
  green: '#63E6A7',
  amber: '#FFB454',
  red: '#FF7474',
  purple: '#B995FF',
} as const;

export type BrandAccent =
  | 'teal'
  | 'blue'
  | 'green'
  | 'amber'
  | 'red'
  | 'purple';
