import AdBanner from '../components/AdBanner';

const popularTools = [
  {
    title: 'Paycheck Calculator',
    text: 'Estimate take-home pay after federal tax, Social Security, Medicare and state tax.',
    href: '/calculators/paycheck',
  },
  {
  title: 'Federal Tax Calculator',
  description:
    'Estimate US federal income tax based on income, filing status and standard deduction assumptions.',
  href: '/calculators/federal-tax',
},
  {
    title: 'Mortgage Calculator',
    text: 'Estimate monthly mortgage payments including taxes and insurance.',
    href: '/calculators/mortgage',
  },
  {
    title: 'Debt Payoff Calculator',
    text: 'Estimate how long it may take to pay off debt based on balance, rate and payment.',
    href: '/calculators/debt-payoff',
  },
  {
    title: '401k Calculator',
    text: 'Estimate future 401k savings using salary, contribution rate, employer match and return.',
    href: '/calculators/401k',
  },
  {
    title: 'Compound Interest Calculator',
    text: 'Estimate how savings or investments may grow with compound interest.',
    href: '/calculators/compound-interest',
  },
  {
    title: 'Rent vs Buy Calculator',
    text: 'Compare estimated renting costs with home buying costs over time.',
    href: '/calculators/rent-vs-buy',
  },
];

const categories = [
  {
    title: 'Paycheck & Salary',
    text: 'Take-home pay, salary, hourly wage, overtime and state paycheck calculators.',
    href: '/calculators',
  },
  {
    title: 'Mortgage & Home',
    text: 'Mortgage payments, refinance, affordability, rent vs buy and down payment tools.',
    href: '/calculators',
  },
  {
    title: 'Loans & Debt',
    text: 'Loan payments, car loans, APR, debt payoff and credit card payoff tools.',
    href: '/calculators',
  },
  {
    title: 'Savings & Retirement',
    text: 'Savings, compound interest, 401k and retirement planning calculators.',
    href: '/calculators',
  },
];

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are these calculators free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. FinanceCalcHub calculators are free to use for educational estimates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the calculator results exact?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Results are estimates based on simplified assumptions. Actual taxes, payments or investment results may vary.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use these calculators for tax advice?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The calculators are not tax, legal, financial or investment advice.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="hero">
        <div className="container">
          <p className="eyebrow">Free financial calculators for US users</p>

          <h1>Simple financial calculators for paychecks, mortgages, loans and savings.</h1>

          <p>
            FinanceCalcHub helps you estimate common money decisions with fast,
            easy-to-use calculators built for everyday users in the United States.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="/calculators">
              View all calculators
            </a>

            <a className="secondary-btn" href="/calculators/paycheck">
              Start with Paycheck Calculator
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        <AdBanner slot="homepage-top" />
      </div>

      <section className="section">
        <div className="container">
          <div className="content-box">
            <p className="eyebrow">Financial calculator hub</p>

            <h2>Free calculators for common US money decisions</h2>

            <p>
              Browse calculators for income, salary, mortgage payments, loan
              payments, credit card payoff, savings, retirement and investment
              growth. Each tool is designed to provide a simple educational
              estimate and connect you with related financial calculators.
            </p>

            <div className="quick-links">
              <a href="/calculators">All calculators</a>

              <a href="/calculators/paycheck">Paycheck calculator</a>
              <a href="/calculators/federal-tax">Federal tax calculator</a>
              <a href="/calculators/hourly-paycheck">Hourly paycheck calculator</a>
              <a href="/calculators/overtime">Overtime calculator</a>
              <a href="/calculators/salary-to-hourly">Salary to hourly calculator</a>
              <a href="/paycheck-calculator">Paycheck by state</a>
              <a href="/salary-calculator">Salary calculator</a>

              <a href="/calculators/mortgage">Mortgage calculator</a>
              <a href="/calculators/refinance">Refinance calculator</a>
              <a href="/calculators/mortgage-affordability">
                Mortgage affordability calculator
              </a>
              <a href="/calculators/rent-vs-buy">Rent vs buy calculator</a>
              <a href="/calculators/down-payment">Down payment calculator</a>
              <a href="/calculators/amortization">Amortization calculator</a>
              <a href="/calculators/extra-mortgage-payment">
                Extra mortgage payment calculator
              </a>

              <a href="/calculators/loan">Loan calculator</a>
              <a href="/calculators/car-loan">Car loan calculator</a>
              <a href="/calculators/apr">APR calculator</a>
              <a href="/calculators/debt-payoff">Debt payoff calculator</a>
              <a href="/calculators/credit-card-payoff">
                Credit card payoff calculator
              </a>

              <a href="/calculators/retirement">Retirement calculator</a>
              <a href="/calculators/401k">401k calculator</a>
              <a href="/calculators/compound-interest">
                Compound interest calculator
              </a>
              <a href="/calculators/investment-return">Investment return calculator</a>
              <a href="/calculators/savings">Savings calculator</a>

              <a href="/blog">Personal finance guides</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Calculator categories</p>
            <h2>Explore calculators by topic</h2>
            <p>
              Start with a category, then choose the specific calculator that
              matches your question.
            </p>
          </div>

          <div className="grid">
            {categories.map((category) => (
              <a className="card" href={category.href} key={category.title}>
                <h2>{category.title}</h2>
                <p>{category.text}</p>
                <span>Browse calculators →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Popular calculators</p>
            <h2>Start with these free finance tools</h2>
            <p>
              These are some of the most useful calculators for income, home
              buying, debt payoff, retirement and long-term savings.
            </p>
          </div>

          <div className="grid">
            {popularTools.map((tool) => (
              <a className="card" href={tool.href} key={tool.title}>
                <h2>{tool.title}</h2>
                <p>{tool.text}</p>
                <span>Open calculator →</span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <a className="primary-btn" href="/calculators">
              View all financial calculators
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">State paycheck calculators</p>
            <h2>Estimate take-home pay by state</h2>
            <p>
              Start with popular state paycheck calculator pages or browse all
              50 states.
            </p>
          </div>

          <div className="grid">
            <a className="card" href="/paycheck-calculator/texas">
              <h2>Texas Paycheck Calculator</h2>
              <p>Estimate take-home pay in Texas with no state income tax.</p>
              <span>Open calculator →</span>
            </a>

            <a className="card" href="/paycheck-calculator/florida">
              <h2>Florida Paycheck Calculator</h2>
              <p>Estimate take-home pay in Florida with no state income tax.</p>
              <span>Open calculator →</span>
            </a>

            <a className="card" href="/paycheck-calculator/california">
              <h2>California Paycheck Calculator</h2>
              <p>Estimate take-home pay in California with state income tax.</p>
              <span>Open calculator →</span>
            </a>

            <a className="card" href="/paycheck-calculator/new-york">
              <h2>New York Paycheck Calculator</h2>
              <p>Estimate take-home pay in New York with state income tax.</p>
              <span>Open calculator →</span>
            </a>
          </div>

          <div style={{ marginTop: 28 }}>
            <a className="primary-btn" href="/paycheck-calculator">
              View all 50 state paycheck calculators
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-box">
            <h2>Why use FinanceCalcHub?</h2>

            <p>
              Personal finance decisions are easier when you can test numbers
              before making a choice. Our tools are designed to provide quick
              educational estimates for income, debt, home buying, savings and
              retirement planning.
            </p>

            <h3>Built for clarity</h3>

            <p>
              Each calculator focuses on simple inputs and clear results so users
              can understand the estimate without needing advanced financial
              knowledge.
            </p>

            <h3>Designed for internal linking</h3>

            <p>
              Related calculators and category pages help users move between
              tools, compare financial scenarios and find more useful resources.
            </p>

            <h3>Important disclaimer</h3>

            <p>
              These calculators provide educational estimates only. They are not
              tax, legal, investment or financial advice. Always verify important
              decisions with a qualified professional.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-box">
            <p className="eyebrow">FAQ</p>

            <h2>Frequently asked questions</h2>

            <h3>Are these calculators free?</h3>

            <p>
              Yes. FinanceCalcHub calculators are free to use for educational
              estimates.
            </p>

            <h3>Are the calculator results exact?</h3>

            <p>
              No. Results are estimates based on simplified assumptions. Actual
              taxes, payments, interest, investment returns or savings results
              may vary.
            </p>

            <h3>Can I use these calculators for tax advice?</h3>

            <p>
              No. The calculators are not tax, legal, financial or investment
              advice. Always verify important decisions with a qualified
              professional.
            </p>

            <h3>Which calculator should I start with?</h3>

            <p>
              If you want to estimate income, start with the paycheck calculator.
              If you are comparing home costs, start with the mortgage calculator.
              If you want to compare all tools, visit the all calculators page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}