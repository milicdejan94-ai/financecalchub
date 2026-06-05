'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function RetirementCalculatorPage() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(67);
  const [currentSavings, setCurrentSavings] = useState(25000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);

  const yearsToGrow = Math.max(retirementAge - currentAge, 0);
  const monthsToGrow = yearsToGrow * 12;
  const monthlyReturn = annualReturn / 100 / 12;

  const futureSavings =
    monthlyReturn > 0
      ? currentSavings * Math.pow(1 + monthlyReturn, monthsToGrow) +
        monthlyContribution *
          ((Math.pow(1 + monthlyReturn, monthsToGrow) - 1) / monthlyReturn)
      : currentSavings + monthlyContribution * monthsToGrow;

  const totalContributions =
    currentSavings + monthlyContribution * monthsToGrow;

  const estimatedGrowth = futureSavings - totalContributions;

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
          Estimate how your retirement savings may grow over time based on your
          current savings, monthly contributions and expected annual return.
        </p>

        <AdBanner slot="retirement-top" />

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
            <label>Current retirement savings</label>
            <input
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
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

          <div className="result">
            Estimated retirement savings: ${futureSavings.toFixed(2)}
          </div>

          <div className="result">
            Total contributions: ${totalContributions.toFixed(2)}
          </div>

          <div className="result">
            Estimated investment growth: ${estimatedGrowth.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="retirement-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this retirement calculator works</h2>

          <p>
            This calculator estimates how retirement savings may grow using
            compound growth. It combines your current savings, monthly
            contributions, years until retirement and expected annual return.
          </p>

          <h3>Why starting early matters</h3>

          <p>
            The more time your money has to grow, the more powerful compounding
            can become. Even small monthly contributions can grow significantly
            over long periods of time.
          </p>

          <h3>Monthly contributions</h3>

          <p>
            Regular monthly contributions can help build retirement savings over
            time. Increasing contributions as income grows may improve future
            results.
          </p>

          <h3>What annual return should you use?</h3>

          <p>
            Annual return is only an assumption. Actual investment returns can be
            higher or lower and may vary significantly from year to year.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator is for educational estimates only. It does not
            guarantee investment results and is not financial, tax, retirement or
            investment advice.
          </p>
        </div>

        <RelatedCalculators
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

        <AdBanner slot="retirement-bottom" />
      </div>
    </section>
  );
}