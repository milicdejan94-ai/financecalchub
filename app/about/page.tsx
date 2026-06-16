import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'About FinanceCalcHub | Free US Financial Calculators',
  description:
    'Learn about FinanceCalcHub, a free US financial calculator website built to help users estimate paychecks, salary after taxes, hourly wages, mortgage payments, loans, savings, debt payoff and retirement planning.',
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'About' },
          ]}
        />

        <div className="content-box">
          <p className="eyebrow">About FinanceCalcHub</p>

          <h1>About FinanceCalcHub</h1>

          <p>
            FinanceCalcHub is a free financial calculator website built to help
            users in the United States estimate common personal finance numbers
            more easily. The site focuses on practical questions about income,
            taxes, hourly wages, salary after taxes, mortgage payments, debt,
            savings and retirement planning.
          </p>

          <p>
            Many financial decisions begin with a simple question: What will my
            paycheck be after taxes? How much is $25 an hour per year? How much
            is a $70,000 salary after taxes? What would a $300,000 mortgage
            payment look like? How long will it take to pay off debt? How much
            could savings or retirement contributions grow over time?
          </p>

          <p>
            FinanceCalcHub was created to make those questions easier to explore
            with calculators, examples and beginner-friendly financial guides.
            The goal is not to replace professional advice, but to give users a
            clearer starting point before they make larger financial decisions.
          </p>

          <h2>What FinanceCalcHub offers</h2>

          <p>
            The website focuses on everyday personal finance topics that many
            people search for when planning their budget, comparing income,
            buying a home, paying off debt or saving for the future.
          </p>

          <ul>
            <li>
              <a href="/calculators/paycheck">
                Paycheck and take-home pay calculators
              </a>
            </li>
            <li>
              <a href="/salary-after-tax">
                Salary after tax calculators for common income amounts
              </a>
            </li>
            <li>
              <a href="/hourly-wage">
                Hourly wage to salary calculators
              </a>
            </li>
            <li>
              <a href="/salary-calculator">
                Salary, hourly and annual income calculators
              </a>
            </li>
            <li>
              <a href="/paycheck-calculator">
                State-based paycheck calculator pages for US workers
              </a>
            </li>
            <li>
              <a href="/calculators/mortgage">
                Mortgage payment and home affordability calculators
              </a>
            </li>
            <li>
              <a href="/mortgage-payment">
                Mortgage payment calculators by loan amount
              </a>
            </li>
            <li>
              <a href="/calculators/loan">
                Loan, APR and auto loan calculators
              </a>
            </li>
            <li>
              <a href="/calculators/debt-payoff">
                Debt payoff and credit card payoff calculators
              </a>
            </li>
            <li>
              <a href="/calculators/savings">
                Savings, compound interest and investment return calculators
              </a>
            </li>
            <li>
              <a href="/calculators/401k">
                Retirement and 401(k) planning calculators
              </a>
            </li>
          </ul>

          <h2>Who the site is for</h2>

          <p>
            FinanceCalcHub is built for everyday users who want to understand
            financial numbers before taking the next step. This includes workers
            comparing salary offers, hourly employees estimating annual pay,
            home buyers reviewing mortgage costs, people paying down debt and
            anyone trying to plan savings or retirement contributions.
          </p>

          <p>
            The calculators are intended to be simple enough for beginners while
            still being useful for quick scenario testing. Users can adjust
            inputs, compare results and move between related tools to better
            understand the numbers behind a financial decision.
          </p>

          <h2>How the calculators should be used</h2>

          <p>
            FinanceCalcHub calculators are best used as educational planning
            tools. They can help users create rough estimates, compare different
            scenarios and understand how changes in income, interest rates,
            taxes, deductions, down payments or monthly contributions may affect
            the result.
          </p>

          <p>
            For example, a user might compare a gross salary with estimated
            after-tax pay, test how a different mortgage amount changes the
            monthly payment, or see how extra debt payments may affect payoff
            time.
          </p>

          <h2>What FinanceCalcHub does not do</h2>

          <p>
            FinanceCalcHub does not provide personalized financial advice. The
            site does not prepare tax returns, approve loans, recommend specific
            investments, provide legal advice or guarantee any financial result.
            Calculator outputs are estimates only and should be verified before
            being used for important decisions.
          </p>

          <h2>Educational estimates only</h2>

          <p>
            The calculators and articles on FinanceCalcHub are for educational
            and informational purposes only. They are not a replacement for
            professional financial, tax, legal, mortgage, payroll, insurance,
            accounting or investment advice.
          </p>

          <p>
            Actual results may vary depending on tax rules, state and local laws,
            lender requirements, credit profile, fees, insurance, deductions,
            investment returns, payroll settings, employer benefits and other
            personal factors.
          </p>

          <h2>How calculator results are created</h2>

          <p>
            Calculator results are based on user inputs and simplified financial
            assumptions. Some calculators use common default values to make
            quick estimates easier, while others allow users to change inputs
            such as income, tax rate, interest rate, loan term, contribution
            amount or savings goal.
          </p>

          <p>
            Because every financial situation is different, calculator results
            should be treated as estimates rather than exact numbers. You can
            read more about our calculation approach on the{' '}
            <a href="/methodology">Methodology</a> page.
          </p>

          <h2>How we keep the site useful</h2>

          <p>
            FinanceCalcHub is organized around common financial questions and
            related calculators. We add supporting guides, internal links and
            explanation sections so users can understand not only the result, but
            also the main factors behind the estimate.
          </p>

          <p>
            If a calculator or article could be clearer, we aim to improve the
            explanation, add related tools and make the page easier to use. The
            website is designed to be a practical starting point for learning,
            not a final authority for tax, mortgage, legal or investment
            decisions.
          </p>

          <h2>Our goal</h2>

          <p>
            Our goal is to help users understand the numbers behind financial
            decisions before they act. Clear calculators and simple explanations
            can make personal finance easier to understand, especially when
            users compare multiple scenarios before making a decision.
          </p>

          <h2>Feedback and corrections</h2>

          <p>
            If you notice an issue, outdated assumption, confusing result or
            broken link, you can contact us at{' '}
            <strong>contact@financecalchub.com</strong>.
          </p>

          <p>
            You can also visit the <a href="/contact">Contact</a> page for more
            information.
          </p>

          <h2>Important disclaimer</h2>

          <p>
            Before making important financial, tax, mortgage, legal, payroll,
            insurance or investment decisions, users should verify information
            and consult a qualified professional who understands their specific
            situation.
          </p>
        </div>

        <RelatedCalculators
          title="Explore FinanceCalcHub"
          tools={[
            {
              title: 'All Financial Calculators',
              href: '/calculators',
            },
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
            {
              title: 'Methodology',
              href: '/methodology',
            },
          ]}
        />
      </div>
    </section>
  );
}