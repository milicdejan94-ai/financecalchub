'use client';

import { useState } from 'react';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(1.1);
  const [insurance, setInsurance] = useState(1200);
  const [pmi, setPmi] = useState(0);
  const [hoa, setHoa] = useState(0);
  const [maintenance, setMaintenance] = useState(200);

  const loanAmount = Math.max(homePrice - downPayment, 0);
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = loanTerm * 12;

  const principalAndInterest =
    loanAmount > 0 && totalPayments > 0
      ? monthlyRate > 0
        ? loanAmount *
          ((monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
            (Math.pow(1 + monthlyRate, totalPayments) - 1))
        : loanAmount / totalPayments
      : 0;

  const monthlyPropertyTax = (homePrice * (propertyTax / 100)) / 12;
  const monthlyInsurance = insurance / 12;
  const monthlyPmi = pmi;
  const monthlyHoa = hoa;
  const monthlyMaintenance = maintenance;

  const totalMonthlyPayment =
    principalAndInterest +
    monthlyPropertyTax +
    monthlyInsurance +
    monthlyPmi +
    monthlyHoa +
    monthlyMaintenance;

  const downPaymentPercent =
    homePrice > 0 ? (downPayment / homePrice) * 100 : 0;

  const annualHousingCost = totalMonthlyPayment * 12;
  const totalPrincipalAndInterest = principalAndInterest * totalPayments;
  const estimatedTotalInterest = Math.max(totalPrincipalAndInterest - loanAmount, 0);

  const paymentRows = [
    {
      label: 'Principal and interest',
      value: principalAndInterest,
      note: 'Estimated loan payment based on loan amount, interest rate and term.',
    },
    {
      label: 'Property tax',
      value: monthlyPropertyTax,
      note: 'Estimated monthly property tax based on the annual percentage entered.',
    },
    {
      label: 'Homeowners insurance',
      value: monthlyInsurance,
      note: 'Estimated monthly insurance based on the annual insurance amount entered.',
    },
    {
      label: 'PMI',
      value: monthlyPmi,
      note: 'Optional monthly private mortgage insurance estimate.',
    },
    {
      label: 'HOA fee',
      value: monthlyHoa,
      note: 'Optional monthly homeowners association or condo fee.',
    },
    {
      label: 'Maintenance buffer',
      value: monthlyMaintenance,
      note: 'Optional planning buffer for repairs and maintenance.',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: 'Mortgage Calculator' },
          ]}
        />

        <p className="eyebrow">US mortgage calculator</p>

        <h1>Mortgage Calculator</h1>

        <p>
          Estimate a monthly home payment using home price, down payment,
          interest rate, loan term, property tax, homeowners insurance, PMI, HOA
          fees and a maintenance buffer. This calculator is designed to help you
          understand more than just principal and interest.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label>Home price</label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Down payment</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Interest rate (%)</label>
            <input
              type="number"
              value={interestRate}
              step="0.1"
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Loan term</label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
            >
              <option value={30}>30 years</option>
              <option value={20}>20 years</option>
              <option value={15}>15 years</option>
              <option value={10}>10 years</option>
            </select>
          </div>

          <div className="input-group">
            <label>Annual property tax (%)</label>
            <input
              type="number"
              value={propertyTax}
              step="0.1"
              onChange={(e) => setPropertyTax(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Annual homeowners insurance</label>
            <input
              type="number"
              value={insurance}
              onChange={(e) => setInsurance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly PMI</label>
            <input
              type="number"
              value={pmi}
              onChange={(e) => setPmi(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly HOA fee</label>
            <input
              type="number"
              value={hoa}
              onChange={(e) => setHoa(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly maintenance buffer</label>
            <input
              type="number"
              value={maintenance}
              onChange={(e) => setMaintenance(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Estimated total monthly payment: ${totalMonthlyPayment.toFixed(2)}
          </div>

          <div className="result">Loan amount: ${loanAmount.toFixed(2)}</div>

          <div className="result">
            Down payment: {downPaymentPercent.toFixed(1)}%
          </div>

          <div className="result">
            Estimated annual housing cost: ${annualHousingCost.toFixed(2)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Mortgage payment breakdown</h2>

          <p>
            A mortgage payment can include more than the loan payment itself.
            This table separates the main monthly cost categories so you can see
            how much each input contributes to the estimated total payment.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Payment item</th>
                  <th>Estimated monthly amount</th>
                  <th>What it represents</th>
                </tr>
              </thead>
              <tbody>
                {paymentRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>${row.value.toFixed(2)}</td>
                    <td>{row.note}</td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <strong>Total estimated monthly payment</strong>
                  </td>
                  <td>
                    <strong>${totalMonthlyPayment.toFixed(2)}</strong>
                  </td>
                  <td>
                    <strong>Estimated monthly housing cost using the inputs above.</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Loan summary</h3>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <td>Home price</td>
                  <td>${homePrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Down payment</td>
                  <td>
                    ${downPayment.toFixed(2)} ({downPaymentPercent.toFixed(1)}%)
                  </td>
                </tr>
                <tr>
                  <td>Estimated loan amount</td>
                  <td>${loanAmount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Loan term</td>
                  <td>{loanTerm} years</td>
                </tr>
                <tr>
                  <td>Interest rate used</td>
                  <td>{interestRate.toFixed(2)}%</td>
                </tr>
                <tr>
                  <td>Estimated total principal and interest paid</td>
                  <td>${totalPrincipalAndInterest.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Estimated interest over the loan term</td>
                  <td>${estimatedTotalInterest.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this mortgage calculator works</h2>

          <p>
            This calculator estimates principal and interest using a standard
            fixed-rate amortization formula. It then adds the monthly estimates
            you enter for property tax, homeowners insurance, PMI, HOA fees and
            maintenance.
          </p>

          <h3>What is principal and interest?</h3>

          <p>
            Principal is the amount borrowed from the lender. Interest is the
            cost of borrowing that money. Together, principal and interest are
            often called the loan payment, but they may not represent the full
            cost of owning a home.
          </p>

          <h3>Why property tax and insurance matter</h3>

          <p>
            Property tax and homeowners insurance can significantly change the
            monthly cost of a home. These costs vary by location, property value,
            coverage level and local tax rules. Many mortgage payments include
            these costs through escrow, but the exact setup depends on the
            lender and loan.
          </p>

          <h3>What is PMI?</h3>

          <p>
            PMI, or private mortgage insurance, may apply when a buyer makes a
            smaller down payment on a conventional mortgage. This calculator lets
            you enter a monthly PMI estimate manually because real PMI costs can
            vary by lender, credit profile, loan type and down payment size.
          </p>

          <h3>Why HOA fees and maintenance are included</h3>

          <p>
            Some homes, condos and townhouses have monthly HOA fees. Homeowners
            should also plan for repairs and maintenance, even when those costs
            are not part of the mortgage bill. Adding a maintenance buffer can
            make the estimate more realistic for monthly planning.
          </p>

          <h3>Example mortgage estimate</h3>

          <p>
            For example, a $400,000 home with an $80,000 down payment creates a
            $320,000 loan before closing costs. If the loan uses a 30-year term
            at 6.5%, the principal and interest amount is only one part of the
            monthly cost. Property taxes, insurance, PMI, HOA fees and upkeep can
            raise the total monthly housing cost.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <p className="eyebrow">Mortgage calculator FAQ</p>

          <h2>Frequently asked questions</h2>

          <h3>Is this mortgage calculator exact?</h3>

          <p>
            No. This calculator provides an educational estimate based on the
            numbers you enter. Actual mortgage payments can vary because of
            lender fees, escrow setup, property taxes, insurance premiums, PMI,
            loan type, closing costs and local rules.
          </p>

          <h3>Does the payment include property taxes and insurance?</h3>

          <p>
            Yes, if you enter those values. The calculator estimates monthly
            property tax from the annual property tax percentage and divides the
            annual insurance amount by 12.
          </p>

          <h3>Does this calculator include closing costs?</h3>

          <p>
            No. Closing costs are not included in the monthly payment estimate.
            Buyers should separately estimate lender fees, title costs, escrow
            deposits, prepaid taxes, prepaid insurance and other closing costs.
          </p>

          <h3>Why is my lender estimate different?</h3>

          <p>
            Lender estimates may include exact loan terms, escrow rules, local
            taxes, insurance quotes, PMI pricing, discount points, lender fees
            and other costs this simplified calculator does not know.
          </p>

          <h3>Can I use this to decide how much house I can afford?</h3>

          <p>
            This calculator can help you compare monthly payment scenarios, but
            affordability depends on your full financial situation, including
            income, debt, emergency savings, credit profile, living expenses and
            risk tolerance. For affordability planning, also use the mortgage
            affordability calculator.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Important limitations</h2>

          <p>
            This calculator is for educational planning only. It is not mortgage,
            financial, tax, insurance, lending or legal advice. It does not
            determine loan approval, interest rate eligibility, underwriting
            outcome or home affordability.
          </p>

          <p>
            Before buying a home or applying for a mortgage, review your numbers
            with a mortgage lender, tax professional, insurance provider or other
            qualified professional who can evaluate your specific situation.
          </p>

          <p>
            You can also review our <a href="/methodology">Methodology</a> and{' '}
            <a href="/disclaimer">Disclaimer</a> pages for more information
            about how FinanceCalcHub estimates should be used.
          </p>
        </div>

        <RelatedCalculators
          title="Related mortgage calculators"
          tools={[
            {
              title: 'Mortgage Affordability Calculator',
              href: '/calculators/mortgage-affordability',
            },
            {
              title: 'Refinance Calculator',
              href: '/calculators/refinance',
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
              title: 'Extra Mortgage Payment Calculator',
              href: '/calculators/extra-mortgage-payment',
            },
            {
              title: '$300,000 Mortgage Payment',
              href: '/mortgage-payment/300000',
            },
            {
              title: 'All Financial Calculators',
              href: '/calculators',
            },
          ]}
        />
      </div>
    </section>
  );
}
