import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';

const posts = [
  {
    title: 'How Much Is $70,000 After Taxes?',
    description:
      'Estimate how much a $70,000 salary may be after taxes and what it could mean monthly, biweekly and weekly.',
    href: '/blog/how-much-is-70000-after-taxes',
    category: 'Salary After Tax',
  },
  {
    title: 'How Much Is $100,000 After Taxes?',
    description:
      'Estimate how much a $100,000 salary may be after taxes and what it could mean monthly, biweekly and weekly.',
    href: '/blog/how-much-is-100000-after-taxes',
    category: 'Salary After Tax',
  },
  {
    title: '$25 an Hour Is How Much a Year?',
    description:
      'Estimate how much $25 an hour is per year, month, week, biweekly paycheck and after simplified taxes.',
    href: '/blog/25-an-hour-is-how-much-a-year',
    category: 'Hourly Wage',
  },
  {
    title: '$30 an Hour Is How Much a Year?',
    description:
      'Estimate how much $30 an hour is per year, month, week, biweekly paycheck and after simplified taxes.',
    href: '/blog/30-an-hour-is-how-much-a-year',
    category: 'Hourly Wage',
  },
  {
    title: 'What Is the Monthly Payment on a $300,000 Mortgage?',
    description:
      'Estimate the monthly payment on a $300,000 mortgage and understand principal, interest, taxes, insurance and other costs.',
    href: '/blog/300000-mortgage-payment',
    category: 'Mortgage',
  },
  {
    title: 'What Is the Monthly Payment on a $400,000 Mortgage?',
    description:
      'Estimate the monthly payment on a $400,000 mortgage and understand principal, interest, property taxes, insurance and PMI.',
    href: '/blog/400000-mortgage-payment',
    category: 'Mortgage',
  },
  {
    title: 'Gross Pay vs Net Pay: What Is the Difference?',
    href: '/blog/gross-pay-vs-net-pay',
    description:
      'Learn the difference between gross pay and net pay, and how taxes and deductions affect take-home pay.',
    category: 'Paycheck',
  },
  {
    title: 'How to Estimate Your Take-Home Pay',
    href: '/blog/how-to-estimate-take-home-pay',
    description:
      'Learn what affects your paycheck and how to estimate net pay after taxes and deductions.',
    category: 'Paycheck',
  },
  {
    title: 'APR vs Interest Rate: What Borrowers Should Know',
    href: '/blog/apr-vs-interest-rate',
    description:
      'Learn the difference between APR and interest rate when comparing loans and borrowing costs.',
    category: 'Loans',
  },
  {
    title: 'How Much House Can I Afford?',
    href: '/blog/how-much-house-can-i-afford',
    description:
      'Learn what affects home affordability, including income, debt, down payment and mortgage rate.',
    category: 'Mortgage',
  },
  {
    title: 'Mortgage Payment Basics for First-Time Buyers',
    href: '/blog/mortgage-payment-basics',
    description:
      'Understand principal, interest, property tax, insurance and other common mortgage costs.',
    category: 'Mortgage',
  },
  {
    title: 'How to Pay Off Credit Card Debt Faster',
    href: '/blog/pay-off-credit-card-debt-faster',
    description:
      'Learn practical factors that affect credit card payoff time, APR and monthly payments.',
    category: 'Debt',
  },
  {
    title: 'Rent vs Buy: Key Factors to Consider',
    href: '/blog/rent-vs-buy-key-factors',
    description:
      'Learn key factors to consider when comparing renting and buying a home.',
    category: 'Home Buying',
  },
  {
    title: 'How Compound Growth Affects Retirement Savings',
    href: '/blog/compound-growth-retirement-savings',
    description:
      'See why time, contributions and investment returns can make a major difference in retirement planning.',
    category: 'Retirement',
  },
];

const categoryGroups = [
  {
    name: 'Paycheck and salary guides',
    description:
      'Use these articles when you want to understand gross pay, net pay, salary after tax, hourly wages and paycheck timing.',
    links: [
      { title: 'How to Estimate Your Take-Home Pay', href: '/blog/how-to-estimate-take-home-pay' },
      { title: 'Gross Pay vs Net Pay', href: '/blog/gross-pay-vs-net-pay' },
      { title: '$25 an Hour Is How Much a Year?', href: '/blog/25-an-hour-is-how-much-a-year' },
      { title: '$30 an Hour Is How Much a Year?', href: '/blog/30-an-hour-is-how-much-a-year' },
    ],
  },
  {
    name: 'Mortgage and home buying guides',
    description:
      'Use these guides to understand mortgage payments, affordability, rent vs buy decisions and common ownership costs.',
    links: [
      { title: 'Mortgage Payment Basics', href: '/blog/mortgage-payment-basics' },
      { title: 'How Much House Can I Afford?', href: '/blog/how-much-house-can-i-afford' },
      { title: '$300,000 Mortgage Payment', href: '/blog/300000-mortgage-payment' },
      { title: 'Rent vs Buy Key Factors', href: '/blog/rent-vs-buy-key-factors' },
    ],
  },
  {
    name: 'Debt, loans and retirement guides',
    description:
      'Use these articles to compare borrowing costs, plan debt payoff and learn how savings can compound over time.',
    links: [
      { title: 'APR vs Interest Rate', href: '/blog/apr-vs-interest-rate' },
      { title: 'How to Pay Off Credit Card Debt Faster', href: '/blog/pay-off-credit-card-debt-faster' },
      { title: 'How Compound Growth Affects Retirement Savings', href: '/blog/compound-growth-retirement-savings' },
    ],
  },
];

export const metadata = {
  title: 'Personal Finance Blog | Paycheck, Mortgage, Debt & Savings Guides',
  description:
    'Read beginner-friendly personal finance guides about paychecks, salary after taxes, hourly wages, loans, mortgages, debt payoff, savings and retirement planning.',
};

export default function BlogPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog' },
          ]}
        />

        <div className="section-heading">
          <p className="eyebrow">Personal finance guides</p>

          <h1>FinanceCalcHub Blog</h1>

          <p>
            Learn the basic math behind paychecks, salary after taxes, hourly
            wages, loans, mortgages, debt payoff, savings and retirement
            planning. These guides are written to support the free calculators on
            FinanceCalcHub, so you can understand both the concept and the
            numbers behind it.
          </p>
        </div>

        <div className="content-box">
          <h2>Start here</h2>

          <p>
            Many financial questions begin with the same idea: compare gross
            numbers with the amount that actually fits your budget. A salary,
            hourly wage, mortgage quote or loan rate can be useful, but it is
            only part of the picture. Taxes, deductions, fees, interest,
            insurance, debt payments and savings goals can all change the real
            result.
          </p>

          <p>
            Use the articles below as plain-English explanations, then use the
            related calculators to test your own assumptions. The guides are for
            education only and should not replace tax, payroll, mortgage,
            investment or legal advice.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Latest finance guides</h2>

          <p>
            Browse our current guides by topic. Each article links back to a
            calculator or directory where you can compare common scenarios.
          </p>

          <div className="grid">
            {posts.map((post) => (
              <a className="card" href={post.href} key={post.href}>
                <p className="eyebrow">{post.category}</p>

                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <span>Read article →</span>
              </a>
            ))}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Browse by topic</h2>

          <p>
            These topic groups help visitors find related guides instead of
            landing on a single isolated article. This also keeps the blog
            connected to the calculator sections of the site.
          </p>

          <div className="grid">
            {categoryGroups.map((group) => (
              <div className="card" key={group.name}>
                <h3>{group.name}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How to use FinanceCalcHub guides</h2>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>What to do</th>
                  <th>Helpful section</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Read the guide to understand the concept and common terms.</td>
                  <td>Blog articles</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Use a calculator to test income, loan, mortgage or savings assumptions.</td>
                  <td><a href="/calculators">Calculator directory</a></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Compare results with your real paystub, lender quote or monthly budget.</td>
                  <td><a href="/methodology">Methodology</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Verify important decisions with a qualified professional or official source.</td>
                  <td><a href="/disclaimer">Disclaimer</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Popular guide paths</h2>

          <h3>Paycheck planning path</h3>
          <p>
            Start with <a href="/blog/gross-pay-vs-net-pay">gross pay vs net pay</a>,
            then read <a href="/blog/how-to-estimate-take-home-pay">how to estimate take-home pay</a>.
            After that, use the <a href="/calculators/paycheck">Paycheck Calculator</a>,
            <a href="/calculators/hourly-paycheck"> Hourly Paycheck Calculator</a> or
            <a href="/paycheck-calculator"> state paycheck calculators</a> to compare scenarios.
          </p>

          <h3>Home buying path</h3>
          <p>
            Start with <a href="/blog/mortgage-payment-basics">mortgage payment basics</a>,
            then review <a href="/blog/how-much-house-can-i-afford">how much house you can afford</a>
            and <a href="/blog/rent-vs-buy-key-factors">rent vs buy factors</a>. Use the
            <a href="/calculators/mortgage"> Mortgage Calculator</a> and
            <a href="/calculators/mortgage-affordability"> Mortgage Affordability Calculator</a>
            for estimates.
          </p>

          <h3>Debt and borrowing path</h3>
          <p>
            Start with <a href="/blog/apr-vs-interest-rate">APR vs interest rate</a>,
            then read <a href="/blog/pay-off-credit-card-debt-faster">how to pay off credit card debt faster</a>.
            Use the <a href="/calculators/apr">APR Calculator</a>,
            <a href="/calculators/loan"> Loan Calculator</a> and
            <a href="/calculators/debt-payoff"> Debt Payoff Calculator</a> to compare options.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Important limitations</h2>

          <p>
            FinanceCalcHub guides and calculators use simplified assumptions.
            Actual tax, payroll, mortgage, loan, insurance, investment and debt
            results can vary based on your location, filing status, lender,
            employer, benefits, deductions, account terms and market conditions.
          </p>

          <p>
            The content is intended for general education. It is not tax,
            accounting, legal, lending, investment, insurance or financial
            advice. For decisions that affect your money, verify results with a
            qualified professional or official source.
          </p>
        </div>

        <RelatedCalculators
          title="Popular calculators"
          tools={[
            {
              title: 'Salary After Tax Calculators',
              href: '/salary-after-tax',
            },
            {
              title: 'Hourly Wage to Salary Calculators',
              href: '/hourly-wage',
            },
            {
              title: 'Mortgage Payment by Amount',
              href: '/mortgage-payment',
            },
            {
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
            },
            {
              title: 'Mortgage Calculator',
              href: '/calculators/mortgage',
            },
            {
              title: 'Debt Payoff Calculator',
              href: '/calculators/debt-payoff',
            },
          ]}
        />
      </div>
    </section>
  );
}
