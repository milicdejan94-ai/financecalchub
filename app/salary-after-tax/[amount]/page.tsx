import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { salaryAmounts } from '../../../lib/salaryAmounts';

type PageProps = {
  params: {
    amount: string;
  };
};

const formatMoney = (value: number) =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });

const formatWholeMoney = (value: number) =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

export function generateStaticParams() {
  return salaryAmounts.map((amount) => ({
    amount: String(amount),
  }));
}

export function generateMetadata({ params }: PageProps) {
  const amount = Number(params.amount);
  const formattedAmount = amount.toLocaleString('en-US');

  return {
    title: `$${formattedAmount} After Tax Calculator | Salary After Taxes`,
    description: `Estimate how much a $${formattedAmount} salary may be after simplified federal tax, payroll taxes, estimated state tax and common paycheck deductions.`,
  };
}

export default function SalaryAfterTaxPage({ params }: PageProps) {
  const amount = Number(params.amount);

  if (!salaryAmounts.includes(amount)) {
    return (
      <section className="section">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Salary After Tax', href: '/salary-after-tax' },
              { label: `$${amount.toLocaleString('en-US')} After Tax` },
            ]}
          />

          <div className="content-box">
            <h1>Salary after tax page not found</h1>
            <p>This salary after tax estimate page does not exist yet.</p>
          </div>
        </div>
      </section>
    );
  }

  const federalTax = amount * 0.12;
  const socialSecurity = amount * 0.062;
  const medicare = amount * 0.0145;
  const estimatedStateTax = amount * 0.04;
  const estimatedBenefits = amount * 0.03;
  const estimatedRetirementContribution = amount * 0.05;

  const totalEstimatedTaxes =
    federalTax + socialSecurity + medicare + estimatedStateTax;
  const totalEstimatedDeductions =
    totalEstimatedTaxes + estimatedBenefits + estimatedRetirementContribution;

  const annualAfterTax = amount - totalEstimatedTaxes;
  const annualAfterTaxAndDeductions = amount - totalEstimatedDeductions;

  const monthlyAfterTax = annualAfterTax / 12;
  const biweeklyAfterTax = annualAfterTax / 26;
  const weeklyAfterTax = annualAfterTax / 52;

  const monthlyAfterTaxAndDeductions = annualAfterTaxAndDeductions / 12;
  const biweeklyAfterTaxAndDeductions = annualAfterTaxAndDeductions / 26;
  const weeklyAfterTaxAndDeductions = annualAfterTaxAndDeductions / 52;

  const monthlyGross = amount / 12;
  const biweeklyGross = amount / 26;
  const semiMonthlyGross = amount / 24;
  const weeklyGross = amount / 52;
  const hourlyEquivalent = amount / 2080;

  const effectiveTaxRate = (totalEstimatedTaxes / amount) * 100;
  const takeHomeRate = (annualAfterTax / amount) * 100;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Salary After Tax', href: '/salary-after-tax' },
            { label: `${formatWholeMoney(amount)} After Tax` },
          ]}
        />

        <article className="content-box">
          <p className="eyebrow">Salary after tax calculator</p>

          <h1>{formatWholeMoney(amount)} After Tax Calculator</h1>

          <p>
            Estimate how much a {formatWholeMoney(amount)} salary may be after
            simplified federal income tax, Social Security, Medicare and
            estimated state income tax. This page also shows monthly, biweekly,
            semi-monthly and weekly pay estimates so you can compare common
            payroll schedules.
          </p>

          <p>
            The numbers below are simplified planning estimates. Your real
            paycheck can be different because tax withholding, state rules,
            employer benefits and personal deductions vary from worker to worker.
          </p>
        </article>

        <div className="calculator-box">
          <h2>Estimated after-tax income</h2>

          <div className="result">
            Annual gross salary: {formatMoney(amount)}
          </div>

          <div className="result">
            Estimated annual after-tax pay: {formatMoney(annualAfterTax)}
          </div>

          <div className="result">
            Estimated monthly after-tax pay: {formatMoney(monthlyAfterTax)}
          </div>

          <div className="result">
            Estimated biweekly after-tax pay:{' '}
            {formatMoney(biweeklyAfterTax)}
          </div>

          <div className="result">
            Estimated weekly after-tax pay: {formatMoney(weeklyAfterTax)}
          </div>

          <div className="result">
            Estimated effective tax rate: {effectiveTaxRate.toFixed(1)}%
          </div>
        </div>

        <article className="content-box" style={{ marginTop: 34 }}>
          <h2>How much is {formatWholeMoney(amount)} after taxes?</h2>

          <p>
            Based on the simplified assumptions used on this page, a{' '}
            {formatWholeMoney(amount)} annual salary may result in estimated
            after-tax income of {formatMoney(annualAfterTax)} per year. That is
            about {formatMoney(monthlyAfterTax)} per month,{' '}
            {formatMoney(biweeklyAfterTax)} every two weeks or{' '}
            {formatMoney(weeklyAfterTax)} per week.
          </p>

          <p>
            This estimate includes federal income tax, Social Security, Medicare
            and an estimated state income tax rate. It does not replace a payroll
            system, tax return, official withholding worksheet or professional
            advice.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Pay period</th>
                  <th>Gross pay before taxes</th>
                  <th>Estimated after-tax pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual</td>
                  <td>{formatMoney(amount)}</td>
                  <td>{formatMoney(annualAfterTax)}</td>
                </tr>
                <tr>
                  <td>Monthly</td>
                  <td>{formatMoney(monthlyGross)}</td>
                  <td>{formatMoney(monthlyAfterTax)}</td>
                </tr>
                <tr>
                  <td>Semi-monthly</td>
                  <td>{formatMoney(semiMonthlyGross)}</td>
                  <td>{formatMoney(annualAfterTax / 24)}</td>
                </tr>
                <tr>
                  <td>Biweekly</td>
                  <td>{formatMoney(biweeklyGross)}</td>
                  <td>{formatMoney(biweeklyAfterTax)}</td>
                </tr>
                <tr>
                  <td>Weekly</td>
                  <td>{formatMoney(weeklyGross)}</td>
                  <td>{formatMoney(weeklyAfterTax)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Estimated tax breakdown</h2>

          <p>
            The estimate separates federal income tax, payroll taxes and state
            income tax so you can see why after-tax pay is lower than gross pay.
            Payroll taxes usually include Social Security and Medicare for W-2
            employees.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Estimated annual amount</th>
                  <th>What it represents</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Federal income tax estimate</td>
                  <td>{formatMoney(federalTax)}</td>
                  <td>Simplified federal withholding estimate</td>
                </tr>
                <tr>
                  <td>Social Security estimate</td>
                  <td>{formatMoney(socialSecurity)}</td>
                  <td>Payroll tax estimate</td>
                </tr>
                <tr>
                  <td>Medicare estimate</td>
                  <td>{formatMoney(medicare)}</td>
                  <td>Payroll tax estimate</td>
                </tr>
                <tr>
                  <td>State income tax estimate</td>
                  <td>{formatMoney(estimatedStateTax)}</td>
                  <td>Simplified state tax assumption</td>
                </tr>
                <tr>
                  <td>Total estimated taxes</td>
                  <td>{formatMoney(totalEstimatedTaxes)}</td>
                  <td>Estimated taxes before benefit deductions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>After tax vs after tax and deductions</h2>

          <p>
            After-tax pay is not always the same as the amount deposited into
            your bank account. Many employees also have benefit deductions or
            retirement contributions withheld from paychecks. These deductions
            can reduce take-home pay even when they may help with insurance,
            savings or retirement planning.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Estimate type</th>
                  <th>Annual</th>
                  <th>Monthly</th>
                  <th>Biweekly</th>
                  <th>Weekly</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>After estimated taxes only</td>
                  <td>{formatMoney(annualAfterTax)}</td>
                  <td>{formatMoney(monthlyAfterTax)}</td>
                  <td>{formatMoney(biweeklyAfterTax)}</td>
                  <td>{formatMoney(weeklyAfterTax)}</td>
                </tr>
                <tr>
                  <td>After taxes plus sample deductions</td>
                  <td>{formatMoney(annualAfterTaxAndDeductions)}</td>
                  <td>{formatMoney(monthlyAfterTaxAndDeductions)}</td>
                  <td>{formatMoney(biweeklyAfterTaxAndDeductions)}</td>
                  <td>{formatMoney(weeklyAfterTaxAndDeductions)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The sample deduction line assumes estimated health and benefit
            deductions plus retirement contributions. It is included only to show
            how additional paycheck deductions can change spendable take-home
            pay.
          </p>

          <h2>Gross pay before taxes</h2>

          <p>
            Before taxes, a {formatWholeMoney(amount)} salary is about{' '}
            {formatMoney(monthlyGross)} per month,{' '}
            {formatMoney(semiMonthlyGross)} per semi-monthly paycheck,{' '}
            {formatMoney(biweeklyGross)} per biweekly paycheck or{' '}
            {formatMoney(weeklyGross)} per week.
          </p>

          <p>
            If you divide {formatWholeMoney(amount)} by 2,080 full-time work
            hours, the estimated hourly equivalent is about{' '}
            {formatMoney(hourlyEquivalent)} before taxes.
          </p>

          <h2>Why your real after-tax pay may be different</h2>

          <p>
            Actual after-tax pay depends on filing status, federal tax brackets,
            state and local taxes, W-4 settings, credits, deductions, retirement
            contributions, health insurance, employer benefits and payroll rules.
            Two workers with the same salary can have different take-home pay.
          </p>

          <ul>
            <li>State and local taxes can vary by location.</li>
            <li>Benefits and retirement contributions can lower each paycheck.</li>
            <li>Bonuses and overtime may be withheld differently.</li>
            <li>Tax credits and deductions can change final tax owed.</li>
            <li>W-4 settings can change payroll withholding during the year.</li>
          </ul>

          <h2>How to use this estimate</h2>

          <p>
            Use this salary after tax estimate as a starting point for budgeting,
            comparing job offers, planning rent or mortgage payments, setting
            savings goals and estimating debt payoff. For a more flexible
            estimate, use the <a href="/calculators/paycheck">Paycheck Calculator</a>{' '}
            or compare state-specific results with the{' '}
            <a href="/paycheck-calculator">Paycheck Calculators by State</a>.
          </p>

          <h2>Frequently asked questions</h2>

          <h3>Is this the exact take-home pay for {formatWholeMoney(amount)}?</h3>
          <p>
            No. It is a simplified educational estimate. Exact take-home pay
            depends on payroll withholding, state and local taxes, deductions,
            benefits and personal tax situation.
          </p>

          <h3>Does after-tax pay include health insurance?</h3>
          <p>
            The main after-tax estimate focuses on taxes. The additional sample
            deduction table shows how benefit deductions and retirement
            contributions can further reduce deposited take-home pay.
          </p>

          <h3>Why is biweekly pay not the same as half of monthly pay?</h3>
          <p>
            Biweekly payroll usually has 26 paychecks per year. Monthly pay uses
            12 periods per year. Because those schedules are different, the
            paycheck amounts do not line up exactly month by month.
          </p>

          <h3>Should I budget from gross salary or take-home pay?</h3>
          <p>
            Most budgets should start with take-home pay because rent, mortgage
            payments, groceries, debt payments and savings goals are paid from
            money that actually reaches your bank account.
          </p>

          <h3>Can a lower salary have higher take-home pay in another state?</h3>
          <p>
            It can happen. State taxes, local taxes, benefits, housing costs and
            deductions can make two jobs with different salaries feel closer than
            the gross numbers suggest.
          </p>

          <h2>Important limitations</h2>

          <p>
            This page provides simplified educational estimates only. It is not
            tax, legal, payroll, accounting, financial or investment advice.
            Always verify important tax and payroll decisions with a qualified
            professional, employer payroll department or official source.
          </p>

          <p>
            You can review our <a href="/methodology">methodology</a> and{' '}
            <a href="/disclaimer">disclaimer</a> for more details about how to
            interpret calculator results.
          </p>
        </article>

        <RelatedCalculators
          title="Related salary and paycheck tools"
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
              title: `${formatWholeMoney(amount)} Salary Calculator`,
              href: `/salary-calculator/${amount}`,
            },
            {
              title: 'Salary Calculator Directory',
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
          ]}
        />
      </div>
    </section>
  );
}
