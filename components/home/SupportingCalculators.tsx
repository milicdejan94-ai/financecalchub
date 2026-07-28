import Link from "next/link";

const calculators = [
  {
    title: "Paycheck Calculator",
    description: "Estimate take-home pay and common payroll taxes.",
    href: "/calculators/paycheck",
  },
  {
    title: "Federal Tax Calculator",
    description: "Estimate federal income tax using simplified assumptions.",
    href: "/calculators/federal-tax",
  },
  {
    title: "Mortgage Calculator",
    description: "Estimate principal, interest, taxes and insurance.",
    href: "/calculators/mortgage",
  },
  {
    title: "Debt Payoff Calculator",
    description: "Estimate a repayment timeline for outstanding debt.",
    href: "/calculators/debt-payoff",
  },
  {
    title: "Rent vs Buy Calculator",
    description: "Compare simplified renting and home-buying scenarios.",
    href: "/calculators/rent-vs-buy",
  },
  {
    title: "Investment Return Calculator",
    description: "Explore potential long-term investment growth.",
    href: "/calculators/investment-return",
  },
];

export default function SupportingCalculators() {
  return (
    <section className="portal-section portal-calculators-section">
      <div className="container">
        <div className="portal-section-header portal-section-header-row">
          <div>
            <p className="portal-eyebrow">Useful financial tools</p>
            <h2>Check the numbers behind the story.</h2>
            <p>
              Calculators support our educational content by helping readers
              test assumptions and compare simplified financial scenarios.
            </p>
          </div>

          <Link className="portal-section-link" href="/calculators">
            View all calculators →
          </Link>
        </div>

        <div className="portal-calculator-grid">
          {calculators.map((calculator) => (
            <Link
              className="portal-calculator-card"
              href={calculator.href}
              key={calculator.href}
            >
              <h3>{calculator.title}</h3>
              <p>{calculator.description}</p>
              <strong>Open tool →</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
