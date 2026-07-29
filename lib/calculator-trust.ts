export type CalculatorSource = {
  organization: string;
  title: string;
  href: string;
};

export const CALCULATOR_LAST_REVIEWED = "2026-07-29";

export const taxCalculatorSources: CalculatorSource[] = [
  {
    organization: "Internal Revenue Service",
    title: "Tax year 2026 inflation adjustments",
    href: "https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill",
  },
  {
    organization: "Social Security Administration",
    title: "Contribution and benefit base",
    href: "https://www.ssa.gov/oact/cola/cbb.html",
  },
  {
    organization: "Internal Revenue Service",
    title: "Additional Medicare Tax",
    href: "https://www.irs.gov/taxtopics/tc560",
  },
];

export const mortgageCalculatorSources: CalculatorSource[] = [
  {
    organization: "Consumer Financial Protection Bureau",
    title: "How mortgage lenders calculate monthly payments",
    href: "https://www.consumerfinance.gov/ask-cfpb/how-do-mortgage-lenders-calculate-monthly-payments-en-1965/",
  },
  {
    organization: "Consumer Financial Protection Bureau",
    title: "Principal and interest versus total monthly payment",
    href: "https://www.consumerfinance.gov/ask-cfpb/on-a-mortgage-whats-the-difference-between-my-principal-and-interest-payment-and-my-total-monthly-payment-en-1941/",
  },
  {
    organization: "Consumer Financial Protection Bureau",
    title: "How to evaluate mortgage affordability",
    href: "https://www.consumerfinance.gov/ask-cfpb/how-can-i-figure-out-if-i-can-afford-to-buy-a-home-and-take-out-a-mortgage-en-118/",
  },
];
