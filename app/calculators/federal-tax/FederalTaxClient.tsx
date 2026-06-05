'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

type FilingStatus = 'single' | 'married';

export default function FederalTaxClient() {
  const [income, setIncome] = useState(75000);
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');

  const standardDeduction = filingStatus === 'single' ? 14600 : 29200;
  const taxableIncome = Math.max(income - standardDeduction, 0);

  function calculateFederalTax(amount: number, status: FilingStatus) {
    if (status === 'single') {
      const brackets = [
        { limit: 11600, rate: 0.1 },
        { limit: 47150, rate: 0.12 },
        { limit: 100525, rate: 0.22 },
        { limit: 191950, rate: 0.24 },
        { limit: 243725, rate: 0.32 },
        { limit: 609350, rate: 0.35 },
        { limit: Infinity, rate: 0.37 },
      ];

      let tax = 0;
      let previousLimit = 0;

      for (const bracket of brackets) {
        if (amount > previousLimit) {
          const taxableAtThisRate = Math.min(amount, bracket.limit) - previousLimit;
          tax += taxableAtThisRate * bracket.rate;
          previousLimit = bracket.limit;
        }
      }

      return tax;
    }

    const brackets = [
      { limit: 23200, rate: 0.1 },
      { limit: 94300, rate: 0.12 },
      { limit: 201050, rate: 0.22 },
      { limit: 383900, rate: 0.24 },
      { limit: 487450, rate: 0.32 },
      { limit: 731200, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ];

    let tax = 0;
    let previousLimit = 0;

    for (const bracket of brackets) {
      if (amount > previousLimit) {
        const taxableAtThisRate = Math.min(amount, bracket.limit) - previousLimit;
        tax += taxableAtThisRate * bracket.rate;
        previousLimit = bracket.limit;
      }
    }

    return tax;
  }

  const estimatedFederalTax = calculateFederalTax(taxableIncome, filingStatus);
  const effectiveTaxRate = income > 0 ? (estimatedFederalTax / income) * 100 : 0;
  const afterFederalTaxIncome = income - estimatedFederalTax;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: 'Federal Tax Calculator' },
          ]}
        />

        <p className="eyebrow">Federal income tax calculator</p>

        <h1>Federal Tax Calculator</h1>

        <p>
          Estimate US federal income tax based on annual income, filing status
          and simplified standard deduction assumptions.
        </p>

        <AdBanner slot="federal-tax-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Annual income</label>
            <input
              type="number"
              value={income}
              onChange={(event) => setIncome(Number(event.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Filing status</label>
            <select
              value={filingStatus}
              onChange={(event) =>
                setFilingStatus(event.target.value as FilingStatus)
              }
            >
              <option value="single">Single</option>
              <option value="married">Married filing jointly</option>
            </select>
          </div>

          <div className="result">
            Standard deduction used: ${standardDeduction.toFixed(2)}
          </div>

          <div className="result">
            Estimated taxable income: ${taxableIncome.toFixed(2)}
          </div>

          <div className="result">
            Estimated federal income tax: ${estimatedFederalTax.toFixed(2)}
          </div>

          <div className="result">
            Effective federal tax rate: {effectiveTaxRate.toFixed(2)}%
          </div>

          <div className="result">
            Income after estimated federal tax: $
            {afterFederalTaxIncome.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="federal-tax-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this federal tax calculator works</h2>

          <p>
            This calculator estimates federal income tax by subtracting a
            simplified standard deduction from income and applying progressive
            federal tax brackets.
          </p>

          <h3>What is taxable income?</h3>

          <p>
            Taxable income is the amount of income used to calculate income tax
            after deductions. This calculator uses a simplified standard
            deduction assumption.
          </p>

          <h3>What is an effective tax rate?</h3>

          <p>
            Effective tax rate compares estimated tax with total income. It is
            different from the highest marginal tax bracket because not all income
            is taxed at the same rate.
          </p>

          <h3>Federal tax vs paycheck withholding</h3>

          <p>
            Federal tax estimates are not the same as exact paycheck withholding.
            Actual payroll withholding can depend on W-4 settings, deductions,
            credits, benefits and employer payroll configuration.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides simplified educational estimates only. It is
            not tax, legal, payroll or financial advice. Tax rules can change and
            actual results may vary.
          </p>
        </div>

        <RelatedCalculators
          tools={[
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
              title: 'Hourly Paycheck Calculator',
              href: '/calculators/hourly-paycheck',
            },
            {
              title: 'Salary To Hourly Calculator',
              href: '/calculators/salary-to-hourly',
            },
            {
              title: 'All Financial Calculators',
              href: '/calculators',
            },
          ]}
        />

        <AdBanner slot="federal-tax-bottom" />
      </div>
    </section>
  );
}