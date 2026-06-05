'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function AprClient() {
  const [loanAmount, setLoanAmount] = useState(20000);
  const [interestRate, setInterestRate] = useState(8);
  const [loanFees, setLoanFees] = useState(500);
  const [loanTermYears, setLoanTermYears] = useState(5);

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const monthlyPayment =
    monthlyRate > 0
      ? loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
      : loanAmount / numberOfPayments;

  const totalPayments = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayments - loanAmount;
  const totalCost = totalInterest + loanFees;

  const estimatedApr = ((totalCost / loanAmount) / loanTermYears) * 100;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'APR Calculator' },
  ]}
/>
        <p className="eyebrow">APR calculator</p>

        <h1>APR Calculator</h1>

        <p>
          Estimate annual percentage rate using loan amount, interest rate, loan
          fees and repayment term.
        </p>

        <AdBanner slot="apr-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Loan amount</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
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
            <label>Loan fees</label>
            <input
              type="number"
              value={loanFees}
              onChange={(e) => setLoanFees(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Loan term</label>
            <select
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(Number(e.target.value))}
            >
              <option value={1}>1 year</option>
              <option value={2}>2 years</option>
              <option value={3}>3 years</option>
              <option value={4}>4 years</option>
              <option value={5}>5 years</option>
              <option value={6}>6 years</option>
              <option value={7}>7 years</option>
            </select>
          </div>

          <div className="result">Estimated APR: {estimatedApr.toFixed(2)}%</div>

          <div className="result">
            Monthly payment: ${monthlyPayment.toFixed(2)}
          </div>

          <div className="result">
            Total interest: ${totalInterest.toFixed(2)}
          </div>

          <div className="result">
            Total loan cost with fees: ${totalCost.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="apr-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this APR calculator works</h2>

          <p>
            APR, or annual percentage rate, is a way to estimate the yearly cost
            of borrowing money. It may include interest and certain loan fees.
          </p>

          <h3>Interest rate vs APR</h3>

          <p>
            The interest rate shows the cost of borrowing before some fees. APR
            may be higher because it can include additional borrowing costs.
          </p>

          <h3>Why loan fees matter</h3>

          <p>
            Loan fees can increase the real cost of borrowing. A loan with a low
            interest rate but high fees may have a higher estimated APR.
          </p>

          <h3>When APR is useful</h3>

          <p>
            APR can help compare loans that have different fees, interest rates
            and repayment terms. It is especially useful when comparing loan
            offers from multiple lenders.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides a simplified APR estimate only. Actual APR
            calculations may vary by lender, fee type, repayment schedule and
            loan terms.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Loan Calculator',
              href: '/calculators/loan',
            },
            {
              title: 'Car Loan Calculator',
              href: '/calculators/car-loan',
            },
            {
              title: 'Debt Payoff Calculator',
              href: '/calculators/debt-payoff',
            },
            {
              title: 'Credit Card Payoff Calculator',
              href: '/calculators/credit-card-payoff',
            },
            {
              title: 'Amortization Calculator',
              href: '/calculators/amortization',
            },
            {
              title: 'All Financial Calculators',
              href: '/calculators',
            },
          ]}
        />

        <AdBanner slot="apr-bottom" />
      </div>
    </section>
  );
}