'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { states } from '../../../lib/states';

type StatePaycheckClientProps = {
  stateSlug: string;
};

export default function StatePaycheckClient({
  stateSlug,
}: StatePaycheckClientProps) {
  const state = states.find((item) => item.slug === stateSlug);

  const [salary, setSalary] = useState(75000);
  const [filingStatus, setFilingStatus] = useState('single');

  if (!state) {
    return (
      <section className="section">
        <div className="container">
          <div className="content-box">
            <h1>State not found</h1>
            <p>This paycheck calculator page does not exist yet.</p>
          </div>
        </div>
      </section>
    );
  }

  const federalRate = filingStatus === 'married' ? 0.1 : 0.12;

  const federalTax = salary * federalRate;
  const socialSecurity = salary * 0.062;
  const medicare = salary * 0.0145;
  const stateTax = salary * (state.stateTaxRate / 100);

  const annualTakeHome =
    salary - federalTax - socialSecurity - medicare - stateTax;

  const monthlyTakeHome = annualTakeHome / 12;
  const biweeklyTakeHome = annualTakeHome / 26;
  const weeklyTakeHome = annualTakeHome / 52;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'State Paycheck Calculators', href: '/paycheck-calculator' },
            { label: `${state.name} Paycheck Calculator` },
          ]}
        />

        <p className="eyebrow">{state.name} paycheck calculator</p>

        <h1>{state.name} Paycheck Calculator</h1>

        <p>
          Estimate take-home pay in {state.name} after estimated federal taxes,
          Social Security, Medicare and state income tax.
        </p>

        <AdBanner slot={`${state.slug}-top`} />

        <div className="calculator-box">
          <div className="input-group">
            <label>Annual salary</label>
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
            <label>Estimated state tax rate</label>
            <input type="number" value={state.stateTaxRate} disabled />
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

        <AdBanner slot={`${state.slug}-middle`} />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>About paychecks in {state.name}</h2>

          <p>{state.description}</p>

          <h3>How paycheck estimates work</h3>

          <p>
            Paycheck estimates are based on gross salary minus estimated payroll
            taxes and deductions. Actual payroll may vary depending on benefits,
            retirement contributions, bonuses, overtime, withholding and local
            taxes.
          </p>

          <h3>Federal payroll taxes</h3>

          <p>
            Most US employees pay federal income tax along with Social Security
            and Medicare taxes. Federal tax depends on taxable income and filing
            status.
          </p>

          <h3>State income taxes in {state.name}</h3>

          <p>
            Estimated state tax rate used for this calculator:{' '}
            {state.stateTaxRate}%. Actual withholding may differ depending on
            income, deductions, filing status and state tax rules.
          </p>

          <h3>Monthly, biweekly and weekly pay</h3>

          <p>
            This page shows estimated monthly, biweekly and weekly take-home pay
            so workers in {state.name} can compare common payroll schedules.
          </p>

          <h3>Who can use this calculator?</h3>

          <p>
            This paycheck calculator is designed for employees who want a simple
            estimate of take-home pay in {state.name}.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides simplified educational estimates only and is
            not tax, payroll, legal or financial advice.
          </p>
        </div>

        <RelatedCalculators
          title={`More paycheck tools for ${state.name}`}
          tools={[
            {
              title: 'Main Paycheck Calculator',
              href: '/calculators/paycheck',
            },
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
              title: 'All State Paycheck Calculators',
              href: '/paycheck-calculator',
            },
          ]}
        />

        <AdBanner slot={`${state.slug}-bottom`} />
      </div>
    </section>
  );
}