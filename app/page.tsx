import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FinanceCalcHub | Free US Financial Calculators and Money Guides',
  description:
    'Free US financial calculators and educational guides for paychecks, taxes, salary after tax, hourly wages, mortgages, loans, debt payoff, savings, investing and retirement planning.',
};

const popularTools = [
  {
    title: 'Paycheck Calculator',
    text: 'Estimate take-home pay after federal tax, Social Security, Medicare and state tax.',
    href: '/calculators/paycheck',
  },
  {
    title: 'Federal Tax Calculator',
    text: 'Estimate US federal income tax based on income, filing status and standard deduction assumptions.',
    href: '/calculators/federal-tax',
  },
  {
    title: 'Salary After Tax Calculator',
    text: 'Estimate how much common US salary amounts may be after taxes.',
    href: '/salary-after-tax',
  },
  {
    title: 'Hourly Wage to Salary Calculator',
    text: 'Convert hourly wages into estimated annual, monthly, weekly and after-tax pay.',
    href: '/hourly-wage',
  },
  {
    title: 'Mortgage Calculator',
    text: 'Estimate monthly mortgage payments including taxes and insurance.',
    href: '/calculators/mortgage',
  },
  {
    title: 'Mortgage Payment by Amount',
    text: 'Estimate payments for common mortgage amounts like $300k, $400k and $500k.',
    href: '/mortgage-payment',
  },
  {
    title: 'Debt Payoff Calculator',
    text: 'Estimate how long it may take to pay off debt based on balance, rate and payment.',
    href: '/calculators/debt-payoff',
  },
  {
    title: 'Investment Return Calculator',
    text: 'Estimate how an investment may grow over time based on contributions, years and estimated return.',
    href: '/calculators/investment-return',
  },
];

const categories = [
  {
    title: 'Paycheck & Salary',
    text: 'Take-home pay, salary, hourly wage, overtime, after-tax pay and state paycheck calculators.',
    href: '/salary-after-tax',
  },
  {
    title: 'Hourly Wage',
    text: 'Convert hourly wages into yearly, monthly, weekly and paycheck estimates.',
    href: '/hourly-wage',
  },
  {
    title: 'Mortgage & Home',
    text: 'Mortgage payments, refinance, affordability, rent vs buy and down payment tools.',
    href: '/mortgage-payment',
  },
  {
    title: 'Loans & Debt',
    text: 'Loan payments, car loans, APR, debt payoff and credit card payoff tools.',
    href: '/calculators/debt-payoff',
  },
  {
    title: 'Savings & Retirement',
    text: 'Savings, compound interest, 401k and retirement planning calculators.',
    href: '/calculators/retirement',
  },
  {
    title: 'Investing for Beginners',
    text: 'Beginner guides for stocks, ETFs, investing basics, capital gains tax and common investing mistakes.',
    href: '/investing',
  },
];

const popularGuides = [
  {
    title: '$70,000 After Tax Calculator',
    text: 'Estimate how much a $70,000 salary may be after federal tax, payroll taxes and estimated state income tax.',
    href: '/salary-after-tax/70000',
  },
  {
    title: '$100,000 After Tax Calculator',
    text: 'Estimate annual, monthly, biweekly and weekly after-tax pay for a $100,000 salary.',
    href: '/salary-after-tax/100000',
  },
  {
    title: '$25 an Hour Is How Much a Year?',
    text: 'Convert $25 an hour into estimated annual, monthly, weekly and after-tax pay.',
    href: '/hourly-wage/25',
  },
  {
    title: '$30 an Hour Is How Much a Year?',
    text: 'Estimate how much $30 per hour may be per year and per paycheck.',
    href: '/hourly-wage/30',
  },
  {
    title: '$300,000 Mortgage Payment',
    text: 'Estimate the monthly payment on a $300,000 mortgage including principal, interest, taxes and insurance assumptions.',
    href: '/mortgage-payment/300000',
  },
  {
    title: '$400,000 Mortgage Payment',
    text: 'Estimate the monthly payment on a $400,000 mortgage with common home buying cost assumptions.',
    href: '/mortgage-payment/400000',
  },
];

const latestGuides = [
  {
    title: 'How Much Is $70,000 After Taxes?',
    text: 'Learn how a $70,000 salary may translate into monthly, biweekly and weekly take-home pay.',
    href: '/blog/how-much-is-70000-after-taxes',
    category: 'Salary After Tax',
  },
  {
    title: '$25 an Hour Is How Much a Year?',
    text: 'See how $25 per hour converts to annual, monthly, weekly and biweekly pay estimates.',
    href: '/blog/25-an-hour-is-how-much-a-year',
    category: 'Hourly Wage',
  },
  {
    title: 'What Is the Monthly Payment on a $300,000 Mortgage?',
    text: 'Understand estimated principal, interest, taxes, insurance and other housing costs.',
    href: '/blog/300000-mortgage-payment',
    category: 'Mortgage',
  },
];

const investingGuides = [
  {
    title: 'How to Start Investing in Stocks',
    text: 'A step-by-step beginner guide to stocks, ETFs, brokerage accounts, risk, taxes and long-term investing.',
    href: '/investing/beginner-guide',
  },
  {
    title: 'What Are Stocks?',
    text: 'Learn what stocks are, how shares work, why prices move and what beginners should understand before buying individual companies.',
    href: '/investing/what-are-stocks',
  },
  {
    title: 'Stocks vs ETFs',
    text: 'Compare individual stocks and ETFs so you can understand diversification, risk and beginner-friendly investing options.',
    href: '/investing/stocks-vs-etfs',
  },
  {
    title: 'How Much Money to Start Investing?',
    text: 'Learn whether $50 or $100 can be enough to start and what to consider before investing real money.',
    href: '/investing/how-much-money-to-start-investing',
  },
  {
    title: 'Capital Gains Tax for Beginners',
    text: 'Understand the basics of gains, losses, dividends, taxable accounts and investment tax awareness.',
    href: '/investing/capital-gains-tax-for-beginners',
  },
  {
    title: 'Beginner Investing Mistakes',
    text: 'Learn common mistakes beginners should avoid, including chasing hype, panic selling and ignoring risk.',
    href: '/investing/beginner-investing-mistakes',
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
          text: 'No. Results are estimates based on simplified assumptions. Actual taxes, payments, interest, savings results or investment results may vary.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I use these calculators for tax, financial or investment advice?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. FinanceCalcHub provides educational estimates only. The calculators and guides are not tax, legal, financial, mortgage, payroll, insurance or investment advice.',
        },
      },
      {
        '@type': 'Question',
        name: 'What can FinanceCalcHub help me estimate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FinanceCalcHub can help users estimate paycheck amounts, salary after tax, mortgage payments, loan payments, debt payoff timelines, savings growth, retirement scenarios and beginner investing concepts.',
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

          <h1>
            Simple financial calculators and money guides for everyday planning.
          </h1>

          <p>
            FinanceCalcHub helps you estimate common money questions with free
            educational calculators for paychecks, taxes, mortgages, loans,
            savings, retirement and beginner investing.
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

      <section className="section">
        <div className="container">
          <div className="content-box">
            <p className="eyebrow">Financial calculator hub</p>

            <h2>Free calculators for common US money decisions</h2>

            <p>
              Browse calculators for income, salary after taxes, hourly wages,
              mortgage payments, loan payments, credit card payoff, savings,
              retirement and investment growth. Each tool is designed to provide
              a simplified educational estimate and help you compare related
              financial scenarios.
            </p>

            <p>
              Use these calculators as a planning starting point. Actual results
              can vary based on tax rules, employer payroll settings, state and
              local requirements, lender terms, fees, deductions, insurance,
              investment performance and other personal details.
            </p>

            <div className="quick-links">
              <a href="/calculators">All calculators</a>

              <a href="/calculators/paycheck">Paycheck calculator</a>
              <a href="/calculators/federal-tax">Federal tax calculator</a>
              <a href="/calculators/hourly-paycheck">
                Hourly paycheck calculator
              </a>
              <a href="/calculators/overtime">Overtime calculator</a>
              <a href="/calculators/salary-to-hourly">
                Salary to hourly calculator
              </a>
              <a href="/paycheck-calculator">Paycheck by state</a>
              <a href="/salary-calculator">Salary calculator</a>
              <a href="/salary-after-tax">Salary after tax calculators</a>
              <a href="/hourly-wage">Hourly wage to salary calculators</a>

              <a href="/calculators/mortgage">Mortgage calculator</a>
              <a href="/mortgage-payment">Mortgage payment by amount</a>
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
              <a href="/calculators/investment-return">
                Investment return calculator
              </a>
              <a href="/calculators/savings">Savings calculator</a>

              <a href="/investing">Investing beginner guides</a>
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
              Start with a category, then choose the specific calculator or guide
              that matches your question.
            </p>
          </div>

          <div className="grid">
            {categories.map((category) => (
              <a className="card" href={category.href} key={category.title}>
                <h2>{category.title}</h2>
                <p>{category.text}</p>
                <span>Browse topic →</span>
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
              buying, debt payoff, retirement, savings and investment planning.
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
            <p className="eyebrow">Investing education</p>
            <h2>Learn investing basics before putting money into the market</h2>
            <p>
              FinanceCalcHub includes beginner-friendly investing lessons that
              explain stocks, ETFs, risk, taxes and common mistakes in plain
              language.
            </p>
          </div>

          <div className="grid">
            {investingGuides.map((guide) => (
              <a className="card" href={guide.href} key={guide.href}>
                <h2>{guide.title}</h2>
                <p>{guide.text}</p>
                <span>Read guide →</span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <a className="primary-btn" href="/investing">
              View investing beginner guides
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Popular calculator guides</p>
            <h2>Quick estimates for common money questions</h2>
            <p>
              Start with popular salary, hourly wage and mortgage estimate pages
              built for common real-life planning questions.
            </p>
          </div>

          <div className="grid">
            {popularGuides.map((guide) => (
              <a className="card" href={guide.href} key={guide.href}>
                <h2>{guide.title}</h2>
                <p>{guide.text}</p>
                <span>View estimate →</span>
              </a>
            ))}
          </div>

          <div
            style={{
              marginTop: 28,
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <a className="primary-btn" href="/salary-after-tax">
              View salary after tax calculators
            </a>

            <a className="secondary-btn" href="/hourly-wage">
              View hourly wage calculators
            </a>

            <a className="secondary-btn" href="/mortgage-payment">
              View mortgage payment calculators
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Latest personal finance guides</p>
            <h2>Learn the numbers behind the calculators</h2>
            <p>
              Read simple guides that explain salary after tax, hourly wage and
              mortgage payment estimates in plain language.
            </p>
          </div>

          <div className="grid">
            {latestGuides.map((guide) => (
              <a className="card" href={guide.href} key={guide.href}>
                <p className="eyebrow">{guide.category}</p>
                <h2>{guide.title}</h2>
                <p>{guide.text}</p>
                <span>Read guide →</span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <a className="primary-btn" href="/blog">
              View all personal finance guides
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
              before making a choice. FinanceCalcHub tools are designed to
              provide quick educational estimates for income, debt, home buying,
              savings, retirement and beginner investing topics.
            </p>

            <h3>Built for clarity</h3>

            <p>
              Each calculator focuses on simple inputs and clear results so users
              can understand the estimate without needing advanced financial
              knowledge.
            </p>

            <h3>Easy to compare related tools</h3>

            <p>
              Related calculators, category pages and educational guides help
              users move between paycheck, mortgage, loan, savings, retirement
              and investing topics so they can compare different financial
              scenarios more easily.
            </p>

            <h3>How our estimates should be used</h3>

            <p>
              FinanceCalcHub is designed for planning and education. The
              calculators can help you compare scenarios, understand rough costs
              and ask better questions before making financial decisions.
            </p>

            <p>
              For example, a paycheck calculator can help estimate take-home
              pay, but your actual paycheck may depend on your W-4, benefits,
              deductions, employer payroll settings and state or local rules. A
              mortgage calculator can estimate a monthly payment, but your real
              payment may depend on lender terms, property taxes, insurance,
              HOA fees and closing costs.
            </p>

            <h3>Why we include educational guides</h3>

            <p>
              Some money questions cannot be answered by a calculator alone.
              That is why FinanceCalcHub also includes plain-language guides for
              salary, mortgage, debt, savings, retirement and beginner investing
              topics.
            </p>

            <h3>Important disclaimer</h3>

            <p>
              These calculators and guides provide educational estimates only.
              They are not financial, tax, legal, mortgage, payroll, insurance
              or investment advice. Actual results may vary based on your
              location, tax situation, lender, employer, deductions, fees and
              other personal factors.
            </p>

            <p>
              Before making important decisions, verify the numbers with a
              qualified professional or official source.
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
              may vary. You can read more about our assumptions on the{' '}
              <a href="/methodology">Methodology</a> page.
            </p>

            <h3>Can I use these calculators for tax advice?</h3>

            <p>
              No. The calculators and guides are not tax, legal, financial,
              mortgage, payroll, insurance or investment advice. Always verify
              important decisions with a qualified professional or official
              source.
            </p>

            <h3>Which calculator should I start with?</h3>

            <p>
              If you want to estimate income, start with the paycheck calculator.
              If you are comparing home costs, start with the mortgage
              calculator. If you want to compare long-term savings or investing
              assumptions, try the compound interest or investment return
              calculator. To compare all tools, visit the all calculators page.
            </p>

            <h3>Does FinanceCalcHub recommend specific investments?</h3>

            <p>
              No. FinanceCalcHub does not recommend specific stocks, funds,
              brokers or investment strategies. Investing content is educational
              only and is intended to help beginners understand basic concepts
              before making their own decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
