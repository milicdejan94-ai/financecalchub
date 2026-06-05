import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'About FinanceCalcHub',
  description:
    'Learn about FinanceCalcHub, a free financial calculator website built for educational estimates for US users.',
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
            FinanceCalcHub provides free financial calculators for users in the
            United States. Our goal is to make everyday financial estimates
            easier to understand with simple tools, clear explanations and
            practical examples.
          </p>

          <p>
            The website focuses on common personal finance topics such as
            paycheck estimates, salary breakdowns, mortgage payments, loan costs,
            debt payoff, savings growth and retirement planning.
          </p>

          <h2>What we offer</h2>

          <p>
            FinanceCalcHub includes calculators for income, home buying, loans,
            debt, savings and retirement. Each calculator is designed to be fast,
            simple and educational.
          </p>

          <ul>
            <li>Paycheck and salary calculators</li>
            <li>Mortgage and home affordability calculators</li>
            <li>Loan, APR and debt payoff calculators</li>
            <li>Savings, compound interest and retirement calculators</li>
            <li>State paycheck calculator pages for US workers</li>
          </ul>

          <h2>Educational estimates only</h2>

          <p>
            The calculators and articles on FinanceCalcHub are for educational
            and informational purposes only. They are not a replacement for
            professional financial, tax, legal, mortgage, payroll or investment
            advice.
          </p>

          <h2>How calculator results are created</h2>

          <p>
            Calculator results are based on user inputs and simplified financial
            assumptions. Actual results may vary depending on tax rules, state
            laws, lender requirements, credit profile, fees, insurance,
            deductions, investment returns and other personal factors.
          </p>

          <h2>Our goal</h2>

          <p>
            Our goal is to help users quickly compare financial scenarios before
            making deeper decisions. We believe simple calculators can make
            personal finance easier to understand.
          </p>

          <h2>Important disclaimer</h2>

          <p>
            Before making important financial decisions, users should consult a
            qualified professional who understands their specific situation.
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
          ]}
        />
      </div>
    </section>
  );
}