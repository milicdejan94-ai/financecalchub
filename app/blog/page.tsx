import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';

const posts = [
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

  {
  title: 'How Much Is $70,000 After Taxes?',
  description:
    'Estimate how much a $70,000 salary may be after taxes and what it could mean monthly, biweekly and weekly.',
  href: '/blog/how-much-is-70000-after-taxes',
},
];

export const metadata = {
  title: 'Personal Finance Blog | FinanceCalcHub',
  description:
    'Simple personal finance articles about paychecks, loans, mortgages, taxes and retirement planning.',
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
            Learn the basics behind paychecks, loans, mortgages, savings and
            retirement planning. These guides explain the ideas behind our free
            calculators.
          </p>
        </div>

        <div className="content-box">
          <h2>Latest finance guides</h2>

          <p>
            Start with one of our beginner-friendly guides, then use the related
            calculators to estimate your own numbers.
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
          <h2>Why financial education matters</h2>

          <p>
            Simple financial decisions can become easier when you understand the
            basic numbers. Paychecks, mortgage payments, debt payoff and savings
            growth all depend on inputs that can be estimated with the right
            tools.
          </p>

          <h3>Use guides and calculators together</h3>

          <p>
            Articles help explain the concept. Calculators help estimate the
            numbers. Combining both can make personal finance easier to
            understand.
          </p>

          <h3>Important note</h3>

          <p>
            Blog articles on FinanceCalcHub are for educational purposes only.
            They are not tax, legal, investment or financial advice.
          </p>
        </div>

        <RelatedCalculators
          title="Popular calculators"
          tools={[
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
            {
              title: '401k Calculator',
              href: '/calculators/401k',
            },
            {
              title: 'Compound Interest Calculator',
              href: '/calculators/compound-interest',
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