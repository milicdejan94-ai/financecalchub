import type { MetadataRoute } from 'next';
import { mortgageAmounts } from '../lib/mortgageAmounts';
import { hourlyWages } from '../lib/hourlyWages';
import { salaryAmounts } from '../lib/salaryAmounts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.financecalchub.com';

  const staticRoutes = [
    '',
    '/blog',
    '/blog/real-money-stories',
    '/blog/real-money-stories/wrong-w2-employer-not-correcting',
    '/blog/real-money-stories/not-filed-taxes-nearly-eight-years',
    '/blog/real-money-stories/55000-1099-8000-tax-bill',
    '/blog/real-money-stories/return-accepted-forgot-w2',
    '/blog/real-money-stories/taxed-in-wrong-state-payroll-problem',
    '/blog/real-money-stories/employer-reported-30000-more-income',
    '/blog/real-money-stories/irs-said-he-owed-20000-high-school',
    '/calculators',
    '/paycheck-calculator',
    '/salary-calculator',
    '/salary-after-tax',
    '/hourly-wage',
    '/mortgage-payment',

    '/calculators/paycheck',
    '/calculators/hourly-paycheck',
    '/calculators/overtime',
    '/calculators/salary-to-hourly',
    '/calculators/federal-tax',

    '/calculators/mortgage',
    '/calculators/refinance',
    '/calculators/mortgage-affordability',
    '/calculators/rent-vs-buy',
    '/calculators/down-payment',
    '/calculators/amortization',
    '/calculators/extra-mortgage-payment',

    '/calculators/loan',
    '/calculators/car-loan',
    '/calculators/apr',
    '/calculators/debt-payoff',
    '/calculators/credit-card-payoff',

    '/calculators/retirement',
    '/calculators/401k',
    '/calculators/compound-interest',
    '/calculators/investment-return',
    '/calculators/savings',

    '/investing',
    '/investing/beginner-guide',
    '/investing/what-are-stocks',
    '/investing/stocks-vs-etfs',
    '/investing/how-much-money-to-start-investing',
    '/investing/capital-gains-tax-for-beginners',
    '/investing/beginner-investing-mistakes',

    '/about',
    '/methodology',
    '/editorial-policy',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',

    '/blog/how-to-estimate-take-home-pay',
    '/blog/mortgage-payment-basics',
    '/blog/compound-growth-retirement-savings',
    '/blog/gross-pay-vs-net-pay',
    '/blog/how-much-is-70000-after-taxes',
    '/blog/how-much-is-100000-after-taxes',
    '/blog/25-an-hour-is-how-much-a-year',
    '/blog/30-an-hour-is-how-much-a-year',
    '/blog/300000-mortgage-payment',
    '/blog/400000-mortgage-payment',
    '/blog/apr-vs-interest-rate',
    '/blog/how-much-house-can-i-afford',
    '/blog/pay-off-credit-card-debt-faster',
    '/blog/rent-vs-buy-key-factors',
  ];

  const mortgagePaymentRoutes = mortgageAmounts.map(
    (amount) => `/mortgage-payment/${amount}`
  );

  const hourlyWageRoutes = hourlyWages.map((wage) => `/hourly-wage/${wage}`);

  const salaryCalculatorRoutes = salaryAmounts.map(
    (amount) => `/salary-calculator/${amount}`
  );

  const salaryAfterTaxRoutes = salaryAmounts.map(
    (amount) => `/salary-after-tax/${amount}`
  );

  return [
    ...staticRoutes,
    ...mortgagePaymentRoutes,
    ...hourlyWageRoutes,
    ...salaryCalculatorRoutes,
    ...salaryAfterTaxRoutes,
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
