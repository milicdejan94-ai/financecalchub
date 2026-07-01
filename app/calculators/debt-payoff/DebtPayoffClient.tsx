'use client';

import { useMemo, useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
  }).format(Number.isFinite(value) ? value : 0);
}

type PayoffResult = {
  months: number;
  totalInterest: number;
  totalPaid: number;
  isPaymentTooLow: boolean;
  firstMonthInterest: number;
  firstMonthPrincipal: number;
};

function calculatePayoff(balance: number, annualRate: number, monthlyPayment: number): PayoffResult {
  const safeBalance = Math.max(balance, 0);
  const safeRate = Math.max(annualRate, 0);
  const safePayment = Math.max(monthlyPayment, 0);
  const monthlyRate = safeRate / 100 / 12;
  const firstMonthInterest = safeBalance * monthlyRate;
  const firstMonthPrincipal = safePayment - firstMonthInterest;

  if (safeBalance <= 0 || safePayment <= 0 || firstMonthPrincipal <= 0) {
    return {
      months: 0,
      totalInterest: 0,
      totalPaid: safeBalance,
      isPaymentTooLow: safeBalance > 0,
      firstMonthInterest,
      firstMonthPrincipal: Math.max(firstMonthPrincipal, 0),
    };
  }

  let remainingBalance = safeBalance;
  let months = 0;
  let totalInterest = 0;

  while (remainingBalance > 0 && months < 600) {
    const interest = remainingBalance * monthlyRate;
    const principalPayment = safePayment - interest;

    if (principalPayment <= 0) {
      return {
        months,
        totalInterest,
        totalPaid: safeBalance + totalInterest,
        isPaymentTooLow: true,
        firstMonthInterest,
        firstMonthPrincipal: Math.max(firstMonthPrincipal, 0),
      };
    }

    totalInterest += interest;
    remainingBalance -= principalPayment;
    months += 1;
  }

  return {
    months,
    totalInterest,
    totalPaid: safeBalance + totalInterest,
    isPaymentTooLow: months >= 600,
    firstMonthInterest,
    firstMonthPrincipal: Math.max(firstMonthPrincipal, 0),
  };
}

export default function DebtPayoffClient() {
  const [balance, setBalance] = useState(10000);
  const [annualInterestRate, setAnnualInterestRate] = useState(18);
  const [monthlyPayment, setMonthlyPayment] = useState(350);

  const payoff = useMemo(
    () => calculatePayoff(balance, annualInterestRate, monthlyPayment),
    [balance, annualInterestRate, monthlyPayment]
  );

  const payoffYears = payoff.months / 12;
  const extra50 = useMemo(
    () => calculatePayoff(balance, annualInterestRate, monthlyPayment + 50),
    [balance, annualInterestRate, monthlyPayment]
  );
  const extra100 = useMemo(
    () => calculatePayoff(balance, annualInterestRate, monthlyPayment + 100),
    [balance, annualInterestRate, monthlyPayment]
  );

  const interestSavedWithExtra50 = Math.max(payoff.totalInterest - extra50.totalInterest, 0);
  const interestSavedWithExtra100 = Math.max(payoff.totalInterest - extra100.totalInterest, 0);

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: 'Debt Payoff Calculator' },
          ]}
        />

        <p className="eyebrow">Debt payoff calculator</p>
        <h1>Debt Payoff Calculator</h1>

        <p>
          Estimate how long it may take to pay off debt using your current balance,
          annual interest rate and monthly payment. The calculator also shows how
          much interest may be paid and how extra monthly payments could change the
          payoff timeline.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label htmlFor="balance">Debt balance</label>
            <input
              id="balance"
              type="number"
              min="0"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label htmlFor="annualInterestRate">Annual interest rate / APR (%)</label>
            <input
              id="annualInterestRate"
              type="number"
              min="0"
              step="0.1"
              value={annualInterestRate}
              onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label htmlFor="monthlyPayment">Monthly payment</label>
            <input
              id="monthlyPayment"
              type="number"
              min="0"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(Number(e.target.value))}
            />
          </div>

          {payoff.isPaymentTooLow ? (
            <div className="result">
              Monthly payment is too low to reduce the balance. The estimated first-month
              interest is {formatCurrency(payoff.firstMonthInterest)}, so the payment must be
              higher than that amount to reduce principal.
            </div>
          ) : (
            <>
              <div className="result">
                Estimated payoff time: {payoff.months} months ({formatNumber(payoffYears)} years)
              </div>

              <div className="result">
                Estimated total interest: {formatCurrency(payoff.totalInterest)}
              </div>

              <div className="result">
                Estimated total paid: {formatCurrency(payoff.totalPaid)}
              </div>
            </>
          )}
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Debt payoff summary</h2>
          <p>
            This summary separates your payment into interest and principal. In the early
            months, high-interest debt can use a large part of each payment for interest,
            which slows down payoff progress.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Current balance</th>
                  <td>{formatCurrency(balance)}</td>
                </tr>
                <tr>
                  <th>Annual interest rate</th>
                  <td>{formatNumber(annualInterestRate)}%</td>
                </tr>
                <tr>
                  <th>Monthly payment</th>
                  <td>{formatCurrency(monthlyPayment)}</td>
                </tr>
                <tr>
                  <th>First-month interest estimate</th>
                  <td>{formatCurrency(payoff.firstMonthInterest)}</td>
                </tr>
                <tr>
                  <th>First-month principal estimate</th>
                  <td>{formatCurrency(payoff.firstMonthPrincipal)}</td>
                </tr>
                <tr>
                  <th>Estimated payoff time</th>
                  <td>
                    {payoff.isPaymentTooLow
                      ? 'Payment does not reduce principal'
                      : `${payoff.months} months`}
                  </td>
                </tr>
                <tr>
                  <th>Estimated interest paid</th>
                  <td>{payoff.isPaymentTooLow ? 'N/A' : formatCurrency(payoff.totalInterest)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>What if you paid extra each month?</h2>
          <p>
            Increasing the monthly payment can shorten the payoff timeline because more money
            goes toward principal. Even a small monthly increase may lower total interest.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Monthly payment</th>
                  <th>Payoff time</th>
                  <th>Total interest</th>
                  <th>Interest saved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Current plan</td>
                  <td>{formatCurrency(monthlyPayment)}</td>
                  <td>{payoff.isPaymentTooLow ? 'N/A' : `${payoff.months} months`}</td>
                  <td>{payoff.isPaymentTooLow ? 'N/A' : formatCurrency(payoff.totalInterest)}</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>Extra $50/month</td>
                  <td>{formatCurrency(monthlyPayment + 50)}</td>
                  <td>{extra50.isPaymentTooLow ? 'N/A' : `${extra50.months} months`}</td>
                  <td>{extra50.isPaymentTooLow ? 'N/A' : formatCurrency(extra50.totalInterest)}</td>
                  <td>{payoff.isPaymentTooLow ? 'N/A' : formatCurrency(interestSavedWithExtra50)}</td>
                </tr>
                <tr>
                  <td>Extra $100/month</td>
                  <td>{formatCurrency(monthlyPayment + 100)}</td>
                  <td>{extra100.isPaymentTooLow ? 'N/A' : `${extra100.months} months`}</td>
                  <td>{extra100.isPaymentTooLow ? 'N/A' : formatCurrency(extra100.totalInterest)}</td>
                  <td>{payoff.isPaymentTooLow ? 'N/A' : formatCurrency(interestSavedWithExtra100)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>How this debt payoff calculator works</h2>

          <p>
            The calculator estimates monthly interest by dividing the annual interest rate by
            12, then applies your monthly payment. The interest portion is added first, and
            the remaining part of the payment reduces principal. This repeats until the
            estimated balance reaches zero.
          </p>

          <h3>Why small payments can keep debt around longer</h3>
          <p>
            When the monthly payment is only slightly higher than the monthly interest,
            very little money reduces principal. That can make the payoff period much longer
            and increase total interest paid.
          </p>

          <h3>Debt snowball vs debt avalanche</h3>
          <p>
            The debt snowball method focuses on paying off the smallest balance first, which
            can help build momentum. The debt avalanche method focuses on the highest interest
            rate first, which can reduce interest cost. This single-debt calculator does not
            rank multiple debts, but it can help you test one balance at a time.
          </p>

          <h3>Example</h3>
          <p>
            If you owe $10,000 at 18% APR and pay $350 per month, the estimate shows the
            payoff time, total interest and total amount paid. Raising the payment by $50 or
            $100 per month can show how faster principal reduction may lower the total cost.
          </p>

          <h3>What is not included</h3>
          <p>
            This estimate does not include late fees, penalty APRs, balance transfer fees,
            promotional rates, changing interest rates, new purchases or lender-specific
            minimum payment formulas.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Debt payoff FAQ</h2>

          <h3>Is this calculator for credit cards only?</h3>
          <p>
            No. It can be used for a simple estimate on credit card balances, personal loans
            or other debts where interest is approximated monthly. For credit cards, also try
            the dedicated credit card payoff calculator.
          </p>

          <h3>Why does the calculator say my payment is too low?</h3>
          <p>
            That message appears when the estimated monthly interest is equal to or higher
            than your monthly payment. In that case, the balance would not meaningfully go down
            under this simplified model.
          </p>

          <h3>Does paying extra always help?</h3>
          <p>
            Paying extra toward principal generally reduces payoff time and interest, assuming
            the lender applies the extra payment to principal and there are no unusual fees or
            restrictions.
          </p>

          <h3>Is this financial advice?</h3>
          <p>
            No. This calculator provides educational estimates only. It is not financial,
            credit, legal, debt or tax advice.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Credit Card Payoff Calculator',
              href: '/calculators/credit-card-payoff',
            },
            {
              title: 'APR Calculator',
              href: '/calculators/apr',
            },
            {
              title: 'Loan Calculator',
              href: '/calculators/loan',
            },
            {
              title: 'Savings Calculator',
              href: '/calculators/savings',
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
