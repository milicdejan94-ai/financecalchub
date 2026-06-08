import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';
import { salaryAmounts } from '../../lib/salaryAmounts';

export const metadata = {
  title: 'Salary After Tax Calculators | FinanceCalcHub',
  description:
    'Estimate after-tax income for common U.S. salary amounts. Compare annual, monthly, biweekly and weekly take-home pay after estimated taxes.',
};

export default function SalaryAfterTaxDirectoryPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Salary After Tax Calculators' },
          ]}
        />

        <p className="eyebrow">Salary after tax calculators</p>

        <h1>Salary After Tax Calculators</h1>

        <p>
          Estimate how much common U.S. salary amounts may be after federal
          income tax, Social Security, Medicare and estimated state income tax.
          Choose a salary amount below to view annual, monthly, biweekly and
          weekly after-tax pay estimates.
        </p>

        <div className="calculator-box">
          <h2>Choose a salary amount</h2>

          <div className="grid">
            {salaryAmounts.map((amount) => (
              <a
                key={amount}
                className="card"
                href={`/salary-after-tax/${amount}`}
              >
                <h3>${amount.toLocaleString('en-US')} After Tax</h3>
                <p>
                  Estimate take-home pay after taxes for a $
                  {amount.toLocaleString('en-US')} annual salary.
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>What is salary after tax?</h2>

          <p>
            Salary after tax is the estimated amount of income left after taxes
            and common payroll deductions are removed from gross pay. For U.S.
            workers, this may include federal income tax, Social Security,
            Medicare, state income tax, local tax, retirement contributions,
            insurance and other paycheck deductions.
          </p>

          <h2>Why gross salary is not the same as take-home pay</h2>

          <p>
            A job offer may list an annual salary, but your real budget should be
            based on take-home pay. Two people with the same salary can have
            different after-tax income depending on their state, filing status,
            benefits, deductions and withholding settings.
          </p>

          <h2>How these estimates work</h2>

          <p>
            These pages use simplified assumptions to estimate after-tax pay for
            common salary amounts. They are designed for quick educational
            planning and should not be treated as tax, payroll, financial or
            legal advice.
          </p>

          <h2>When to use these calculators</h2>

          <p>
            Salary after tax estimates can help when comparing job offers,
            planning rent, estimating mortgage affordability, budgeting for car
            payments, setting savings goals or understanding how much money may
            actually hit your bank account.
          </p>

          <h2>Important note</h2>

          <p>
            Actual take-home pay can vary based on federal tax brackets, state
            taxes, local taxes, credits, deductions, W-4 settings, retirement
            contributions, health insurance and employer payroll rules. For a
            more detailed estimate, use the full paycheck calculator.
          </p>
        </div>

        <RelatedCalculators
          title="Related paycheck and salary tools"
          tools={[
            {
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
            },
            {
              title: 'Federal Tax Calculator',
              href: '/calculators/federal-tax',
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
              title: '401(k) Calculator',
              href: '/calculators/401k',
            },
            {
              title: 'Mortgage Affordability Calculator',
              href: '/calculators/mortgage-affordability',
            },
          ]}
        />
      </div>
    </section>
  );
}