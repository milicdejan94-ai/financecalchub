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
  const formattedAmount = Number.isFinite(amount)
    ? amount.toLocaleString('en-US')
    : 'Mortgage';

  return {
    title: `$${formattedAmount} Mortgage Payment Calculator | Monthly Payment Estimate`,
    description: `Estimate the monthly payment on a $${formattedAmount} mortgage, including principal, interest, property taxes, homeowners insurance, maintenance and common affordability considerations.`,
  };
}

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

function formatCurrencyWithCents(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function calculatePrincipalAndInterest(
  loanAmount: number,
  annualRate: number,
  termYears: number
) {
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = termYears * 12;

  if (monthlyRate <= 0) {
    return loanAmount / numberOfPayments;
  }

  return (
    loanAmount *
    ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
  );
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
  const lowerRate = 5.5;
  const higherRate = 7.5;
  const loanTermYears = 30;
  const shorterLoanTermYears = 15;
  const propertyTaxRate = 1.1;
  const annualInsurance = 1200;
  const monthlyPmi = 0;
  const monthlyHoa = 0;
  const monthlyMaintenance = 200;

  const principalAndInterest = calculatePrincipalAndInterest(
    amount,
    interestRate,
    loanTermYears
  );

  const lowerRatePayment = calculatePrincipalAndInterest(
    amount,
    lowerRate,
    loanTermYears
  );

  const higherRatePayment = calculatePrincipalAndInterest(
    amount,
    higherRate,
    loanTermYears
  );

  const shorterTermPayment = calculatePrincipalAndInterest(
    amount,
    interestRate,
    shorterLoanTermYears
  );

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

  const annualHousingCost = estimatedMonthlyPayment * 12;
  const recommendedGrossIncomeAt28 = estimatedMonthlyPayment / 0.28;
  const recommendedGrossIncomeAt33 = estimatedMonthlyPayment / 0.33;

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

        <article className="content-box">
          <p className="eyebrow">Mortgage payment calculator</p>

          <h1>${amount.toLocaleString('en-US')} Mortgage Payment Calculator</h1>

          <p>
            Estimate the monthly payment on a {formatCurrency(amount)} mortgage
            using a 30-year loan, an assumed interest rate, property taxes,
            homeowners insurance and a basic maintenance buffer. This page is a
            planning estimate, not a lender quote.
          </p>

          <p>
            For a custom scenario with your own home price, down payment, loan
            term, tax rate and insurance assumptions, use the{' '}
            <a href="/calculators/mortgage">Mortgage Calculator</a> or compare
            affordability with the{' '}
            <a href="/calculators/mortgage-affordability">
              Mortgage Affordability Calculator
            </a>
            .
          </p>
        </article>

        <div className="calculator-box">
          <h2>Estimated monthly payment</h2>

          <p>Mortgage amount: {formatCurrency(amount)}</p>

          <div className="result">
            Estimated total monthly payment:{' '}
            {formatCurrencyWithCents(estimatedMonthlyPayment)}
          </div>

          <div className="result">
            Principal and interest: {formatCurrencyWithCents(principalAndInterest)}
          </div>

          <div className="result">
            Estimated monthly property tax:{' '}
            {formatCurrencyWithCents(monthlyPropertyTax)}
          </div>

          <div className="result">
            Estimated monthly insurance: {formatCurrencyWithCents(monthlyInsurance)}
          </div>

          <div className="result">
            Maintenance buffer: {formatCurrencyWithCents(monthlyMaintenance)}
          </div>

          <div className="result">
            Assumed interest rate: {interestRate.toFixed(2)}%
          </div>

          <div className="result">Loan term: {loanTermYears} years</div>
        </div>

        <article className="content-box" style={{ marginTop: 34 }}>
          <h2>
            What is the monthly payment on a {formatCurrency(amount)} mortgage?
          </h2>

          <p>
            Under the simplified assumptions on this page, a{' '}
            {formatCurrency(amount)} mortgage may have an estimated monthly cost
            of {formatCurrencyWithCents(estimatedMonthlyPayment)} when
            principal, interest, estimated property tax, homeowners insurance and
            a maintenance buffer are included.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Payment item</th>
                  <th>Monthly estimate</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Principal and interest</td>
                  <td>{formatCurrencyWithCents(principalAndInterest)}</td>
                  <td>Loan repayment based on rate and term.</td>
                </tr>
                <tr>
                  <td>Property tax</td>
                  <td>{formatCurrencyWithCents(monthlyPropertyTax)}</td>
                  <td>Estimated from an assumed annual property tax rate.</td>
                </tr>
                <tr>
                  <td>Homeowners insurance</td>
                  <td>{formatCurrencyWithCents(monthlyInsurance)}</td>
                  <td>Estimated insurance cost spread across 12 months.</td>
                </tr>
                <tr>
                  <td>PMI</td>
                  <td>{formatCurrencyWithCents(monthlyPmi)}</td>
                  <td>Not included here unless your loan requires it.</td>
                </tr>
                <tr>
                  <td>HOA fees</td>
                  <td>{formatCurrencyWithCents(monthlyHoa)}</td>
                  <td>Not included here unless the property has an HOA.</td>
                </tr>
                <tr>
                  <td>Maintenance buffer</td>
                  <td>{formatCurrencyWithCents(monthlyMaintenance)}</td>
                  <td>A simple planning amount for repairs and upkeep.</td>
                </tr>
                <tr>
                  <td>Total estimated monthly cost</td>
                  <td>{formatCurrencyWithCents(estimatedMonthlyPayment)}</td>
                  <td>A broader estimate than principal and interest alone.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Interest rate examples</h2>

          <p>
            Interest rate can change the principal and interest payment
            significantly. The examples below use the same {formatCurrency(amount)}
            mortgage amount with a 30-year term and show principal and interest
            only.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Assumed rate</th>
                  <th>Term</th>
                  <th>Principal and interest</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{lowerRate.toFixed(2)}%</td>
                  <td>30 years</td>
                  <td>{formatCurrencyWithCents(lowerRatePayment)}</td>
                </tr>
                <tr>
                  <td>{interestRate.toFixed(2)}%</td>
                  <td>30 years</td>
                  <td>{formatCurrencyWithCents(principalAndInterest)}</td>
                </tr>
                <tr>
                  <td>{higherRate.toFixed(2)}%</td>
                  <td>30 years</td>
                  <td>{formatCurrencyWithCents(higherRatePayment)}</td>
                </tr>
                <tr>
                  <td>{interestRate.toFixed(2)}%</td>
                  <td>15 years</td>
                  <td>{formatCurrencyWithCents(shorterTermPayment)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Principal and interest</h2>

          <p>
            Principal is the portion of the mortgage payment that reduces the
            loan balance. Interest is the cost of borrowing. Early in a long
            mortgage, a larger share of the payment typically goes toward
            interest. Later, more of the payment usually goes toward principal.
          </p>

          <p>
            On this page, principal and interest are estimated using a{' '}
            {loanTermYears}-year loan and an assumed {interestRate.toFixed(2)}%
            interest rate. A different rate, loan term or loan type could change
            the result.
          </p>

          <h2>Taxes, insurance and maintenance</h2>

          <p>
            A realistic mortgage budget should include more than the loan
            payment. Property taxes, homeowners insurance, maintenance, repairs,
            utilities and HOA fees can all affect the true monthly cost of
            ownership.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Cost</th>
                  <th>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Property taxes</td>
                  <td>Can vary widely by county, city and assessed value.</td>
                </tr>
                <tr>
                  <td>Homeowners insurance</td>
                  <td>
                    Depends on location, coverage, deductible, claims history and
                    property risk.
                  </td>
                </tr>
                <tr>
                  <td>PMI</td>
                  <td>
                    May apply on some conventional loans when the down payment is
                    below 20%.
                  </td>
                </tr>
                <tr>
                  <td>HOA fees</td>
                  <td>
                    Can add a separate monthly cost for condos or certain
                    communities.
                  </td>
                </tr>
                <tr>
                  <td>Maintenance</td>
                  <td>
                    Helps plan for repairs, appliances, HVAC, roof, plumbing and
                    other ownership costs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Income needed for this payment</h2>

          <p>
            A common affordability check is to compare monthly housing cost with
            gross monthly income. The table below is only a planning shortcut. A
            lender may use a different debt-to-income calculation and will also
            consider credit, debts, assets and loan details.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Housing cost target</th>
                  <th>Approx. gross monthly income</th>
                  <th>Approx. gross annual income</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>28% of gross income</td>
                  <td>{formatCurrencyWithCents(recommendedGrossIncomeAt28)}</td>
                  <td>{formatCurrency(recommendedGrossIncomeAt28 * 12)}</td>
                </tr>
                <tr>
                  <td>33% of gross income</td>
                  <td>{formatCurrencyWithCents(recommendedGrossIncomeAt33)}</td>
                  <td>{formatCurrency(recommendedGrossIncomeAt33 * 12)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How to use this estimate</h2>

          <p>
            Use this page as a starting point when comparing loan amounts. Then
            adjust the numbers with a full calculator and compare the payment
            with your take-home pay, emergency fund, debt payments and savings
            goals.
          </p>

          <ul>
            <li>Compare principal and interest at several interest rates.</li>
            <li>Add realistic property taxes for the area where you may buy.</li>
            <li>Estimate homeowners insurance before making an offer.</li>
            <li>Include PMI if your down payment may be below 20%.</li>
            <li>Leave room for repairs, maintenance and unexpected costs.</li>
          </ul>

          <h2>Frequently asked questions</h2>

          <h3>
            Does this {formatCurrency(amount)} mortgage estimate include taxes?
          </h3>
          <p>
            Yes, this page includes a simplified property tax estimate. Your real
            property tax bill may be higher or lower depending on location,
            assessed value, exemptions and local tax rules.
          </p>

          <h3>Does this estimate include homeowners insurance?</h3>
          <p>
            Yes, it includes a basic annual homeowners insurance assumption.
            Actual premiums can vary based on location, property type, coverage
            limits, deductible and insurer.
          </p>

          <h3>Does this estimate include PMI?</h3>
          <p>
            PMI is shown as zero in this simple template. Some borrowers may need
            PMI depending on loan type and down payment. Use the full mortgage
            calculator for more detailed scenarios.
          </p>

          <h3>Why is my lender quote different?</h3>
          <p>
            A lender quote may include a different interest rate, loan term,
            escrow setup, property tax estimate, insurance quote, PMI, fees or
            discount points. This page is only a simplified educational estimate.
          </p>

          <h3>Should I budget from principal and interest only?</h3>
          <p>
            No. For home affordability, it is usually better to budget from the
            full housing cost, including taxes, insurance, maintenance and other
            recurring costs.
          </p>

          <h2>Important limitations</h2>

          <p>
            This page provides simplified educational estimates only. It is not
            mortgage, financial, tax, legal or investment advice. Actual mortgage
            payments can vary based on lender, credit score, loan program,
            property location, taxes, insurance, PMI, HOA fees, escrow setup and
            closing terms.
          </p>

          <p>
            Before making a home purchase or refinance decision, verify numbers
            with a qualified mortgage lender, insurance provider, tax
            professional or financial advisor.
          </p>

          <h2>Related next steps</h2>

          <p>
            For a more detailed estimate, use the{' '}
            <a href="/calculators/mortgage">Mortgage Calculator</a>. To test how
            much house may fit your income and debts, use the{' '}
            <a href="/calculators/mortgage-affordability">
              Mortgage Affordability Calculator
            </a>
            . To compare renting with buying, use the{' '}
            <a href="/calculators/rent-vs-buy">Rent vs Buy Calculator</a>.
          </p>
        </article>

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
              title: 'Mortgage Payment by Amount',
              href: '/mortgage-payment',
            },
          ]}
        />
      </div>
    </section>
  );
}
