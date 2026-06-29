'use client';

import { useMemo, useState } from 'react';
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

function calculateFutureValue(
  initialInvestment: number,
  monthlyContribution: number,
  annualReturn: number,
  years: number
) {
  const monthlyRate = annualReturn / 100 / 12;
  const months = Math.max(years * 12, 0);

  if (months === 0) {
    return initialInvestment;
  }

  if (monthlyRate === 0) {
    return initialInvestment + monthlyContribution * months;
  }

  return (
    initialInvestment * Math.pow(1 + monthlyRate, months) +
    monthlyContribution *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
  );
}

export default function InvestmentReturnClient() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [years, setYears] = useState(20);

  const months = Math.max(years * 12, 0);
  const futureValue = calculateFutureValue(
    initialInvestment,
    monthlyContribution,
    annualReturn,
    years
  );

  const totalContributions = initialInvestment + monthlyContribution * months;
  const investmentGrowth = futureValue - totalContributions;
  const totalReturnPercent =
    totalContributions > 0 ? (investmentGrowth / totalContributions) * 100 : 0;

  const tenYearValue = calculateFutureValue(
    initialInvestment,
    monthlyContribution,
    annualReturn,
    10
  );
  const twentyYearValue = calculateFutureValue(
    initialInvestment,
    monthlyContribution,
    annualReturn,
    20
  );
  const thirtyYearValue = calculateFutureValue(
    initialInvestment,
    monthlyContribution,
    annualReturn,
    30
  );

  const scenarioRows = useMemo(
    () => [
      {
        label: '10 years',
        value: tenYearValue,
        contributions: initialInvestment + monthlyContribution * 10 * 12,
      },
      {
        label: '20 years',
        value: twentyYearValue,
        contributions: initialInvestment + monthlyContribution * 20 * 12,
      },
      {
        label: '30 years',
        value: thirtyYearValue,
        contributions: initialInvestment + monthlyContribution * 30 * 12,
      },
    ],
    [
      initialInvestment,
      monthlyContribution,
      tenYearValue,
      twentyYearValue,
      thirtyYearValue,
    ]
  );

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: 'Investment Return Calculator' },
          ]}
        />

        <p className="eyebrow">Investment return calculator</p>

        <h1>Investment Return Calculator</h1>

        <p>
          Estimate how an investment could grow over time based on your starting
          amount, monthly contributions, assumed annual return and investment
          time horizon. This calculator is designed for educational planning, not
          investment advice or a guaranteed forecast.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label>Initial investment</label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(event) =>
                setInitialInvestment(Number(event.target.value))
              }
            />
          </div>

          <div className="input-group">
            <label>Monthly contribution</label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(event) =>
                setMonthlyContribution(Number(event.target.value))
              }
            />
          </div>

          <div className="input-group">
            <label>Expected annual return (%)</label>
            <input
              type="number"
              value={annualReturn}
              step="0.1"
              onChange={(event) => setAnnualReturn(Number(event.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Years invested</label>
            <input
              type="number"
              value={years}
              onChange={(event) => setYears(Number(event.target.value))}
            />
          </div>

          <div className="result">
            Estimated future value: {formatCurrency(futureValue)}
          </div>

          <div className="result">
            Total contributions: {formatCurrency(totalContributions)}
          </div>

          <div className="result">
            Estimated investment growth: {formatCurrency(investmentGrowth)}
          </div>

          <div className="result">
            Estimated total return on contributions:{' '}
            {formatPercent(totalReturnPercent)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Investment return breakdown</h2>

          <p>
            The calculator separates your own contributions from estimated
            investment growth. This helps you see how much of the ending value
            comes from money you put in and how much comes from the return
            assumption.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Initial investment</th>
                  <td>{formatCurrency(initialInvestment)}</td>
                </tr>
                <tr>
                  <th>Monthly contribution</th>
                  <td>{formatCurrency(monthlyContribution)}</td>
                </tr>
                <tr>
                  <th>Years invested</th>
                  <td>{years}</td>
                </tr>
                <tr>
                  <th>Assumed annual return</th>
                  <td>{formatPercent(annualReturn)}</td>
                </tr>
                <tr>
                  <th>Total contributions</th>
                  <td>{formatCurrency(totalContributions)}</td>
                </tr>
                <tr>
                  <th>Estimated investment growth</th>
                  <td>{formatCurrency(investmentGrowth)}</td>
                </tr>
                <tr>
                  <th>Estimated ending value</th>
                  <td>{formatCurrency(futureValue)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Growth comparison by time horizon</h2>

          <p>
            Time can have a large effect on a long-term investment estimate. The
            same starting amount, monthly contribution and return assumption can
            produce very different results over 10, 20 and 30 years.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Time invested</th>
                  <th>Total contributions</th>
                  <th>Estimated ending value</th>
                  <th>Estimated growth</th>
                </tr>
              </thead>
              <tbody>
                {scenarioRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{formatCurrency(row.contributions)}</td>
                    <td>{formatCurrency(row.value)}</td>
                    <td>{formatCurrency(row.value - row.contributions)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>How this investment return calculator works</h2>

          <p>
            The calculator applies a monthly version of the annual return
            assumption to the initial investment and to each monthly
            contribution. It then estimates the future value after the selected
            number of years.
          </p>

          <p>
            This is a simplified compound growth model. It assumes steady
            contributions and a constant annual return. Real investments do not
            grow in a straight line, and returns can be positive or negative in
            any given year.
          </p>

          <h3>Initial investment vs monthly contributions</h3>

          <p>
            The initial investment is the amount already invested at the start.
            Monthly contributions are the additional amounts added over time.
            Both can grow if the investment earns a positive return.
          </p>

          <h3>What the expected annual return means</h3>

          <p>
            The expected annual return is only a planning assumption. It is not a
            promise, prediction or guarantee. A higher assumed return can make
            the estimate look much larger, but it also usually implies greater
            uncertainty and risk.
          </p>

          <h3>Why investment growth can differ from savings growth</h3>

          <p>
            Savings accounts may have lower but more stable interest rates.
            Investments can offer higher long-term growth potential, but they can
            also lose value. This calculator is useful for testing assumptions,
            not for deciding which investment to buy.
          </p>

          <h2>Example investment return scenario</h2>

          <p>
            Suppose you start with {formatCurrency(initialInvestment)}, add{' '}
            {formatCurrency(monthlyContribution)} per month, assume a{' '}
            {formatPercent(annualReturn)} annual return and stay invested for{' '}
            {years} years. Under those assumptions, the estimated ending value
            would be {formatCurrency(futureValue)}.
          </p>

          <p>
            Of that amount, {formatCurrency(totalContributions)} would come from
            your own contributions and {formatCurrency(investmentGrowth)} would
            come from estimated investment growth. In real life, taxes, fees,
            inflation and market volatility can change the result.
          </p>

          <h2>What this calculator includes</h2>

          <ul>
            <li>Initial investment amount</li>
            <li>Regular monthly contributions</li>
            <li>Assumed annual return</li>
            <li>Selected investment time horizon</li>
            <li>Estimated growth from compounding</li>
          </ul>

          <h2>What this calculator does not include</h2>

          <ul>
            <li>Investment fees or fund expense ratios</li>
            <li>Taxes on dividends, interest or capital gains</li>
            <li>Inflation or changing purchasing power</li>
            <li>Changing contribution amounts over time</li>
            <li>Market losses, volatility or sequence-of-return risk</li>
            <li>Specific stock, ETF, fund or brokerage recommendations</li>
          </ul>

          <h2>Frequently asked questions</h2>

          <h3>Is the estimated return guaranteed?</h3>

          <p>
            No. The return rate is only an assumption for planning. Actual
            investment performance can be higher, lower or negative.
          </p>

          <h3>Should I use this for retirement planning?</h3>

          <p>
            You can use it as a simple educational estimate, but retirement
            planning also depends on taxes, account type, employer match,
            withdrawal rules, inflation, spending needs and investment risk. For
            retirement-specific planning, also try the retirement and 401(k)
            calculators.
          </p>

          <h3>Does this calculator recommend investments?</h3>

          <p>
            No. FinanceCalcHub does not recommend specific stocks, ETFs, mutual
            funds, brokers or investment strategies.
          </p>

          <h3>Why does a small change in return rate make such a big difference?</h3>

          <p>
            Over long periods, compounding magnifies differences in return
            assumptions. A small change in the assumed annual return can create a
            much larger difference after many years.
          </p>

          <h2>Important limitations</h2>

          <p>
            This calculator provides educational estimates only. It is not
            investment, tax, retirement, legal or financial advice. Actual
            results can vary based on market performance, taxes, fees, inflation,
            account type, contribution timing, withdrawal timing and personal
            financial circumstances.
          </p>

          <p>
            Before making investment decisions, consider reviewing your plan with
            a qualified financial professional and reading official investor
            education resources.
          </p>
        </div>

        <RelatedCalculators
          title="Related investing and savings tools"
          tools={[
            {
              title: 'Compound Interest Calculator',
              href: '/calculators/compound-interest',
            },
            {
              title: 'Savings Calculator',
              href: '/calculators/savings',
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
              title: 'Investing Beginner Guides',
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
