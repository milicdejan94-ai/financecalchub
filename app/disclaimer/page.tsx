import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Disclaimer | FinanceCalcHub',
  description:
    'Disclaimer for FinanceCalcHub financial calculators, educational estimates and informational content.',
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
            FinanceCalcHub provides financial calculators, articles and
            educational content for informational and educational purposes only.
            By using this website, you understand and agree that the information
            provided is not professional advice.
          </p>

          <h2>Not professional advice</h2>

          <p>
            FinanceCalcHub is not a financial advisor, tax advisor, accountant,
            attorney, mortgage lender, broker, insurance provider, payroll
            provider, credit counselor or investment advisor.
          </p>

          <p>
            Nothing on this website should be considered financial, tax, legal,
            accounting, mortgage, lending, credit, payroll, banking, insurance,
            retirement or investment advice.
          </p>

          <h2>Calculator results are estimates</h2>

          <p>
            Calculator results are estimates based on user inputs and simplified
            assumptions. Actual results may vary based on federal, state and
            local tax rules, lender requirements, interest rates, fees,
            deductions, insurance premiums, credit profile, income, benefits,
            payroll settings, market returns and other personal factors.
          </p>

          <h2>No guarantee of accuracy or completeness</h2>

          <p>
            We make reasonable efforts to provide useful educational information,
            but we do not guarantee that all calculators, formulas, assumptions,
            articles or results are accurate, complete, current or suitable for
            your specific situation.
          </p>

          <h2>Tax and payroll estimates</h2>

          <p>
            Paycheck, salary and tax-related calculators are simplified planning
            tools. They may not fully reflect IRS withholding tables, W-4
            settings, tax credits, deductions, local taxes, state-specific rules,
            payroll benefits, employer rules, bonuses, overtime or other
            individual tax factors.
          </p>

          <h2>Mortgage and loan estimates</h2>

          <p>
            Mortgage, affordability, refinance, loan and debt calculators are
            simplified estimates. Actual payments and approval decisions may
            depend on lender rules, credit history, escrow requirements, property
            taxes, homeowners insurance, PMI, HOA fees, lender fees, closing
            costs, loan type and other factors.
          </p>

          <h2>Investment and retirement estimates</h2>

          <p>
            Savings, investment, compound interest, 401(k) and retirement
            calculators use assumptions entered by the user. Investment returns
            are not guaranteed. Real results can be affected by taxes, fees,
            inflation, market volatility, contribution changes and withdrawal
            timing.
          </p>

          <h2>No financial decisions based only on this website</h2>

          <p>
            You should not make important financial, tax, mortgage, credit,
            legal, payroll, insurance, investment or retirement decisions based
            only on FinanceCalcHub. Always verify important information with
            qualified professionals and official sources.
          </p>

          <h2>External links, advertising and third-party content</h2>

          <p>
            This website may display advertisements or link to third-party
            websites. FinanceCalcHub is not responsible for third-party content,
            offers, products, services, claims, privacy practices or accuracy.
          </p>

          <h2>Use at your own risk</h2>

          <p>
            By using FinanceCalcHub, you understand that you use the calculators,
            tools and content at your own risk.
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