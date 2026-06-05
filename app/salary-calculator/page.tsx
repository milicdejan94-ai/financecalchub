import { salaryAmounts } from '../../lib/salaryAmounts';
import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Salary Calculator | Estimate Take-Home Pay by Income',
  description:
    'Free salary calculator pages for common US annual salaries. Estimate monthly, biweekly and weekly take-home pay.',
};

export default function SalaryCalculatorIndexPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Salary Calculator' },
  ]}
/>
        <div className="section-heading">
          <p className="eyebrow">Salary calculator</p>

          <h1>Salary Calculator by Income</h1>

          <p>
            Choose a common annual salary to estimate monthly, biweekly and
            weekly take-home pay. These pages use simplified tax assumptions for
            educational estimates.
          </p>
        </div>

        <div className="content-box">
          <h2>Popular salary estimates</h2>

          <p>
            Select a salary amount below to see estimated take-home pay,
            approximate hourly equivalent and gross pay breakdown.
          </p>

          <div className="grid">
            {salaryAmounts.map((amount) => (
              <a
                className="card"
                href={`/salary-calculator/${amount}`}
                key={amount}
              >
                <h3>${amount.toLocaleString('en-US')} Salary Calculator</h3>

                <p>
                  Estimate take-home pay for a $
                  {amount.toLocaleString('en-US')} annual salary.
                </p>

                <span>Open calculator →</span>
              </a>
            ))}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How salary calculator pages work</h2>

          <p>
            These salary calculator pages estimate take-home pay by subtracting
            simplified federal tax, Social Security, Medicare and estimated state
            tax assumptions from annual gross salary.
          </p>

          <h3>Monthly, biweekly and weekly estimates</h3>

          <p>
            Each salary page shows estimated monthly, biweekly and weekly
            take-home pay so users can compare common payroll schedules.
          </p>

          <h3>Hourly equivalent</h3>

          <p>
            Salary pages also show an estimated hourly equivalent based on 2,080
            working hours per year, which is commonly used for a 40-hour workweek
            over 52 weeks.
          </p>

          <h3>Important note</h3>

          <p>
            These calculators are simplified educational tools. Actual take-home
            pay may vary based on filing status, state taxes, deductions,
            retirement contributions, insurance and other payroll details.
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
              title: 'Hourly Paycheck Calculator',
              href: '/calculators/hourly-paycheck',
            },
            {
              title: 'Salary To Hourly Calculator',
              href: '/calculators/salary-to-hourly',
            },
            {
              title: 'Overtime Calculator',
              href: '/calculators/overtime',
            },
            {
              title: 'Paycheck Calculators by State',
              href: '/paycheck-calculator',
            },
            {
              title: 'All Financial Calculators',
              href: '/calculators',
            },
          ]}
        />
      </div>
    </section>
  );
}