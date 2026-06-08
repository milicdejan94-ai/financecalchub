import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';
import { hourlyWages } from '../../lib/hourlyWages';

export const metadata = {
  title: 'Hourly Wage to Salary Calculators | FinanceCalcHub',
  description:
    'Estimate how much common hourly wages are per year, month, week and paycheck. Convert hourly pay to annual salary for U.S. workers.',
};

export default function HourlyWageDirectoryPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Hourly Wage Calculators' },
          ]}
        />

        <p className="eyebrow">Hourly wage calculators</p>

        <h1>Hourly Wage to Salary Calculators</h1>

        <p>
          Estimate how much common hourly wages are per year, month, week and
          paycheck. Choose an hourly wage below to see gross pay and simplified
          after-tax estimates.
        </p>

        <div className="calculator-box">
          <h2>Choose an hourly wage</h2>

          <div className="grid">
            {hourlyWages.map((wage) => (
              <a key={wage} className="card" href={`/hourly-wage/${wage}`}>
                <h3>${wage} an Hour</h3>
                <p>
                  Estimate how much ${wage} an hour is per year, month, week
                  and paycheck.
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How to convert hourly wage to salary</h2>

          <p>
            A common way to convert hourly pay to annual salary is to multiply
            the hourly wage by 40 hours per week and 52 weeks per year. For
            example, $25 an hour is about $52,000 per year before taxes.
          </p>

          <h2>Why take-home pay may be lower</h2>

          <p>
            Gross pay is not the same as take-home pay. Federal tax, Social
            Security, Medicare, state tax, health insurance, retirement
            contributions and other deductions can reduce the amount that
            actually reaches your bank account.
          </p>

          <h2>When these calculators are useful</h2>

          <p>
            Hourly wage calculators can help when comparing job offers, planning
            rent, budgeting for monthly expenses, estimating paycheck amounts or
            deciding whether overtime or a higher wage changes your financial
            situation.
          </p>

          <h2>Important note</h2>

          <p>
            These calculators provide simplified educational estimates only. They
            are not tax, payroll, legal, financial or investment advice.
          </p>
        </div>

        <RelatedCalculators
          title="Related tools"
          tools={[
            {
              title: 'Hourly Paycheck Calculator',
              href: '/calculators/hourly-paycheck',
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
              title: 'Federal Tax Calculator',
              href: '/calculators/federal-tax',
            },
            {
              title: 'Budgeting and Savings Calculator',
              href: '/calculators/savings',
            },
          ]}
        />
      </div>
    </section>
  );
}