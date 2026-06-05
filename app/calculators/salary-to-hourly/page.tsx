'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function SalaryToHourlyPage() {
  const [annualSalary, setAnnualSalary] = useState(60000);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(52);

  const hourlyRate = annualSalary / (hoursPerWeek * weeksPerYear);
  const monthlySalary = annualSalary / 12;
  const biweeklySalary = annualSalary / 26;
  const weeklySalary = annualSalary / 52;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Salary To Hourly Calculator' },
  ]}
/>
        <p className="eyebrow">Salary to hourly calculator</p>

        <h1>Salary To Hourly Calculator</h1>

        <p>
          Convert annual salary into estimated hourly wage based on weekly work
          hours and weeks worked per year.
        </p>

        <AdBanner slot="salary-hourly-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Annual salary</label>
            <input
              type="number"
              value={annualSalary}
              onChange={(e) => setAnnualSalary(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Hours worked per week</label>
            <input
              type="number"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Weeks worked per year</label>
            <input
              type="number"
              value={weeksPerYear}
              onChange={(e) => setWeeksPerYear(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Estimated hourly wage: ${hourlyRate.toFixed(2)}
          </div>

          <div className="result">
            Monthly salary: ${monthlySalary.toFixed(2)}
          </div>

          <div className="result">
            Biweekly salary: ${biweeklySalary.toFixed(2)}
          </div>

          <div className="result">
            Weekly salary: ${weeklySalary.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="salary-hourly-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How salary to hourly conversion works</h2>

          <p>
            Hourly wage estimates are calculated by dividing annual salary by the
            total number of work hours during the year. For a common full-time
            schedule, many people use 40 hours per week and 52 weeks per year.
          </p>

          <h3>Standard full-time schedule</h3>

          <p>
            A standard full-time schedule is often estimated as 40 hours per week
            and 52 weeks per year, or 2,080 work hours per year. Actual work
            hours may vary depending on paid time off, holidays and unpaid leave.
          </p>

          <h3>Why hourly conversion matters</h3>

          <p>
            Converting salary to hourly pay can help compare jobs, evaluate
            overtime opportunities and understand effective compensation.
          </p>

          <h3>Salary and paycheck estimates</h3>

          <p>
            Salary to hourly conversion shows gross pay before tax. To estimate
            take-home pay after taxes and deductions, use a paycheck calculator.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides educational estimates only and is not tax,
            payroll or financial advice.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Paycheck Calculator',
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
              title: 'Salary Calculator',
              href: '/salary-calculator',
            },
            {
              title: '$60,000 Salary Calculator',
              href: '/salary-calculator/60000',
            },
            {
              title: 'Paycheck Calculators by State',
              href: '/paycheck-calculator',
            },
          ]}
        />

        <AdBanner slot="salary-hourly-bottom" />
      </div>
    </section>
  );
}