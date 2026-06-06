'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function PaycheckCalculatorPage() {
  const [salary, setSalary] = useState(75000);
  const [stateTax, setStateTax] = useState(4);
  const [filingStatus, setFilingStatus] = useState('single');
  const [payFrequency, setPayFrequency] = useState(26);
  const [retirementContribution, setRetirementContribution] = useState(5);
  const [preTaxDeductions, setPreTaxDeductions] = useState(150);
  const [postTaxDeductions, setPostTaxDeductions] = useState(0);
  const [additionalWithholding, setAdditionalWithholding] = useState(0);

  const federalRate =
    filingStatus === 'married'
      ? 0.1
      : filingStatus === 'head'
      ? 0.11
      : 0.12;

  const grossPayPerPeriod = salary / payFrequency;

  const annualRetirementContribution =
    salary * (retirementContribution / 100);

  const annualPreTaxDeductions = preTaxDeductions * payFrequency;
  const annualPostTaxDeductions = postTaxDeductions * payFrequency;
  const annualAdditionalWithholding = additionalWithholding * payFrequency;

  const taxableIncome = Math.max(
    salary - annualRetirementContribution - annualPreTaxDeductions,
    0
  );

  const federalTax = taxableIncome * federalRate;
  const socialSecurity = Math.min(salary, 168600) * 0.062;
  const medicare = salary * 0.0145;
  const stateTaxAmount = taxableIncome * (stateTax / 100);

  const totalAnnualTaxes =
    federalTax +
    socialSecurity +
    medicare +
    stateTaxAmount +
    annualAdditionalWithholding;

  const annualTakeHome =
    salary -
    annualRetirementContribution -
    annualPreTaxDeductions -
    totalAnnualTaxes -
    annualPostTaxDeductions;

  const netPayPerPeriod = annualTakeHome / payFrequency;

  const monthlyTakeHome = annualTakeHome / 12;
  const biweeklyTakeHome = annualTakeHome / 26;
  const weeklyTakeHome = annualTakeHome / 52;

  const federalTaxPerPeriod = federalTax / payFrequency;
  const socialSecurityPerPeriod = socialSecurity / payFrequency;
  const medicarePerPeriod = medicare / payFrequency;
  const stateTaxPerPeriod = stateTaxAmount / payFrequency;
  const retirementPerPeriod = annualRetirementContribution / payFrequency;

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
          Medicare, state income tax, retirement contributions and common payroll
          deductions.
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
              <option value="head">Head of household</option>
            </select>
          </div>

          <div className="input-group">
            <label>Pay frequency</label>
            <select
              value={payFrequency}
              onChange={(e) => setPayFrequency(Number(e.target.value))}
            >
              <option value={52}>Weekly</option>
              <option value={26}>Biweekly</option>
              <option value={24}>Semimonthly</option>
              <option value={12}>Monthly</option>
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

          <div className="input-group">
            <label>401(k) / retirement contribution (%)</label>
            <input
              type="number"
              value={retirementContribution}
              step="0.1"
              onChange={(e) => setRetirementContribution(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Pre-tax deductions per paycheck</label>
            <input
              type="number"
              value={preTaxDeductions}
              onChange={(e) => setPreTaxDeductions(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Post-tax deductions per paycheck</label>
            <input
              type="number"
              value={postTaxDeductions}
              onChange={(e) => setPostTaxDeductions(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Additional withholding per paycheck</label>
            <input
              type="number"
              value={additionalWithholding}
              onChange={(e) => setAdditionalWithholding(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Gross pay per paycheck: ${grossPayPerPeriod.toFixed(2)}
          </div>

          <div className="result">
            Estimated net pay per paycheck: ${netPayPerPeriod.toFixed(2)}
          </div>

          <div className="result">
            Estimated annual take-home pay: ${annualTakeHome.toFixed(2)}
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

          <div className="result">
            Federal tax per paycheck: ${federalTaxPerPeriod.toFixed(2)}
          </div>

          <div className="result">
            Social Security per paycheck: ${socialSecurityPerPeriod.toFixed(2)}
          </div>

          <div className="result">
            Medicare per paycheck: ${medicarePerPeriod.toFixed(2)}
          </div>

          <div className="result">
            State tax per paycheck: ${stateTaxPerPeriod.toFixed(2)}
          </div>

          <div className="result">
            Retirement contribution per paycheck: ${retirementPerPeriod.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="paycheck-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this paycheck calculator works</h2>

          <p>
            This calculator estimates your net pay by subtracting common payroll
            deductions from your gross annual salary. It includes estimated
            federal income tax, Social Security, Medicare, state income tax,
            retirement contributions, pre-tax deductions, post-tax deductions and
            additional withholding.
          </p>

          <h3>What is gross pay?</h3>

          <p>
            Gross pay is the amount you earn before taxes and deductions. For a
            salaried worker, this is usually the annual salary listed in the job
            offer or employment agreement.
          </p>

          <h3>What is take-home pay?</h3>

          <p>
            Take-home pay is the amount you receive after taxes, deductions,
            retirement contributions and other payroll withholdings are removed.
            This is also called net pay.
          </p>

          <h3>Why 401(k) and pre-tax deductions matter</h3>

          <p>
            Retirement contributions and some benefit deductions may reduce
            taxable income. This can change your estimated federal and state tax
            amounts as well as your final paycheck.
          </p>

          <h3>What are Social Security and Medicare taxes?</h3>

          <p>
            Social Security and Medicare are payroll taxes commonly called FICA
            taxes. This calculator estimates Social Security at 6.2% and Medicare
            at 1.45% for employees.
          </p>

          <h3>Monthly, biweekly and weekly paycheck estimates</h3>

          <p>
            Many US workers are paid weekly, biweekly, semimonthly or monthly.
            This calculator shows your selected paycheck estimate and also shows
            common monthly, biweekly and weekly take-home pay estimates for easy
            comparison.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides a simplified educational estimate. Actual
            payroll results may vary depending on federal tax brackets, standard
            deductions, credits, local taxes, W-4 settings, benefit deductions,
            retirement plans, wage limits and other payroll details.
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