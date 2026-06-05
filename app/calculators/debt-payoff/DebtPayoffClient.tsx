'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function DebtPayoffClient() {
  const [balance, setBalance] = useState(10000);
  const [annualInterestRate, setAnnualInterestRate] = useState(18);
  const [monthlyPayment, setMonthlyPayment] = useState(350);

  const monthlyRate = annualInterestRate / 100 / 12;

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
    { label: 'Debt Payoff Calculator' },
  ]}
/>
        <p className="eyebrow">Debt payoff calculator</p>

        <h1>Debt Payoff Calculator</h1>

        <p>
          Estimate how long it may take to pay off debt based on your balance,
          interest rate and monthly payment.
        </p>

        <AdBanner slot="debt-payoff-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Debt balance</label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Annual interest rate (%)</label>
            <input
              type="number"
              value={annualInterestRate}
              step="0.1"
              onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
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
              Monthly payment is too low to reduce the debt balance because
              estimated monthly interest is higher than or equal to the payment.
            </div>
          ) : (
            <>
              <div className="result">
                Estimated payoff time: {months} months ({payoffYears.toFixed(1)} years)
              </div>

              <div className="result">
                Estimated total interest: ${totalInterest.toFixed(2)}
              </div>

              <div className="result">
                Estimated total paid: ${totalPaid.toFixed(2)}
              </div>
            </>
          )}
        </div>

        <AdBanner slot="debt-payoff-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this debt payoff calculator works</h2>

          <p>
            This calculator estimates how long it may take to pay off debt using
            your current balance, annual interest rate and monthly payment. It
            also estimates the total interest paid over the payoff period.
          </p>

          <h3>Why interest rate matters</h3>

          <p>
            Higher interest rates can make debt more expensive and may increase
            the time needed to pay off the balance.
          </p>

          <h3>Why monthly payment matters</h3>

          <p>
            Increasing the monthly payment may reduce payoff time and lower total
            interest paid. Paying only a small amount may cause the debt to stay
            active for a long time.
          </p>

          <h3>Debt snowball vs debt avalanche</h3>

          <p>
            Many people compare debt payoff methods such as the debt snowball
            method, which focuses on smaller balances first, and the debt
            avalanche method, which focuses on higher interest debts first.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator is for educational estimates only. It is not
            financial, credit, legal or debt advice.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Credit Card Payoff Calculator',
              href: '/calculators/credit-card-payoff',
            },
            {
              title: 'Loan Calculator',
              href: '/calculators/loan',
            },
            {
              title: 'APR Calculator',
              href: '/calculators/apr',
            },
            {
              title: 'Car Loan Calculator',
              href: '/calculators/car-loan',
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

        <AdBanner slot="debt-payoff-bottom" />
      </div>
    </section>
  );
}