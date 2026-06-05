import { states } from '../../lib/states';
import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'State Paycheck Calculators | Estimate Take-Home Pay by State',
  description:
    'Free paycheck calculators by US state. Estimate take-home pay after federal payroll taxes and state income tax.',
};

export default function PaycheckCalculatorIndexPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Paycheck Calculators by State' },
  ]}
/>
        <div className="section-heading">
          <p className="eyebrow">State paycheck calculators</p>

          <h1>Paycheck Calculators by State</h1>

          <p>
            Choose your state to estimate take-home pay using a simplified
            paycheck calculator for US workers. Each state page includes monthly,
            biweekly and weekly take-home pay estimates.
          </p>
        </div>

        <div className="content-box">
          <h2>Choose your state</h2>

          <p>
            State income tax rules can affect take-home pay. Select a state
            below to open a dedicated paycheck calculator page.
          </p>

          <div className="grid">
            {states.map((state) => (
              <a
                className="card"
                href={`/paycheck-calculator/${state.slug}`}
                key={state.slug}
              >
                <h3>{state.name} Paycheck Calculator</h3>

                <p>{state.description}</p>

                <span>Open calculator →</span>
              </a>
            ))}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How state paycheck calculators work</h2>

          <p>
            These state paycheck calculator pages estimate take-home pay using
            gross annual salary, filing status, federal payroll taxes and a
            simplified state income tax assumption.
          </p>

          <h3>States with no income tax</h3>

          <p>
            Some states, such as Texas, Florida, Nevada, Washington and Wyoming,
            do not have a state income tax on wages. Workers in those states may
            still pay federal income tax, Social Security and Medicare.
          </p>

          <h3>States with income tax</h3>

          <p>
            Many states have flat or progressive income taxes that can reduce
            take-home pay. Actual withholding may vary based on income, filing
            status, deductions, credits and local taxes.
          </p>

          <h3>Important note</h3>

          <p>
            These pages provide simplified educational estimates only. They are
            not tax, payroll, legal or financial advice.
          </p>
        </div>

        <RelatedCalculators
          title="Related paycheck and salary tools"
          tools={[
            {
              title: 'Main Paycheck Calculator',
              href: '/calculators/paycheck',
            },
            {
              title: 'Hourly Paycheck Calculator',
              href: '/calculators/hourly-paycheck',
            },
            {
              title: 'Salary Calculator by Income',
              href: '/salary-calculator',
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
              title: 'All Financial Calculators',
              href: '/calculators',
            },
          ]}
        />
      </div>
    </section>
  );
}