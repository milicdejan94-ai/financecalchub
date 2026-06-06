import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedCalculators from '../../components/RelatedCalculators';

export const metadata = {
  title: 'Contact FinanceCalcHub',
  description:
    'Contact FinanceCalcHub for questions, suggestions, corrections or feedback about our free financial calculators.',
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Contact' },
          ]}
        />

        <div className="content-box">
          <p className="eyebrow">Contact</p>

          <h1>Contact FinanceCalcHub</h1>

          <p>
            If you have questions, suggestions, corrections or feedback about
            FinanceCalcHub, you can contact us by email.
          </p>

          <p>
            Email: <strong>contact@financecalchub.com</strong>
          </p>

          <h2>What you can contact us about</h2>

          <ul>
            <li>Suggestions for new calculators</li>
            <li>Feedback about existing calculators</li>
            <li>Possible errors or confusing calculator results</li>
            <li>Outdated assumptions or missing cost categories</li>
            <li>Website issues, broken links or technical problems</li>
            <li>General questions about FinanceCalcHub</li>
          </ul>

          <h2>Before contacting us</h2>

          <p>
            Please include the page URL, the numbers you entered and a short
            description of the issue or suggestion. This helps us review the
            calculator or page more quickly.
          </p>

          <h2>Professional advice</h2>

          <p>
            FinanceCalcHub does not provide personal financial, tax, legal,
            mortgage, credit, payroll, insurance or investment advice. Our
            calculators and articles are educational estimates only.
          </p>

          <p>
            If you need advice about your specific financial situation, please
            contact a qualified professional such as a tax advisor, financial
            planner, mortgage lender, attorney, accountant or insurance
            professional.
          </p>

          <h2>Useful pages</h2>

          <p>
            You may also want to review our <a href="/methodology">Methodology</a>{' '}
            page and <a href="/disclaimer">Disclaimer</a> page to understand how
            calculator results are created and what limitations apply.
          </p>
        </div>

        <RelatedCalculators
          title="Popular tools"
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
              title: 'Debt Payoff Calculator',
              href: '/calculators/debt-payoff',
            },
            {
              title: '401k Calculator',
              href: '/calculators/401k',
            },
            {
              title: 'Blog',
              href: '/blog',
            },
          ]}
        />
      </div>
    </section>
  );
}