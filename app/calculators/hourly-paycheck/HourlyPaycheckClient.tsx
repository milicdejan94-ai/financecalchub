'use client';

import { useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatPercent(value: number) {
  return `${value.toFixed(2)}%`;
}

export default function HourlyPaycheckClient() {
  const [hourlyRate, setHourlyRate] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [stateTax, setStateTax] = useState(4);

  const annualGross = Math.max(hourlyRate, 0) * Math.max(hoursPerWeek, 0) * 52;
  const weeklyGross = annualGross / 52;
  const biweeklyGross = annualGross / 26;
  const monthlyGross = annualGross / 12;

  const federalTax = annualGross * 0.12;
  const socialSecurity = annualGross * 0.062;
  const medicare = annualGross * 0.0145;
  const stateTaxAmount = annualGross * (Math.max(stateTax, 0) / 100);
  const totalEstimatedTaxes =
    federalTax + socialSecurity + medicare + stateTaxAmount;

  const annualTakeHome = Math.max(annualGross - totalEstimatedTaxes, 0);
  const monthlyTakeHome = annualTakeHome / 12;
  const biweeklyTakeHome = annualTakeHome / 26;
  const weeklyTakeHome = annualTakeHome / 52;
  const effectiveTaxRate = annualGross > 0 ? (totalEstimatedTaxes / annualGross) * 100 : 0;

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
          Estimate take-home pay from an hourly wage using weekly hours, a
          simplified federal tax estimate, Social Security, Medicare and an
          adjustable state income tax rate.
        </p>

        <p>
          This tool is useful for comparing weekly, biweekly, monthly and annual
          pay. It is designed for planning and education, not for exact payroll
          withholding or tax filing.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label>Hourly wage</label>
            <input
              type="number"
              value={hourlyRate}
              min="0"
              step="0.01"
              onChange={(e) => setHourlyRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Hours worked per week</label>
            <input
              type="number"
              value={hoursPerWeek}
              min="0"
              step="0.5"
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Estimated state income tax (%)</label>
            <input
              type="number"
              value={stateTax}
              min="0"
              step="0.1"
              onChange={(e) => setStateTax(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Weekly take-home pay: {formatCurrency(weeklyTakeHome)}
          </div>

          <div className="result">
            Biweekly take-home pay: {formatCurrency(biweeklyTakeHome)}
          </div>

          <div className="result">
            Monthly take-home pay: {formatCurrency(monthlyTakeHome)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Hourly paycheck summary</h2>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Hourly wage</th>
                  <td>{formatCurrency(hourlyRate)}</td>
                </tr>
                <tr>
                  <th>Hours per week</th>
                  <td>{hoursPerWeek.toFixed(1)}</td>
                </tr>
                <tr>
                  <th>Weekly gross pay</th>
                  <td>{formatCurrency(weeklyGross)}</td>
                </tr>
                <tr>
                  <th>Biweekly gross pay</th>
                  <td>{formatCurrency(biweeklyGross)}</td>
                </tr>
                <tr>
                  <th>Monthly gross pay</th>
                  <td>{formatCurrency(monthlyGross)}</td>
                </tr>
                <tr>
                  <th>Annual gross pay</th>
                  <td>{formatCurrency(annualGross)}</td>
                </tr>
                <tr>
                  <th>Estimated annual taxes</th>
                  <td>{formatCurrency(totalEstimatedTaxes)}</td>
                </tr>
                <tr>
                  <th>Estimated effective tax rate</th>
                  <td>{formatPercent(effectiveTaxRate)}</td>
                </tr>
                <tr>
                  <th>Estimated annual take-home pay</th>
                  <td>{formatCurrency(annualTakeHome)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Estimated tax and withholding breakdown</h2>

          <p>
            The calculator uses simplified percentages to show how payroll taxes
            and estimated income taxes can reduce gross pay. Real withholding may
            be different because employers use your Form W-4, pay frequency,
            benefits, retirement contributions, filing status and local tax rules.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Federal income tax estimate</th>
                  <td>{formatCurrency(federalTax)}</td>
                </tr>
                <tr>
                  <th>Social Security estimate</th>
                  <td>{formatCurrency(socialSecurity)}</td>
                </tr>
                <tr>
                  <th>Medicare estimate</th>
                  <td>{formatCurrency(medicare)}</td>
                </tr>
                <tr>
                  <th>State income tax estimate</th>
                  <td>{formatCurrency(stateTaxAmount)}</td>
                </tr>
                <tr>
                  <th>Total estimated taxes</th>
                  <td>{formatCurrency(totalEstimatedTaxes)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>How hourly paycheck estimates work</h2>

          <p>
            Hourly pay starts with a simple gross pay calculation: hourly wage
            multiplied by hours worked per week. The calculator then annualizes
            that number by multiplying by 52 weeks and subtracts estimated taxes.
          </p>

          <h3>What affects hourly take-home pay?</h3>

          <p>
            Actual paychecks may vary depending on overtime, bonuses, unpaid
            time off, pre-tax health insurance, retirement contributions, local
            taxes, state taxes and the way your employer runs payroll.
          </p>

          <h3>Weekly, biweekly and monthly estimates</h3>

          <p>
            Many hourly workers are paid weekly or biweekly. Monthly take-home
            pay is useful for budgeting, but it is an average. In real life, a
            biweekly worker receives 26 paychecks per year, which means some
            months may include two paychecks and some may include three.
          </p>

          <h3>Example</h3>

          <p>
            At {formatCurrency(hourlyRate)} per hour and {hoursPerWeek} hours per
            week, estimated annual gross pay is {formatCurrency(annualGross)}.
            After the simplified tax assumptions in this calculator, estimated
            annual take-home pay is {formatCurrency(annualTakeHome)}, or about{' '}
            {formatCurrency(biweeklyTakeHome)} every two weeks.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Frequently asked questions</h2>

          <h3>Is this an exact paycheck calculator?</h3>
          <p>
            No. It gives a simplified estimate. Exact payroll withholding depends
            on your employer, W-4 elections, deductions, benefits, local taxes and
            pay schedule.
          </p>

          <h3>Does this include overtime?</h3>
          <p>
            This calculator treats all entered hours as regular hourly work. Use
            the overtime calculator if you want to estimate overtime pay
            separately.
          </p>

          <h3>Why is my real paycheck different?</h3>
          <p>
            Your real paycheck can differ because of health insurance, 401(k)
            contributions, HSA/FSA deductions, wage limits, local taxes, bonuses
            or different federal withholding settings.
          </p>

          <h3>Should I use gross pay or take-home pay for budgeting?</h3>
          <p>
            Take-home pay is usually better for monthly budgeting because it is
            closer to the money that actually reaches your bank account.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Important limitations</h2>

          <p>
            This calculator is for educational estimates only. It does not apply
            official tax brackets, wage-base limits, employer-specific payroll
            rules or local taxes. It is not tax, payroll, legal or financial
            advice.
          </p>
        </div>

        <RelatedCalculators
          title="Related paycheck and wage calculators"
          tools={[
            {
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
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
              title: 'Paycheck Calculators by State',
              href: '/paycheck-calculator',
            },
            {
              title: '$50,000 Salary Calculator',
              href: '/salary-calculator/50000',
            },
            {
              title: 'Methodology',
              href: '/methodology',
            },
          ]}
        />
      </div>
    </section>
  );
}
