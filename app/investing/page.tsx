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
    category: 'Start here',
    text: 'A step-by-step beginner guide to stocks, ETFs, brokerage accounts, risk, taxes and long-term investing.',
  },
  {
    title: 'What Are Stocks?',
    href: '/investing/what-are-stocks',
    category: 'Stocks',
    text: 'Learn what stocks are, how shares work, why stock prices move and what beginners should understand before buying individual companies.',
  },
  {
    title: 'Stocks vs ETFs',
    href: '/investing/stocks-vs-etfs',
    category: 'ETFs',
    text: 'Compare individual stocks and ETFs so beginners can understand diversification, risk and simple long-term investing options.',
  },
  {
    title: 'How Much Money Do You Need to Start Investing?',
    href: '/investing/how-much-money-to-start-investing',
    category: 'Starting amount',
    text: 'Learn how beginners can start small, build consistency and think about monthly investing without taking unnecessary risk.',
  },
  {
    title: 'Capital Gains Tax for Beginners',
    href: '/investing/capital-gains-tax-for-beginners',
    category: 'Taxes',
    text: 'Understand the basics of capital gains, dividends and investment taxes in a simple educational format.',
  },
  {
    title: 'Common Beginner Investing Mistakes',
    href: '/investing/beginner-investing-mistakes',
    category: 'Mistakes',
    text: 'Learn common mistakes beginners make, including chasing hot stocks, panic selling, ignoring taxes and investing without a plan.',
  },
];

const learningPath = [
  {
    step: '1',
    title: 'Understand the difference between saving and investing',
    text: 'Saving is usually for short-term safety and emergency money. Investing is usually for long-term goals and includes risk of loss.',
  },
  {
    step: '2',
    title: 'Learn the basic investment types',
    text: 'Beginners should understand stocks, ETFs, index funds, mutual funds, bonds and cash before choosing where to put money.',
  },
  {
    step: '3',
    title: 'Think about risk before returns',
    text: 'A high potential return usually comes with higher uncertainty. Beginners should understand volatility before investing large amounts.',
  },
  {
    step: '4',
    title: 'Use calculators for planning, not predictions',
    text: 'Investment calculators can show hypothetical long-term growth, but they cannot predict actual market performance.',
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

        <div className="section-heading">
          <p className="eyebrow">Investing for beginners</p>

          <h1>Investing for Beginners</h1>

          <p>
            Learn the basics of investing in simple language. These beginner
            guides explain stocks, ETFs, index funds, brokerage accounts, risk,
            diversification, taxes and long-term investing before you put real
            money into the market.
          </p>
        </div>

        <div className="calculator-box" style={{ marginTop: 28 }}>
          <h2>Start here</h2>

          <p>
            If you are completely new to investing, start with the beginner
            guide, then learn what stocks are, how ETFs work and how investment
            taxes can affect your results. The goal is education first, not
            guessing which stock will go up next.
          </p>

          <div className="grid">
            <a className="card" href="/investing/beginner-guide">
              <p className="eyebrow">Step-by-step</p>
              <h3>How to Start Investing in Stocks</h3>
              <p>
                A beginner-friendly guide to stocks, ETFs, brokerage accounts,
                risk, taxes and long-term investing.
              </p>
            </a>

            <a className="card" href="/calculators/investment-return">
              <p className="eyebrow">Planning tool</p>
              <h3>Investment Return Calculator</h3>
              <p>
                Estimate how an investment may grow over time using starting
                amount, contributions, years and an estimated return.
              </p>
            </a>

            <a className="card" href="/calculators/compound-interest">
              <p className="eyebrow">Growth tool</p>
              <h3>Compound Interest Calculator</h3>
              <p>
                See how money can grow over time when returns or interest
                compound over many years.
              </p>
            </a>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Beginner investing lessons</h2>

          <p>
            These lessons are designed for complete beginners. They explain core
            investing concepts without recommending specific stocks, funds or
            strategies.
          </p>

          <div className="grid">
            {lessons.map((lesson) => (
              <a key={lesson.title} className="card" href={lesson.href}>
                <p className="eyebrow">{lesson.category}</p>
                <h3>{lesson.title}</h3>
                <p>{lesson.text}</p>
                <span>Read guide →</span>
              </a>
            ))}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Beginner learning path</h2>

          <p>
            A good beginner investing path starts with understanding risk and
            account types before comparing possible returns. Calculators can help
            you test hypothetical scenarios, but they should not be treated as a
            guarantee.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Topic</th>
                  <th>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                {learningPath.map((item) => (
                  <tr key={item.step}>
                    <td>{item.step}</td>
                    <td>{item.title}</td>
                    <td>{item.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>What beginners should understand first</h2>

          <p>
            Investing involves risk. Stocks and funds can rise, but they can
            also fall. Beginners should understand emergency savings, high-
            interest debt, diversification, account types, fees and tax basics
            before investing large amounts.
          </p>

          <p>
            Many new investors start by learning about diversified ETFs or index
            funds because they can provide exposure to many companies instead of
            relying on one company. This does not remove risk, but it can help
            reduce company-specific risk.
          </p>

          <h3>Saving vs investing</h3>

          <p>
            Saving usually means keeping money available for short-term needs.
            Investing means putting money into assets that may grow over time,
            but the value can move up and down. Money needed soon is usually not
            a good fit for risky investments.
          </p>

          <h3>Risk and diversification</h3>

          <p>
            Diversification means spreading money across different investments.
            It does not guarantee profit or prevent loss, but it can reduce the
            impact of one company or one investment performing poorly.
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

          <h3>Can an investment calculator predict returns?</h3>
          <p>
            No. An investment calculator can show hypothetical scenarios using
            assumptions you enter. It cannot predict future market performance.
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
            possible loss of principal. FinanceCalcHub does not recommend
            specific stocks, funds, brokers or investment strategies. Always do
            your own research or consult a qualified financial advisor before
            making financial decisions.
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
              title: 'Savings Calculator',
              href: '/calculators/savings',
            },
            {
              title: 'Retirement Calculator',
              href: '/calculators/retirement',
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
