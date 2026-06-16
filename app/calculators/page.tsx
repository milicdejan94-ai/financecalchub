import Breadcrumbs from '../../components/Breadcrumbs';

const calculatorGroups = [
  {
    category: 'Paycheck & Salary Calculators',
    description:
      'Estimate take-home pay, hourly wages, overtime pay, salary after taxes and salary conversions.',
    tools: [
      {
        title: 'Paycheck Calculator',
        description:
          'Estimate take-home pay after federal tax, Social Security, Medicare and state tax.',
        href: '/calculators/paycheck',
      },
      {
        title: 'Federal Tax Calculator',
        description:
          'Estimate US federal income tax based on income, filing status and standard deduction assumptions.',
        href: '/calculators/federal-tax',
      },
      {
        title: 'Salary After Tax Calculators',
        description:
          'Estimate after-tax income for common US salary amounts like $50k, $70k and $100k.',
        href: '/salary-after-tax',
      },
      {
        title: 'Hourly Wage to Salary Calculators',
        description:
          'Convert hourly wages like $20, $25 or $30 per hour into yearly, monthly and paycheck estimates.',
        href: '/hourly-wage',
      },
      {
        title: 'Hourly Paycheck Calculator',
        description:
          'Estimate weekly, biweekly and monthly take-home pay from hourly wages.',
        href: '/calculators/hourly-paycheck',
      },
      {
        title: 'Overtime Calculator',
        description:
          'Estimate overtime pay using hourly wage, overtime hours and overtime rate.',
        href: '/calculators/overtime',
      },
      {
        title: 'Salary To Hourly Calculator',
        description: 'Convert annual salary into estimated hourly wage.',
        href: '/calculators/salary-to-hourly',
      },
      {
        title: 'Salary Calculator by Income',
        description:
          'Estimate take-home pay for common annual salary amounts.',
        href: '/salary-calculator',
      },
      {
        title: 'Paycheck Calculators by State',
        description: 'Estimate take-home pay by US state.',
        href: '/paycheck-calculator',
      },
    ],
  },
  {
    category: 'Mortgage & Home Calculators',
    description:
      'Estimate home payments, refinance savings, affordability and mortgage payoff scenarios.',
    tools: [
      {
        title: 'Mortgage Calculator',
        description:
          'Estimate monthly mortgage payments including principal, interest, taxes and insurance.',
        href: '/calculators/mortgage',
      },
      {
        title: 'Mortgage Payment by Amount',
        description:
          'Estimate monthly payments for common mortgage amounts like $300k, $400k, $500k and more.',
        href: '/mortgage-payment',
      },
      {
        title: 'Mortgage Affordability Calculator',
        description:
          'Estimate how much house you may be able to afford based on income, debt and housing costs.',
        href: '/calculators/mortgage-affordability',
      },
      {
        title: 'Refinance Calculator',
        description:
          'Estimate refinance savings, new payment and break-even time.',
        href: '/calculators/refinance',
      },
      {
        title: 'Rent vs Buy Calculator',
        description:
          'Compare estimated renting costs with home buying costs.',
        href: '/calculators/rent-vs-buy',
      },
      {
        title: 'Down Payment Calculator',
        description:
          'Estimate down payment amount, loan amount and common down payment options.',
        href: '/calculators/down-payment',
      },
      {
        title: 'Amortization Calculator',
        description:
          'Estimate monthly payment, total interest and yearly amortization schedule.',
        href: '/calculators/amortization',
      },
      {
        title: 'Extra Mortgage Payment Calculator',
        description:
          'Estimate interest savings and payoff time from extra mortgage payments.',
        href: '/calculators/extra-mortgage-payment',
      },
    ],
  },
  {
    category: 'Loan & Debt Calculators',
    description:
      'Estimate loan payments, auto loan costs, APR, credit card payoff and debt repayment.',
    tools: [
      {
        title: 'Loan Calculator',
        description:
          'Estimate monthly loan payment, total interest and total repayment.',
        href: '/calculators/loan',
      },
      {
        title: 'Car Loan Calculator',
        description:
          'Estimate monthly auto loan payments based on vehicle price, down payment, rate and term.',
        href: '/calculators/car-loan',
      },
      {
        title: 'APR Calculator',
        description:
          'Estimate annual percentage rate using loan amount, fees and term.',
        href: '/calculators/apr',
      },
      {
        title: 'Debt Payoff Calculator',
        description: 'Estimate how long it may take to pay off debt.',
        href: '/calculators/debt-payoff',
      },
      {
        title: 'Credit Card Payoff Calculator',
        description:
          'Estimate credit card payoff time and interest paid.',
        href: '/calculators/credit-card-payoff',
      },
    ],
  },
  {
    category: 'Savings & Retirement Calculators',
    description:
      'Estimate long-term savings, retirement growth, 401k contributions and compound interest.',
    tools: [
      {
        title: 'Retirement Calculator',
        description:
          'Estimate future retirement savings based on age, savings, contributions and return.',
        href: '/calculators/retirement',
      },
      {
        title: '401k Calculator',
        description:
          'Estimate future 401k savings using salary, contribution rate, employer match and return.',
        href: '/calculators/401k',
      },
      {
        title: 'Compound Interest Calculator',
        description:
          'Estimate investment growth with compound interest and monthly contributions.',
        href: '/calculators/compound-interest',
      },
      {
        title: 'Investment Return Calculator',
        description:
          'Estimate future investment value based on contributions, return rate and time.',
        href: '/calculators/investment-return',
      },
      {
        title: 'Savings Calculator',
        description:
          'Estimate future savings with monthly deposits and interest.',
        href: '/calculators/savings',
      },
    ],
  },
];

const popularCalculatorGuides = [
  {
    title: '$70,000 After Tax Calculator',
    description:
      'Estimate annual, monthly, biweekly and weekly after-tax pay for a $70,000 salary.',
    href: '/salary-after-tax/70000',
  },
  {
    title: '$100,000 After Tax Calculator',
    description:
      'Estimate how much a $100,000 salary may be after federal tax, payroll taxes and estimated state tax.',
    href: '/salary-after-tax/100000',
  },
  {
    title: '$25 an Hour Is How Much a Year?',
    description:
      'Convert $25 per hour into estimated yearly, monthly, weekly and after-tax pay.',
    href: '/hourly-wage/25',
  },
  {
    title: '$30 an Hour Is How Much a Year?',
    description:
      'Estimate how much $30 per hour may be per year, month, week and paycheck.',
    href: '/hourly-wage/30',
  },
  {
    title: '$300,000 Mortgage Payment',
    description:
      'Estimate the monthly payment on a $300,000 mortgage including taxes and insurance assumptions.',
    href: '/mortgage-payment/300000',
  },
  {
    title: '$400,000 Mortgage Payment',
    description:
      'Estimate the monthly payment on a $400,000 mortgage with common home buying cost assumptions.',
    href: '/mortgage-payment/400000',
  },
];

export const metadata = {
  title: 'Financial Calculators | Free US Money Tools',
  description:
    'Browse free US financial calculators for paychecks, salary after taxes, hourly wages, mortgage payments, loans, debt, savings and retirement planning.',
};

export default function CalculatorsPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators' },
          ]}
        />

        <div className="section-heading">
          <p className="eyebrow">All calculators</p>

          <h1>Financial Calculators</h1>

          <p>
            Browse free calculators for US paychecks, salary after taxes, hourly
            wages, mortgage payments, loans, debt payoff, savings, retirement and
            long-term financial planning.
          </p>
        </div>

        <div className="content-box">
          <h2>Popular calculator directories</h2>

          <p>
            Start with one of these calculator directories for common salary,
            hourly wage and mortgage payment questions.
          </p>

          <div className="grid">
            <a className="card" href="/salary-after-tax">
              <h3>Salary After Tax Calculators</h3>
              <p>
                Estimate after-tax income for common US salary amounts including
                $50k, $70k, $100k and more.
              </p>
              <span>Browse salary after tax calculators →</span>
            </a>

            <a className="card" href="/hourly-wage">
              <h3>Hourly Wage to Salary Calculators</h3>
              <p>
                Convert hourly wages into annual, monthly, weekly and paycheck
                estimates.
              </p>
              <span>Browse hourly wage calculators →</span>
            </a>

            <a className="card" href="/mortgage-payment">
              <h3>Mortgage Payment by Amount</h3>
              <p>
                Estimate monthly payments for common mortgage amounts like $300k,
                $400k and $500k.
              </p>
              <span>Browse mortgage payment calculators →</span>
            </a>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Popular calculator guides</h2>

          <p>
            These pages answer common money questions with quick estimates and
            links to related calculators.
          </p>

          <div className="grid">
            {popularCalculatorGuides.map((guide) => (
              <a className="card" href={guide.href} key={guide.href}>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <span>View estimate →</span>
              </a>
            ))}
          </div>
        </div>

        {calculatorGroups.map((group) => (
          <div
            className="content-box calculator-group"
            key={group.category}
            style={{ marginTop: 34 }}
          >
            <p className="eyebrow">{group.category}</p>

            <h2>{group.category}</h2>

            <p>{group.description}</p>

            <div className="grid">
              {group.tools.map((tool) => (
                <a className="card" href={tool.href} key={tool.href}>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                  <span>Open calculator →</span>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How to use these calculators</h2>

          <p>
            FinanceCalcHub calculators are designed for quick educational
            estimates. You can use them to compare paycheck amounts, salary after
            tax estimates, mortgage payments, loan payments, debt payoff
            timelines, savings growth and retirement scenarios.
          </p>

          <h3>Start with your question</h3>

          <p>
            If you want to understand income, start with paycheck, salary after
            tax or hourly wage tools. If you are planning to buy a home, start
            with the mortgage calculator, mortgage affordability calculator or
            mortgage payment by amount pages. If you are managing debt, start
            with debt payoff or credit card payoff calculators.
          </p>

          <h3>Important note</h3>

          <p>
            These calculators provide simplified educational estimates only. They
            are not tax, legal, payroll, mortgage, financial or investment
            advice. Actual results may vary based on your location, lender,
            employer, tax situation, deductions, fees and other personal factors.
          </p>
        </div>
      </div>
    </section>
  );
}