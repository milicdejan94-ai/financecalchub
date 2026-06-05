import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Terms of Use',
  description:
    'Terms of Use for FinanceCalcHub, including educational use, no professional advice and limitation of liability.',
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Terms of Use' },
          ]}
        />

        <div className="content-box">
          <p className="eyebrow">Terms of Use</p>

          <h1>Terms of Use</h1>

          <p>Last updated: May 27, 2026</p>

          <p>
            By using FinanceCalcHub, you agree to these Terms of Use. If you do
            not agree with these terms, please do not use this website.
          </p>

          <h2>Use of this website</h2>

          <p>
            FinanceCalcHub provides calculators, articles and general educational
            information for users who want to estimate common financial scenarios.
            You agree to use this website only for lawful and informational
            purposes.
          </p>

          <h2>Educational information only</h2>

          <p>
            The calculators, articles and content on this website are provided
            for educational and informational purposes only. They do not
            constitute financial, tax, legal, accounting, mortgage, credit,
            payroll, banking or investment advice.
          </p>

          <h2>No professional relationship</h2>

          <p>
            Use of FinanceCalcHub does not create a professional, advisor-client,
            attorney-client, accountant-client, lender-borrower or fiduciary
            relationship.
          </p>

          <h2>No guarantees</h2>

          <p>
            We do not guarantee that calculator results, articles or other
            information on this website are complete, accurate, current or
            suitable for your specific situation. Results are based on simplified
            assumptions and user inputs.
          </p>

          <h2>User responsibility</h2>

          <p>
            You are responsible for verifying information before making financial
            decisions. For important decisions, consult a qualified professional
            who understands your specific circumstances.
          </p>

          <h2>Third-party links</h2>

          <p>
            FinanceCalcHub may include links to third-party websites. We are not
            responsible for the content, privacy practices, accuracy or policies
            of external websites.
          </p>

          <h2>Advertising</h2>

          <p>
            This website may display advertisements. Advertising does not
            represent professional advice or an endorsement of any specific
            financial product, service, company or provider.
          </p>

          <h2>Limitation of liability</h2>

          <p>
            FinanceCalcHub is not responsible for losses, damages, costs or
            decisions made based on calculator results, articles or information
            found on this website.
          </p>

          <h2>Changes to these terms</h2>

          <p>
            We may update these Terms of Use from time to time. Continued use of
            the website means you accept the updated terms.
          </p>

          <h2>Contact</h2>

          <p>
            For questions about these terms, contact us at{' '}
            <strong>contact@financecalchub.com</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}