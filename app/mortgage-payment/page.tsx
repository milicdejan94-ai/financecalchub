import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';
import { mortgageAmounts } from '../../lib/mortgageAmounts';

export const metadata = {
  title: 'Mortgage Payment Calculators by Amount | FinanceCalcHub',
  description:
    'Estimate monthly mortgage payments for common loan amounts. Compare payments for $200k, $300k, $400k, $500k and more.',
};

export default function MorKaNCgLvMEXxNzMxj2F7FYi1AdRrTo6Nhu() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Mortgage Payment Calculators' },
          ]}
        />

        <p className="eyebrow">Mortgage payment calculators</p>

        <h1>Mortgage Payment Calculators by Amount</h1>

        <p>
          Estimate monthly mortgage payments for common loan amounts. Choose a
          mortgage amount below to see estimated principal, interest, property
          tax, insurance and maintenance costs.
        </p>

        <div className="calculator-box">
          <h2>Choose a mortgage amount</h2>

          <div className="grid">
            {mortgageAmounts.map((amount) => (
              <a
                key={amount}
                className="card"
                href={`/mortgage-payment/${amount}`}
              >
                <h3>${amount.toLocaleString('en-US')} Mortgage Payment</h3>
                <p>
                  Estimate the monthly payment on a $
                  {amount.toLocaleString('en-US')} mortgage.
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How mortgage payment estimates work</h2>

          <p>
            A mortgage payment estimate usually includes principal, interest,
            property taxes and homeowners insurance. Some buyers may also need to
            include PMI, HOA fees, maintenance and other housing costs.
          </p>

          <h2>Why the full monthly cost matters</h2>

          <p>
            The loan payment alone does not show the full cost of owning a home.
            Property taxes, insurance, HOA fees, repairs and maintenance can
            significantly change what a buyer can comfortably afford.
          </p>

          <h2>Use these pages for quick planning</h2>

          <p>
            These mortgage payment pages are designed for quick educational
            estimates by loan amount. For a more detailed estimate, use the full
            mortgage calculator or mortgage affordability calculator.
          </p>

          <h2>Important note</h2>

          <p>
            These calculators provide simplified educational estimates only. They
            are not mortgage, financial, tax, legal or investment advice. Actual
            payments may vary by lender, location, credit profile, property tax,
            insurance and loan terms.
          </p>
        </div>

        <RelatedCalculators
          title="More mortgage tools"
          tools={[
            {
              title: 'Mortgage Calculator',
              href: '/calculators/mortgage',
            },
            {
              title: 'Mortgage Affordability Calculator',
              href: '/calculators/mortgage-affordability',
            },
            {
              title: 'Rent vs Buy Calculator',
              href: '/calculators/rent-vs-buy',
            },
            {
              title: 'Down Payment Calculator',
              href: '/calculators/down-payment',
            },
            {
              title: 'Amortization Calculator',
              href: '/calculators/amortization',
            },
            {
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
            },
          ]}
        />
      </div>
    </section>
  );
}