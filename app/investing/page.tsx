import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Investing for Beginners | FinanceCalcHub',
  description:
    'Learn the basics of investing, stocks, ETFs, index funds, brokerage accounts, risk, taxes and long-term investing with beginner-friendly educational guides.',
};

const lessons = [
  {
    title: 'How to Start Investing in Stocks',
    href: '/investing/beginner-guide',
    text: 'A complete step-by-step guide for beginners who want to understand stocks, ETFs, brokerage accounts, risk and long-term investing.',
  },
  {
    title: 'What Are Stocks?',
    href: '/investing/what-are-stocks',
    text: 'Learn what stocks are, how shares work, why stock prices move and what beginners should understand before buying individual companies.',
  },
  {
    title: 'Stocks vs ETFs',
    href: '/investing/stocks-vs-etfs',
    text: 'Compare individual stocks and ETFs so beginners can understand diversification, risk and simple long-term investing options.',
  },
  {
    title: 'How Much Money Do You Need to Start Investing?',
    href: '/investing/how-much-money-to-start-investing',
    text: 'Learn how beginners can start small, build consistency and think about monthly investing without taking unnecessary risk.',
  },
  {
    title: 'Capital Gains Tax for Beginners',
    href: '/investing/capital-gains-tax-for-beginners',
    text: 'Understand the basics of capital gains, dividends and investment taxes in a simple educational format.',
  },
  {
    title: 'Common Beginner Investing Mistakes',
    href: '/investing/beginner-investing-mistakes',
    text: 'Learn common mistakes beginners make, including chasing hot stocks, panic selling, ignoring taxes and investing without a plan.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should a beginner learn before investing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A beginner should learn what stocks are, how ETFs and index funds work, how risk and diversification work, how brokerage accounts work and how investment taxes may apply.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is investing the same as saving?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Saving usually means keeping money safe and available for short-term needs. Investing means putting money into assets that may grow over time but can also lose value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this investing content financial advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. FinanceCalcHub investing content is educational only and is not financial, investment, tax or legal advice.',
      },
    },
  ],
};

export default function InvestingPage() {
  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Investing for Beginners' },
          ]}
        />

        <p className="eyebrow">Investing for beginners</p>

        <h1>Investing for Beginners</h1>

        <p>
          Learn the basics of investing in simple language. These beginner
          guides explain stocks, ETFs, index funds, brokerage accounts, risk,
          diversification, taxes and long-term investing before you put real
          money into the market.
        </p>

        <div className="calculator-box" style={{ marginTop: 28 }}>
          <h2>Start here</h2>

          <p>
            If you are completely new and asking “How do I get into stocks and
            investments?”, start with the beginner step-by-step guide first.
          </p>

          <div className="grid">
            <a className="card" href="/investing/beginner-guide">
              <h3>How to Start Investing in Stocks</h3>
              <p>
                A beginner-friendly step-by-step guide to stocks, ETFs,
                brokerage accounts, risk, taxes and long-term investing.
              </p>
            </a>

            <a className="card" href="/calculators/investment-return">
              <h3>Investment Return Calculator</h3>
              <p>
                Estimate how an investment may grow over time based on starting
                amount, contributions, years and estimated return.
              </p>
            </a>

            <a className="card" href="/calculators/compound-interest">
              <h3>Compound Interest Calculator</h3>
              <p>
                See how money can grow over time when interest or returns
                compound.
              </p>
            </a>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Beginner investing lessons</h2>

          <p>
            These lessons are designed for complete beginners. The goal is to
            understand the basics first, not to guess which stock will go up
            next.
          </p>

          <div className="grid">
            {lessons.map((lesson) => (
              <a key={lesson.title} className="card" href={lesson.href}>
                <h3>{lesson.title}</h3>
                <p>{lesson.text}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>What beginners should understand first</h2>

          <p>
            Investing involves risk. Stocks and funds can rise, but they can
            also fall. Beginners should understand emergency savings, debt,
            diversification, account types, investment fees and tax basics before
            investing large amounts.
          </p>

          <p>
            Many new investors start by learning about diversified ETFs or index
            funds because they can provide exposure to many companies instead of
            relying on only one company. This does not remove risk, but it can
            help reduce company-specific risk.
          </p>

          <h2>Educational content only</h2>

          <p>
            FinanceCalcHub does not recommend specific stocks, funds or
            investment strategies. The content in this section is for education
            and general planning only.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Frequently asked questions</h2>

          <h3>What should a beginner learn before investing?</h3>
          <p>
            A beginner should learn what stocks are, how ETFs and index funds
            work, how risk and diversification work, how brokerage accounts work
            and how investment taxes may apply.
          </p>

          <h3>Is investing the same as saving?</h3>
          <p>
            No. Saving usually means keeping money safe and available for
            short-term needs. Investing means putting money into assets that may
            grow over time but can also lose value.
          </p>

          <h3>Is this investing content financial advice?</h3>
          <p>
            No. FinanceCalcHub investing content is educational only and is not
            financial, investment, tax or legal advice.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Important note</h2>

          <p>
            This content is for educational purposes only and is not financial,
            investment, tax or legal advice. Investing involves risk, including
            possible loss of principal. Always do your own research or consult a
            qualified financial advisor before making financial decisions.
          </p>
        </div>

        <RelatedCalculators
          title="Related investing and finance tools"
          tools={[
            {
              title: 'Investment Return Calculator',
              href: '/calculators/investment-return',
            },
            {
              title: 'Compound Interest Calculator',
              href: '/calculators/compound-interest',
            },
            {
              title: '401(k) Calculator',
              href: '/calculators/401k',
            },
            {
              title: 'IRA Calculator',
              href: '/calculators/ira',
            },
            {
              title: 'Savings Calculator',
              href: '/calculators/savings',
            },
            {
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
            },
          ]}
        />
      </div>
    </section>
  );
}