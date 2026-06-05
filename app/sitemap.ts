import type { MetadataRoute } from 'next';
import { states } from '../lib/states';
import { salaryAmounts } from '../lib/salaryAmounts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://financecalchub.com';

  const staticRoutes = [
    '',
    '/blog',
    '/calculators',
    '/paycheck-calculator',
    '/salary-calculator',
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
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',

    '/blog/how-to-estimate-take-home-pay',
    '/blog/mortgage-payment-basics',
    '/blog/compound-growth-retirement-savings',
    '/blog/gross-pay-vs-net-pay',
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

  return [...staticRoutes, ...stateRoutes, ...salaryRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}