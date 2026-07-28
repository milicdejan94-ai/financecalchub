import Link from "next/link";

const topics = [
  {
    number: "01",
    title: "Taxes and payroll",
    description:
      "Tax filing, withholding, W-2 problems, 1099 income and paycheck questions.",
    href: "/blog/real-money-stories",
  },
  {
    number: "02",
    title: "Income and careers",
    description:
      "Salary, hourly wages, overtime, benefits and understanding total compensation.",
    href: "/salary-after-tax",
  },
  {
    number: "03",
    title: "Renting and housing",
    description:
      "Rent, leases, deposits, housing costs and decisions renters face.",
    href: "/calculators/rent-vs-buy",
  },
  {
    number: "04",
    title: "Mortgages and real estate",
    description:
      "Home buying, affordability, mortgage payments, refinancing and property costs.",
    href: "/mortgage-payment",
  },
  {
    number: "05",
    title: "Debt and credit",
    description:
      "Credit cards, loans, interest, repayment plans and debt payoff strategies.",
    href: "/calculators/debt-payoff",
  },
  {
    number: "06",
    title: "Investing",
    description:
      "Stocks, ETFs, risk, capital gains and long-term investing for beginners.",
    href: "/investing",
  },
  {
    number: "07",
    title: "Retirement and savings",
    description:
      "Savings growth, compound interest, 401(k) plans and retirement preparation.",
    href: "/calculators/retirement",
  },
  {
    number: "08",
    title: "Banking and consumer issues",
    description:
      "Fees, payments, financial disputes, scams and everyday consumer problems.",
    href: "/blog",
  },
];

export default function MoneyTopics() {
  return (
    <section className="portal-section portal-topics-section">
      <div className="container">
        <div className="portal-section-header">
          <p className="portal-eyebrow">Explore money topics</p>
          <h2>Build financial knowledge one real question at a time.</h2>
          <p>
            FinanceCalcHub is expanding into a broader educational portal
            covering the financial decisions people face at work, at home and
            throughout everyday life.
          </p>
        </div>

        <div className="portal-topic-grid">
          {topics.map((topic) => (
            <Link
              className="portal-topic-card"
              href={topic.href}
              key={topic.number}
            >
              <span className="portal-topic-number">{topic.number}</span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <strong>Explore topic →</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
