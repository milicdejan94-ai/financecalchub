import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedCalculators from '../../components/RelatedCalculators';

export const metadata = {
  title: 'Contact FinanceCalcHub',
  description:
    'Contact FinanceCalcHub for questions, suggestions or feedback about our free financial calculators.',
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
            If you have questions, suggestions or feedback about FinanceCalcHub,
            you can contact us by email.
          </p>

          <p>
            Email: <strong>contact@financecalchub.com</strong>
          </p>

          <h2>What you can contact us about</h2>

          <ul>
            <li>Suggestions for new calculators</li>
            <li>Feedback about existing calculators</li>
            <li>Website issues or broken links</li>
            <li>General questions about FinanceCalcHub</li>
          </ul>

          <h2>Important note</h2>

          <p>
            FinanceCalcHub does not provide personal financial, tax, legal,
            mortgage, credit, payroll or investment advice. Our calculators and
            articles are for educational estimates only.
          </p>

          <p>
            If you need advice about your specific financial situation, please
            contact a qualified professional.
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