import Breadcrumbs from '../../components/Breadcrumbs';
const calculatorGroups = [
  {
    category: 'Paycheck & Salary Calculators',
    description:
      'Estimate take-home pay, hourly wages, overtime pay and salary conversions.',
    tools: [
      {
        title: 'Paycheck Calculator',
        description:
          'Estimate take-home pay after federal tax, Social Security, Medicare and state tax.',
        href: '/calculators/paycheck',
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
        description:
          'Convert annual salary into estimated hourly wage.',
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
        description:
          'Estimate take-home pay by US state.',
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
        title: 'Refinance Calculator',
        description:
          'Estimate refinance savings, new payment and break-even time.',
        href: '/calculators/refinance',
      },
      {
        title: 'Mortgage Affordability Calculator',
        description:
          'Estimate how much house you may be able to afford.',
        href: '/calculators/mortgage-affordability',
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
        description:
          'Estimate how long it may take to pay off debt.',
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

export const metadata = {
  title: 'Financial Calculators | Free US Money Tools',
  description:
    'Browse free financial calculators for paychecks, salary, mortgage, loans, debt, savings and retirement planning.',
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
            Browse free calculators for US paychecks, salary, mortgage, loans,
            debt, savings, retirement and long-term financial planning.
          </p>
        </div>

        {calculatorGroups.map((group) => (
          <div className="content-box calculator-group" key={group.category}>
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
      </div>
    </section>
  );
}