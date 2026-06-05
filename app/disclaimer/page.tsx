import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Disclaimer',
  description:
    'Disclaimer for FinanceCalcHub financial calculators and educational content.',
};

export default function DisclaimerPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Disclaimer' },
          ]}
        />

        <div className="content-box">
          <p className="eyebrow">Disclaimer</p>

          <h1>Disclaimer</h1>

          <p>
            FinanceCalcHub provides calculators, articles and financial
            education content for informational and educational purposes only.
          </p>

          <h2>Not professional advice</h2>

          <p>
            We are not a financial advisor, tax advisor, accountant, attorney,
            lender, broker, insurance provider, payroll provider or investment
            advisor. Nothing on this website should be considered financial,
            tax, legal, accounting, mortgage, lending, credit, payroll, banking
            or investment advice.
          </p>

          <h2>Calculator results are estimates</h2>

          <p>
            Calculator results are estimates based on user inputs and simplified
            assumptions. Actual results may vary based on tax laws, state rules,
            lender requirements, interest rates, fees, deductions, insurance,
            credit profile, income, market returns and other personal factors.
          </p>

          <h2>No guarantee of accuracy</h2>

          <p>
            We make reasonable efforts to provide useful educational information,
            but we do not guarantee that all content is accurate, complete,
            current or suitable for your situation.
          </p>

          <h2>No financial decisions based only on this website</h2>

          <p>
            You should not make important financial, tax, mortgage, credit,
            legal, payroll, investment or retirement decisions based only on this
            website. Always verify important information with qualified
            professionals.
          </p>

          <h2>Advertising and third-party content</h2>

          <p>
            This website may display advertisements or link to third-party
            websites. We are not responsible for third-party content, offers,
            products, services or claims.
          </p>

          <h2>Use at your own risk</h2>

          <p>
            By using FinanceCalcHub, you understand that you use the calculators
            and content at your own risk.
          </p>

          <h2>Contact</h2>

          <p>
            If you have questions about this disclaimer, contact us at{' '}
            <strong>contact@financecalchub.com</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}