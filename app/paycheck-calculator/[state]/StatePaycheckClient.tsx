'use client';

import { useState } from 'react';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { states } from '../../../lib/states';

type StatePaycheckClientProps = {
  stateSlug: string;
};

function formatMoney(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

function formatMoneyCents(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function StatePaycheckClient({
  stateSlug,
}: StatePaycheckClientProps) {
  const state = states.find((item) => item.slug === stateSlug);

  const [salary, setSalary] = useState(75000);
  const [filingStatus, setFilingStatus] = useState('single');
  const [preTaxDeductions, setPreTaxDeductions] = useState(0);
  const [postTaxDeductions, setPostTaxDeductions] = useState(0);

  if (!state) {
    return (
      <section className="section">
        <div className="container">
          <div className="content-box">
            <h1>State not found</h1>
            <p>This paycheck calculator page does not exist yet.</p>
            <p>
              Return to the{' '}
              <a href="/paycheck-calculator">state paycheck calculator list</a>{' '}
              to choose another state.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const safeSalary = Math.max(0, salary || 0);
  const safePreTaxDeductions = Math.max(0, preTaxDeductions || 0);
  const safePostTaxDeductions = Math.max(0, postTaxDeductions || 0);
  const taxableIncome = Math.max(0, safeSalary - safePreTaxDeductions);

  const federalRate = filingStatus === 'married' ? 0.1 : 0.12;
  const federalTax = taxableIncome * federalRate;
  const socialSecurity = safeSalary * 0.062;
  const medicare = safeSalary * 0.0145;
  const stateTax = taxableIncome * (state.stateTaxRate / 100);
  const totalEstimatedTaxes = federalTax + socialSecurity + medicare + stateTax;

  const annualTakeHome = Math.max(
    0,
    safeSalary - safePreTaxDeductions - totalEstimatedTaxes - safePostTaxDeductions,
  );

  const monthlyTakeHome = annualTakeHome / 12;
  const semiMonthlyTakeHome = annualTakeHome / 24;
  const biweeklyTakeHome = annualTakeHome / 26;
  const weeklyTakeHome = annualTakeHome / 52;

  const effectiveTaxRate = safeSalary
    ? (totalEstimatedTaxes / safeSalary) * 100
    : 0;
  const estimatedNetRate = safeSalary ? (annualTakeHome / safeSalary) * 100 : 0;

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
          Estimate take-home pay in {state.name} after simplified federal income
          tax, Social Security, Medicare, estimated state income tax and common
          paycheck deductions. Use this page to compare annual, monthly,
          semi-monthly, biweekly and weekly paycheck estimates before taxes and
          deductions are finalized by payroll.
        </p>

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
            <label>Estimated annual pre-tax deductions</label>
            <input
              type="number"
              value={preTaxDeductions}
              onChange={(e) => setPreTaxDeductions(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Estimated annual post-tax deductions</label>
            <input
              type="number"
              value={postTaxDeductions}
              onChange={(e) => setPostTaxDeductions(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Estimated {state.name} state tax rate</label>
            <input type="number" value={state.stateTaxRate} disabled />
          </div>

          <div className="result">
            Estimated annual take-home pay: {formatMoneyCents(annualTakeHome)}
          </div>

          <div className="result">
            Monthly take-home pay: {formatMoneyCents(monthlyTakeHome)}
          </div>

          <div className="result">
            Semi-monthly take-home pay: {formatMoneyCents(semiMonthlyTakeHome)}
          </div>

          <div className="result">
            Biweekly take-home pay: {formatMoneyCents(biweeklyTakeHome)}
          </div>

          <div className="result">
            Weekly take-home pay: {formatMoneyCents(weeklyTakeHome)}
          </div>
        </div>

        <article className="content-box" style={{ marginTop: 34 }}>
          <h2>About this {state.name} paycheck calculator</h2>

          <p>{state.description}</p>

          <p>
            This calculator is designed to give workers in {state.name} a quick
            paycheck estimate from annual salary. It is not a payroll system and
            it does not replace an employer paycheck stub, W-4 calculation,
            state withholding form or professional tax advice. The purpose is to
            help you understand the difference between gross pay and estimated
            take-home pay.
          </p>

          <h2>Current estimate summary</h2>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Estimated annual amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gross salary</td>
                  <td>{formatMoneyCents(safeSalary)}</td>
                </tr>
                <tr>
                  <td>Pre-tax deductions entered</td>
                  <td>{formatMoneyCents(safePreTaxDeductions)}</td>
                </tr>
                <tr>
                  <td>Estimated federal income tax</td>
                  <td>{formatMoneyCents(federalTax)}</td>
                </tr>
                <tr>
                  <td>Estimated Social Security</td>
                  <td>{formatMoneyCents(socialSecurity)}</td>
                </tr>
                <tr>
                  <td>Estimated Medicare</td>
                  <td>{formatMoneyCents(medicare)}</td>
                </tr>
                <tr>
                  <td>Estimated {state.name} state tax</td>
                  <td>{formatMoneyCents(stateTax)}</td>
                </tr>
                <tr>
                  <td>Post-tax deductions entered</td>
                  <td>{formatMoneyCents(safePostTaxDeductions)}</td>
                </tr>
                <tr>
                  <td>Estimated annual take-home pay</td>
                  <td>{formatMoneyCents(annualTakeHome)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Based on the numbers entered, the simplified estimated tax rate is
            about {effectiveTaxRate.toFixed(1)}% of gross salary before optional
            deductions, and estimated net pay is about {estimatedNetRate.toFixed(1)}%
            of gross salary after the deductions entered.
          </p>

          <h2>Paycheck frequency breakdown</h2>

          <p>
            The same annual take-home estimate can look different depending on
            how often you are paid. Many employees are paid biweekly, while
            others are paid weekly, semi-monthly or monthly.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Pay schedule</th>
                  <th>Number of paychecks per year</th>
                  <th>Estimated take-home per paycheck</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly</td>
                  <td>12</td>
                  <td>{formatMoneyCents(monthlyTakeHome)}</td>
                </tr>
                <tr>
                  <td>Semi-monthly</td>
                  <td>24</td>
                  <td>{formatMoneyCents(semiMonthlyTakeHome)}</td>
                </tr>
                <tr>
                  <td>Biweekly</td>
                  <td>26</td>
                  <td>{formatMoneyCents(biweeklyTakeHome)}</td>
                </tr>
                <tr>
                  <td>Weekly</td>
                  <td>52</td>
                  <td>{formatMoneyCents(weeklyTakeHome)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How paycheck estimates work in {state.name}</h2>

          <p>
            A paycheck estimate usually starts with gross pay. Gross pay is your
            salary or wages before taxes and deductions. Payroll then subtracts
            required taxes and any voluntary deductions, such as health insurance
            premiums or retirement contributions. The amount left after those
            items is net pay, also called take-home pay.
          </p>

          <p>
            This page uses a simplified federal income tax estimate, Social
            Security, Medicare and the estimated {state.name} state tax rate in
            the calculator. It does not calculate every bracket, credit, local
            rule, wage base change or payroll-specific adjustment.
          </p>

          <h2>Federal payroll taxes included in the estimate</h2>

          <p>
            Most US employee paychecks include federal income tax withholding,
            Social Security and Medicare. Federal income tax depends on filing
            status, taxable income, W-4 settings and other factors. Social
            Security and Medicare are payroll taxes that are generally withheld
            from employee wages.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tax or deduction</th>
                  <th>How it affects take-home pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Federal income tax</td>
                  <td>
                    Reduces take-home pay based on taxable income, filing status
                    and withholding settings.
                  </td>
                </tr>
                <tr>
                  <td>Social Security</td>
                  <td>
                    Payroll tax generally withheld from employee wages, subject
                    to applicable rules and limits.
                  </td>
                </tr>
                <tr>
                  <td>Medicare</td>
                  <td>
                    Payroll tax generally withheld from employee wages, with
                    possible additional rules at higher income levels.
                  </td>
                </tr>
                <tr>
                  <td>{state.name} state income tax</td>
                  <td>
                    Estimated here using a simplified state rate of{' '}
                    {state.stateTaxRate}% for comparison purposes.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>State income taxes in {state.name}</h2>

          <p>
            The estimated {state.name} state tax rate used on this page is{' '}
            {state.stateTaxRate}%. Actual state withholding may differ because
            states can use different brackets, deductions, exemptions, credits,
            local taxes, reciprocal rules or payroll forms. Some employees may
            also have additional local or city taxes depending on where they live
            or work.
          </p>

          <p>
            Treat the state tax number as a planning estimate, not a final tax
            calculation. For a more general estimate across all states, use the{' '}
            <a href="/calculators/paycheck">main paycheck calculator</a>. For a
            federal-only view, use the{' '}
            <a href="/calculators/federal-tax">federal tax calculator</a>.
          </p>

          <h2>Pre-tax vs post-tax deductions</h2>

          <p>
            Paycheck deductions can change your net pay. Some deductions may
            reduce taxable income before certain taxes are calculated. Other
            deductions are taken after taxes. The calculator lets you enter a
            simple annual pre-tax and post-tax amount so you can see how they
            affect estimated take-home pay.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Deduction type</th>
                  <th>Common examples</th>
                  <th>Planning note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pre-tax deductions</td>
                  <td>Some retirement, health, HSA or FSA contributions</td>
                  <td>
                    May reduce taxable income, but rules depend on the deduction
                    and payroll setup.
                  </td>
                </tr>
                <tr>
                  <td>Post-tax deductions</td>
                  <td>Some insurance, garnishments or voluntary deductions</td>
                  <td>
                    Usually reduce take-home pay after taxes are calculated.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Why your real {state.name} paycheck may be different</h2>

          <p>
            Two people with the same salary in {state.name} can receive different
            paychecks. The difference may come from W-4 settings, filing status,
            dependents, benefits, retirement contributions, health insurance,
            overtime, bonuses, commissions, local taxes or employer payroll
            timing.
          </p>

          <p>
            Your real paycheck may also change during the year if you change
            jobs, receive a raise, update benefits, contribute more to a 401(k),
            receive bonuses or move to a different tax area.
          </p>

          <h2>How to use this calculator for budgeting</h2>

          <p>
            For budgeting, net pay is usually more useful than gross salary. Rent
            or mortgage payments, groceries, utilities, insurance, debt payments
            and savings goals are paid from money that actually reaches your bank
            account.
          </p>

          <p>
            A practical approach is to estimate your take-home pay, then compare
            it with fixed expenses, variable expenses, emergency savings and debt
            payments. You can also compare salary offers with the{' '}
            <a href="/salary-calculator">salary calculator</a> or convert hourly
            wages with the{' '}
            <a href="/calculators/salary-to-hourly">salary to hourly calculator</a>.
          </p>

          <h2>Example: {formatMoney(safeSalary)} salary in {state.name}</h2>

          <p>
            With the current entries, a {formatMoney(safeSalary)} gross annual
            salary produces an estimated annual take-home pay of{' '}
            {formatMoneyCents(annualTakeHome)}. That is about{' '}
            {formatMoneyCents(monthlyTakeHome)} per month or{' '}
            {formatMoneyCents(biweeklyTakeHome)} per biweekly paycheck before
            any real-world payroll differences not included here.
          </p>

          <h2>Frequently asked questions</h2>

          <h3>Is this {state.name} paycheck calculator exact?</h3>
          <p>
            No. It is a simplified educational estimate. Actual payroll can vary
            based on official tax tables, W-4 details, state withholding rules,
            local taxes, benefits and employer payroll settings.
          </p>

          <h3>Does this calculator include local taxes?</h3>
          <p>
            No. It uses a simplified state-level estimate. Some locations may
            have local or city taxes that are not included in this calculator.
          </p>

          <h3>Does it work for hourly employees?</h3>
          <p>
            This page is salary-based. Hourly workers can use the{' '}
            <a href="/calculators/hourly-paycheck">hourly paycheck calculator</a>{' '}
            to estimate pay based on hourly wage and hours worked.
          </p>

          <h3>Why is my take-home pay lower than my salary?</h3>
          <p>
            Gross salary is before taxes and deductions. Take-home pay is lower
            because payroll may subtract federal income tax, Social Security,
            Medicare, state tax, health benefits, retirement contributions and
            other deductions.
          </p>

          <h3>Should I budget from gross pay or net pay?</h3>
          <p>
            Most household budgets should be based on estimated net pay because
            that is the amount available for monthly expenses, savings and debt
            payments.
          </p>

          <h2>Important limitations</h2>

          <p>
            This calculator and guide provide simplified educational estimates
            only. They are not tax, payroll, legal, accounting or financial
            advice. FinanceCalcHub does not file taxes, prepare payroll or
            determine official withholding. Always verify important numbers with
            your employer, payroll provider, official tax resources or a
            qualified professional.
          </p>
        </article>

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
              title: 'Federal Tax Calculator',
              href: '/calculators/federal-tax',
            },
            {
              title: 'Salary After Tax Calculators',
              href: '/salary-after-tax',
            },
            {
              title: 'Salary To Hourly Calculator',
              href: '/calculators/salary-to-hourly',
            },
            {
              title: 'All State Paycheck Calculators',
              href: '/paycheck-calculator',
            },
          ]}
        />
      </div>
    </section>
  );
}
