export type FilingStatus = 'single' | 'married' | 'head';

export type TaxBracket = {
  limit: number;
  rate: number;
};

export const TAX_YEAR = 2026;

export const SOCIAL_SECURITY_RATE = 0.062;
export const SOCIAL_SECURITY_WAGE_BASE = 184500;
export const MEDICARE_RATE = 0.0145;
export const ADDITIONAL_MEDICARE_RATE = 0.009;

export const FEDERAL_TAX_DATA: Record<
  FilingStatus,
  {
    label: string;
    standardDeduction: number;
    additionalMedicareThreshold: number;
    brackets: TaxBracket[];
  }
> = {
  single: {
    label: 'Single',
    standardDeduction: 16100,
    additionalMedicareThreshold: 200000,
    brackets: [
      { limit: 12400, rate: 0.1 },
      { limit: 50400, rate: 0.12 },
      { limit: 105700, rate: 0.22 },
      { limit: 201775, rate: 0.24 },
      { limit: 256225, rate: 0.32 },
      { limit: 640600, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ],
  },

  married: {
    label: 'Married filing jointly',
    standardDeduction: 32200,
    additionalMedicareThreshold: 250000,
    brackets: [
      { limit: 24800, rate: 0.1 },
      { limit: 100800, rate: 0.12 },
      { limit: 211400, rate: 0.22 },
      { limit: 403550, rate: 0.24 },
      { limit: 512450, rate: 0.32 },
      { limit: 768700, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ],
  },

  head: {
    label: 'Head of household',
    standardDeduction: 24150,
    additionalMedicareThreshold: 200000,
    brackets: [
      { limit: 17700, rate: 0.1 },
      { limit: 67450, rate: 0.12 },
      { limit: 105700, rate: 0.22 },
      { limit: 201750, rate: 0.24 },
      { limit: 256200, rate: 0.32 },
      { limit: 640600, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ],
  },
};

export function calculateFederalTax(
  taxableIncome: number,
  filingStatus: FilingStatus
) {
  const safeIncome = Math.max(taxableIncome, 0);
  const brackets = FEDERAL_TAX_DATA[filingStatus].brackets;

  let tax = 0;
  let previousLimit = 0;

  for (const bracket of brackets) {
    if (safeIncome <= previousLimit) {
      break;
    }

    const taxableAtThisRate =
      Math.min(safeIncome, bracket.limit) - previousLimit;

    tax += taxableAtThisRate * bracket.rate;
    previousLimit = bracket.limit;
  }

  return tax;
}

export function calculateFederalIncomeTaxFromGross(
  grossIncome: number,
  filingStatus: FilingStatus,
  additionalPreTaxDeductions = 0
) {
  const standardDeduction =
    FEDERAL_TAX_DATA[filingStatus].standardDeduction;

  const taxableIncome = Math.max(
    grossIncome - additionalPreTaxDeductions - standardDeduction,
    0
  );

  return {
    standardDeduction,
    taxableIncome,
    federalTax: calculateFederalTax(taxableIncome, filingStatus),
  };
}

export function calculateSocialSecurityTax(wages: number) {
  return (
    Math.min(Math.max(wages, 0), SOCIAL_SECURITY_WAGE_BASE) *
    SOCIAL_SECURITY_RATE
  );
}

export function calculateMedicareTax(
  wages: number,
  filingStatus: FilingStatus
) {
  const safeWages = Math.max(wages, 0);
  const threshold =
    FEDERAL_TAX_DATA[filingStatus].additionalMedicareThreshold;

  const regularMedicare = safeWages * MEDICARE_RATE;
  const additionalMedicare =
    Math.max(safeWages - threshold, 0) * ADDITIONAL_MEDICARE_RATE;

  return {
    regularMedicare,
    additionalMedicare,
    totalMedicare: regularMedicare + additionalMedicare,
  };
}
