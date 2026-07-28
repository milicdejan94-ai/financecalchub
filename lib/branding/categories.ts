import type { BrandAccent } from './colors';

export type OgCategory =
  | 'Finance Guide'
  | 'Real Money Story'
  | 'Tax Story'
  | 'Hourly Wage Guide'
  | 'Mortgage Guide'
  | 'Investing Guide'
  | 'Calculator'
  | 'Paycheck'
  | 'Retirement'
  | 'Debt & Credit';

export type CategoryStyle = {
  label: string;
  accent: BrandAccent;
};

const categoryStyles: Record<OgCategory, CategoryStyle> = {
  'Finance Guide': {
    label: 'FINANCE GUIDE',
    accent: 'teal',
  },
  'Real Money Story': {
    label: 'REAL MONEY STORY',
    accent: 'amber',
  },
  'Tax Story': {
    label: 'REAL MONEY STORY · TAX',
    accent: 'red',
  },
  'Hourly Wage Guide': {
    label: 'HOURLY WAGE GUIDE',
    accent: 'blue',
  },
  'Mortgage Guide': {
    label: 'MORTGAGE GUIDE',
    accent: 'green',
  },
  'Investing Guide': {
    label: 'INVESTING FOR BEGINNERS',
    accent: 'purple',
  },
  Calculator: {
    label: 'FREE FINANCIAL CALCULATOR',
    accent: 'teal',
  },
  Paycheck: {
    label: 'PAYCHECK',
    accent: 'blue',
  },
  Retirement: {
    label: 'RETIREMENT',
    accent: 'purple',
  },
  'Debt & Credit': {
    label: 'DEBT & CREDIT',
    accent: 'amber',
  },
};

export function getCategoryStyle(
  category: OgCategory = 'Finance Guide'
): CategoryStyle {
  return categoryStyles[category];
}
