'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

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

  const futureValue =
    monthlyReturn > 0
      ? currentBalance * Math.pow(1 + monthlyReturn, months) +
        totalMonthlyContribution *
          ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn)
      : currentBalance + totalMonthlyContribution * months;

  const totalEmployeeContributions = monthlyEmployeeContribution * months;
  const totalEmployerMatch = monthlyEmployerMatch * months;
  const totalContributions =
    currentBalance + totalEmployeeContributions + totalEmployerMatch;

  const estimatedGrowth = futureValue - totalContributions;

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
          Estimate how your 401k savings may grow based on salary, contribution
          rate, employer match and expected investment return.
        </p>

        <AdBanner slot="401k-top" />

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
            Estimated 401k balance at retirement: ${futureValue.toFixed(2)}
          </div>

          <div className="result">
            Your contributions: ${totalEmployeeContributions.toFixed(2)}
          </div>

          <div className="result">
            Employer match: ${totalEmployerMatch.toFixed(2)}
          </div>

          <div className="result">
            Estimated investment growth: ${estimatedGrowth.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="401k-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this 401k calculator works</h2>

          <p>
            This calculator estimates future 401k savings using your current
            balance, salary, contribution rate, employer match, time until
            retirement and expected annual return.
          </p>

          <h3>Why employer match matters</h3>

          <p>
            Employer matching contributions can significantly increase long-term
            retirement savings. Many workers try to contribute enough to receive
            the full available match.
          </p>

          <h3>Contribution rate</h3>

          <p>
            Your contribution rate is the percentage of salary you put into your
            401k plan. Increasing this percentage may improve future retirement
            savings.
          </p>

          <h3>Investment return assumptions</h3>

          <p>
            Expected annual return is only an assumption. Actual investment
            returns can vary and are not guaranteed.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides educational estimates only. It is not
            retirement, investment, tax or financial advice.
          </p>
        </div>

        <RelatedCalculators
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

        <AdBanner slot="401k-bottom" />
      </div>
    </section>
  );
}