import AdBanner from '../../../components/AdBanner';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

export const metadata = {
  title: 'Gross Pay vs Net Pay: What Is the Difference?',
  description:
    'Learn the difference between gross pay and net pay, and how taxes and deductions affect take-home pay.',
};

export default function GrossPayVsNetPayPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Gross Pay vs Net Pay' },
          ]}
        />

        <div className="content-box">
          <p className="eyebrow">Paycheck guide</p>

          <h1>Gross Pay vs Net Pay: What Is the Difference?</h1>

          <p>
            Gross pay and net pay are two of the most important paycheck terms to
            understand. Gross pay is what you earn before taxes and deductions.
            Net pay is what you actually take home after deductions are removed.
          </p>

          <AdBanner slot="gross-net-pay-top" />

          <h2>What is gross pay?</h2>

          <p>
            Gross pay is your total income before taxes, insurance, retirement
            contributions and other deductions. For salaried employees, gross pay
            usually starts with annual salary. For hourly workers, gross pay is
            based on hourly rate multiplied by hours worked.
          </p>

          <h2>What is net pay?</h2>

          <p>
            Net pay is your take-home pay. This is the amount that reaches your
            bank account after payroll deductions. Net pay is usually the number
            people use for budgeting.
          </p>

          <h2>Common deductions from gross pay</h2>

          <ul>
            <li>Federal income tax</li>
            <li>State income tax</li>
            <li>Social Security tax</li>
            <li>Medicare tax</li>
            <li>Health insurance</li>
            <li>Retirement contributions</li>
            <li>Other employer deductions</li>
          </ul>

          <AdBanner slot="gross-net-pay-middle" />

          <h2>Why net pay matters more for budgeting</h2>

          <p>
            A salary may look large on paper, but your monthly budget should be
            based on net pay. Rent, mortgage payments, groceries, debt payments
            and savings goals are usually paid from take-home income.
          </p>

          <h2>How to estimate net pay</h2>

          <p>
            You can estimate net pay by subtracting expected taxes and deductions
            from gross pay. A paycheck calculator can make this easier by showing
            monthly, biweekly and weekly estimates.
          </p>

          <p>
            Try our <a href="/calculators/paycheck">Paycheck Calculator</a> or{' '}
            <a href="/calculators/hourly-paycheck">
              Hourly Paycheck Calculator
            </a>{' '}
            to estimate your own take-home pay.
          </p>

          <h2>Important note</h2>

          <p>
            This article is for educational purposes only and is not tax,
            payroll, legal or financial advice.
          </p>
        </div>

        <RelatedCalculators
          title="Related paycheck tools"
          tools={[
            { title: 'Paycheck Calculator', href: '/calculators/paycheck' },
            {
              title: 'Hourly Paycheck Calculator',
              href: '/calculators/hourly-paycheck',
            },
            { title: 'Salary Calculator', href: '/salary-calculator' },
            {
              title: 'Paycheck by State',
              href: '/paycheck-calculator',
            },
            {
              title: 'Salary To Hourly Calculator',
              href: '/calculators/salary-to-hourly',
            },
            { title: 'Overtime Calculator', href: '/calculators/overtime' },
          ]}
        />
      </div>
    </section>
  );
}