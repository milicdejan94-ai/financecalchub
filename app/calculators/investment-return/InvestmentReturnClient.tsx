'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

export default function InvestmentReturnClient() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [years, setYears] = useState(20);

  const monthlyRate = annualReturn / 100 / 12;
  const months = years * 12;

  const futureValue =
    monthlyRate > 0
      ? initialInvestment * Math.pow(1 + monthlyRate, months) +
        monthlyContribution *
          ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
      : initialInvestment + monthlyContribution * months;

  const totalContributions = initialInvestment + monthlyContribution * months;
  const investmentGrowth = futureValue - totalContributions;
  const totalReturnPercent =
    totalContributions > 0 ? (investmentGrowth / totalContributions) * 100 : 0;

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
          Estimate how an investment may grow over time based on starting amount,
          monthly contributions, expected annual return and time horizon.
        </p>

        <AdBanner slot="investment-return-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Initial investment</label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
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
            <label>Years invested</label>
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
            Estimated investment growth: ${investmentGrowth.toFixed(2)}
          </div>

          <div className="result">
            Estimated total return: {totalReturnPercent.toFixed(2)}%
          </div>
        </div>

        <AdBanner slot="investment-return-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this investment return calculator works</h2>

          <p>
            This calculator estimates future investment value using an initial
            amount, regular monthly contributions, expected annual return and
            investment time period.
          </p>

          <h3>Why time matters</h3>

          <p>
            The longer money stays invested, the more opportunity it has to grow.
            Time can make a major difference because investment growth can
            compound over many years.
          </p>

          <h3>Why contributions matter</h3>

          <p>
            Regular monthly contributions can increase long-term investment
            value. Even if returns vary, consistent contributions may help build
            wealth over time.
          </p>

          <h3>Investment return assumptions</h3>

          <p>
            The expected annual return is only an assumption. Actual returns are
            not guaranteed and may be higher or lower from year to year.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides educational estimates only. It is not
            investment, tax, retirement or financial advice.
          </p>
        </div>

        <RelatedCalculators
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
              title: 'Salary Calculator',
              href: '/salary-calculator',
            },
            {
              title: 'All Financial Calculators',
              href: '/calculators',
            },
          ]}
        />

        <AdBanner slot="investment-return-bottom" />
      </div>
    </section>
  );
}