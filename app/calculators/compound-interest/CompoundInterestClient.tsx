'use client';

import { useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

export default function CompoundInterestClient() {
  const [initialAmount, setInitialAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(300);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [years, setYears] = useState(20);

  const safeYears = Math.max(years, 0);
  const months = safeYears * 12;
  const monthlyRate = annualReturn / 100 / 12;

  const futureValue =
    months > 0
      ? monthlyRate > 0
        ? initialAmount * Math.pow(1 + monthlyRate, months) +
          monthlyContribution *
            ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
        : initialAmount + monthlyContribution * months
      : initialAmount;

  const totalContributions = initialAmount + monthlyContribution * months;
  const totalGrowth = futureValue - totalContributions;
  const totalMonthlyContributions = monthlyContribution * months;
  const growthShare =
    futureValue > 0 ? Math.max((totalGrowth / futureValue) * 100, 0) : 0;

  const tenYearValue = calculateFutureValue(10);
  const twentyYearValue = calculateFutureValue(20);
  const thirtyYearValue = calculateFutureValue(30);

  function calculateFutureValue(yearCount: number) {
    const periodMonths = yearCount * 12;

    if (periodMonths <= 0) {
      return initialAmount;
    }

    if (monthlyRate > 0) {
      return (
        initialAmount * Math.pow(1 + monthlyRate, periodMonths) +
        monthlyContribution *
          ((Math.pow(1 + monthlyRate, periodMonths) - 1) / monthlyRate)
      );
    }

    return initialAmount + monthlyContribution * periodMonths;
  }

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: 'Compound Interest Calculator' },
          ]}
        />

        <p className="eyebrow">Compound growth calculator</p>

        <h1>Compound Interest Calculator</h1>

        <p>
          Estimate how savings or investments may grow over time with an initial
          amount, monthly contributions, a hypothetical annual return and a
          selected time period.
        </p>

        <p>
          This calculator is designed for educational planning. It can help you
          compare scenarios and understand the difference between your own
          contributions and estimated compound growth, but it does not guarantee
          future savings or investment results.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label>Initial amount</label>
            <input
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly contribution</label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Expected annual return (%)</label>
            <input
              type="number"
              value={annualReturn}
              step="0.1"
              onChange={(e) => setAnnualReturn(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Years to grow</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Estimated future value: ${futureValue.toFixed(2)}
          </div>

          <div className="result">
            Total contributions: ${totalContributions.toFixed(2)}
          </div>

          <div className="result">
            Estimated compound growth: ${totalGrowth.toFixed(2)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Compound interest result breakdown</h2>

          <p>
            The table below separates the money you contribute from the
            estimated growth created by compounding. This makes it easier to see
            whether the final value is mostly from savings contributions, growth,
            or a combination of both.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Initial amount</th>
                  <td>${initialAmount.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Total monthly contributions</th>
                  <td>${totalMonthlyContributions.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Total contributions</th>
                  <td>${totalContributions.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Estimated compound growth</th>
                  <td>${totalGrowth.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Estimated future value</th>
                  <td>${futureValue.toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Growth as share of final value</th>
                  <td>{growthShare.toFixed(1)}%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Growth comparison by time period</h2>

          <p>
            Time can make a large difference because compounding needs years to
            build on previous growth. These examples use your current inputs and
            compare several common time periods.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Time period</th>
                  <th>Estimated value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10 years</td>
                  <td>${tenYearValue.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>20 years</td>
                  <td>${twentyYearValue.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>30 years</td>
                  <td>${thirtyYearValue.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How compound interest works</h2>

          <p>
            Compound interest means growth can be earned on both the original
            amount and previous growth. Over long periods, the growth portion can
            become a larger part of the final balance, especially when money is
            left invested or saved consistently.
          </p>

          <h3>Why monthly contributions matter</h3>

          <p>
            Monthly contributions add new money to the account over time. Even if
            the starting amount is modest, consistent contributions can become a
            major part of the final result. The calculator adds monthly
            contributions and then applies the assumed monthly growth rate.
          </p>

          <h3>Contributions vs growth</h3>

          <p>
            Total contributions represent the money you put in yourself. Growth
            represents the estimated increase above your contributions. In real
            life, growth can come from interest, dividends, investment gains or
            other returns, depending on the account or investment used.
          </p>

          <h3>Choosing an annual return</h3>

          <p>
            The expected annual return is only a hypothetical assumption. A bank
            savings account, certificate of deposit, bond fund, stock fund or
            other investment can have very different risk and return patterns.
            Actual returns can be higher, lower or negative in some years.
          </p>

          <h3>Example</h3>

          <p>
            With the default inputs, a $10,000 starting amount, $300 monthly
            contribution, 7% annual return and 20-year period produces an
            estimated future value of about ${futureValue.toFixed(2)}. This is
            only a planning example, not a forecast or guarantee.
          </p>

          <h2>What this calculator does not include</h2>

          <p>
            This calculator does not include taxes, account fees, inflation,
            changing contribution amounts, changing interest rates, market
            volatility, investment losses, withdrawal rules or penalties. It uses
            a steady annual return assumption for simplicity.
          </p>

          <h2>Frequently asked questions</h2>

          <h3>Is compound interest guaranteed?</h3>

          <p>
            No. Compound growth depends on the account, investment, interest
            rate, fees and market performance. Savings accounts may offer stated
            interest rates, while investments can rise or fall in value.
          </p>

          <h3>Should I use this for investing?</h3>

          <p>
            You can use it to test hypothetical investing scenarios, but it is
            not investment advice. It does not recommend stocks, funds, brokers
            or a specific investment strategy.
          </p>

          <h3>Why does time matter so much?</h3>

          <p>
            Time gives growth more opportunities to build on previous growth.
            Starting earlier can make contributions more effective, but the
            actual result still depends on returns, fees, taxes and risk.
          </p>

          <h3>Can the estimated growth be negative?</h3>

          <p>
            This calculator allows simple growth assumptions. In real investing,
            returns can be negative. A steady return assumption is useful for
            planning, but it does not show market volatility or investment risk.
          </p>

          <h2>Important disclaimer</h2>

          <p>
            This calculator provides educational estimates only. It is not
            financial, tax, savings, retirement or investment advice. Before
            making important decisions, compare assumptions carefully and consider
            speaking with a qualified financial or tax professional.
          </p>
        </div>

        <RelatedCalculators
          title="Related savings and investing calculators"
          tools={[
            {
              title: 'Savings Calculator',
              href: '/calculators/savings',
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
              title: 'Investing for Beginners',
              href: '/investing',
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
