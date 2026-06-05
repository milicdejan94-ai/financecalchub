'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function HourlyPaycheckClient() {
  const [hourlyRate, setHourlyRate] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [stateTax, setStateTax] = useState(4);

  const annualGross = hourlyRate * hoursPerWeek * 52;

  const federalTax = annualGross * 0.12;
  const socialSecurity = annualGross * 0.062;
  const medicare = annualGross * 0.0145;
  const stateTaxAmount = annualGross * (stateTax / 100);

  const annualTakeHome =
    annualGross -
    federalTax -
    socialSecurity -
    medicare -
    stateTaxAmount;

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
    { label: 'Hourly Paycheck Calculator' },
  ]}
/>
        <p className="eyebrow">Hourly paycheck calculator</p>

        <h1>Hourly Paycheck Calculator</h1>

        <p>
          Estimate weekly, biweekly and monthly take-home pay from hourly wages.
        </p>

        <AdBanner slot="hourly-top" />

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
            <label>Hours worked per week</label>

            <input
              type="number"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Estimated state income tax (%)</label>

            <input
              type="number"
              value={stateTax}
              onChange={(e) => setStateTax(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Weekly take-home pay: ${weeklyTakeHome.toFixed(2)}
          </div>

          <div className="result">
            Biweekly take-home pay: ${biweeklyTakeHome.toFixed(2)}
          </div>

          <div className="result">
            Monthly take-home pay: ${monthlyTakeHome.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="hourly-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How hourly paycheck estimates work</h2>

          <p>
            This calculator estimates net pay using hourly wage, weekly work
            hours and estimated payroll taxes.
          </p>

          <h3>What affects hourly take-home pay?</h3>

          <p>
            Actual paychecks may vary depending on overtime, tax withholding,
            state taxes, insurance deductions and retirement contributions.
          </p>

          <h3>Weekly and biweekly estimates</h3>

          <p>
            Many US employers pay workers weekly or biweekly. This calculator
            provides simplified estimates for both pay schedules.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides educational estimates only and is not tax
            or financial advice.
          </p>
        </div>

        <AdBanner slot="hourly-bottom" />
      </div>
    </section>
  );
}