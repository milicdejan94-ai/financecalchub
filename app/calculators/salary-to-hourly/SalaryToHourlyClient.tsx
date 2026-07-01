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

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

export default function SalaryToHourlyClient() {
  const [annualSalary, setAnnualSalary] = useState(60000);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(52);

  const annualHours = Math.max(hoursPerWeek * weeksPerYear, 0);
  const hourlyRate = annualHours > 0 ? annualSalary / annualHours : 0;
  const monthlySalary = annualSalary / 12;
  const biweeklySalary = annualSalary / 26;
  const weeklySalary = weeksPerYear > 0 ? annualSalary / weeksPerYear : 0;
  const dailyPay = hoursPerWeek > 0 ? weeklySalary / 5 : 0;

  const standardHourly = annualSalary / 2080;
  const partTimeHourly = annualSalary / (30 * 52);
  const adjustedHourly = hourlyRate;

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
          Convert annual salary into an estimated hourly wage using your work
          schedule. This calculator also shows monthly, biweekly and weekly gross
          pay so you can compare salary offers, hourly jobs and paycheck timing.
        </p>

        <div className="content-box" style={{ marginTop: 28, marginBottom: 28 }}>
          <h2>Convert salary to hourly pay before comparing job offers</h2>
          <p>
            A salary may look attractive on an annual basis, but the effective
            hourly rate depends on how many hours you actually work. A $60,000
            salary at 40 hours per week is very different from the same salary at
            50 or 60 hours per week.
          </p>
          <p>
            Use this tool as a gross-pay estimate. It does not subtract federal
            tax, state tax, Social Security, Medicare, insurance, retirement
            contributions or other payroll deductions.
          </p>
        </div>

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
            Estimated hourly wage: {formatCurrency(hourlyRate)}
          </div>

          <div className="result">
            Monthly gross pay: {formatCurrency(monthlySalary)}
          </div>

          <div className="result">
            Biweekly gross pay: {formatCurrency(biweeklySalary)}
          </div>

          <div className="result">
            Weekly gross pay: {formatCurrency(weeklySalary)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Salary to hourly breakdown</h2>
          <p>
            The calculator divides annual salary by estimated annual work hours.
            The result is an hourly gross-pay equivalent, not a take-home pay
            number.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Estimate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual salary</td>
                  <td>{formatCurrency(annualSalary)}</td>
                </tr>
                <tr>
                  <td>Hours per week</td>
                  <td>{formatNumber(hoursPerWeek)}</td>
                </tr>
                <tr>
                  <td>Weeks per year</td>
                  <td>{formatNumber(weeksPerYear)}</td>
                </tr>
                <tr>
                  <td>Estimated annual work hours</td>
                  <td>{formatNumber(annualHours)}</td>
                </tr>
                <tr>
                  <td>Monthly gross pay</td>
                  <td>{formatCurrency(monthlySalary)}</td>
                </tr>
                <tr>
                  <td>Biweekly gross pay</td>
                  <td>{formatCurrency(biweeklySalary)}</td>
                </tr>
                <tr>
                  <td>Weekly gross pay</td>
                  <td>{formatCurrency(weeklySalary)}</td>
                </tr>
                <tr>
                  <td><strong>Estimated hourly equivalent</strong></td>
                  <td><strong>{formatCurrency(hourlyRate)}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Hourly rate comparison by schedule</h2>
          <p>
            The same annual salary can produce different hourly equivalents if
            the weekly schedule changes. This comparison helps show why hours
            worked matter when evaluating compensation.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Annual hours</th>
                  <th>Hourly equivalent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Standard full-time schedule: 40 hours × 52 weeks</td>
                  <td>2,080</td>
                  <td>{formatCurrency(standardHourly)}</td>
                </tr>
                <tr>
                  <td>30 hours per week × 52 weeks</td>
                  <td>1,560</td>
                  <td>{formatCurrency(partTimeHourly)}</td>
                </tr>
                <tr>
                  <td>Your current inputs</td>
                  <td>{formatNumber(annualHours)}</td>
                  <td>{formatCurrency(adjustedHourly)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How salary to hourly conversion works</h2>

          <p>
            Salary to hourly conversion is calculated by dividing annual salary
            by total work hours during the year. A common full-time estimate uses
            40 hours per week and 52 weeks per year, or 2,080 annual hours.
          </p>

          <h3>Formula</h3>
          <p>
            Hourly equivalent = annual salary ÷ (hours per week × weeks worked
            per year). For example, a $60,000 salary divided by 2,080 hours is
            about $28.85 per hour before taxes and deductions.
          </p>

          <h3>Why the 40-hour assumption matters</h3>
          <p>
            A salary does not always mean the same workload. If two jobs pay the
            same annual salary but one requires more weekly hours, the effective
            hourly rate is lower for the job with more hours.
          </p>

          <h3>Salary vs paycheck estimates</h3>
          <p>
            This page converts gross salary to gross hourly pay. To estimate
            take-home pay after taxes, payroll deductions and retirement
            contributions, use a paycheck calculator.
          </p>

          <h3>Important limitations</h3>
          <p>
            This calculator does not adjust for overtime rules, bonuses,
            commissions, unpaid leave, holidays, paid time off, payroll taxes,
            benefits, state taxes or actual employer policies. It is an
            educational gross-pay estimate only.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Frequently asked questions</h2>

          <h3>Is salary to hourly before or after taxes?</h3>
          <p>
            This calculator shows gross pay before taxes and deductions. Your
            actual take-home pay will usually be lower after federal tax, state
            tax, Social Security, Medicare, insurance and other payroll items.
          </p>

          <h3>How many hours are usually used for salary conversion?</h3>
          <p>
            A common full-time estimate is 2,080 hours per year, based on 40
            hours per week for 52 weeks. Some people adjust this number if they
            work fewer weeks, more hours, unpaid leave or a nonstandard schedule.
          </p>

          <h3>Why is my hourly equivalent different from my real paycheck?</h3>
          <p>
            The hourly equivalent is a gross-pay comparison. Real paychecks can
            differ because of taxes, deductions, overtime, benefits, retirement
            contributions and pay frequency.
          </p>

          <h3>Can I use this to compare salary and hourly jobs?</h3>
          <p>
            Yes, as a starting point. For a better comparison, also consider
            benefits, overtime eligibility, paid time off, commute, schedule
            flexibility, job security and real take-home pay.
          </p>
        </div>

        <RelatedCalculators
          title="Related salary and paycheck calculators"
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
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
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
          ]}
        />
      </div>
    </section>
  );
}
