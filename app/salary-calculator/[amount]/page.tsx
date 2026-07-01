import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { salaryAmounts } from '../../../lib/salaryAmounts';

type PageProps = {
  params: {
    amount: string;
  };
};

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

function formatCurrencyWithCents(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function generateStaticParams() {
  return salaryAmounts.map((amount) => ({
    amount: String(amount),
  }));
}

export function generateMetadata({ params }: PageProps) {
  const amount = Number(params.amount);
  const formattedAmount = Number.isFinite(amount)
    ? amount.toLocaleString('en-US')
    : 'Salary';

  return {
    title: Number.isFinite(amount)
      ? `$${formattedAmount} Salary Calculator | Monthly, Biweekly & Weekly Pay`
      : 'Salary Calculator | Monthly, Biweekly & Weekly Pay',
    description: Number.isFinite(amount)
      ? `Estimate monthly, biweekly and weekly pay for a $${formattedAmount} annual salary. See gross pay, simplified take-home pay and hourly equivalent.`
      : 'Estimate salary take-home pay, gross pay breakdowns and hourly equivalent pay.',
  };
}

export default function SalaryAmountPage({ params }: PageProps) {
  const amount = Number(params.amount);

  if (!salaryAmounts.includes(amount)) {
    return (
      <section className="section">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Salary Calculator', href: '/salary-calculator' },
              { label: 'Salary page not found' },
            ]}
          />

          <article className="content-box">
            <p className="eyebrow">Salary calculator</p>
            <h1>Salary page not found</h1>
            <p>
              This preset salary calculator page does not exist yet. You can use
              the main salary calculator directory to choose another income
              amount.
            </p>
            <p>
              Go to the <a href="/salary-calculator">Salary Calculator</a> or
              use the <a href="/calculators/paycheck">Paycheck Calculator</a>{' '}
              for a custom estimate.
            </p>
          </article>
        </div>
      </section>
    );
  }

  const federalTax = amount * 0.12;
  const socialSecurity = amount * 0.062;
  const medicare = amount * 0.0145;
  const estimatedStateTax = amount * 0.04;

  const annualTakeHome =
    amount - federalTax - socialSecurity - medicare - estimatedStateTax;

  const monthlyTakeHome = annualTakeHome / 12;
  const biweeklyTakeHome = annualTakeHome / 26;
  const weeklyTakeHome = annualTakeHome / 52;

  const hourlyEquivalent = amount / 2080;
  const monthlyGross = amount / 12;
  const semiMonthlyGross = amount / 24;
  const biweeklyGross = amount / 26;
  const weeklyGross = amount / 52;
  const dailyGross = amount / 260;

  const effectiveEstimatedRate =
    ((federalTax + socialSecurity + medicare + estimatedStateTax) / amount) *
    100;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Salary Calculator', href: '/salary-calculator' },
            { label: `${formatCurrency(amount)} Salary Calculator` },
          ]}
        />

        <article className="content-box">
          <p className="eyebrow">Salary calculator</p>

          <h1>{formatCurrency(amount)} Salary Calculator</h1>

          <p>
            Use this {formatCurrency(amount)} salary calculator to estimate gross
            pay, simplified take-home pay, common paycheck amounts and hourly
            equivalent pay. The figures below are educational estimates for US
            workers and are not a substitute for payroll or tax advice.
          </p>

          <p>
            A salary can look different depending on whether you are paid weekly,
            biweekly, semi-monthly or monthly. It can also look very different
            after federal income tax, payroll taxes, state tax, benefits and
            retirement contributions are withheld.
          </p>
        </article>

        <div className="calculator-box">
          <h2>Estimated take-home pay</h2>

          <p>
            This simplified estimate uses a flat federal income tax assumption,
            Social Security, Medicare and an estimated state tax assumption. Your
            real paycheck may be different.
          </p>

          <div className="result">
            Annual gross salary: {formatCurrency(amount)}
          </div>

          <div className="result">
            Estimated annual take-home pay: {formatCurrencyWithCents(annualTakeHome)}
          </div>

          <div className="result">
            Monthly take-home pay: {formatCurrencyWithCents(monthlyTakeHome)}
          </div>

          <div className="result">
            Biweekly take-home pay: {formatCurrencyWithCents(biweeklyTakeHome)}
          </div>

          <div className="result">
            Weekly take-home pay: {formatCurrencyWithCents(weeklyTakeHome)}
          </div>

          <div className="result">
            Estimated hourly equivalent: {formatCurrencyWithCents(hourlyEquivalent)}
          </div>
        </div>

        <article className="content-box" style={{ marginTop: 34 }}>
          <h2>How much is {formatCurrency(amount)} a year per paycheck?</h2>

          <p>
            The table below converts a {formatCurrency(amount)} annual salary
            into common gross pay periods before taxes and payroll deductions.
            Gross pay is useful for comparing jobs, while net pay is usually more
            useful for budgeting.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Pay period</th>
                  <th>Gross pay estimate</th>
                  <th>How it is calculated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual</td>
                  <td>{formatCurrencyWithCents(amount)}</td>
                  <td>Full yearly salary</td>
                </tr>
                <tr>
                  <td>Monthly</td>
                  <td>{formatCurrencyWithCents(monthlyGross)}</td>
                  <td>Annual salary ÷ 12</td>
                </tr>
                <tr>
                  <td>Semi-monthly</td>
                  <td>{formatCurrencyWithCents(semiMonthlyGross)}</td>
                  <td>Annual salary ÷ 24</td>
                </tr>
                <tr>
                  <td>Biweekly</td>
                  <td>{formatCurrencyWithCents(biweeklyGross)}</td>
                  <td>Annual salary ÷ 26</td>
                </tr>
                <tr>
                  <td>Weekly</td>
                  <td>{formatCurrencyWithCents(weeklyGross)}</td>
                  <td>Annual salary ÷ 52</td>
                </tr>
                <tr>
                  <td>Workday estimate</td>
                  <td>{formatCurrencyWithCents(dailyGross)}</td>
                  <td>Annual salary ÷ 260 workdays</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>{formatCurrency(amount)} salary after taxes</h2>

          <p>
            Take-home pay depends on filing status, state income tax, local tax,
            benefit deductions, retirement contributions, tax credits and W-4
            withholding settings. This page uses simplified assumptions so the
            estimate is easy to understand.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Estimated annual amount</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gross salary</td>
                  <td>{formatCurrencyWithCents(amount)}</td>
                  <td>Income before taxes and deductions</td>
                </tr>
                <tr>
                  <td>Estimated federal income tax</td>
                  <td>{formatCurrencyWithCents(federalTax)}</td>
                  <td>Simplified flat estimate used by this page</td>
                </tr>
                <tr>
                  <td>Estimated Social Security</td>
                  <td>{formatCurrencyWithCents(socialSecurity)}</td>
                  <td>Simplified payroll tax estimate</td>
                </tr>
                <tr>
                  <td>Estimated Medicare</td>
                  <td>{formatCurrencyWithCents(medicare)}</td>
                  <td>Simplified payroll tax estimate</td>
                </tr>
                <tr>
                  <td>Estimated state tax</td>
                  <td>{formatCurrencyWithCents(estimatedStateTax)}</td>
                  <td>Uses a general 4% state tax assumption</td>
                </tr>
                <tr>
                  <td>Estimated take-home pay</td>
                  <td>{formatCurrencyWithCents(annualTakeHome)}</td>
                  <td>Gross salary minus estimated taxes above</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Under these simplified assumptions, the estimated effective tax and
            payroll withholding rate is about {effectiveEstimatedRate.toFixed(1)}%.
            Your real effective rate may be higher or lower.
          </p>

          <h2>Monthly, biweekly and weekly take-home pay</h2>

          <p>
            For budgeting, take-home pay is usually more useful than gross pay.
            The table below spreads the estimated annual take-home amount across
            common payroll schedules.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Pay schedule</th>
                  <th>Estimated take-home pay</th>
                  <th>Budgeting note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly</td>
                  <td>{formatCurrencyWithCents(monthlyTakeHome)}</td>
                  <td>Useful for monthly rent, mortgage and bills</td>
                </tr>
                <tr>
                  <td>Biweekly</td>
                  <td>{formatCurrencyWithCents(biweeklyTakeHome)}</td>
                  <td>26 paychecks per year</td>
                </tr>
                <tr>
                  <td>Weekly</td>
                  <td>{formatCurrencyWithCents(weeklyTakeHome)}</td>
                  <td>52 paychecks per year</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Hourly equivalent of a {formatCurrency(amount)} salary</h2>

          <p>
            A common full-time estimate uses 2,080 work hours per year, based on
            40 hours per week and 52 weeks per year. Using that assumption, a{' '}
            {formatCurrency(amount)} annual salary is about{' '}
            {formatCurrencyWithCents(hourlyEquivalent)} per hour before taxes.
          </p>

          <p>
            This hourly equivalent is only a comparison tool. A salaried worker
            may not be paid extra for every additional hour worked, while an
            hourly worker may receive overtime depending on job classification,
            employer policy and applicable rules.
          </p>

          <h2>Why your real paycheck may be different</h2>

          <p>
            Two workers with the same annual salary can take home different
            amounts. The difference often comes from taxes, benefits, retirement
            savings and employer-specific payroll settings.
          </p>

          <ul>
            <li>Federal income tax withholding and W-4 settings</li>
            <li>State and local income taxes</li>
            <li>Health, dental and vision insurance deductions</li>
            <li>401(k), 403(b), HSA or FSA contributions</li>
            <li>Pre-tax versus post-tax deductions</li>
            <li>Bonuses, commissions or one-time payments</li>
            <li>Unpaid leave, reimbursements or benefit changes</li>
          </ul>

          <h2>How to use this salary estimate</h2>

          <p>
            Start with the gross pay breakdown, then compare the estimated
            take-home pay with your real monthly expenses. For a deeper estimate,
            use the <a href="/calculators/paycheck">Paycheck Calculator</a>,{' '}
            <a href="/calculators/hourly-paycheck">Hourly Paycheck Calculator</a>{' '}
            or <a href="/paycheck-calculator">Paycheck Calculators by State</a>.
          </p>

          <p>
            You can also compare this salary with other preset income pages in
            the <a href="/salary-calculator">Salary Calculator Directory</a> or
            review after-tax estimates in the{' '}
            <a href="/salary-after-tax">Salary After Tax Calculators</a>.
          </p>

          <h2>Frequently asked questions</h2>

          <h3>Is {formatCurrency(amount)} a year good pay?</h3>
          <p>
            It depends on your location, household size, taxes, housing costs,
            debt payments, benefits and savings goals. The same salary can feel
            very different in a low-cost area versus a high-cost city.
          </p>

          <h3>Is this calculator exact?</h3>
          <p>
            No. This page uses simplified assumptions for education and planning.
            Actual payroll can vary based on tax rules, deductions, credits,
            state tax, local tax and employer withholding.
          </p>

          <h3>Should I budget from gross pay or net pay?</h3>
          <p>
            Most people should budget from net pay because rent, groceries,
            transportation, debt payments and savings are usually paid from the
            money that actually reaches the bank account.
          </p>

          <h3>Why does biweekly pay not equal exactly two monthly paychecks?</h3>
          <p>
            Biweekly payroll has 26 paychecks per year. That means most months
            have two paychecks, while a few months may have three paychecks.
          </p>

          <h2>Important limitations</h2>

          <p>
            This calculator provides simplified educational estimates only. It is
            not tax, payroll, legal, investment or financial advice. Verify your
            real paycheck with your employer payroll system, tax software or a
            qualified professional before making financial decisions.
          </p>
        </article>

        <RelatedCalculators
          title="More salary and paycheck tools"
          tools={[
            {
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
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
              title: 'Federal Tax Calculator',
              href: '/calculators/federal-tax',
            },
            {
              title: 'Salary Calculator Directory',
              href: '/salary-calculator',
            },
            {
              title: 'Salary After Tax Calculators',
              href: '/salary-after-tax',
            },
          ]}
        />
      </div>
    </section>
  );
}
