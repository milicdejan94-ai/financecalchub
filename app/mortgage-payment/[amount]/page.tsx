import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { mortgageAmounts } from '../../../lib/mortgageAmounts';

type PageProps = {
  params: {
    amount: string;
  };
};

export function generateStaticParams() {
  return mortgageAmounts.map((amount) => ({
    amount: String(amount),
  }));
}

export function generateMetadata({ params }: PageProps) {
  const amount = Number(params.amount);

  return {
    title: `$${amount.toLocaleString(
      'en-US'
    )} Mortgage Payment Calculator | Monthly Payment Estimate`,
    description: `Estimate the monthly payment on a $${amount.toLocaleString(
      'en-US'
    )} mortgage with principal, interest, property tax, insurance, PMI, HOA and maintenance assumptions.`,
  };
}

export default function MortgagePaymentAmountPage({ params }: PageProps) {
  const amount = Number(params.amount);

  if (!mortgageAmounts.includes(amount)) {
    return (
      <section className="section">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Mortgage Payment', href: '/mortgage-payment' },
              { label: `$${amount.toLocaleString('en-US')} Mortgage` },
            ]}
          />

          <div className="content-box">
            <h1>Mortgage payment page not found</h1>
            <p>This mortgage payment estimate page does not exist yet.</p>
          </div>
        </div>
      </section>
    );
  }

  const interestRate = 6.5;
  const loanTermYears = 30;
  const propertyTaxRate = 1.1;
  const annualInsurance = 1200;
  const monthlyPmi = 0;
  const monthlyHoa = 0;
  const monthlyMaintenance = 200;

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const principalAndInterest =
    monthlyRate > 0
      ? amount *
        ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
      : amount / numberOfPayments;

  const estimatedHomePrice = amount;
  const monthlyPropertyTax =
    (estimatedHomePrice * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = annualInsurance / 12;

  const estimatedMonthlyPayment =
    principalAndInterest +
    monthlyPropertyTax +
    monthlyInsurance +
    monthlyPmi +
    monthlyHoa +
    monthlyMaintenance;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Mortgage Payment', href: '/mortgage-payment' },
            { label: `$${amount.toLocaleString('en-US')} Mortgage Payment` },
          ]}
        />

        <p className="eyebrow">Mortgage payment calculator</p>

        <h1>${amount.toLocaleString('en-US')} Mortgage Payment Calculator</h1>

        <p>
          Estimate the monthly payment on a ${amount.toLocaleString('en-US')}{' '}
          mortgage using a 30-year loan, estimated interest, property tax,
          homeowners insurance and maintenance assumptions.
        </p>

        <div className="calculator-box">
          <h2>Estimated monthly payment</h2>

          <p>Mortgage amount: ${amount.toLocaleString('en-US')}</p>

          <div className="result">
            Estimated total monthly payment: $
            {estimatedMonthlyPayment.toFixed(2)}
          </div>

          <div className="result">
            Principal & interest: ${principalAndInterest.toFixed(2)}
          </div>

          <div className="result">
            Estimated monthly property tax: ${monthlyPropertyTax.toFixed(2)}
          </div>

          <div className="result">
            Estimated monthly insurance: ${monthlyInsurance.toFixed(2)}
          </div>

          <div className="result">
            Maintenance buffer: ${monthlyMaintenance.toFixed(2)}
          </div>

          <div className="result">
            Assumed interest rate: {interestRate.toFixed(2)}%
          </div>

          <div className="result">Loan term: {loanTermYears} years</div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>
            What is the monthly payment on a $
            {amount.toLocaleString('en-US')} mortgage?
          </h2>

          <p>
            Using the simplified assumptions on this page, a $
            {amount.toLocaleString('en-US')} mortgage may have an estimated
            monthly payment of ${estimatedMonthlyPayment.toFixed(2)} when
            principal, interest, property tax, insurance and a maintenance buffer
            are included.
          </p>

          <h3>Principal and interest</h3>

          <p>
            The estimated principal and interest payment is $
            {principalAndInterest.toFixed(2)} per month based on a {loanTermYears}
            -year loan and an assumed {interestRate.toFixed(2)}% interest rate.
          </p>

          <h3>Property tax and insurance</h3>

          <p>
            This estimate includes property tax using an assumed annual property
            tax rate of {propertyTaxRate.toFixed(1)}% and annual homeowners
            insurance of ${annualInsurance.toLocaleString('en-US')}.
          </p>

          <h3>Why your real payment may be different</h3>

          <p>
            Actual mortgage payments can vary based on interest rate, credit
            score, lender fees, property taxes, homeowners insurance, PMI, HOA
            fees, down payment, escrow changes and local housing costs.
          </p>

          <h3>Use a full mortgage calculator</h3>

          <p>
            This page provides a quick estimate for a common mortgage amount. For
            more control over home price, down payment, PMI, HOA and maintenance,
            use the full mortgage calculator.
          </p>

          <h3>Important note</h3>

          <p>
            This page provides simplified educational estimates only. It is not
            mortgage, financial, tax, legal or investment advice. Always verify
            home affordability with a qualified mortgage lender or professional.
          </p>
        </div>

        <RelatedCalculators
          title="Related mortgage tools"
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