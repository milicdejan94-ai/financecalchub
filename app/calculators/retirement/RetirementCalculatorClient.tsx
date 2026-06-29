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

function calculateFutureValue(
  currentSavings: number,
  monthlyContribution: number,
  annualReturn: number,
  years: number
) {
  const months = Math.max(years, 0) * 12;
  const monthlyReturn = annualReturn / 100 / 12;

  if (months <= 0) {
    return currentSavings;
  }

  if (monthlyReturn > 0) {
    return (
      currentSavings * Math.pow(1 + monthlyReturn, months) +
      monthlyContribution *
        ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn)
    );
  }

  return currentSavings + monthlyContribution * months;
}

export default function RetirementCalculatorPage() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(67);
  const [currentSavings, setCurrentSavings] = useState(25000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);

  const yearsToGrow = Math.max(retirementAge - currentAge, 0);
  const monthsToGrow = yearsToGrow * 12;

  const futureSavings = calculateFutureValue(
    currentSavings,
    monthlyContribution,
    annualReturn,
    yearsToGrow
  );

  const totalContributions =
    currentSavings + monthlyContribution * monthsToGrow;

  const estimatedGrowth = futureSavings - totalContributions;

  const annualContribution = monthlyContribution * 12;
  const averageAnnualSavings =
    yearsToGrow > 0 ? totalContributions / yearsToGrow : totalContributions;

  const tenYearValue = calculateFutureValue(
    currentSavings,
    monthlyContribution,
    annualReturn,
    10
  );

  const twentyYearValue = calculateFutureValue(
    currentSavings,
    monthlyContribution,
    annualReturn,
    20
  );

  const thirtyYearValue = calculateFutureValue(
    currentSavings,
    monthlyContribution,
    annualReturn,
    30
  );

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: 'Retirement Calculator' },
          ]}
        />

        <p className="eyebrow">US retirement calculator</p>

        <h1>Retirement Calculator</h1>

        <p>
          Estimate how your retirement savings may grow over time using your
          current age, planned retirement age, current savings, monthly
          contribution and expected annual return.
        </p>

        <p>
          This calculator is designed for educational retirement planning. It can
          help you compare scenarios, understand how time affects growth and see
          how regular contributions may influence your future balance.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label>Current age</label>
            <input
              type="number"
              value={currentAge}
              onChange={(event) => setCurrentAge(Number(event.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Retirement age</label>
            <input
              type="number"
              value={retirementAge}
              onChange={(event) =>
                setRetirementAge(Number(event.target.value))
              }
            />
          </div>

          <div className="input-group">
            <label>Current retirement savings</label>
            <input
              type="number"
              value={currentSavings}
              onChange={(event) =>
                setCurrentSavings(Number(event.target.value))
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

          <div className="result">
            Estimated retirement savings: {formatCurrency(futureSavings)}
          </div>

          <div className="result">
            Total contributions: {formatCurrency(totalContributions)}
          </div>

          <div className="result">
            Estimated investment growth: {formatCurrency(estimatedGrowth)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Retirement estimate summary</h2>

          <p>
            Based on the inputs above, this estimate assumes you have{' '}
            <strong>{yearsToGrow}</strong> years until retirement and continue
            contributing <strong>{formatCurrency(monthlyContribution)}</strong>{' '}
            per month.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Years until retirement</th>
                  <td>{yearsToGrow}</td>
                </tr>
                <tr>
                  <th>Current retirement savings</th>
                  <td>{formatCurrency(currentSavings)}</td>
                </tr>
                <tr>
                  <th>Monthly contribution</th>
                  <td>{formatCurrency(monthlyContribution)}</td>
                </tr>
                <tr>
                  <th>Annual contribution</th>
                  <td>{formatCurrency(annualContribution)}</td>
                </tr>
                <tr>
                  <th>Total contributions over time</th>
                  <td>{formatCurrency(totalContributions)}</td>
                </tr>
                <tr>
                  <th>Estimated investment growth</th>
                  <td>{formatCurrency(estimatedGrowth)}</td>
                </tr>
                <tr>
                  <th>Estimated retirement balance</th>
                  <td>{formatCurrency(futureSavings)}</td>
                </tr>
                <tr>
                  <th>Average contributed amount per year</th>
                  <td>{formatCurrency(averageAnnualSavings)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Growth comparison by time</h2>

          <p>
            The same savings plan can produce very different estimates depending
            on time. This comparison uses your current savings, monthly
            contribution and expected annual return.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Time invested</th>
                  <th>Estimated balance</th>
                  <th>Total contributions</th>
                  <th>Estimated growth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10 years</td>
                  <td>{formatCurrency(tenYearValue)}</td>
                  <td>{formatCurrency(currentSavings + monthlyContribution * 120)}</td>
                  <td>
                    {formatCurrency(
                      tenYearValue -
                        (currentSavings + monthlyContribution * 120)
                    )}
                  </td>
                </tr>
                <tr>
                  <td>20 years</td>
                  <td>{formatCurrency(twentyYearValue)}</td>
                  <td>{formatCurrency(currentSavings + monthlyContribution * 240)}</td>
                  <td>
                    {formatCurrency(
                      twentyYearValue -
                        (currentSavings + monthlyContribution * 240)
                    )}
                  </td>
                </tr>
                <tr>
                  <td>30 years</td>
                  <td>{formatCurrency(thirtyYearValue)}</td>
                  <td>{formatCurrency(currentSavings + monthlyContribution * 360)}</td>
                  <td>
                    {formatCurrency(
                      thirtyYearValue -
                        (currentSavings + monthlyContribution * 360)
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How this retirement calculator works</h2>

          <p>
            This calculator uses compound growth to estimate a future retirement
            balance. It combines your current retirement savings, monthly
            contributions, years until retirement and expected annual return.
          </p>

          <p>
            The formula assumes monthly contributions are added consistently and
            that the expected return compounds monthly. Real investment returns
            do not usually happen in a smooth line, so the output should be
            treated as a planning estimate rather than a prediction.
          </p>

          <h3>Why starting early matters</h3>

          <p>
            Time is one of the most important factors in retirement planning.
            Starting earlier may give contributions and investment growth more
            years to compound. Waiting longer can require larger monthly
            contributions to reach a similar estimated balance.
          </p>

          <h3>Why monthly contributions matter</h3>

          <p>
            Regular contributions can be just as important as the starting
            balance. A higher monthly contribution increases the amount you put
            toward retirement and gives more money the opportunity to grow over
            time.
          </p>

          <h3>What annual return should you use?</h3>

          <p>
            The expected annual return is only an assumption. Lower return
            assumptions can be useful for conservative planning, while higher
            assumptions may show a more optimistic scenario. Actual returns can
            be higher or lower than the number you enter.
          </p>

          <h3>Retirement balance is not the same as retirement income</h3>

          <p>
            This calculator estimates a future savings balance. It does not
            calculate how much income that balance may provide in retirement, how
            long the money may last, Social Security benefits, pensions, taxes,
            required withdrawals or healthcare costs.
          </p>

          <h2>Example retirement scenario</h2>

          <p>
            For example, if someone is age {currentAge}, plans to retire at age{' '}
            {retirementAge}, has {formatCurrency(currentSavings)} saved and
            contributes {formatCurrency(monthlyContribution)} per month, this
            calculator estimates a future balance of about{' '}
            <strong>{formatCurrency(futureSavings)}</strong> using a{' '}
            {annualReturn}% expected annual return.
          </p>

          <h2>Frequently asked questions</h2>

          <h3>Is this retirement calculator exact?</h3>

          <p>
            No. It is a simplified educational estimate. Actual retirement
            results may vary based on investment returns, fees, inflation, taxes,
            contribution changes, account type, withdrawals and future market
            performance.
          </p>

          <h3>Does this calculator include inflation?</h3>

          <p>
            No. The result is shown in future dollars based on the return
            assumption entered. Inflation can reduce purchasing power over time,
            so users may want to test lower return assumptions or consult a
            qualified professional for more detailed planning.
          </p>

          <h3>Does this include taxes?</h3>

          <p>
            No. The calculator does not estimate tax treatment for traditional
            retirement accounts, Roth accounts, taxable accounts, withdrawals,
            required distributions or early withdrawal penalties.
          </p>

          <h3>Can I use this for 401(k), IRA or brokerage planning?</h3>

          <p>
            You can use it as a simplified growth estimate, but it does not
            include account-specific rules, contribution limits, employer match,
            tax treatment, vesting schedules or withdrawal rules.
          </p>

          <h2>Important limitations</h2>

          <p>
            This retirement calculator provides educational estimates only. It is
            not financial, tax, investment, retirement, legal or accounting
            advice. It does not guarantee future returns or retirement readiness.
          </p>

          <p>
            Before making major retirement decisions, consider reviewing your
            situation with a qualified professional who can consider income,
            taxes, account types, risk tolerance, fees, inflation, Social
            Security, healthcare costs and retirement goals.
          </p>
        </div>

        <RelatedCalculators
          title="Related retirement and savings tools"
          tools={[
            {
              title: '401k Calculator',
              href: '/calculators/401k',
            },
            {
              title: 'Compound Interest Calculator',
              href: '/calculators/compound-interest',
            },
            {
              title: 'Savings Calculator',
              href: '/calculators/savings',
            },
            {
              title: 'Investment Return Calculator',
              href: '/calculators/investment-return',
            },
            {
              title: 'Investing for Beginners',
              href: '/investing',
            },
            {
              title: 'Methodology',
              href: '/methodology',
            },
            {
              title: 'Disclaimer',
              href: '/disclaimer',
            },
            {
              title: 'All Financial Calculators',
              href: '/calculators',
            },
          ]}
        />
      </div>
    </section>
  );
}
