'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function CreditCardPayoffClient() {
  const [balance, setBalance] = useState(5000);
  const [apr, setApr] = useState(22);
  const [monthlyPayment, setMonthlyPayment] = useState(200);

  const monthlyRate = apr / 100 / 12;

  let remainingBalance = balance;
  let months = 0;
  let totalInterest = 0;

  const isPaymentTooLow = monthlyPayment <= balance * monthlyRate;

  if (!isPaymentTooLow) {
    while (remainingBalance > 0 && months < 600) {
      const interest = remainingBalance * monthlyRate;
      const principalPayment = monthlyPayment - interest;

      totalInterest += interest;
      remainingBalance -= principalPayment;
      months += 1;

      if (remainingBalance < 0) {
        remainingBalance = 0;
      }
    }
  }

  const payoffYears = months / 12;
  const totalPaid = balance + totalInterest;

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
        <p className="eyebrow">Credit card payoff calculator</p>

        <h1>Credit Card Payoff Calculator</h1>

        <p>
          Estimate how long it may take to pay off credit card debt using your
          balance, APR and monthly payment.
        </p>

        <AdBanner slot="credit-card-payoff-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Credit card balance</label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>APR (%)</label>
            <input
              type="number"
              value={apr}
              step="0.1"
              onChange={(e) => setApr(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly payment</label>
            <input
              type="number"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(Number(e.target.value))}
            />
          </div>

          {isPaymentTooLow ? (
            <div className="result">
              Monthly payment is too low to reduce the balance because estimated
              monthly interest is higher than or equal to the payment.
            </div>
          ) : (
            <>
              <div className="result">
                Estimated payoff time: {months} months ({payoffYears.toFixed(1)} years)
              </div>

              <div className="result">
                Estimated interest paid: ${totalInterest.toFixed(2)}
              </div>

              <div className="result">
                Estimated total paid: ${totalPaid.toFixed(2)}
              </div>
            </>
          )}
        </div>

        <AdBanner slot="credit-card-payoff-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this credit card payoff calculator works</h2>

          <p>
            This calculator estimates credit card payoff time using the current
            balance, annual percentage rate and monthly payment. It also estimates
            how much interest may be paid before the balance reaches zero.
          </p>

          <h3>Why APR matters</h3>

          <p>
            Credit card APR can make balances expensive to carry. A higher APR
            means more interest may be added each month, especially when balances
            are paid slowly.
          </p>

          <h3>Why monthly payments matter</h3>

          <p>
            Paying more than the minimum payment can reduce payoff time and lower
            total interest. Small increases in monthly payments may make a big
            difference over time.
          </p>

          <h3>Credit card payoff strategies</h3>

          <p>
            Some people use the debt snowball method by paying off smaller
            balances first. Others use the debt avalanche method by targeting
            higher interest balances first.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides simplified educational estimates only. It is
            not financial, legal, credit or debt advice.
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
              title: 'Car Loan Calculator',
              href: '/calculators/car-loan',
            },
            {
              title: 'Savings Calculator',
              href: '/calculators/savings',
            },
            {
              title: 'All Financial Calculators',
              href: '/calculators',
            },
          ]}
        />

        <AdBanner slot="credit-card-payoff-bottom" />
      </div>
    </section>
  );
}