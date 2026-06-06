import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'About FinanceCalcHub',
  description:
    'Learn about FinanceCalcHub, a free US financial calculator website built to help users estimate paychecks, mortgage payments, loans, savings and retirement planning.',
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
            more easily. Our tools are designed for people who want quick,
            simple and educational estimates before making larger financial
            decisions.
          </p>

          <p>
            Many financial decisions start with a simple question: What will my
            paycheck be after taxes? How much house can I afford? What would a
            loan payment look like? How long will it take to pay off debt? How
            much could my savings grow over time?
          </p>

          <p>
            FinanceCalcHub was created to make those questions easier to explore
            with calculators that are simple to use and supported by clear
            explanations.
          </p>

          <h2>What FinanceCalcHub offers</h2>

          <p>
            The website focuses on everyday personal finance topics, including
            income, home buying, loans, debt, savings and retirement planning.
          </p>

          <ul>
            <li>Paycheck and take-home pay calculators</li>
            <li>Salary, hourly and overtime calculators</li>
            <li>Mortgage payment and home affordability calculators</li>
            <li>Loan, APR and debt payoff calculators</li>
            <li>Credit card payoff calculators</li>
            <li>Savings, compound interest and investment return calculators</li>
            <li>Retirement and 401(k) planning calculators</li>
            <li>State-based paycheck calculator pages for US workers</li>
          </ul>

          <h2>Who the site is for</h2>

          <p>
            FinanceCalcHub is built for everyday users who want to understand
            financial numbers before taking the next step. This includes workers
            comparing salary offers, home buyers estimating mortgage payments,
            people paying down debt, and anyone trying to plan savings or
            retirement contributions.
          </p>

          <h2>Educational estimates only</h2>

          <p>
            The calculators and articles on FinanceCalcHub are for educational
            and informational purposes only. They are not a replacement for
            professional financial, tax, legal, mortgage, payroll, insurance,
            accounting or investment advice.
          </p>

          <h2>How calculator results are created</h2>

          <p>
            Calculator results are based on user inputs and simplified financial
            assumptions. Actual results may vary depending on tax rules, state
            laws, lender requirements, credit profile, fees, insurance,
            deductions, investment returns, payroll settings and other personal
            factors.
          </p>

          <p>
            You can read more about our calculation approach on the{' '}
            <a href="/methodology">Methodology</a> page.
          </p>

          <h2>Our goal</h2>

          <p>
            Our goal is to help users understand the numbers behind financial
            decisions. We believe that clear calculators can make personal
            finance easier to understand, especially when users compare multiple
            scenarios before making a decision.
          </p>

          <h2>Feedback and corrections</h2>

          <p>
            If you notice an issue, outdated assumption, confusing result or
            broken link, you can contact us at{' '}
            <strong>contact@financecalchub.com</strong>.
          </p>

          <h2>Important disclaimer</h2>

          <p>
            Before making important financial decisions, users should verify
            information and consult a qualified professional who understands
            their specific situation.
          </p>
        </div>

        <RelatedCalculators
          title="Explore our calculators"
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
              title: 'Mortgage Calculator',
              href: '/calculators/mortgage',
            },
            {
              title: 'Mortgage Affordability Calculator',
              href: '/calculators/mortgage-affordability',
            },
            {
              title: 'Loan Calculator',
              href: '/calculators/loan',
            },
            {
              title: 'Debt Payoff Calculator',
              href: '/calculators/debt-payoff',
            },
            {
              title: 'Retirement Calculator',
              href: '/calculators/retirement',
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