'use client';

import { useMemo, useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

function formatMoney(value: number) {
  if (!Number.isFinite(value)) return '$0.00';
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatNumber(value: number, digits = 1) {
  if (!Number.isFinite(value)) return '0';
  return value.toLocaleString('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function calculatePayoff(balance: number, apr: number, monthlyPayment: number) {
  const safeBalance = Math.max(balance, 0);
  const safeApr = Math.max(apr, 0);
  const safePayment = Math.max(monthlyPayment, 0);
  const monthlyRate = safeApr / 100 / 12;
  const estimatedMonthlyInterest = safeBalance * monthlyRate;

  if (safeBalance <= 0) {
    return {
      isPaymentTooLow: false,
      months: 0,
      payoffYears: 0,
      totalInterest: 0,
      totalPaid: 0,
      estimatedMonthlyInterest,
      finalPayment: 0,
      totalPrincipalPaid: 0,
    };
  }

  if (safePayment <= estimatedMonthlyInterest || safePayment <= 0) {
    return {
      isPaymentTooLow: true,
      months: 0,
      payoffYears: 0,
      totalInterest: 0,
      totalPaid: 0,
      estimatedMonthlyInterest,
      finalPayment: 0,
      totalPrincipalPaid: 0,
    };
  }

  let remainingBalance = safeBalance;
  let months = 0;
  let totalInterest = 0;
  let finalPayment = 0;

  while (remainingBalance > 0.005 && months < 600) {
    const interest = remainingBalance * monthlyRate;
    const paymentThisMonth = Math.min(safePayment, remainingBalance + interest);
    const principalPayment = paymentThisMonth - interest;

    totalInterest += interest;
    remainingBalance -= principalPayment;
    finalPayment = paymentThisMonth;
    months += 1;
  }

  return {
    isPaymentTooLow: months >= 600,
    months,
    payoffYears: months / 12,
    totalInterest,
    totalPaid: safeBalance + totalInterest,
    estimatedMonthlyInterest,
    finalPayment,
    totalPrincipalPaid: safeBalance,
  };
}

export default function CreditCardPayoffClient() {
  const [balance, setBalance] = useState(5000);
  const [apr, setApr] = useState(22);
  const [monthlyPayment, setMonthlyPayment] = useState(200);

  const payoff = useMemo(
    () => calculatePayoff(balance, apr, monthlyPayment),
    [balance, apr, monthlyPayment]
  );

  const higherPayment = monthlyPayment + 50;
  const higherPaymentResult = useMemo(
    () => calculatePayoff(balance, apr, higherPayment),
    [balance, apr, higherPayment]
  );

  const muchHigherPayment = monthlyPayment + 100;
  const muchHigherPaymentResult = useMemo(
    () => calculatePayoff(balance, apr, muchHigherPayment),
    [balance, apr, muchHigherPayment]
  );

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: 'Credit Card Payoff Calculator' },
          ]}
        />

        <p className="eyebrow">Credit card debt payoff</p>
        <h1>Credit Card Payoff Calculator</h1>

        <p>
          Estimate how long it may take to pay off credit card debt based on your
          current balance, APR and monthly payment. The calculator also shows how
          much interest may be paid and how extra payments can shorten the payoff
          timeline.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label>Credit card balance</label>
            <input
              type="number"
              min="0"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>APR (%)</label>
            <input
              type="number"
              min="0"
              value={apr}
              step="0.1"
              onChange={(e) => setApr(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly payment</label>
            <input
              type="number"
              min="0"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(Number(e.target.value))}
            />
          </div>

          {payoff.isPaymentTooLow ? (
            <div className="result">
              Monthly payment may be too low to pay down this balance. Estimated
              first-month interest is {formatMoney(payoff.estimatedMonthlyInterest)},
              which is close to or higher than the payment entered.
            </div>
          ) : (
            <>
              <div className="result">
                Estimated payoff time: {payoff.months} months ({formatNumber(payoff.payoffYears)} years)
              </div>

              <div className="result">
                Estimated interest paid: {formatMoney(payoff.totalInterest)}
              </div>

              <div className="result">
                Estimated total paid: {formatMoney(payoff.totalPaid)}
              </div>
            </>
          )}
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Credit card payoff summary</h2>
          <p>
            These results assume the APR and monthly payment stay the same during
            the payoff period. Credit card statements, fees, purchases and rate
            changes can make real payoff dates different from this estimate.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Current balance</th>
                  <td>{formatMoney(balance)}</td>
                </tr>
                <tr>
                  <th>APR</th>
                  <td>{formatNumber(apr, 2)}%</td>
                </tr>
                <tr>
                  <th>Monthly payment</th>
                  <td>{formatMoney(monthlyPayment)}</td>
                </tr>
                <tr>
                  <th>Estimated first-month interest</th>
                  <td>{formatMoney(payoff.estimatedMonthlyInterest)}</td>
                </tr>
                <tr>
                  <th>Estimated payoff time</th>
                  <td>
                    {payoff.isPaymentTooLow
                      ? 'Payment may be too low'
                      : `${payoff.months} months (${formatNumber(payoff.payoffYears)} years)`}
                  </td>
                </tr>
                <tr>
                  <th>Estimated total interest</th>
                  <td>{payoff.isPaymentTooLow ? 'N/A' : formatMoney(payoff.totalInterest)}</td>
                </tr>
                <tr>
                  <th>Estimated total paid</th>
                  <td>{payoff.isPaymentTooLow ? 'N/A' : formatMoney(payoff.totalPaid)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>What happens if you pay more each month?</h2>
          <p>
            Credit card interest is usually charged monthly based on the balance.
            Paying more than the minimum can reduce principal faster, which may
            lower total interest and shorten the payoff timeline.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Monthly payment</th>
                  <th>Payoff time</th>
                  <th>Estimated interest</th>
                  <th>Total paid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{formatMoney(monthlyPayment)}</td>
                  <td>
                    {payoff.isPaymentTooLow
                      ? 'Too low'
                      : `${payoff.months} months`}
                  </td>
                  <td>{payoff.isPaymentTooLow ? 'N/A' : formatMoney(payoff.totalInterest)}</td>
                  <td>{payoff.isPaymentTooLow ? 'N/A' : formatMoney(payoff.totalPaid)}</td>
                </tr>
                <tr>
                  <td>{formatMoney(higherPayment)}</td>
                  <td>
                    {higherPaymentResult.isPaymentTooLow
                      ? 'Too low'
                      : `${higherPaymentResult.months} months`}
                  </td>
                  <td>
                    {higherPaymentResult.isPaymentTooLow
                      ? 'N/A'
                      : formatMoney(higherPaymentResult.totalInterest)}
                  </td>
                  <td>
                    {higherPaymentResult.isPaymentTooLow
                      ? 'N/A'
                      : formatMoney(higherPaymentResult.totalPaid)}
                  </td>
                </tr>
                <tr>
                  <td>{formatMoney(muchHigherPayment)}</td>
                  <td>
                    {muchHigherPaymentResult.isPaymentTooLow
                      ? 'Too low'
                      : `${muchHigherPaymentResult.months} months`}
                  </td>
                  <td>
                    {muchHigherPaymentResult.isPaymentTooLow
                      ? 'N/A'
                      : formatMoney(muchHigherPaymentResult.totalInterest)}
                  </td>
                  <td>
                    {muchHigherPaymentResult.isPaymentTooLow
                      ? 'N/A'
                      : formatMoney(muchHigherPaymentResult.totalPaid)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>How this credit card payoff calculator works</h2>

          <p>
            The calculator applies the APR as a monthly interest rate, adds that
            interest to the balance, then subtracts the monthly payment. It
            repeats that process until the estimated balance reaches zero.
          </p>

          <h3>Why small payments can keep debt around longer</h3>
          <p>
            When most of the monthly payment goes toward interest, only a small
            amount reduces the actual balance. That can make payoff time much
            longer and increase the total amount paid over the life of the debt.
          </p>

          <h3>APR and monthly interest</h3>
          <p>
            APR is the annual rate. This calculator divides APR by 12 to estimate
            monthly interest. Real credit card billing can be based on daily
            balances, statement cycles and issuer-specific rules.
          </p>

          <h3>Debt snowball vs debt avalanche</h3>
          <p>
            The debt snowball method focuses on paying off the smallest balances
            first. The debt avalanche method focuses on the highest APR balances
            first. This calculator focuses on one balance at a time, but the same
            idea can help compare payoff options.
          </p>

          <h3>Example</h3>
          <p>
            If a card has a {formatMoney(balance)} balance, a {formatNumber(apr, 2)}%
            APR and a {formatMoney(monthlyPayment)} monthly payment, the estimated
            payoff time is{' '}
            {payoff.isPaymentTooLow
              ? 'not reachable with the current payment because the payment may be too low.'
              : `${payoff.months} months, with about ${formatMoney(payoff.totalInterest)} in interest.`}
          </p>

          <h3>Important limitations</h3>
          <p>
            This calculator provides simplified educational estimates only. It
            does not include new purchases, late fees, balance transfer fees,
            penalty APRs, promotional APR periods, changing minimum payments or
            credit card issuer rules. It is not financial, legal, credit or debt
            advice.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Credit card payoff FAQ</h2>

          <h3>Why is my payment shown as too low?</h3>
          <p>
            If the payment is less than or close to the monthly interest charge,
            the balance may not fall in a meaningful way. Increasing the payment
            or lowering the APR can help the debt start moving down.
          </p>

          <h3>Does this include minimum payment formulas?</h3>
          <p>
            No. Credit card issuers may calculate minimum payments differently.
            This calculator uses the fixed monthly payment you enter.
          </p>

          <h3>Can a lower APR reduce payoff time?</h3>
          <p>
            Yes. A lower APR may reduce monthly interest, allowing more of each
            payment to go toward principal. That can reduce both payoff time and
            total interest paid.
          </p>

          <h3>Should I stop using the card while paying it off?</h3>
          <p>
            New purchases can increase the balance and make payoff estimates less
            accurate. This calculator assumes no new purchases are added.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Debt Payoff Calculator',
              href: '/calculators/debt-payoff',
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
