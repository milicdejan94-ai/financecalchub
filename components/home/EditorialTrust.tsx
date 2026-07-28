import Link from "next/link";

const standards = [
  {
    title: "Claims remain clearly attributed",
    description:
      "Personal experiences are described as claims and are not presented as independently verified facts.",
  },
  {
    title: "Official sources support explanations",
    description:
      "Articles reference government agencies and primary sources where those materials are relevant.",
  },
  {
    title: "Stories and guidance are separated",
    description:
      "Each article distinguishes the individual experience from the broader educational explanation.",
  },
  {
    title: "Limitations are made visible",
    description:
      "Calculators and articles explain important assumptions and remind readers that personal outcomes may differ.",
  },
];

export default function EditorialTrust() {
  return (
    <section className="portal-section portal-trust-section">
      <div className="container">
        <div className="portal-section-header portal-centered-header">
          <p className="portal-eyebrow">Editorial trust</p>
          <h2>Real stories require responsible explanation.</h2>
          <p>
            Our editorial approach is designed to make financial content useful
            without turning individual experiences into unsupported claims or
            personal financial advice.
          </p>
        </div>

        <div className="portal-trust-grid">
          {standards.map((standard, index) => (
            <article key={standard.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{standard.title}</h3>
              <p>{standard.description}</p>
            </article>
          ))}
        </div>

        <div className="portal-policy-links">
          <Link href="/methodology">Methodology</Link>
          <Link href="/editorial-policy">Editorial Policy</Link>
          <Link href="/about">About FinanceCalcHub</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </section>
  );
}
