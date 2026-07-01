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

export default function OvertimeClient() {
  const [hourlyRate, setHourlyRate] = useState(25);
  const [regularHours, setRegularHours] = useState(40);
  const [overtimeHours, setOvertimeHours] = useState(5);
  const [overtimeMultiplier, setOvertimeMultiplier] = useState(1.5);

  const regularPay = hourlyRate * regularHours;
  const overtimeRate = hourlyRate * overtimeMultiplier;
  const overtimePay = overtimeRate * overtimeHours;
  const weeklyGrossPay = regularPay + overtimePay;
  const annualGrossPay = weeklyGrossPay * 52;
  const monthlyGrossPay = annualGrossPay / 12;

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

        <p className="eyebrow">Overtime pay calculator</p>

        <h1>Overtime Calculator</h1>

        <p>
          Estimate weekly gross pay from regular hours and overtime hours. This
          overtime calculator uses your hourly wage, regular hours, overtime
          hours and overtime multiplier to show regular pay, overtime pay and an
          annualized gross pay estimate.
        </p>

        <div className="content-box" style={{ marginTop: 28, marginBottom: 28 }}>
          <h2>Estimate gross overtime pay before taxes and deductions</h2>
          <p>
            Overtime can make a paycheck look much different from a normal work
            week. Use this calculator to compare regular pay, time-and-a-half
            overtime, double time and total weekly gross pay before estimating
            take-home pay with a paycheck calculator.
          </p>
          <p>
            The default example uses a $25 hourly wage, 40 regular hours and 5
            overtime hours at 1.5x. You can adjust the inputs to match your work
            schedule or compare different overtime scenarios.
          </p>
        </div>

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

          <div className="result">Regular pay: {formatCurrency(regularPay)}</div>
          <div className="result">Overtime rate: {formatCurrency(overtimeRate)} per hour</div>
          <div className="result">Overtime pay: {formatCurrency(overtimePay)}</div>
          <div className="result">Weekly gross pay: {formatCurrency(weeklyGrossPay)}</div>
          <div className="result">Annualized gross pay: {formatCurrency(annualGrossPay)}</div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Overtime pay breakdown</h2>
          <p>
            This table separates regular pay from overtime pay so you can see
            how much of the weekly total comes from extra hours.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Calculation</th>
                  <th>Estimated amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Regular hourly rate</td>
                  <td>Entered hourly wage</td>
                  <td>{formatCurrency(hourlyRate)}</td>
                </tr>
                <tr>
                  <td>Overtime hourly rate</td>
                  <td>
                    {formatCurrency(hourlyRate)} × {overtimeMultiplier}x
                  </td>
                  <td>{formatCurrency(overtimeRate)}</td>
                </tr>
                <tr>
                  <td>Regular pay</td>
                  <td>
                    {regularHours} hours × {formatCurrency(hourlyRate)}
                  </td>
                  <td>{formatCurrency(regularPay)}</td>
                </tr>
                <tr>
                  <td>Overtime pay</td>
                  <td>
                    {overtimeHours} hours × {formatCurrency(overtimeRate)}
                  </td>
                  <td>{formatCurrency(overtimePay)}</td>
                </tr>
                <tr>
                  <td><strong>Total weekly gross pay</strong></td>
                  <td>Regular pay + overtime pay</td>
                  <td><strong>{formatCurrency(weeklyGrossPay)}</strong></td>
                </tr>
                <tr>
                  <td>Monthly gross estimate</td>
                  <td>Annualized gross pay ÷ 12</td>
                  <td>{formatCurrency(monthlyGrossPay)}</td>
                </tr>
                <tr>
                  <td>Annualized gross estimate</td>
                  <td>Weekly gross pay × 52</td>
                  <td>{formatCurrency(annualGrossPay)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How overtime pay is calculated</h2>

          <p>
            Overtime pay is commonly estimated by multiplying the regular hourly
            wage by an overtime multiplier and then multiplying that overtime
            rate by overtime hours worked. A common overtime rate is time and a
            half, or 1.5 times the regular hourly rate.
          </p>

          <h3>Time and a half example</h3>
          <p>
            If a worker earns {formatCurrency(hourlyRate)} per hour and overtime
            is paid at {overtimeMultiplier}x, the estimated overtime rate is{' '}
            {formatCurrency(overtimeRate)} per overtime hour. With {overtimeHours}{' '}
            overtime hours, estimated overtime pay is {formatCurrency(overtimePay)}.
          </p>

          <h3>Regular pay vs overtime pay</h3>
          <p>
            Regular pay is based on regular hours at the normal hourly wage.
            Overtime pay is based on extra hours at a higher multiplier. Keeping
            these separate can make it easier to understand why a paycheck is
            higher during weeks with extra hours.
          </p>

          <h3>Gross pay vs take-home pay</h3>
          <p>
            This calculator estimates gross pay before taxes and deductions.
            Actual take-home pay may be lower after federal income tax, state
            income tax, Social Security, Medicare, insurance, retirement
            contributions and other payroll deductions.
          </p>

          <h3>Important limitations</h3>
          <p>
            Overtime rules can vary by employer, state, job type, union agreement
            and labor law. This calculator does not determine legal overtime
            eligibility and does not replace payroll, legal or tax advice.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Frequently asked questions</h2>

          <h3>What does 1.5x overtime mean?</h3>
          <p>
            1.5x means time and a half. For example, a $20 hourly wage becomes
            $30 per overtime hour before taxes and deductions.
          </p>

          <h3>Does this calculator show take-home overtime pay?</h3>
          <p>
            No. It shows gross overtime pay. To estimate after-tax pay, use a
            paycheck calculator and include the higher weekly or annual gross pay
            estimate.
          </p>

          <h3>Is overtime always paid after 40 hours?</h3>
          <p>
            Not always. Overtime rules can depend on location, job classification,
            employer policy and other details. This calculator lets you enter the
            regular and overtime hours you want to estimate.
          </p>

          <h3>Can I use double time?</h3>
          <p>
            Yes. Select 2x double time from the multiplier field to estimate a
            double-time scenario.
          </p>
        </div>

        <RelatedCalculators
          title="Related paycheck and wage calculators"
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
              title: 'Methodology',
              href: '/methodology',
            },
            {
              title: 'Disclaimer',
              href: '/disclaimer',
            },
          ]}
        />
      </div>
    </section>
  );
}
