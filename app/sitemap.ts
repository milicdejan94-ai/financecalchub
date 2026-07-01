import type { MetadataRoute } from 'next';
import { states } from '../lib/states';
import { salaryAmounts } from '../lib/salaryAmounts';
import { mortgageAmounts } from '../lib/mortgageAmounts';
import { hourlyWages } from '../lib/hourlyWages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.financecalchub.com';

  const staticRoutes = [
    '',
    '/blog',
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

  const stateRoutes = states.map(
    (state) => `/paycheck-calculator/${state.slug}`
  );

  const salaryRoutes = salaryAmounts.map(
    (amount) => `/salary-calculator/${amount}`
  );

  const salaryAfterTaxRoutes = salaryAmounts.map(
    (amount) => `/salary-after-tax/${amount}`
  );

  const mortgagePaymentRoutes = mortgageAmounts.map(
    (amount) => `/mortgage-payment/${amount}`
  );

  const hourlyWageRoutes = hourlyWages.map((wage) => `/hourly-wage/${wage}`);

  return [
    ...staticRoutes,
    ...stateRoutes,
    ...salaryRoutes,
    ...salaryAfterTaxRoutes,
    ...mortgagePaymentRoutes,
    ...hourlyWageRoutes,
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
