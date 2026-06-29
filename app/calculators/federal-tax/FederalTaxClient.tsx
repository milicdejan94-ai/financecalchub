'use client';

import { useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

type FilingStatus = 'single' | 'married';

type TaxBracket = {
  limit: number;
  rate: number;
};

const TAX_YEAR = 2026;

const FEDERAL_TAX_DATA: Record<
  FilingStatus,
  {
    label: string;
    standardDeduction: number;
    brackets: TaxBracket[];
  }
> = {
  single: {
    label: 'Single',
    standardDeduction: 16100,
    brackets: [
      { limit: 12400, rate: 0.1 },
      { limit: 50400, rate: 0.12 },
      { limit: 105700, rate: 0.22 },
      { limit: 201775, rate: 0.24 },
      { limit: 256225, rate: 0.32 },
      { limit: 640600, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ],
  },
  married: {
    label: 'Married filing jointly',
    standardDeduction: 32200,
    brackets: [
      { limit: 24800, rate: 0.1 },
      { limit: 100800, rate: 0.12 },
      { limit: 211400, rate: 0.22 },
      { limit: 403550, rate: 0.24 },
      { limit: 512450, rate: 0.32 },
      { limit: 768700, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ],
  },
};

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}

function formatPercent(value: number) {
  return `${value.toFixed(2)}%`;
}

function calculateFederalTax(amount: number, status: FilingStatus) {
  const brackets = FEDERAL_TAX_DATA[status].brackets;
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

function getBracketRows(taxableIncome: number, status: FilingStatus) {
  const brackets = FEDERAL_TAX_DATA[status].brackets;
  const rows: Array<{
    range: string;
    rate: string;
    taxableAmount: number;
    tax: number;
  }> = [];

  let previousLimit = 0;

  for (const bracket of brackets) {
    if (taxableIncome <= previousLimit) {
      break;
    }

    const upperLimit = bracket.limit;
    const taxableAtThisRate = Math.min(taxableIncome, upperLimit) - previousLimit;

    if (taxableAtThisRate > 0) {
      const lowerDisplay = previousLimit + 1;
      const range = Number.isFinite(upperLimit)
        ? `${formatCurrency(lowerDisplay)} to ${formatCurrency(upperLimit)}`
        : `${formatCurrency(lowerDisplay)} and above`;

      rows.push({
        range,
        rate: `${(bracket.rate * 100).toFixed(0)}%`,
        taxableAmount: taxableAtThisRate,
        tax: taxableAtThisRate * bracket.rate,
      });
    }

    previousLimit = upperLimit;
  }

  return rows;
}

export default function FederalTaxClient() {
  const [income, setIncome] = useState(75000);
  const [filingStatus, setFilingStatus] = useState<FilingStatus>('single');

  const standardDeduction = FEDERAL_TAX_DATA[filingStatus].standardDeduction;
  const taxableIncome = Math.max(income - standardDeduction, 0);
  const estimatedFederalTax = calculateFederalTax(taxableIncome, filingStatus);
  const effectiveTaxRate = income > 0 ? (estimatedFederalTax / income) * 100 : 0;
  const afterFederalTaxIncome = income - estimatedFederalTax;
  const monthlyAfterFederalTax = afterFederalTaxIncome / 12;
  const marginalBracket = getBracketRows(taxableIncome, filingStatus).at(-1)?.rate ?? '0%';
  const bracketRows = getBracketRows(taxableIncome, filingStatus);

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
          Estimate your US federal income tax using {TAX_YEAR} federal tax
          brackets, filing status and standard deduction assumptions. This tool
          is designed for quick planning and education, not official tax filing.
        </p>

        <div className="calculator-box" style={{ marginTop: 28 }}>
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
            Standard deduction used: {formatCurrency(standardDeduction)}
          </div>

          <div className="result">
            Estimated taxable income: {formatCurrency(taxableIncome)}
          </div>

          <div className="result">
            Estimated federal income tax: {formatCurrency(estimatedFederalTax)}
          </div>

          <div className="result">
            Effective federal tax rate: {formatPercent(effectiveTaxRate)}
          </div>

          <div className="result">
            Estimated marginal bracket reached: {marginalBracket}
          </div>

          <div className="result">
            Income after estimated federal tax: {formatCurrency(afterFederalTaxIncome)}
          </div>

          <div className="result">
            Monthly income after estimated federal tax:{' '}
            {formatCurrency(monthlyAfterFederalTax)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this federal tax calculator works</h2>

          <p>
            This calculator starts with your annual income, subtracts a simplified
            standard deduction for your selected filing status, then applies
            progressive federal income tax brackets to the estimated taxable
            income.
          </p>

          <p>
            Federal income tax is progressive, which means different portions of
            taxable income can be taxed at different rates. Reaching a higher tax
            bracket does not mean all of your income is taxed at that higher
            rate.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual income entered</td>
                  <td>{formatCurrency(income)}</td>
                </tr>
                <tr>
                  <td>Standard deduction used</td>
                  <td>{formatCurrency(standardDeduction)}</td>
                </tr>
                <tr>
                  <td>Estimated taxable income</td>
                  <td>{formatCurrency(taxableIncome)}</td>
                </tr>
                <tr>
                  <td>Estimated federal income tax</td>
                  <td>{formatCurrency(estimatedFederalTax)}</td>
                </tr>
                <tr>
                  <td>Estimated income after federal tax</td>
                  <td>{formatCurrency(afterFederalTaxIncome)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Estimated tax by bracket</h3>

          <p>
            The table below shows how much of your estimated taxable income falls
            into each federal tax bracket used by this calculator.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Taxable income range</th>
                  <th>Rate</th>
                  <th>Taxed amount</th>
                  <th>Estimated tax</th>
                </tr>
              </thead>
              <tbody>
                {bracketRows.length > 0 ? (
                  bracketRows.map((row) => (
                    <tr key={`${row.range}-${row.rate}`}>
                      <td>{row.range}</td>
                      <td>{row.rate}</td>
                      <td>{formatCurrency(row.taxableAmount)}</td>
                      <td>{formatCurrency(row.tax)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4}>No taxable income after the standard deduction.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <h2>What this calculator includes</h2>

          <p>
            The calculator includes a simplified standard deduction and federal
            tax bracket calculation for single filers and married couples filing
            jointly. It shows estimated taxable income, estimated federal income
            tax, effective tax rate, marginal bracket reached and income after
            estimated federal income tax.
          </p>

          <h2>What this calculator does not include</h2>

          <p>
            This calculator does not include every tax factor. It does not fully
            account for itemized deductions, tax credits, dependents, self-
            employment tax, alternative minimum tax, net investment income tax,
            capital gains rates, additional Medicare tax, state tax, local tax or
            every special tax rule.
          </p>

          <h2>Federal tax vs paycheck withholding</h2>

          <p>
            Federal tax estimates are not the same as exact paycheck
            withholding. A paycheck can be affected by W-4 settings, payroll
            frequency, pretax benefits, retirement contributions, health
            insurance, additional withholding, bonuses, overtime and employer
            payroll settings.
          </p>

          <p>
            To estimate take-home pay after payroll taxes and deductions, use the
            paycheck calculator in addition to this federal tax calculator.
          </p>

          <h2>Example: federal tax estimate</h2>

          <p>
            For example, a single filer with {formatCurrency(75000)} of annual
            income would subtract the {TAX_YEAR} standard deduction used by this
            calculator, then apply the federal tax brackets only to the remaining
            taxable income. The result is an estimate, not an official tax
            return calculation.
          </p>

          <h2>Frequently asked questions</h2>

          <h3>Is this the same as my final tax refund or tax bill?</h3>

          <p>
            No. A final refund or tax bill depends on withholding, credits,
            deductions, other income, payments already made and many personal
            tax details. This calculator only estimates federal income tax from
            the basic inputs shown.
          </p>

          <h3>Why is my effective tax rate lower than my tax bracket?</h3>

          <p>
            Because federal income tax uses progressive brackets. Only the
            income inside a higher bracket is taxed at that higher rate. Lower
            portions of income are taxed at lower rates.
          </p>

          <h3>Does this include Social Security and Medicare?</h3>

          <p>
            No. This page focuses on federal income tax. Social Security and
            Medicare are payroll taxes and are better estimated with the
            paycheck calculator.
          </p>

          <h3>Does this include state income tax?</h3>

          <p>
            No. This calculator estimates federal income tax only. State and
            local tax rules can vary significantly.
          </p>

          <h3>Can I use this as tax advice?</h3>

          <p>
            No. This calculator is for education and planning only. It is not tax,
            legal, payroll, accounting or financial advice. Verify important
            numbers with official IRS resources or a qualified tax professional.
          </p>
        </div>

        <RelatedCalculators
          title="Related tax and paycheck tools"
          tools={[
            {
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
            },
            {
              title: 'Salary After Tax Calculators',
              href: '/salary-after-tax',
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
              title: 'Methodology',
              href: '/methodology',
            },
          ]}
        />
      </div>
    </section>
  );
}
