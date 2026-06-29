'use client';

import { useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

function formatMoney(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}

function calculateFutureSavings(
  startingBalance: number,
  monthlyDeposit: number,
  annualInterestRate: number,
  years: number
) {
  const monthlyRate = annualInterestRate / 100 / 12;
  const months = years * 12;

  if (months <= 0) {
    return startingBalance;
  }

  if (monthlyRate > 0) {
    return (
      startingBalance * Math.pow(1 + monthlyRate, months) +
      monthlyDeposit * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
    );
  }

  return startingBalance + monthlyDeposit * months;
}

export default function SavingsClient() {
  const [startingBalance, setStartingBalance] = useState(5000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(300);
  const [annualInterestRate, setAnnualInterestRate] = useState(4);
  const [years, setYears] = useState(10);

  const months = years * 12;
  const futureValue = calculateFutureSavings(
    startingBalance,
    monthlyDeposit,
    annualInterestRate,
    years
  );
  const totalDeposits = startingBalance + monthlyDeposit * months;
  const interestEarned = futureValue - totalDeposits;
  const averageAnnualDeposit = monthlyDeposit * 12;

  const fiveYearValue = calculateFutureSavings(
    startingBalance,
    monthlyDeposit,
    annualInterestRate,
    5
  );
  const tenYearValue = calculateFutureSavings(
    startingBalance,
    monthlyDeposit,
    annualInterestRate,
    10
  );
  const twentyYearValue = calculateFutureSavings(
    startingBalance,
    monthlyDeposit,
    annualInterestRate,
    20
  );

  const comparisonRows = [
    { label: '5 years', value: fiveYearValue },
    { label: '10 years', value: tenYearValue },
    { label: '20 years', value: twentyYearValue },
  ];

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
          monthly deposits and an assumed interest rate. Use this calculator to
          compare saving scenarios for emergency funds, short-term goals or
          longer-term cash planning.
        </p>

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
            Future savings balance: {formatMoney(futureValue)}
          </div>

          <div className="result">Total deposits: {formatMoney(totalDeposits)}</div>

          <div className="result">
            Estimated interest earned: {formatMoney(interestEarned)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Savings estimate breakdown</h2>

          <p>
            The table below separates the money you put in from the estimated
            interest earned. This helps show whether the projected balance is
            mainly coming from deposits, interest or both.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Starting balance</th>
                  <td>{formatMoney(startingBalance)}</td>
                </tr>
                <tr>
                  <th>Monthly deposit</th>
                  <td>{formatMoney(monthlyDeposit)}</td>
                </tr>
                <tr>
                  <th>Estimated annual deposits</th>
                  <td>{formatMoney(averageAnnualDeposit)}</td>
                </tr>
                <tr>
                  <th>Total deposits over time</th>
                  <td>{formatMoney(totalDeposits)}</td>
                </tr>
                <tr>
                  <th>Estimated interest earned</th>
                  <td>{formatMoney(interestEarned)}</td>
                </tr>
                <tr>
                  <th>Estimated future balance</th>
                  <td>{formatMoney(futureValue)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Compare different saving time periods</h2>

          <p>
            Keeping the same starting balance, monthly deposit and interest rate,
            the estimated balance can change significantly as the saving period
            gets longer.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Time period</th>
                  <th>Estimated balance</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{formatMoney(row.value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this savings calculator works</h2>

          <p>
            This calculator estimates future savings based on your starting
            balance, monthly deposits, assumed annual interest rate and time
            period. It uses monthly compounding to create a simplified projection.
          </p>

          <h3>Why monthly deposits matter</h3>

          <p>
            Regular monthly deposits can help savings grow consistently over
            time. Even small deposits may become meaningful when repeated for
            many months or years.
          </p>

          <h3>Interest and savings growth</h3>

          <p>
            Interest can increase your balance over time. A higher interest rate
            can increase the estimated future balance, but actual savings account
            rates can change and may not stay constant for the full period.
          </p>

          <h3>Savings vs investing</h3>

          <p>
            Savings accounts are usually used for stability, liquidity and
            shorter-term goals. Investments may offer higher potential long-term
            returns, but they can also lose value. A savings calculator should
            not be treated like an investment performance forecast.
          </p>

          <h3>Example</h3>

          <p>
            If you start with {formatMoney(startingBalance)}, add{' '}
            {formatMoney(monthlyDeposit)} per month and assume a{' '}
            {annualInterestRate.toFixed(1)}% annual interest rate for {years}{' '}
            years, this calculator estimates a future balance of about{' '}
            {formatMoney(futureValue)}. That includes {formatMoney(totalDeposits)}{' '}
            in deposits and about {formatMoney(interestEarned)} in estimated
            interest.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Frequently asked questions</h2>

          <h3>Is this savings calculator exact?</h3>

          <p>
            No. It is a simplified educational estimate. Real savings results
            may vary because interest rates can change, deposits may not happen
            exactly every month and account rules may differ by bank.
          </p>

          <h3>Does this include taxes?</h3>

          <p>
            No. Interest earned in a savings account may be taxable, but this
            calculator does not estimate federal, state or local taxes on
            interest income.
          </p>

          <h3>Can I use this for an emergency fund?</h3>

          <p>
            Yes, it can help you estimate how long it may take to build a target
            balance. For emergency funds, many users focus more on safety and
            access to cash than on high returns.
          </p>

          <h3>Is savings the same as investing?</h3>

          <p>
            No. Savings usually focuses on preserving cash and earning interest.
            Investing involves market risk and may gain or lose value over time.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Important limitations</h2>

          <p>
            This savings calculator provides educational estimates only. It is
            not banking, investment, tax, legal or financial advice. It does not
            include taxes, inflation, changing interest rates, bank fees,
            withdrawal limits, promotional rate expirations or account-specific
            rules.
          </p>

          <p>
            Before making important banking, savings, tax or investment
            decisions, verify the numbers with your bank, a qualified
            professional or an official source.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Compound Interest Calculator',
              href: '/calculators/compound-interest',
            },
            {
              title: 'Investment Return Calculator',
              href: '/calculators/investment-return',
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
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
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
