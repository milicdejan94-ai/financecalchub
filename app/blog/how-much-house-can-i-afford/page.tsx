import AdBanner from '../../../components/AdBanner';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

export const metadata = {
  title: 'How Much House Can I Afford?',
  description:
    'Learn what affects home affordability, including income, debt, down payment, mortgage rate and monthly housing costs.',
};

export default function HowMuchHouseCanIAffordPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'How Much House Can I Afford?' },
          ]}
        />

        <div className="content-box">
          <p className="eyebrow">Mortgage guide</p>

          <h1>How Much House Can I Afford?</h1>

          <p>
            Home affordability depends on income, debts, down payment, interest
            rate and the total monthly housing payment. Estimating these numbers
            before shopping can help set a realistic home budget.
          </p>

          <AdBanner slot="house-afford-top" />

          <h2>Income</h2>

          <p>
            Higher income can support a larger mortgage payment, but income is
            only one part of affordability. Lenders also look at existing debt
            and overall financial profile.
          </p>

          <h2>Debt-to-income ratio</h2>

          <p>
            Debt-to-income ratio compares monthly debt payments with monthly
            income. Higher debt payments can reduce how much mortgage payment may
            be affordable.
          </p>

          <h2>Down payment</h2>

          <p>
            A larger down payment reduces the loan amount and can improve
            affordability. It may also reduce the need for mortgage insurance.
          </p>

          <AdBanner slot="house-afford-middle" />

          <h2>Interest rate</h2>

          <p>
            Higher mortgage rates increase monthly payments. Lower rates can make
            the same home price more affordable.
          </p>

          <h2>Other housing costs</h2>

          <p>
            Property taxes, homeowners insurance, HOA fees, repairs and
            maintenance can all affect affordability.
          </p>

          <p>
            Try our{' '}
            <a href="/calculators/mortgage-affordability">
              Mortgage Affordability Calculator
            </a>{' '}
            or <a href="/calculators/mortgage">Mortgage Calculator</a> to
            estimate a home buying scenario.
          </p>

          <h2>Important note</h2>

          <p>
            This article is for educational purposes only and is not mortgage,
            lending, tax or financial advice.
          </p>
        </div>

        <RelatedCalculators
          title="Related mortgage tools"
          tools={[
            {
              title: 'Mortgage Affordability Calculator',
              href: '/calculators/mortgage-affordability',
            },
            { title: 'Mortgage Calculator', href: '/calculators/mortgage' },
            {
              title: 'Down Payment Calculator',
              href: '/calculators/down-payment',
            },
            {
              title: 'Rent vs Buy Calculator',
              href: '/calculators/rent-vs-buy',
            },
            { title: 'Refinance Calculator', href: '/calculators/refinance' },
            {
              title: 'Amortization Calculator',
              href: '/calculators/amortization',
            },
          ]}
        />
      </div>
    </section>
  );
}