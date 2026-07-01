'use client';

import { useMemo, useState } from 'react';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

const SOCIAL_SECURITY_RATE = 0.062;
const SOCIAL_SECURITY_WAGE_BASE_2026 = 184500;
const MEDICARE_RATE = 0.0145;

function formatMoney(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}

export default function PaycheckCalculatorPage() {
  const [salary, setSalary] = useState(75000);
  const [stateTax, setStateTax] = useState(4);
  const [filingStatus, setFilingStatus] = useState('single');
  const [payFrequency, setPayFrequency] = useState(26);
  const [retirementContribution, setRetirementContribution] = useState(5);
  const [preTaxDeductions, setPreTaxDeductions] = useState(150);
  const [postTaxDeductions, setPostTaxDeductions] = useState(0);
  const [additionalWithholding, setAdditionalWithholding] = useState(0);

  const calculation = useMemo(() => {
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
    const socialSecurity =
      Math.min(salary, SOCIAL_SECURITY_WAGE_BASE_2026) * SOCIAL_SECURITY_RATE;
    const medicare = salary * MEDICARE_RATE;
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

    return {
      federalRate,
      grossPayPerPeriod,
      annualRetirementContribution,
      annualPreTaxDeductions,
      annualPostTaxDeductions,
      annualAdditionalWithholding,
      taxableIncome,
      federalTax,
      socialSecurity,
      medicare,
      stateTaxAmount,
      totalAnnualTaxes,
      annualTakeHome,
      netPayPerPeriod,
      monthlyTakeHome: annualTakeHome / 12,
      biweeklyTakeHome: annualTakeHome / 26,
      weeklyTakeHome: annualTakeHome / 52,
      federalTaxPerPeriod: federalTax / payFrequency,
      socialSecurityPerPeriod: socialSecurity / payFrequency,
      medicarePerPeriod: medicare / payFrequency,
      stateTaxPerPeriod: stateTaxAmount / payFrequency,
      retirementPerPeriod: annualRetirementContribution / payFrequency,
      preTaxDeductionsPerPeriod: annualPreTaxDeductions / payFrequency,
      postTaxDeductionsPerPeriod: annualPostTaxDeductions / payFrequency,
      additionalWithholdingPerPeriod:
        annualAdditionalWithholding / payFrequency,
    };
  }, [
    additionalWithholding,
    filingStatus,
    payFrequency,
    postTaxDeductions,
    preTaxDeductions,
    retirementContribution,
    salary,
    stateTax,
  ]);

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
          Medicare, estimated state income tax, retirement contributions and
          common payroll deductions. This free paycheck calculator is designed
          for educational planning and quick paycheck comparisons.
        </p>

        <div className="content-box" style={{ marginTop: 28, marginBottom: 28 }}>
          <h2>Estimate your paycheck before you make a money decision</h2>

          <p>
            A salary offer, raise or new job can look different after payroll
            taxes and deductions. Use this calculator to compare gross pay,
            estimated net pay, monthly take-home pay and common payroll items in
            one place.
          </p>

          <p>
            Enter your annual salary, filing status, pay frequency, estimated
            state tax rate, retirement contribution and deductions. The result
            shows an educational estimate of what may be left per paycheck and
            per year.
          </p>
        </div>

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
            Gross pay per paycheck: {formatMoney(calculation.grossPayPerPeriod)}
          </div>

          <div className="result">
            Estimated net pay per paycheck:{' '}
            {formatMoney(calculation.netPayPerPeriod)}
          </div>

          <div className="result">
            Estimated annual take-home pay:{' '}
            {formatMoney(calculation.annualTakeHome)}
          </div>

          <div className="result">
            Monthly take-home pay: {formatMoney(calculation.monthlyTakeHome)}
          </div>

          <div className="result">
            Biweekly take-home pay: {formatMoney(calculation.biweeklyTakeHome)}
          </div>

          <div className="result">
            Weekly take-home pay: {formatMoney(calculation.weeklyTakeHome)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Paycheck estimate breakdown</h2>

          <p>
            This breakdown shows how the calculator moves from gross salary to
            estimated take-home pay using your current inputs. The numbers are
            simplified and should be treated as planning estimates.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Estimated annual amount</th>
                  <th>Estimated per paycheck</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gross pay</td>
                  <td>{formatMoney(salary)}</td>
                  <td>{formatMoney(calculation.grossPayPerPeriod)}</td>
                </tr>
                <tr>
                  <td>Federal income tax estimate</td>
                  <td>{formatMoney(calculation.federalTax)}</td>
                  <td>{formatMoney(calculation.federalTaxPerPeriod)}</td>
                </tr>
                <tr>
                  <td>Social Security estimate</td>
                  <td>{formatMoney(calculation.socialSecurity)}</td>
                  <td>{formatMoney(calculation.socialSecurityPerPeriod)}</td>
                </tr>
                <tr>
                  <td>Medicare estimate</td>
                  <td>{formatMoney(calculation.medicare)}</td>
                  <td>{formatMoney(calculation.medicarePerPeriod)}</td>
                </tr>
                <tr>
                  <td>State income tax estimate</td>
                  <td>{formatMoney(calculation.stateTaxAmount)}</td>
                  <td>{formatMoney(calculation.stateTaxPerPeriod)}</td>
                </tr>
                <tr>
                  <td>Retirement contribution</td>
                  <td>{formatMoney(calculation.annualRetirementContribution)}</td>
                  <td>{formatMoney(calculation.retirementPerPeriod)}</td>
                </tr>
                <tr>
                  <td>Pre-tax deductions</td>
                  <td>{formatMoney(calculation.annualPreTaxDeductions)}</td>
                  <td>{formatMoney(calculation.preTaxDeductionsPerPeriod)}</td>
                </tr>
                <tr>
                  <td>Post-tax deductions</td>
                  <td>{formatMoney(calculation.annualPostTaxDeductions)}</td>
                  <td>{formatMoney(calculation.postTaxDeductionsPerPeriod)}</td>
                </tr>
                <tr>
                  <td>Additional withholding</td>
                  <td>{formatMoney(calculation.annualAdditionalWithholding)}</td>
                  <td>{formatMoney(calculation.additionalWithholdingPerPeriod)}</td>
                </tr>
                <tr>
                  <td><strong>Estimated take-home pay</strong></td>
                  <td><strong>{formatMoney(calculation.annualTakeHome)}</strong></td>
                  <td><strong>{formatMoney(calculation.netPayPerPeriod)}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this paycheck calculator works</h2>

          <p>
            This calculator starts with your annual gross salary and divides it
            by the selected pay frequency to estimate gross pay per paycheck. It
            then subtracts simplified estimates for payroll taxes, retirement
            contributions and deductions.
          </p>

          <h3>What the calculator includes</h3>

          <ul>
            <li>Estimated federal income tax using simplified assumptions</li>
            <li>Social Security employee tax estimate</li>
            <li>Medicare employee tax estimate</li>
            <li>Estimated state income tax based on the percentage you enter</li>
            <li>401(k) or retirement contribution percentage</li>
            <li>Pre-tax deductions entered per paycheck</li>
            <li>Post-tax deductions entered per paycheck</li>
            <li>Additional withholding entered per paycheck</li>
          </ul>

          <h3>What the calculator does not fully include</h3>

          <p>
            Real payroll can be more detailed than a simplified calculator. This
            tool does not fully model every IRS withholding table, W-4 choice,
            tax credit, local payroll tax, benefit rule, employer-specific
            deduction, bonus calculation or state-specific payroll rule.
          </p>

          <h3>Example paycheck estimate</h3>

          <p>
            Suppose someone earns $75,000 per year, is paid biweekly, contributes
            5% to retirement, has $150 in pre-tax deductions per paycheck and
            enters a 4% estimated state income tax rate. The calculator estimates
            gross pay per paycheck, subtracts simplified federal, payroll and
            state taxes, then shows an estimated net paycheck and annual
            take-home pay.
          </p>

          <h3>Why pay frequency matters</h3>

          <p>
            A $75,000 salary has the same annual gross pay whether paid weekly,
            biweekly, semimonthly or monthly. But each paycheck amount changes
            because the salary is divided across a different number of pay
            periods.
          </p>

          <h3>Why pre-tax and post-tax deductions are different</h3>

          <p>
            Pre-tax deductions may reduce taxable income before some taxes are
            estimated. Post-tax deductions are subtracted after tax estimates.
            This is why two workers with the same salary can have different
            take-home pay.
          </p>

          <h3>Social Security and Medicare assumptions</h3>

          <p>
            The calculator estimates employee Social Security at 6.2% up to the
            2026 wage base and Medicare at 1.45% of wages. It does not model
            every possible additional Medicare tax scenario or employer-side tax.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides a simplified educational estimate. Actual
            payroll results may vary depending on federal tax brackets, standard
            deductions, credits, local taxes, W-4 settings, benefit deductions,
            retirement plans, wage limits and other payroll details.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Frequently asked questions</h2>

          <h3>Is this paycheck calculator exact?</h3>

          <p>
            No. It is an educational estimate. Your employer, payroll provider
            or tax professional may calculate a different number based on your
            actual withholding, benefits, deductions and tax situation.
          </p>

          <h3>Why does my real paycheck differ from the calculator?</h3>

          <p>
            Your real paycheck may include health insurance, dental insurance,
            vision insurance, HSA or FSA contributions, local taxes, garnishments,
            union dues, bonuses, overtime, reimbursements, commissions or other
            payroll items not fully modeled here.
          </p>

          <h3>Should I use gross pay or net pay for budgeting?</h3>

          <p>
            For monthly budgeting, net pay is usually more useful because it is
            closer to the amount actually deposited into your bank account.
            Gross pay is still useful for comparing job offers, salaries and
            tax-related assumptions.
          </p>

          <h3>Does this calculator replace tax advice?</h3>

          <p>
            No. It is not tax, legal, payroll, financial or investment advice.
            For important decisions, verify your numbers with a qualified
            professional or official source.
          </p>
        </div>

        <RelatedCalculators
          title="Related paycheck and salary calculators"
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
              title: 'Federal Tax Calculator',
              href: '/calculators/federal-tax',
            },
          ]}
        />
      </div>
    </section>
  );
}
