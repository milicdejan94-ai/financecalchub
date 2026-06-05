'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function CompoundInterestClient() {
  const [initialAmount, setInitialAmount] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(300);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [years, setYears] = useState(20);

  const monthlyRate = annualReturn / 100 / 12;
  const months = years * 12;

  const futureValue =
    monthlyRate > 0
      ? initialAmount * Math.pow(1 + monthlyRate, months) +
        monthlyContribution *
          ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
      : initialAmount + monthlyContribution * months;

  const totalContributions = initialAmount + monthlyContribution * months;
  const totalGrowth = futureValue - totalContributions;

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
        <p className="eyebrow">Investment growth calculator</p>

        <h1>Compound Interest Calculator</h1>

        <p>
          Estimate how your savings or investments may grow over time using
          compound interest and monthly contributions.
        </p>

        <AdBanner slot="compound-interest-top" />

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
            Future value: ${futureValue.toFixed(2)}
          </div>

          <div className="result">
            Total contributions: ${totalContributions.toFixed(2)}
          </div>

          <div className="result">
            Estimated growth: ${totalGrowth.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="compound-interest-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How compound interest works</h2>

          <p>
            Compound interest means your money can grow from both your original
            contributions and the growth earned over time. The longer money
            stays invested, the more powerful compounding may become.
          </p>

          <h3>Why monthly contributions matter</h3>

          <p>
            Regular monthly contributions can help increase long-term results.
            Even small contributions may grow significantly over many years when
            combined with compound growth.
          </p>

          <h3>Time and compound growth</h3>

          <p>
            Time is one of the most important factors in compound growth. A
            longer time period gives growth more opportunity to build on previous
            growth.
          </p>

          <h3>Choosing an annual return</h3>

          <p>
            The annual return is only an assumption. Actual investment returns
            can be higher or lower and may vary significantly from year to year.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides educational estimates only. It is not
            investment, tax or financial advice.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Retirement Calculator',
              href: '/calculators/retirement',
            },
            {
              title: '401k Calculator',
              href: '/calculators/401k',
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

        <AdBanner slot="compound-interest-bottom" />
      </div>
    </section>
  );
}