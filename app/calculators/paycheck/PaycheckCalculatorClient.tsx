'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function PaycheckCalculatorPage() {
  const [salary, setSalary] = useState(75000);
  const [stateTax, setStateTax] = useState(4);
  const [filingStatus, setFilingStatus] = useState('single');

  const federalRate = filingStatus === 'married' ? 0.1 : 0.12;

  const federalTax = salary * federalRate;
  const socialSecurity = salary * 0.062;
  const medicare = salary * 0.0145;
  const stateTaxAmount = salary * (stateTax / 100);

  const annualTakeHome =
    salary - federalTax - socialSecurity - medicare - stateTaxAmount;

  const monthlyTakeHome = annualTakeHome / 12;
  const biweeklyTakeHome = annualTakeHome / 26;
  const weeklyTakeHome = annualTakeHome / 52;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Paycheck Calculator' },
  ]}
/>
        <p className="eyebrow">US paycheck calculator</p>

        <h1>Paycheck Calculator</h1>

        <p>
          Estimate your take-home pay after federal income tax, Social Security,
          Medicare and state income tax.
        </p>

        <AdBanner slot="paycheck-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Annual gross salary</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Filing status</label>
            <select
              value={filingStatus}
              onChange={(e) => setFilingStatus(e.target.value)}
            >
              <option value="single">Single</option>
              <option value="married">Married filing jointly</option>
            </select>
          </div>

          <div className="input-group">
            <label>Estimated state income tax (%)</label>
            <input
              type="number"
              value={stateTax}
              step="0.1"
              onChange={(e) => setStateTax(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Monthly take-home pay: ${monthlyTakeHome.toFixed(2)}
          </div>

          <div className="result">
            Biweekly take-home pay: ${biweeklyTakeHome.toFixed(2)}
          </div>

          <div className="result">
            Weekly take-home pay: ${weeklyTakeHome.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="paycheck-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this paycheck calculator works</h2>

          <p>
            This calculator estimates your net pay by subtracting common payroll
            deductions from your gross annual salary. It includes estimated
            federal income tax, Social Security, Medicare and state income tax.
          </p>

          <h3>What is gross pay?</h3>

          <p>
            Gross pay is the amount you earn before taxes and deductions. For a
            salaried worker, this is usually the annual salary listed in the job
            offer or employment agreement.
          </p>

          <h3>What is take-home pay?</h3>

          <p>
            Take-home pay is the amount you receive after taxes and deductions
            are removed. This is also called net pay.
          </p>

          <h3>Monthly, biweekly and weekly paycheck estimates</h3>

          <p>
            Many US workers are paid weekly, biweekly or monthly. This calculator
            shows all three estimates so you can compare common pay schedules.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides a simplified educational estimate. Actual
            payroll results may vary depending on tax brackets, deductions,
            credits, local taxes, benefits, retirement contributions and other
            payroll details.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Hourly Paycheck Calculator',
              href: '/calculators/hourly-paycheck',
            },
            {
              title: 'Overtime Calculator',
              href: '/calculators/overtime',
            },
            {
              title: 'Salary To Hourly Calculator',
              href: '/calculators/salary-to-hourly',
            },
            {
              title: 'Salary Calculator by Income',
              href: '/salary-calculator',
            },
            {
              title: 'Paycheck Calculators by State',
              href: '/paycheck-calculator',
            },
            {
              title: '$50,000 Salary Calculator',
              href: '/salary-calculator/50000',
            },
          ]}
        />

        <AdBanner slot="paycheck-bottom" />
      </div>
    </section>
  );
}