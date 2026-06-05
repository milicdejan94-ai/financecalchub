'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function OvertimeCalculatorPage() {
  const [hourlyRate, setHourlyRate] = useState(25);
  const [regularHours, setRegularHours] = useState(40);
  const [overtimeHours, setOvertimeHours] = useState(5);
  const [overtimeMultiplier, setOvertimeMultiplier] = useState(1.5);

  const regularPay = hourlyRate * regularHours;
  const overtimePay = hourlyRate * overtimeMultiplier * overtimeHours;
  const weeklyGrossPay = regularPay + overtimePay;
  const annualGrossPay = weeklyGrossPay * 52;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Overtime Calculator' },
  ]}
/>
        <p className="eyebrow">Overtime calculator</p>

        <h1>Overtime Calculator</h1>

        <p>
          Estimate weekly overtime pay using hourly wage, regular hours,
          overtime hours and overtime rate.
        </p>

        <AdBanner slot="overtime-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Hourly wage</label>
            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Regular hours</label>
            <input
              type="number"
              value={regularHours}
              onChange={(e) => setRegularHours(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Overtime hours</label>
            <input
              type="number"
              value={overtimeHours}
              onChange={(e) => setOvertimeHours(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Overtime multiplier</label>
            <select
              value={overtimeMultiplier}
              onChange={(e) => setOvertimeMultiplier(Number(e.target.value))}
            >
              <option value={1.5}>1.5x time and a half</option>
              <option value={2}>2x double time</option>
            </select>
          </div>

          <div className="result">Regular pay: ${regularPay.toFixed(2)}</div>

          <div className="result">Overtime pay: ${overtimePay.toFixed(2)}</div>

          <div className="result">
            Weekly gross pay: ${weeklyGrossPay.toFixed(2)}
          </div>

          <div className="result">
            Annualized gross pay: ${annualGrossPay.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="overtime-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How overtime pay is calculated</h2>

          <p>
            Overtime pay is commonly calculated by multiplying the hourly wage by
            an overtime multiplier and the number of overtime hours worked. A
            common overtime rate is time and a half, or 1.5 times the regular
            hourly rate.
          </p>

          <h3>Time and a half</h3>

          <p>
            Time and a half means the overtime rate is 1.5 times the regular
            hourly wage. For example, a $25 hourly wage would become $37.50 per
            overtime hour at 1.5x.
          </p>

          <h3>Double time</h3>

          <p>
            Some situations may use double time, which is 2 times the regular
            hourly wage. Rules can depend on employer policy, state law and job
            type.
          </p>

          <h3>Overtime and take-home pay</h3>

          <p>
            This calculator estimates gross overtime pay. Actual take-home pay
            may be lower after federal tax, state tax, Social Security, Medicare
            and other deductions.
          </p>

          <h3>Important note</h3>

          <p>
            Overtime rules can vary by employer, state, job type and labor law.
            This calculator provides educational estimates only and is not legal,
            payroll or financial advice.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Hourly Paycheck Calculator',
              href: '/calculators/hourly-paycheck',
            },
            {
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
            },
            {
              title: 'Salary To Hourly Calculator',
              href: '/calculators/salary-to-hourly',
            },
            {
              title: 'Salary Calculator',
              href: '/salary-calculator',
            },
            {
              title: 'Paycheck Calculators by State',
              href: '/paycheck-calculator',
            },
            {
              title: '$70,000 Salary Calculator',
              href: '/salary-calculator/70000',
            },
          ]}
        />

        <AdBanner slot="overtime-bottom" />
      </div>
    </section>
  );
}