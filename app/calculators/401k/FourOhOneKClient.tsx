'use client';

import { useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}

function project401kBalance({
  currentBalance,
  monthlyContribution,
  months,
  monthlyReturn,
}: {
  currentBalance: number;
  monthlyContribution: number;
  months: number;
  monthlyReturn: number;
}) {
  if (months <= 0) {
    return currentBalance;
  }

  if (monthlyReturn <= 0) {
    return currentBalance + monthlyContribution * months;
  }

  return (
    currentBalance * Math.pow(1 + monthlyReturn, months) +
    monthlyContribution *
      ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn)
  );
}

export default function FourOhOneKClient() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(67);
  const [currentBalance, setCurrentBalance] = useState(25000);
  const [annualSalary, setAnnualSalary] = useState(80000);
  const [employeeContribution, setEmployeeContribution] = useState(8);
  const [employerMatch, setEmployerMatch] = useState(4);
  const [annualReturn, setAnnualReturn] = useState(7);

  const years = Math.max(retirementAge - currentAge, 0);
  const months = years * 12;
  const monthlyReturn = annualReturn / 100 / 12;

  const monthlyEmployeeContribution =
    (annualSalary * (employeeContribution / 100)) / 12;

  const monthlyEmployerMatch = (annualSalary * (employerMatch / 100)) / 12;

  const totalMonthlyContribution =
    monthlyEmployeeContribution + monthlyEmployerMatch;

  const futureValue = project401kBalance({
    currentBalance,
    monthlyContribution: totalMonthlyContribution,
    months,
    monthlyReturn,
  });

  const totalEmployeeContributions = monthlyEmployeeContribution * months;
  const totalEmployerMatch = monthlyEmployerMatch * months;
  const totalContributions =
    currentBalance + totalEmployeeContributions + totalEmployerMatch;

  const estimatedGrowth = futureValue - totalContributions;
  const annualEmployeeContribution = monthlyEmployeeContribution * 12;
  const annualEmployerMatch = monthlyEmployerMatch * 12;
  const combinedAnnualContribution = annualEmployeeContribution + annualEmployerMatch;
  const contributionShare =
    futureValue > 0 ? (totalContributions / futureValue) * 100 : 0;
  const growthShare = futureValue > 0 ? (estimatedGrowth / futureValue) * 100 : 0;

  const scenarioYears = [10, 20, 30].filter((item) => item <= Math.max(years, 30));

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: '401k Calculator' },
          ]}
        />

        <p className="eyebrow">401k retirement calculator</p>

        <h1>401k Calculator</h1>

        <p>
          Estimate how your 401k balance may grow over time using your current
          balance, salary, employee contribution rate, employer match and an
          assumed annual return.
        </p>

        <p>
          This calculator is designed for educational planning. It can help you
          compare contribution rates and employer match assumptions, but it does
          not predict market returns or replace professional retirement advice.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label>Current age</label>
            <input
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Retirement age</label>
            <input
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Current 401k balance</label>
            <input
              type="number"
              value={currentBalance}
              onChange={(e) => setCurrentBalance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Annual salary</label>
            <input
              type="number"
              value={annualSalary}
              onChange={(e) => setAnnualSalary(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Your contribution rate (%)</label>
            <input
              type="number"
              value={employeeContribution}
              step="0.1"
              onChange={(e) => setEmployeeContribution(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Employer match (%)</label>
            <input
              type="number"
              value={employerMatch}
              step="0.1"
              onChange={(e) => setEmployerMatch(Number(e.target.value))}
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

          <div className="result">
            Estimated 401k balance at retirement: {formatCurrency(futureValue)}
          </div>

          <div className="result">
            Your contributions: {formatCurrency(totalEmployeeContributions)}
          </div>

          <div className="result">
            Employer match: {formatCurrency(totalEmployerMatch)}
          </div>

          <div className="result">
            Estimated investment growth: {formatCurrency(estimatedGrowth)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>401k savings breakdown</h2>

          <p>
            The table below separates the money you add, the estimated employer
            match and the growth produced by the return assumption. This makes
            it easier to see how much of the final balance comes from savings
            behavior versus long-term compounding.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Years until retirement</th>
                  <td>{years}</td>
                </tr>
                <tr>
                  <th>Monthly employee contribution</th>
                  <td>{formatCurrency(monthlyEmployeeContribution)}</td>
                </tr>
                <tr>
                  <th>Monthly employer match</th>
                  <td>{formatCurrency(monthlyEmployerMatch)}</td>
                </tr>
                <tr>
                  <th>Combined monthly contribution</th>
                  <td>{formatCurrency(totalMonthlyContribution)}</td>
                </tr>
                <tr>
                  <th>Total employee contributions</th>
                  <td>{formatCurrency(totalEmployeeContributions)}</td>
                </tr>
                <tr>
                  <th>Total employer match</th>
                  <td>{formatCurrency(totalEmployerMatch)}</td>
                </tr>
                <tr>
                  <th>Current balance included</th>
                  <td>{formatCurrency(currentBalance)}</td>
                </tr>
                <tr>
                  <th>Estimated investment growth</th>
                  <td>{formatCurrency(estimatedGrowth)}</td>
                </tr>
                <tr>
                  <th>Estimated 401k balance</th>
                  <td>{formatCurrency(futureValue)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Contribution and growth summary</h2>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Estimated amount</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Employee contribution per year</td>
                  <td>{formatCurrency(annualEmployeeContribution)}</td>
                  <td>{formatPercent(employeeContribution)} of salary</td>
                </tr>
                <tr>
                  <td>Employer match per year</td>
                  <td>{formatCurrency(annualEmployerMatch)}</td>
                  <td>{formatPercent(employerMatch)} of salary assumption</td>
                </tr>
                <tr>
                  <td>Combined annual contribution</td>
                  <td>{formatCurrency(combinedAnnualContribution)}</td>
                  <td>Employee contribution plus employer match</td>
                </tr>
                <tr>
                  <td>Contributions share of final balance</td>
                  <td>{formatPercent(contributionShare)}</td>
                  <td>Current balance plus future contributions</td>
                </tr>
                <tr>
                  <td>Growth share of final balance</td>
                  <td>{formatPercent(growthShare)}</td>
                  <td>Estimated compounding effect</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>How time changes the estimate</h2>

          <p>
            Longer time horizons can make the return assumption more powerful
            because growth has more years to compound. The values below use the
            same current balance and monthly contribution assumptions from the
            calculator.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Years invested</th>
                  <th>Estimated balance</th>
                  <th>Total contributions</th>
                  <th>Estimated growth</th>
                </tr>
              </thead>
              <tbody>
                {scenarioYears.map((scenarioYear) => {
                  const scenarioMonths = scenarioYear * 12;
                  const scenarioValue = project401kBalance({
                    currentBalance,
                    monthlyContribution: totalMonthlyContribution,
                    months: scenarioMonths,
                    monthlyReturn,
                  });
                  const scenarioContributions =
                    currentBalance + totalMonthlyContribution * scenarioMonths;
                  const scenarioGrowth = scenarioValue - scenarioContributions;

                  return (
                    <tr key={scenarioYear}>
                      <td>{scenarioYear}</td>
                      <td>{formatCurrency(scenarioValue)}</td>
                      <td>{formatCurrency(scenarioContributions)}</td>
                      <td>{formatCurrency(scenarioGrowth)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>How this 401k calculator works</h2>

          <p>
            The calculator first converts your salary contribution percentage
            into a monthly employee contribution. It then adds the employer
            match assumption and applies monthly compounding over the number of
            years until retirement.
          </p>

          <h3>Why employer match matters</h3>

          <p>
            Employer matching contributions can increase your long-term balance
            because they add more money to the account before investment growth
            is calculated. A worker who contributes enough to receive a match may
            see a larger estimated balance than someone saving the same amount
            without an employer contribution.
          </p>

          <h3>Contribution rate</h3>

          <p>
            Your contribution rate is the percentage of salary you put into the
            401k plan. Increasing this percentage can raise your estimated
            retirement balance, but it can also reduce take-home pay today.
          </p>

          <h3>Expected annual return</h3>

          <p>
            The expected annual return is only an assumption. Real investment
            returns can be positive or negative in individual years, and fees,
            taxes, withdrawals and plan rules can change actual results.
          </p>

          <h3>Example</h3>

          <p>
            With a {formatCurrency(currentBalance)} current 401k balance,
            {formatCurrency(annualSalary)} salary, a {formatPercent(employeeContribution)}
            employee contribution, a {formatPercent(employerMatch)} employer
            match and a {formatPercent(annualReturn)} annual return assumption,
            the estimated balance at age {retirementAge} is about{' '}
            {formatCurrency(futureValue)}.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>401k calculator FAQ</h2>

          <h3>Does this calculator include 401k contribution limits?</h3>
          <p>
            No. This calculator focuses on long-term growth using the inputs you
            provide. Actual 401k contribution limits, catch-up contributions and
            plan rules can affect how much you are allowed to contribute.
          </p>

          <h3>Does employer match always work this way?</h3>
          <p>
            No. Employer match formulas vary by plan. Some employers match a
            percentage of salary, some match only up to a certain contribution
            level, and some use vesting schedules.
          </p>

          <h3>Does this estimate include taxes?</h3>
          <p>
            No. The calculator does not model income taxes, Roth versus
            traditional tax treatment, required distributions or withdrawal
            strategy. It estimates account growth before retirement withdrawals.
          </p>

          <h3>Is the projected balance guaranteed?</h3>
          <p>
            No. The result is an educational projection based on your inputs.
            Market returns are uncertain and the actual future value may be much
            higher or lower.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Important limitations</h2>

          <p>
            This calculator does not include contribution limits, income phaseouts,
            catch-up contributions, plan-specific rules, vesting schedules,
            investment fees, taxes, inflation, loans, withdrawals or required
            minimum distributions. It provides educational estimates only and is
            not retirement, investment, tax or financial advice.
          </p>
        </div>

        <RelatedCalculators
          title="Related retirement and investing calculators"
          tools={[
            {
              title: 'Retirement Calculator',
              href: '/calculators/retirement',
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
              title: 'Beginner Investing Guide',
              href: '/investing/beginner-guide',
            },
            {
              title: 'How Our Calculators Work',
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
