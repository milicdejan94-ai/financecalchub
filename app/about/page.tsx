import type { Metadata } from 'next';
import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About FinanceCalcHub | Free US Financial Calculators',
  description:
    'Learn about FinanceCalcHub, a free US financial calculator and education website for paychecks, taxes, mortgages, loans, savings, investing and retirement planning.',
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
            FinanceCalcHub is a free personal finance calculator and education
            website built for users in the United States. The site helps people
            estimate common money questions related to paychecks, salary after
            tax, hourly wages, mortgage payments, loans, debt payoff, savings,
            investing and retirement planning.
          </p>

          <p>
            The goal is simple: help users understand important financial
            numbers before they make a decision. A calculator cannot replace a
            professional advisor, lender, payroll department or tax professional,
            but it can give users a clearer starting point.
          </p>

          <p>
            Many personal finance decisions begin with practical questions: What
            could my paycheck be after taxes? How much is $25 an hour per year?
            How much might a $300,000 mortgage payment be? How long could it
            take to pay off credit card debt? How much could savings or
            retirement contributions grow over time?
          </p>

          <h2>What FinanceCalcHub offers</h2>

          <p>
            FinanceCalcHub focuses on calculators and plain-language guides for
            everyday planning. Users can compare estimates, adjust assumptions
            and move between related tools to better understand the main factors
            behind a financial result.
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
              <a href="/hourly-wage">Hourly wage to salary calculators</a>
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
              <a href="/calculators/loan">Loan, APR and auto loan calculators</a>
            </li>
            <li>
              <a href="/calculators/debt-payoff">
                Debt payoff and credit card payoff calculators
              </a>
            </li>
            <li>
              <a href="/calculators/savings">
                Savings and compound interest calculators
              </a>
            </li>
            <li>
              <a href="/calculators/investment-return">
                Investment return calculators for hypothetical planning
              </a>
            </li>
            <li>
              <a href="/calculators/401k">
                Retirement and 401(k) planning calculators
              </a>
            </li>
            <li>
              <a href="/investing">
                Beginner investing guides for stocks, ETFs, risk and taxes
              </a>
            </li>
          </ul>

          <h2>Who the site is for</h2>

          <p>
            FinanceCalcHub is built for everyday users who want to understand
            financial numbers before taking the next step. This includes workers
            comparing salary offers, hourly employees estimating annual pay,
            home buyers reviewing mortgage costs, borrowers planning debt payoff
            and people trying to plan savings, retirement or beginner investing
            decisions.
          </p>

          <p>
            The calculators are intentionally simple. They are designed to help
            users test scenarios quickly, not to replace full professional
            financial analysis.
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
            For example, a user might compare gross salary with estimated
            after-tax pay, test how a different mortgage amount changes the
            monthly payment, or see how extra debt payments may affect payoff
            time.
          </p>

          <h2>How calculator results are created</h2>

          <p>
            Calculator results are based on user inputs, standard formulas where
            appropriate and simplified assumptions. Some calculators use common
            default values to make quick estimates easier, while others allow
            users to change inputs such as income, tax rate, interest rate, loan
            term, contribution amount or savings goal.
          </p>

          <p>
            Because every financial situation is different, calculator results
            should be treated as estimates rather than exact numbers. You can
            read more about our calculation approach on the{' '}
            <a href="/methodology">Methodology</a> page.
          </p>

          <h2>Editorial approach</h2>

          <p>
            FinanceCalcHub pages are written to be practical, clear and useful
            for non-experts. We aim to explain what each calculator does, what
            the result means, which assumptions matter and when a user should
            verify information with an official source or qualified
            professional.
          </p>

          <p>
            When we improve the site, we focus on clearer explanations, better
            calculator usability, stronger examples, updated assumptions and
            more helpful links between related topics.
          </p>

          <h2>What FinanceCalcHub does not do</h2>

          <p>
            FinanceCalcHub does not provide personalized financial advice. The
            site does not prepare tax returns, approve loans, recommend specific
            investments, provide legal advice, sell insurance or guarantee any
            financial result.
          </p>

          <p>
            Calculator outputs are educational estimates only and should be
            verified before being used for important financial, tax, mortgage,
            legal, payroll, insurance or investment decisions.
          </p>

          <h2>Educational estimates only</h2>

          <p>
            The calculators and guides on FinanceCalcHub are for educational and
            informational purposes only. They are not a replacement for
            professional financial, tax, legal, mortgage, payroll, insurance,
            accounting or investment advice.
          </p>

          <p>
            Actual results may vary depending on tax rules, state and local
            laws, lender requirements, credit profile, fees, insurance,
            deductions, investment returns, payroll settings, employer benefits
            and other personal factors.
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
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
            },
            {
              title: 'Federal Tax Calculator',
              href: '/calculators/federal-tax',
            },
            {
              title: 'Salary After Tax Calculators',
              href: '/salary-after-tax',
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
              title: 'Investing for Beginners',
              href: '/investing',
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
