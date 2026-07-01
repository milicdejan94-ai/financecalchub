import RelatedCalculators from '../../components/RelatedCalculators';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Investing for Beginners | FinanceCalcHub',
  description:
    'Learn beginner investing basics including stocks, ETFs, index funds, brokerage accounts, risk, diversification, compound growth, taxes and long-term planning.',
};

const lessons = [
  {
    title: 'How to Start Investing in Stocks',
    href: '/investing/beginner-guide',
    text: 'A step-by-step beginner guide to stocks, ETFs, brokerage accounts, risk, taxes and long-term investing habits.',
    category: 'Start here',
  },
  {
    title: 'What Are Stocks?',
    href: '/investing/what-are-stocks',
    text: 'Learn what stocks are, what ownership shares represent, why prices move and what beginners should know before buying individual companies.',
    category: 'Stocks',
  },
  {
    title: 'Stocks vs ETFs',
    href: '/investing/stocks-vs-etfs',
    text: 'Compare individual stocks and ETFs, including diversification, risk, simplicity and long-term investing considerations.',
    category: 'ETFs',
  },
  {
    title: 'How Much Money Do You Need to Start Investing?',
    href: '/investing/how-much-money-to-start-investing',
    text: 'Learn how beginners can start small, build consistency and think about monthly investing without taking unnecessary risk.',
    category: 'Getting started',
  },
  {
    title: 'Capital Gains Tax for Beginners',
    href: '/investing/capital-gains-tax-for-beginners',
    text: 'Understand the basics of capital gains, dividends, taxable accounts and why taxes matter when selling investments.',
    category: 'Taxes',
  },
  {
    title: 'Common Beginner Investing Mistakes',
    href: '/investing/beginner-investing-mistakes',
    text: 'Learn common mistakes beginners make, including chasing hot stocks, panic selling, ignoring fees, overlooking taxes and investing without a plan.',
    category: 'Risk management',
  },
];

const learningPath = [
  {
    step: '1',
    topic: 'Build a foundation',
    whatToLearn:
      'Understand emergency savings, high-interest debt, cash flow and why investing is usually a long-term decision.',
  },
  {
    step: '2',
    topic: 'Learn the assets',
    whatToLearn:
      'Compare stocks, ETFs, index funds, bonds and cash so you know what type of risk you are taking.',
  },
  {
    step: '3',
    topic: 'Choose an account type',
    whatToLearn:
      'Understand the difference between taxable brokerage accounts and retirement accounts before investing money.',
  },
  {
    step: '4',
    topic: 'Estimate growth',
    whatToLearn:
      'Use calculators to test contributions, time horizon and assumed returns without treating the estimate as a guarantee.',
  },
  {
    step: '5',
    topic: 'Create a simple plan',
    whatToLearn:
      'Decide how much to invest, how often to contribute, how diversified to be and when to review the plan.',
  },
];

const beginnerTerms = [
  {
    term: 'Stock',
    meaning:
      'A share of ownership in a company. Stock prices can rise or fall based on business results, expectations and market conditions.',
  },
  {
    term: 'ETF',
    meaning:
      'An exchange-traded fund that can hold many stocks, bonds or other assets inside one investment.',
  },
  {
    term: 'Index fund',
    meaning:
      'A fund designed to track a market index rather than trying to pick individual winners.',
  },
  {
    term: 'Diversification',
    meaning:
      'Spreading money across different investments so one company or sector does not control the entire outcome.',
  },
  {
    term: 'Compound growth',
    meaning:
      'Growth that can build on previous growth over time. Compounding can help, but it does not remove investment risk.',
  },
  {
    term: 'Capital gain',
    meaning:
      'A profit that may occur when an investment is sold for more than its purchase price. Tax treatment depends on the account and situation.',
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
        text: 'A beginner should learn the difference between saving and investing, how stocks and ETFs work, how diversification works, how brokerage accounts work, what fees and taxes may apply and why risk matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is investing the same as saving?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Saving usually means keeping money relatively safe and available for short-term needs. Investing means buying assets that may grow over time but can also lose value.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much money do you need to start investing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The amount needed depends on the brokerage, account type and investment chosen. Many beginners focus first on emergency savings, debt and a consistent contribution habit rather than a large starting amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is FinanceCalcHub investing content financial advice?',
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
            Learn the basics of investing in plain language before putting real
            money at risk. These guides explain stocks, ETFs, index funds,
            brokerage accounts, diversification, compound growth, investment
            taxes and common beginner mistakes.
          </p>
        </div>

        <div className="calculator-box">
          <h2>Start here</h2>

          <p>
            Investing can be useful for long-term goals, but it is different
            from keeping cash for short-term needs. Beginners should understand
            risk, time horizon and diversification before choosing individual
            investments.
          </p>

          <div className="grid">
            <a className="card" href="/investing/beginner-guide">
              <p className="eyebrow">Step-by-step guide</p>
              <h3>How to Start Investing in Stocks</h3>
              <p>
                Learn the basic process: prepare your finances, understand the
                risks, choose an account, compare investment types and build a
                simple long-term plan.
              </p>
            </a>

            <a className="card" href="/calculators/investment-return">
              <p className="eyebrow">Planning tool</p>
              <h3>Investment Return Calculator</h3>
              <p>
                Estimate how starting balance, recurring contributions, time and
                assumed return can affect a long-term investment projection.
              </p>
            </a>

            <a className="card" href="/calculators/compound-interest">
              <p className="eyebrow">Growth concept</p>
              <h3>Compound Interest Calculator</h3>
              <p>
                See how growth can build on previous growth over time, while
                remembering that investment returns are not guaranteed.
              </p>
            </a>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Beginner investing lessons</h2>

          <p>
            These lessons are designed for people who are new to investing. The
            goal is not to predict the next winning stock. The goal is to
            understand the basic decisions, risks and tradeoffs before you act.
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
          <h2>A simple investing learning path</h2>

          <p>
            New investors often jump straight to buying stocks. A more careful
            approach is to learn the foundation first, then use calculators and
            guides to understand possible outcomes.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Topic</th>
                  <th>What to learn</th>
                </tr>
              </thead>
              <tbody>
                {learningPath.map((item) => (
                  <tr key={item.step}>
                    <td>{item.step}</td>
                    <td>{item.topic}</td>
                    <td>{item.whatToLearn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Key investing terms for beginners</h2>

          <p>
            Understanding a few common terms can make investing content easier
            to follow. These definitions are simplified and educational.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Beginner meaning</th>
                </tr>
              </thead>
              <tbody>
                {beginnerTerms.map((item) => (
                  <tr key={item.term}>
                    <td>{item.term}</td>
                    <td>{item.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>What beginners should understand before investing</h2>

          <h3>Saving and investing are different</h3>
          <p>
            Money needed soon is usually different from money invested for a
            long-term goal. Cash savings may be more appropriate for emergency
            funds and near-term expenses. Investments can fluctuate and may lose
            value, especially over shorter periods.
          </p>

          <h3>Diversification matters</h3>
          <p>
            Buying one stock means depending heavily on one company. Diversified
            funds can spread exposure across many companies or assets. This does
            not eliminate risk, but it can reduce the impact of a single company
            performing poorly.
          </p>

          <h3>Fees and taxes can affect results</h3>
          <p>
            Investment returns are not the only number that matters. Account
            fees, fund expense ratios, trading costs and taxes can all affect
            what an investor keeps. Tax treatment can also differ between taxable
            brokerage accounts and retirement accounts.
          </p>

          <h3>Time horizon changes the decision</h3>
          <p>
            A person investing for decades may think differently from someone
            who needs money next year. Longer time horizons may allow more time
            to recover from market declines, but they still do not guarantee a
            positive result.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Use investing calculators carefully</h2>

          <p>
            Calculators can help you compare assumptions, but they cannot
            predict the market. Treat estimated returns as planning examples,
            not promises.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Calculator</th>
                  <th>Useful for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="/calculators/investment-return">
                      Investment Return Calculator
                    </a>
                  </td>
                  <td>
                    Testing starting balance, contribution amount, years and an
                    assumed annual return.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/calculators/compound-interest">
                      Compound Interest Calculator
                    </a>
                  </td>
                  <td>
                    Understanding how compounding may work over time in a
                    simplified scenario.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/calculators/401k">401(k) Calculator</a>
                  </td>
                  <td>
                    Estimating retirement contributions, employer match and
                    long-term savings projections.
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/calculators/savings">Savings Calculator</a>
                  </td>
                  <td>
                    Comparing cash savings growth for short-term or lower-risk
                    goals.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Frequently asked questions</h2>

          <h3>What should a beginner learn before investing?</h3>
          <p>
            A beginner should understand the difference between saving and
            investing, how stocks and ETFs work, how diversification works, how
            brokerage accounts work, what fees and taxes may apply and why risk
            matters.
          </p>

          <h3>Is investing the same as saving?</h3>
          <p>
            No. Saving usually means keeping money relatively safe and available
            for short-term needs. Investing means buying assets that may grow
            over time but can also lose value.
          </p>

          <h3>How much money do you need to start investing?</h3>
          <p>
            The amount needed depends on the brokerage, account type and
            investment chosen. Many beginners focus first on emergency savings,
            high-interest debt and a consistent contribution habit rather than a
            large starting amount.
          </p>

          <h3>Should beginners buy individual stocks?</h3>
          <p>
            Individual stocks can be risky because one company can perform
            poorly. Some beginners prefer to learn about diversified funds first,
            but the right choice depends on goals, risk tolerance and financial
            situation.
          </p>

          <h3>Is FinanceCalcHub investing content financial advice?</h3>
          <p>
            No. FinanceCalcHub investing content is educational only and is not
            financial, investment, tax or legal advice.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Important limitations</h2>

          <p>
            FinanceCalcHub does not recommend specific stocks, ETFs, funds,
            brokers or investment strategies. The investing section is designed
            for general education and planning. Investing involves risk,
            including possible loss of principal.
          </p>

          <p>
            Before making financial decisions, consider your own goals, time
            horizon, income, debt, emergency fund, tax situation and risk
            tolerance. For personalized guidance, speak with a qualified
            financial, tax or legal professional.
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
              title: 'Retirement Calculator',
              href: '/calculators/retirement',
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
