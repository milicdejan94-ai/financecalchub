export default function CalculatorShell({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return <main className="container">
    <section className="hero" style={{paddingBottom:20}}>
      <span className="badge">US finance calculator</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
    {children}
  </main>;
}
