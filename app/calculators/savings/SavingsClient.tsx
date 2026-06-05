'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function SavingsClient() {
  const [startingBalance, setStartingBalance] = useState(5000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(300);
  const [annualInterestRate, setAnnualInterestRate] = useState(4);
  const [years, setYears] = useState(10);

  const monthlyRate = annualInterestRate / 100 / 12;
  const months = years * 12;

  const futureValue =
    monthlyRate > 0
      ? startingBalance * Math.pow(1 + monthlyRate, months) +
        monthlyDeposit *
          ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
      : startingBalance + monthlyDeposit * months;

  const totalDeposits = startingBalance + monthlyDeposit * months;
  const interestEarned = futureValue - totalDeposits;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Savings Calculator' },
  ]}
/>
        <p className="eyebrow">Savings calculator</p>

        <h1>Savings Calculator</h1>

        <p>
          Estimate how your savings may grow over time with a starting balance,
          monthly deposits and interest.
        </p>

        <AdBanner slot="savings-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Starting balance</label>
            <input
              type="number"
              value={startingBalance}
              onChange={(e) => setStartingBalance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly deposit</label>
            <input
              type="number"
              value={monthlyDeposit}
              onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
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
            <label>Years to save</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Future savings balance: ${futureValue.toFixed(2)}
          </div>

          <div className="result">
            Total deposits: ${totalDeposits.toFixed(2)}
          </div>

          <div className="result">
            Estimated interest earned: ${interestEarned.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="savings-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this savings calculator works</h2>

          <p>
            This calculator estimates future savings based on your starting
            balance, monthly deposits, interest rate and time period.
          </p>

          <h3>Why monthly deposits matter</h3>

          <p>
            Regular monthly deposits can help savings grow consistently over
            time. Even small deposits may become meaningful when repeated for
            many years.
          </p>

          <h3>Interest and savings growth</h3>

          <p>
            Interest can increase your balance over time. Higher interest rates
            may increase estimated future savings, but actual rates can change.
          </p>

          <h3>Savings vs investing</h3>

          <p>
            Savings accounts are usually designed for stability and liquidity,
            while investments may offer higher potential returns with higher
            risk.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides educational estimates only. It is not
            banking, investment, tax or financial advice.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Compound Interest Calculator',
              href: '/calculators/compound-interest',
            },
            {
              title: 'Retirement Calculator',
              href: '/calculators/retirement',
            },
            {
              title: '401k Calculator',
              href: '/calculators/401k',
            },
            {
              title: 'Salary Calculator',
              href: '/salary-calculator',
            },
            {
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
            },
            {
              title: 'All Financial Calculators',
              href: '/calculators',
            },
          ]}
        />

        <AdBanner slot="savings-bottom" />
      </div>
    </section>
  );
}