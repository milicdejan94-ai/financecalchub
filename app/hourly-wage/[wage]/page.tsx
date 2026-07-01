import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { hourlyWages } from '../../../lib/hourlyWages';

type PageProps = {
  params: {
    wage: string;
  };
};

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}

function formatWholeCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

export function generateStaticParams() {
  return hourlyWages.map((wage) => ({
    wage: String(wage),
  }));
}

export function generateMetadata({ params }: PageProps) {
  const wage = Number(params.wage);
  const annualSalary = wage * 40 * 52;

  return {
    title: `$${wage} an Hour Is How Much a Year? | Hourly Wage Calculator`,
    description: `See how much $${wage} an hour is per year, month, week and paycheck before taxes and after simplified estimated taxes.`,
    alternates: {
      canonical: `/hourly-wage/${wage}`,
    },
    openGraph: {
      title: `$${wage} an Hour Is How Much a Year?`,
      description: `$${wage}/hour is about ${formatWholeCurrency(
        annualSalary
      )} per year before taxes at 40 hours per week.`,
      url: `/hourly-wage/${wage}`,
      type: 'article',
    },
  };
}

export default function HourlyWagePage({ params }: PageProps) {
  const wage = Number(params.wage);

  if (!hourlyWages.includes(wage)) {
    return (
      <section className="section">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Hourly Wage', href: '/hourly-wage' },
              { label: `$${wage} an Hour` },
            ]}
          />

          <div className="content-box">
            <h1>Hourly wage page not found</h1>
            <p>This hourly wage calculator page does not exist yet.</p>
          </div>
        </div>
      </section>
    );
  }

  const hoursPerWeek = 40;
  const weeksPerYear = 52;
  const annualGross = wage * hoursPerWeek * weeksPerYear;
  const monthlyGross = annualGross / 12;
  const biweeklyGross = annualGross / 26;
  const weeklyGross = wage * hoursPerWeek;
  const dailyGross = wage * 8;
  const hourlyToSalaryHours = 2080;

  const partTime30Annual = wage * 30 * weeksPerYear;
  const partTime35Annual = wage * 35 * weeksPerYear;
  const overtimeHours = 5;
  const overtimeRate = wage * 1.5;
  const weeklyWithOvertime = weeklyGross + overtimeRate * overtimeHours;
  const annualWithOvertime = weeklyWithOvertime * weeksPerYear;

  const federalTax = annualGross * 0.12;
  const socialSecurity = annualGross * 0.062;
  const medicare = annualGross * 0.0145;
  const estimatedStateTax = annualGross * 0.04;
  const totalEstimatedTaxes =
    federalTax + socialSecurity + medicare + estimatedStateTax;
  const annualAfterTax = annualGross - totalEstimatedTaxes;
  const monthlyAfterTax = annualAfterTax / 12;
  const biweeklyAfterTax = annualAfterTax / 26;
  const weeklyAfterTax = annualAfterTax / 52;
  const effectiveTaxRate = (totalEstimatedTaxes / annualGross) * 100;

  const salaryEquivalent = annualGross;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Hourly Wage', href: '/hourly-wage' },
            { label: `$${wage} an Hour` },
          ]}
        />

        <article className="content-box">
          <p className="eyebrow">Hourly to salary calculator</p>

          <h1>${wage} an Hour Is How Much a Year?</h1>

          <p>
            At a full-time schedule of {hoursPerWeek} hours per week and{' '}
            {weeksPerYear} weeks per year, ${wage} an hour is about{' '}
            <strong>{formatWholeCurrency(annualGross)} per year before taxes</strong>.
            This page breaks that hourly wage into annual, monthly, biweekly,
            weekly and daily estimates.
          </p>

          <p>
            The after-tax numbers below are simplified educational estimates.
            Real take-home pay can change based on your state, filing status,
            payroll deductions, benefits, overtime, unpaid time off and employer
            withholding settings.
          </p>

          <div className="calculator-box">
            <h2>${wage}/hour salary estimate</h2>

            <p>
              Assumption: {hoursPerWeek} hours per week and {weeksPerYear} weeks
              per year, or {hourlyToSalaryHours.toLocaleString('en-US')} working
              hours per year.
            </p>

            <div className="result">
              Estimated annual gross pay: {formatWholeCurrency(annualGross)}
            </div>

            <div className="result">
              Estimated monthly gross pay: {formatCurrency(monthlyGross)}
            </div>

            <div className="result">
              Estimated biweekly gross pay: {formatCurrency(biweeklyGross)}
            </div>

            <div className="result">
              Estimated weekly gross pay: {formatCurrency(weeklyGross)}
            </div>

            <div className="result">
              Estimated annual after-tax pay: {formatCurrency(annualAfterTax)}
            </div>

            <div className="result">
              Estimated monthly after-tax pay: {formatCurrency(monthlyAfterTax)}
            </div>
          </div>

          <h2>Quick answer for ${wage} an hour</h2>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Pay period</th>
                  <th>Gross estimate</th>
                  <th>After simplified estimated taxes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Annual</td>
                  <td>{formatWholeCurrency(annualGross)}</td>
                  <td>{formatCurrency(annualAfterTax)}</td>
                </tr>
                <tr>
                  <td>Monthly</td>
                  <td>{formatCurrency(monthlyGross)}</td>
                  <td>{formatCurrency(monthlyAfterTax)}</td>
                </tr>
                <tr>
                  <td>Biweekly</td>
                  <td>{formatCurrency(biweeklyGross)}</td>
                  <td>{formatCurrency(biweeklyAfterTax)}</td>
                </tr>
                <tr>
                  <td>Weekly</td>
                  <td>{formatCurrency(weeklyGross)}</td>
                  <td>{formatCurrency(weeklyAfterTax)}</td>
                </tr>
                <tr>
                  <td>8-hour workday</td>
                  <td>{formatCurrency(dailyGross)}</td>
                  <td>Before payroll timing and deductions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How the yearly estimate is calculated</h2>

          <p>The basic hourly-to-salary formula is:</p>

          <p>
            <strong>Hourly wage × hours per week × weeks per year</strong>
          </p>

          <p>
            For ${wage} an hour at {hoursPerWeek} hours per week and{' '}
            {weeksPerYear} weeks per year:
          </p>

          <p>
            <strong>
              ${wage} × {hoursPerWeek} × {weeksPerYear} ={' '}
              {formatWholeCurrency(salaryEquivalent)} per year before taxes
            </strong>
          </p>

          <p>
            This is gross pay. Gross pay is income before federal tax, payroll
            taxes, state tax, benefits, retirement contributions and other
            deductions.
          </p>

          <h2>${wage} an hour by work schedule</h2>

          <p>
            The annual number changes quickly when your weekly hours change. The
            table below keeps the hourly rate the same and changes only the work
            schedule.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Weekly hours</th>
                  <th>Weekly gross pay</th>
                  <th>Annual gross pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30 hours</td>
                  <td>{formatCurrency(wage * 30)}</td>
                  <td>{formatWholeCurrency(partTime30Annual)}</td>
                </tr>
                <tr>
                  <td>35 hours</td>
                  <td>{formatCurrency(wage * 35)}</td>
                  <td>{formatWholeCurrency(partTime35Annual)}</td>
                </tr>
                <tr>
                  <td>40 hours</td>
                  <td>{formatCurrency(weeklyGross)}</td>
                  <td>{formatWholeCurrency(annualGross)}</td>
                </tr>
                <tr>
                  <td>40 hours + 5 overtime hours at 1.5×</td>
                  <td>{formatCurrency(weeklyWithOvertime)}</td>
                  <td>{formatWholeCurrency(annualWithOvertime)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How much is ${wage} an hour per month?</h2>

          <p>
            At a full-time schedule, ${wage} an hour is about{' '}
            {formatCurrency(monthlyGross)} per month before taxes. After the
            simplified tax assumptions used here, the estimated monthly take-home
            pay is about {formatCurrency(monthlyAfterTax)}.
          </p>

          <p>
            Monthly budgeting should usually be based on take-home pay, not gross
            pay. Rent, mortgage payments, car payments, groceries, insurance,
            debt payments and savings goals are paid from the amount that reaches
            your bank account.
          </p>

          <h2>How much is ${wage} an hour biweekly?</h2>

          <p>
            If you are paid every two weeks, ${wage} an hour at 40 hours per
            week is about {formatCurrency(biweeklyGross)} before taxes per
            paycheck. After simplified estimated taxes, the biweekly take-home
            estimate is about {formatCurrency(biweeklyAfterTax)}.
          </p>

          <p>
            A biweekly schedule usually means 26 paychecks per year. That is not
            the same as exactly two paychecks every month, because a few months
            may contain three paychecks.
          </p>

          <h2>How much is ${wage} an hour after taxes?</h2>

          <p>
            This page uses a simplified federal income tax estimate, Social
            Security, Medicare and an estimated state tax assumption. Based on
            those assumptions, the estimated annual after-tax pay is{' '}
            {formatCurrency(annualAfterTax)}, with an estimated effective tax
            rate of {effectiveTaxRate.toFixed(1)}%.
          </p>

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
                  <td>Gross annual pay</td>
                  <td>{formatCurrency(annualGross)}</td>
                </tr>
                <tr>
                  <td>Estimated federal income tax</td>
                  <td>{formatCurrency(federalTax)}</td>
                </tr>
                <tr>
                  <td>Estimated Social Security</td>
                  <td>{formatCurrency(socialSecurity)}</td>
                </tr>
                <tr>
                  <td>Estimated Medicare</td>
                  <td>{formatCurrency(medicare)}</td>
                </tr>
                <tr>
                  <td>Estimated state income tax</td>
                  <td>{formatCurrency(estimatedStateTax)}</td>
                </tr>
                <tr>
                  <td>Estimated after-tax pay</td>
                  <td>{formatCurrency(annualAfterTax)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>What affects your real paycheck?</h2>

          <p>
            Two workers earning the same hourly wage can take home different
            amounts. The difference can come from tax withholding, state and
            local taxes, benefits, retirement contributions, unpaid time off,
            overtime, bonuses, commissions or different payroll schedules.
          </p>

          <ul>
            <li>Federal income tax withholding and filing status</li>
            <li>Social Security and Medicare payroll taxes</li>
            <li>State and local income taxes</li>
            <li>Health, dental or vision insurance deductions</li>
            <li>401(k), HSA, FSA or other pre-tax contributions</li>
            <li>Overtime, shift differentials, bonuses or commissions</li>
            <li>Unpaid time off, seasonal hours or variable schedules</li>
          </ul>

          <h2>Is ${wage} an hour a good wage?</h2>

          <p>
            Whether ${wage} an hour is a good wage depends on location,
            household size, housing costs, transportation, debt payments,
            benefits and savings goals. The same hourly wage can feel very
            different in a low-cost area compared with a high-cost city.
          </p>

          <p>
            A practical way to evaluate the wage is to compare estimated
            take-home pay with your actual monthly budget. Include fixed bills,
            debt payments, emergency savings, retirement contributions and
            irregular expenses like car repairs or medical costs.
          </p>

          <h2>Helpful next steps</h2>

          <p>
            Start with this hourly wage estimate, then use the{' '}
            <a href="/calculators/hourly-paycheck">Hourly Paycheck Calculator</a>{' '}
            for a more flexible paycheck estimate. You can also compare salary
            equivalents with the{' '}
            <a href="/calculators/salary-to-hourly">Salary to Hourly Calculator</a>{' '}
            or review salary examples in the{' '}
            <a href="/salary-calculator">Salary Calculator Directory</a>.
          </p>

          <h2>Frequently asked questions</h2>

          <h3>Is ${wage} an hour exactly {formatWholeCurrency(annualGross)} per year?</h3>
          <p>
            It is exactly that amount only under the 40-hour, 52-week assumption.
            If you work fewer hours, take unpaid time off, work seasonal hours or
            work overtime, your actual annual pay will be different.
          </p>

          <h3>Should I budget from gross pay or after-tax pay?</h3>
          <p>
            Budget from after-tax pay whenever possible. Gross pay is useful for
            comparing jobs, but after-tax pay is closer to the amount available
            for rent, food, transportation, debt and savings.
          </p>

          <h3>Does this include benefits or retirement deductions?</h3>
          <p>
            No. The after-tax estimate is simplified and does not include health
            insurance, 401(k) contributions, HSA or FSA contributions, union dues
            or other employer-specific deductions.
          </p>

          <h3>How do I compare ${wage} an hour with a salary offer?</h3>
          <p>
            Multiply the hourly wage by expected hours per week and weeks per
            year. Then compare benefits, paid time off, overtime eligibility,
            retirement match, health insurance costs and job stability.
          </p>

          <h2>Important limitations</h2>

          <p>
            This page provides simplified educational estimates only. It is not
            tax, payroll, legal, financial or investment advice. Actual paychecks
            may vary based on taxes, deductions, benefits, payroll frequency,
            employer rules and your personal situation.
          </p>
        </article>

        <RelatedCalculators
          title="Related salary and paycheck tools"
          tools={[
            {
              title: 'Hourly Paycheck Calculator',
              href: '/calculators/hourly-paycheck',
            },
            {
              title: 'Salary To Hourly Calculator',
              href: '/calculators/salary-to-hourly',
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
              title: 'Salary After Tax Calculators',
              href: '/salary-after-tax',
            },
            {
              title: 'Paycheck Calculators by State',
              href: '/paycheck-calculator',
            },
          ]}
        />
      </div>
    </section>
  );
}
