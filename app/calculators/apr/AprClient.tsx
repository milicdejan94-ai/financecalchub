'use client';

import { useState } from 'react';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatPercent(value: number) {
  return `${(Number.isFinite(value) ? value : 0).toFixed(2)}%`;
}

export default function AprClient() {
  const [loanAmount, setLoanAmount] = useState(20000);
  const [interestRate, setInterestRate] = useState(8);
  const [loanFees, setLoanFees] = useState(500);
  const [loanTermYears, setLoanTermYears] = useState(5);

  const safeLoanAmount = Math.max(loanAmount, 0);
  const safeFees = Math.max(loanFees, 0);
  const safeTermYears = Math.max(loanTermYears, 1);
  const numberOfPayments = safeTermYears * 12;
  const monthlyRate = interestRate / 100 / 12;

  const monthlyPayment =
    safeLoanAmount > 0 && numberOfPayments > 0
      ? monthlyRate > 0
        ? safeLoanAmount *
          ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
        : safeLoanAmount / numberOfPayments
      : 0;

  const totalPayments = monthlyPayment * numberOfPayments;
  const totalInterest = Math.max(totalPayments - safeLoanAmount, 0);
  const totalBorrowingCost = totalInterest + safeFees;
  const estimatedApr =
    safeLoanAmount > 0 && safeTermYears > 0
      ? (totalBorrowingCost / safeLoanAmount / safeTermYears) * 100
      : 0;

  const amountReceivedAfterFees = Math.max(safeLoanAmount - safeFees, 0);
  const feePercentOfLoan = safeLoanAmount > 0 ? (safeFees / safeLoanAmount) * 100 : 0;
  const totalRepaidWithFees = totalPayments + safeFees;

  const higherFees = safeFees + 500;
  const higherFeeApr =
    safeLoanAmount > 0 && safeTermYears > 0
      ? ((totalInterest + higherFees) / safeLoanAmount / safeTermYears) * 100
      : 0;

  const lowerFees = Math.max(safeFees - 500, 0);
  const lowerFeeApr =
    safeLoanAmount > 0 && safeTermYears > 0
      ? ((totalInterest + lowerFees) / safeLoanAmount / safeTermYears) * 100
      : 0;

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
          Estimate the annual percentage rate of a loan using the loan amount,
          stated interest rate, upfront fees and repayment term. APR can help you
          compare loan offers because it includes more than just the interest
          rate.
        </p>

        <div className="content-box" style={{ marginTop: 28, marginBottom: 28 }}>
          <h2>Compare the true cost of borrowing</h2>
          <p>
            A loan with a lower interest rate is not always the cheaper loan if
            it has high origination fees, closing costs or other upfront charges.
            This calculator estimates how those fees affect the overall borrowing
            cost and converts the result into a simplified APR estimate.
          </p>
          <p>
            Use the result as a planning estimate, not as a lender disclosure.
            Official APR can depend on lender-specific rules, timing of fees,
            compounding, payment schedule and regulatory calculations.
          </p>
        </div>

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
              <option value={10}>10 years</option>
              <option value={15}>15 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>

          <div className="result">Estimated APR: {formatPercent(estimatedApr)}</div>
          <div className="result">Stated interest rate: {formatPercent(interestRate)}</div>
          <div className="result">Monthly payment: {formatCurrency(monthlyPayment)}</div>
          <div className="result">Total interest: {formatCurrency(totalInterest)}</div>
          <div className="result">
            Total borrowing cost with fees: {formatCurrency(totalBorrowingCost)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>APR estimate breakdown</h2>
          <p>
            This table shows the main inputs and outputs used to estimate APR.
            The fee line is important because fees can make APR higher than the
            stated interest rate.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Estimated amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Loan amount</td>
                  <td>{formatCurrency(safeLoanAmount)}</td>
                </tr>
                <tr>
                  <td>Loan fees</td>
                  <td>{formatCurrency(safeFees)}</td>
                </tr>
                <tr>
                  <td>Fees as percentage of loan</td>
                  <td>{formatPercent(feePercentOfLoan)}</td>
                </tr>
                <tr>
                  <td>Estimated amount received after fees</td>
                  <td>{formatCurrency(amountReceivedAfterFees)}</td>
                </tr>
                <tr>
                  <td>Loan term</td>
                  <td>{safeTermYears} years</td>
                </tr>
                <tr>
                  <td>Monthly payment</td>
                  <td>{formatCurrency(monthlyPayment)}</td>
                </tr>
                <tr>
                  <td>Total interest</td>
                  <td>{formatCurrency(totalInterest)}</td>
                </tr>
                <tr>
                  <td>Total repaid plus fees</td>
                  <td>{formatCurrency(totalRepaidWithFees)}</td>
                </tr>
                <tr>
                  <td><strong>Estimated APR</strong></td>
                  <td><strong>{formatPercent(estimatedApr)}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How fees change the APR estimate</h2>
          <p>
            This quick comparison keeps the loan amount, interest rate and term
            the same, but changes the fee amount. Higher fees generally increase
            the estimated APR.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Fees</th>
                  <th>Estimated APR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lower fee scenario</td>
                  <td>{formatCurrency(lowerFees)}</td>
                  <td>{formatPercent(lowerFeeApr)}</td>
                </tr>
                <tr>
                  <td>Current inputs</td>
                  <td>{formatCurrency(safeFees)}</td>
                  <td>{formatPercent(estimatedApr)}</td>
                </tr>
                <tr>
                  <td>Higher fee scenario</td>
                  <td>{formatCurrency(higherFees)}</td>
                  <td>{formatPercent(higherFeeApr)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this APR calculator works</h2>

          <p>
            APR, or annual percentage rate, is a way to express the yearly cost
            of borrowing. Unlike the interest rate alone, APR may include certain
            loan fees. This calculator estimates the monthly payment from the
            stated interest rate, then adds the loan fees to estimate total
            borrowing cost.
          </p>

          <h3>Interest rate vs APR</h3>
          <p>
            The interest rate is the cost of borrowing before some fees. APR is
            often higher because it can include additional borrowing costs. If a
            loan has no fees, the APR estimate may be closer to the interest
            rate. If a loan has large fees, the APR estimate may be noticeably
            higher.
          </p>

          <h3>Why loan fees matter</h3>
          <p>
            Fees can change the real cost of a loan. For example, a loan with an
            8% interest rate and $500 in fees may cost more than a similar loan
            with the same rate and no fees. APR helps make that difference easier
            to compare.
          </p>

          <h3>Example APR estimate</h3>
          <p>
            Suppose someone borrows $20,000 for 5 years at an 8% stated interest
            rate and pays $500 in fees. The calculator estimates the monthly
            payment, total interest over the loan term and then adds the fee cost
            to estimate the annualized borrowing cost.
          </p>

          <h3>When APR is useful</h3>
          <p>
            APR can be useful when comparing personal loans, auto loans,
            mortgage offers or refinance options. It is especially helpful when
            two loans have different fees, terms or interest rates.
          </p>

          <h3>Important limitations</h3>
          <p>
            This is a simplified educational APR estimate. Actual lender APR can
            vary depending on fee type, payment timing, compounding, loan rules,
            credit profile, closing costs and regulatory disclosure methods. Use
            lender disclosures for official loan comparisons.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Frequently asked questions</h2>

          <h3>Why is APR higher than the interest rate?</h3>
          <p>
            APR can be higher because it may include certain fees in addition to
            interest. A loan with origination fees or closing costs usually has a
            higher APR than its stated interest rate.
          </p>

          <h3>Does a lower interest rate always mean a cheaper loan?</h3>
          <p>
            Not always. A lower interest rate can still come with high fees. APR
            helps compare the broader borrowing cost, but you should also review
            total payments, monthly payment and lender terms.
          </p>

          <h3>Is this the same as a lender APR disclosure?</h3>
          <p>
            No. This calculator provides a simplified estimate for planning and
            comparison. Official APR disclosures may use more detailed lender and
            regulatory calculations.
          </p>

          <h3>Can APR be used for credit cards?</h3>
          <p>
            Credit card APR works differently because balances can change each
            month and interest may compound daily. This calculator is better for
            fixed-term loans with a known loan amount and repayment period.
          </p>
        </div>

        <RelatedCalculators
          title="Related loan calculators"
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
              title: 'Mortgage Calculator',
              href: '/calculators/mortgage',
            },
            {
              title: 'Refinance Calculator',
              href: '/calculators/refinance',
            },
            {
              title: 'Amortization Calculator',
              href: '/calculators/amortization',
            },
            {
              title: 'Methodology',
              href: '/methodology',
            },
          ]}
        />
      </div>
    </section>
  );
}
