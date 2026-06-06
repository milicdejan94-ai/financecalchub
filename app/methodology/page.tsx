import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Methodology | FinanceCalcHub',
  description:
    'Learn how FinanceCalcHub calculators work, what assumptions they use, and why results are educational estimates only.',
};

export default function MethodologyPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Methodology' },
          ]}
        />

        <p className="eyebrow">Calculator methodology</p>

        <h1>How FinanceCalcHub Calculators Work</h1>

        <p>
          FinanceCalcHub provides free educational calculators designed to help
          users estimate common personal finance numbers such as paycheck
          amounts, mortgage payments, loan payments, debt payoff timelines,
          savings growth and retirement projections.
        </p>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Educational estimates, not professional advice</h2>

          <p>
            Our calculators are built to provide simplified estimates. They are
            not financial, tax, legal, mortgage, insurance, accounting or
            investment advice. Real-world results may vary based on your personal
            situation, local rules, lender requirements, payroll settings, tax
            credits, deductions, insurance costs and other factors.
          </p>

          <h2>Paycheck and salary calculators</h2>

          <p>
            Paycheck calculators estimate take-home pay by subtracting common
            payroll items such as estimated federal income tax, Social Security,
            Medicare, state tax, retirement contributions and selected
            deductions. These tools use simplified assumptions and do not fully
            replace official payroll software, IRS withholding tables or a tax
            professional.
          </p>

          <p>
            Actual paychecks can differ because of W-4 settings, filing status,
            dependents, pre-tax benefits, post-tax deductions, local taxes,
            bonuses, overtime, tax credits and employer-specific payroll rules.
          </p>

          <h2>Mortgage calculators</h2>

          <p>
            Mortgage calculators estimate monthly housing costs using inputs such
            as home price, down payment, interest rate, loan term, property tax,
            homeowners insurance, PMI, HOA fees and maintenance assumptions.
          </p>

          <p>
            Actual mortgage payments may vary because of lender fees, escrow
            rules, changing property taxes, insurance premiums, HOA rules, PMI
            requirements, local taxes and loan-specific terms.
          </p>

          <h2>Loan and debt payoff calculators</h2>

          <p>
            Loan calculators estimate payments using standard amortization
            formulas based on loan amount, interest rate and loan term. Debt
            payoff tools estimate payoff timelines based on balances, interest
            rates and monthly payments.
          </p>

          <p>
            Actual results may vary if interest rates change, fees are added,
            payments are missed, extra payments are made, or lenders apply
            payments differently.
          </p>

          <h2>Savings, investment and retirement calculators</h2>

          <p>
            Savings and retirement calculators use growth assumptions entered by
            the user, such as contribution amounts, time horizon and expected
            return. These tools are for planning and education only.
          </p>

          <p>
            Investment returns are not guaranteed. Future performance can be
            higher or lower than assumed, and taxes, fees, inflation, market
            volatility and withdrawal rules can affect real results.
          </p>

          <h2>Why numbers may differ from other calculators</h2>

          <p>
            Different calculators may use different assumptions, rounding methods,
            tax estimates, rate assumptions and cost categories. FinanceCalcHub
            focuses on simple, easy-to-understand estimates rather than exact
            professional calculations.
          </p>

          <h2>Before making financial decisions</h2>

          <p>
            Before making major financial decisions, consider reviewing your
            numbers with a qualified professional such as a tax advisor,
            financial planner, mortgage lender, insurance professional or legal
            advisor.
          </p>

          <h2>Report an issue</h2>

          <p>
            If you notice an error, outdated assumption or confusing result,
            please contact us at contact@financecalchub.com so we can review it.
          </p>
        </div>
      </div>
    </section>
  );
}