import Link from "next/link";

const housingLinks = [
  {
    title: "Mortgage payment by amount",
    href: "/mortgage-payment",
  },
  {
    title: "Mortgage affordability",
    href: "/calculators/mortgage-affordability",
  },
  {
    title: "Rent vs buy",
    href: "/calculators/rent-vs-buy",
  },
  {
    title: "Down payment planning",
    href: "/calculators/down-payment",
  },
];

export default function HousingSpotlight() {
  return (
    <section className="portal-section portal-housing-section">
      <div className="container portal-housing-grid">
        <div className="portal-housing-content">
          <p className="portal-eyebrow portal-eyebrow-light">
            Growing topic: housing and real estate
          </p>

          <h2>Renting, buying and understanding the true cost of a home.</h2>

          <p>
            FinanceCalcHub will expand its housing coverage with renter
            experiences, lease questions, deposits, rent increases, first-time
            home buying, property costs, mortgage decisions and real-estate
            professionals.
          </p>

          <Link
            className="portal-button portal-button-light"
            href="/mortgage-payment"
          >
            Explore current housing resources
          </Link>
        </div>

        <div className="portal-housing-links">
          {housingLinks.map((item, index) => (
            <Link href={item.href} key={item.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <b>→</b>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
