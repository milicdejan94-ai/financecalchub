'use client';

import { useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}

function formatPercent(value: number) {
  return `${value.toFixed(2)}%`;
}

export default function LoanCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPayment =
    loanAmount > 0 && numberOfPayments > 0
      ? monthlyRate > 0
        ? loanAmount *
          ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
        : loanAmount / numberOfPayments
      : 0;

  const totalPaid = monthlyPayment * numberOfPayments;
  const totalInterest = Math.max(totalPaid - loanAmount, 0);
  const interestAsPercentOfPrincipal =
    loanAmount > 0 ? (totalInterest / loanAmount) * 100 : 0;

  const firstMonthInterest = loanAmount * monthlyRate;
  const firstMonthPrincipal = Math.max(monthlyPayment - firstMonthInterest, 0);

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: 'Loan Calculator' },
          ]}
        />

        <p className="eyebrow">US loan calculator</p>

        <h1>Loan Calculator</h1>

        <p>
          Estimate the monthly payment, total interest and total repayment for a
          fixed-rate installment loan. This calculator can be used for simple
          personal loan, auto loan, home improvement loan or other fixed-payment
          loan scenarios.
        </p>

        <p>
          Enter the loan amount, annual interest rate and repayment term to see
          how much the loan may cost over time. Results are simplified
          educational estimates and do not include lender fees, taxes, insurance
          or credit-specific pricing.
        </p>

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
            <label>Annual interest rate (%)</label>
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
              <option value={1}>1 year</option>
              <option value={2}>2 years</option>
              <option value={3}>3 years</option>
              <option value={4}>4 years</option>
              <option value={5}>5 years</option>
              <option value={6}>6 years</option>
              <option value={7}>7 years</option>
            </select>
          </div>

          <div className="result">
            Estimated monthly payment: {formatCurrency(monthlyPayment)}
          </div>

          <div className="result">
            Total interest: {formatCurrency(totalInterest)}
          </div>

          <div className="result">
            Total repayment: {formatCurrency(totalPaid)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Loan payment breakdown</h2>

          <p>
            A fixed-rate loan payment is usually made up of principal and
            interest. Principal reduces the amount you owe. Interest is the cost
            of borrowing money from the lender.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Loan amount</th>
                  <td>{formatCurrency(loanAmount)}</td>
                </tr>
                <tr>
                  <th>Annual interest rate</th>
                  <td>{formatPercent(interestRate)}</td>
                </tr>
                <tr>
                  <th>Loan term</th>
                  <td>
                    {loanTerm} {loanTerm === 1 ? 'year' : 'years'} /{' '}
                    {numberOfPayments} monthly payments
                  </td>
                </tr>
                <tr>
                  <th>Estimated monthly payment</th>
                  <td>{formatCurrency(monthlyPayment)}</td>
                </tr>
                <tr>
                  <th>Total interest paid</th>
                  <td>{formatCurrency(totalInterest)}</td>
                </tr>
                <tr>
                  <th>Total repayment</th>
                  <td>{formatCurrency(totalPaid)}</td>
                </tr>
                <tr>
                  <th>Interest as % of original loan</th>
                  <td>{formatPercent(interestAsPercentOfPrincipal)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>First-month payment example</h3>

          <p>
            With the current inputs, the first estimated monthly payment is{' '}
            <strong>{formatCurrency(monthlyPayment)}</strong>. About{' '}
            <strong>{formatCurrency(firstMonthInterest)}</strong> of that first
            payment may go toward interest, while about{' '}
            <strong>{formatCurrency(firstMonthPrincipal)}</strong> may go toward
            reducing the loan balance. Over time, more of each payment usually
            goes toward principal as the balance falls.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this loan calculator works</h2>

          <p>
            This calculator uses a standard fixed-rate amortization formula. It
            assumes the loan has a fixed interest rate, equal monthly payments
            and a repayment term selected by the user.
          </p>

          <h3>What affects a loan payment?</h3>

          <p>
            The three biggest factors are the amount borrowed, the interest rate
            and the length of the loan. A larger loan amount increases the
            payment. A higher interest rate increases both the payment and total
            interest. A longer term can lower the monthly payment, but it often
            increases the total interest paid over the full loan.
          </p>

          <h3>Monthly payment vs total cost</h3>

          <p>
            A lower monthly payment does not always mean a cheaper loan. A longer
            repayment term may make the monthly payment easier to manage, but the
            borrower may pay interest for more months. Always compare both the
            monthly payment and the total repayment amount.
          </p>

          <h3>Interest rate vs APR</h3>

          <p>
            The interest rate is the percentage used to calculate interest on
            the loan balance. APR may include certain lender fees and can show a
            broader cost of borrowing. This calculator uses the interest rate
            entered by the user and does not convert lender fees into APR.
          </p>

          <h3>What this calculator does not include</h3>

          <p>
            This calculator does not include origination fees, application fees,
            late fees, prepayment penalties, taxes, insurance, credit insurance,
            optional products or other lender-specific charges. Actual loan
            offers may differ based on credit score, income, debt-to-income
            ratio, collateral, lender rules and market conditions.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Example: $25,000 loan for 5 years</h2>

          <p>
            Suppose someone borrows $25,000 for 5 years at an 8.5% annual
            interest rate. The estimated payment would be about $513 per month,
            with about $5,800 in total interest over the full term. If the same
            loan had a shorter term, the monthly payment would usually be higher
            but the total interest could be lower.
          </p>

          <p>
            This is why it can help to test several loan terms before borrowing.
            The best choice is not always the lowest monthly payment; it depends
            on cash flow, total interest, emergency savings and whether the loan
            fits the borrower&apos;s full budget.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Frequently asked questions</h2>

          <h3>Can I use this for a personal loan?</h3>

          <p>
            Yes. You can use it for a simple fixed-rate personal loan estimate.
            The result does not include lender fees or credit-specific pricing.
          </p>

          <h3>Can I use this for a car loan?</h3>

          <p>
            Yes, but for vehicle-specific costs you may also want to use the{' '}
            <a href="/calculators/car-loan">Car Loan Calculator</a>. Car loans
            may include taxes, registration fees, trade-in value, down payment
            and other vehicle-related costs.
          </p>

          <h3>Why does a longer loan term cost more?</h3>

          <p>
            A longer term spreads the loan over more payments. That can lower
            the monthly payment, but interest may be charged for a longer period,
            increasing the total cost of the loan.
          </p>

          <h3>Does this calculator show APR?</h3>

          <p>
            No. This calculator uses the annual interest rate entered by the
            user. APR may include certain fees. To compare borrowing costs with
            fees included, use the <a href="/calculators/apr">APR Calculator</a>.
          </p>

          <h3>Are the results exact?</h3>

          <p>
            No. The results are simplified estimates. Actual lender payments may
            vary because of fees, exact payment dates, rounding, credit profile,
            lender rules and other terms in the loan agreement.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Important limitations</h2>

          <p>
            FinanceCalcHub loan calculators are for educational planning only.
            They are not lending, credit, financial, tax or legal advice. The
            calculator does not approve loans, compare lenders, evaluate credit
            risk or guarantee any payment, rate, approval or total cost.
          </p>

          <p>
            Before accepting a loan, review the lender&apos;s official loan estimate,
            APR, fees, repayment schedule, late payment rules, prepayment terms
            and total cost. For personal guidance, speak with a qualified
            financial professional or the lender directly.
          </p>
        </div>

        <RelatedCalculators
          title="Related loan and debt calculators"
          tools={[
            {
              title: 'Car Loan Calculator',
              href: '/calculators/car-loan',
            },
            {
              title: 'APR Calculator',
              href: '/calculators/apr',
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
              title: 'Mortgage Calculator',
              href: '/calculators/mortgage',
            },
            {
              title: 'Methodology',
              href: '/methodology',
            },
            {
              title: 'Disclaimer',
              href: '/disclaimer',
            },
          ]}
        />
      </div>
    </section>
  );
}
