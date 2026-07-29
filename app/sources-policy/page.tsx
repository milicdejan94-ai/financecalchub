import Breadcrumbs from "../../components/Breadcrumbs";
import { EditorialResources } from "../../components/editorial";

export const metadata = {
  title: "Sources Policy | FinanceCalcHub",
  description:
    "Learn how FinanceCalcHub selects, evaluates, cites and updates official, primary, educational and public sources.",
  alternates: {
    canonical: "/sources-policy",
  },
  openGraph: {
    title: "FinanceCalcHub Sources Policy",
    description:
      "How FinanceCalcHub selects and evaluates sources for financial calculators and educational content.",
    url: "/sources-policy",
    type: "website",
    siteName: "FinanceCalcHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinanceCalcHub Sources Policy",
    description:
      "How FinanceCalcHub evaluates official, primary and educational sources.",
  },
};

export default function SourcesPolicyPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Editorial Policy", href: "/editorial-policy" },
            { label: "Sources Policy" },
          ]}
        />

        <div className="content-box">
          <p className="eyebrow">Research standards</p>

          <h1>Sources Policy</h1>

          <p className="article-hero-summary">
            FinanceCalcHub uses sources according to the type of claim, the
            authority of the publisher, the age of the information and whether
            the source directly supports the explanation being made.
          </p>

          <h2>Our preferred source hierarchy</h2>

          <p>
            When practical, FinanceCalcHub gives priority to sources closest to
            the original rule, calculation, procedure or dataset.
          </p>

          <ol>
            <li>
              <strong>Official government and regulatory sources</strong>,
              including government agencies, official forms, instructions and
              published guidance.
            </li>
            <li>
              <strong>Primary documentation</strong>, such as original
              regulations, official program material, lender documentation,
              financial disclosures or technical specifications.
            </li>
            <li>
              <strong>Established institutional sources</strong>, including
              recognized educational, professional and nonprofit organizations.
            </li>
            <li>
              <strong>High-quality secondary explanations</strong> that clearly
              identify their own sources and accurately summarize the underlying
              material.
            </li>
            <li>
              <strong>Public personal accounts</strong>, used only to describe
              the reported experience and not as authoritative guidance.
            </li>
          </ol>

          <h2>Official sources</h2>

          <p>
            For U.S. tax topics, official IRS pages, forms and instructions are
            generally stronger sources than unsourced summaries. For Social
            Security and Medicare topics, relevant official agency information
            may be used.
          </p>

          <p>
            State-specific tax and payroll questions may require state agency
            sources. Mortgage, lending and consumer finance topics may require
            federal agency, regulator, lender or official program documentation.
          </p>

          <h2>Primary sources and calculation sources</h2>

          <p>
            Some calculator explanations depend primarily on mathematical
            formulas rather than a single external webpage. In these cases, the
            methodology should identify the formula, inputs, assumptions and
            limitations clearly enough for the calculation to be understood.
          </p>

          <p>
            Where a calculator uses an external rate, threshold or rule, the
            relevant source should be reviewed and updated when necessary.
          </p>

          <h2>Secondary sources</h2>

          <p>
            Secondary sources may be useful for context, plain-language
            explanations or comparison. They are evaluated based on editorial
            quality, transparency, sourcing, relevance and whether the
            information can be confirmed elsewhere.
          </p>

          <p>
            A secondary article is not treated as authoritative simply because
            it ranks highly in search results or is widely repeated.
          </p>

          <h2>Public stories, forums and social platforms</h2>

          <p>
            A public post may explain what a person says happened, but it does
            not automatically prove every factual detail. FinanceCalcHub may use
            public accounts as the starting point for Real Money Stories while
            separately researching the general financial issue.
          </p>

          <p>
            Comments from other users are not treated as official tax, legal,
            payroll, lending or investment guidance.
          </p>

          <h2>Source relevance</h2>

          <p>
            A credible source must also be relevant. A source about one form,
            program, state or tax year should not be used to support a broader
            conclusion that it does not address.
          </p>

          <p>
            Links should be placed near the claim or in a clearly labeled
            official-sources section when that structure is more useful to the
            reader.
          </p>

          <h2>Freshness and dates</h2>

          <p>
            Financial rules, tax thresholds, agency procedures, interest rates
            and program requirements can change. Time-sensitive information
            should be checked for current applicability before it is presented
            as current.
          </p>

          <p>
            Older sources may still be appropriate for historical explanations,
            stable formulas or articles describing a past event, but the context
            should be clear.
          </p>

          <h2>External links</h2>

          <p>
            External links are provided to support verification or further
            reading. FinanceCalcHub does not control external websites and
            cannot guarantee that a linked page will remain available or
            unchanged.
          </p>

          <p>
            Linking to a source does not mean FinanceCalcHub endorses every
            statement, product, service or policy on that website.
          </p>

          <h2>Corrections to sources</h2>

          <p>
            Broken, outdated or inappropriate sources may be replaced when an
            article is reviewed. A material change to the source or underlying
            rule may also require the article explanation or calculator
            assumption to be updated.
          </p>

          <p>
            Readers can report source concerns by emailing{" "}
            <strong>contact@financecalchub.com</strong> and including the page
            URL and the affected claim or link.
          </p>
        </div>

        <EditorialResources />
      </div>
    </section>
  );
}
