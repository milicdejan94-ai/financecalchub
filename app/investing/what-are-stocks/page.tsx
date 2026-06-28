import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export const metadata = {
  title: 'What Are Stocks? Beginner Guide | FinanceCalcHub',
  description:
    'Learn what stocks are, how shares work, why stock prices move, how beginners can understand risk, dividends, ownership and long-term investing.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a stock?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A stock represents a small ownership share in a company. When you buy a stock, you own a small piece of that company, but the value of your investment can rise or fall.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do beginners make money from stocks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beginners may make money from stocks if the stock price rises and they sell for a profit, or if the company pays dividends. However, stocks can also lose value.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are stocks risky for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Stocks can be risky because prices can rise and fall. Beginners should understand risk, diversification and long-term investing before buying individual stocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should beginners buy individual stocks first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some beginners buy individual stocks, but many first learn about diversified ETFs and index funds because they can reduce company-specific risk. The right choice depends on goals, risk tolerance, savings, debt and knowledge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this stock guide financial advice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. This guide is for educational purposes only and is not financial, investment, tax or legal advice.',
      },
    },
  ],
};

export default function WhatAreStocksPage() {
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
            { label: 'Investing', href: '/investing' },
            { label: 'What Are Stocks?' },
          ]}
        />

        <p className="eyebrow">Investing for beginners</p>

        <h1>What Are Stocks? A Beginner Guide</h1>

        <p>
          A stock is a small ownership share in a company. When you buy stock in
          a company, you own a small piece of that business. If the company grows
          and becomes more valuable, the stock price may rise. If the company
          struggles or investors lose confidence, the stock price may fall.
        </p>

        <div className="calculator-box" style={{ marginTop: 28 }}>
          <h2>Quick answer</h2>

          <p>
            Stocks allow investors to own a small part of a public company.
            People buy stocks because they hope the company will grow over time,
            but stock prices can move up or down, so investing in stocks always
            includes risk.
          </p>

          <div className="grid">
            <div className="card">
              <h3>Ownership</h3>
              <p>
                Buying a stock means owning a small share of one company.
              </p>
            </div>

            <div className="card">
              <h3>Price movement</h3>
              <p>
                Stock prices can rise or fall based on company results, investor
                expectations, news, interest rates and market conditions.
              </p>
            </div>

            <div className="card">
              <h3>Potential return</h3>
              <p>
                Investors may make money from price growth or dividends, but
                neither is guaranteed.
              </p>
            </div>

            <div className="card">
              <h3>Risk</h3>
              <p>
                A stock can lose value. Beginners should avoid putting all their
                money into one company.
              </p>
            </div>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How stocks work</h2>

          <p>
            Companies can sell shares of stock to raise money and allow
            investors to participate in the company’s future growth. After a
            company’s shares trade on the stock market, investors can buy and
            sell those shares through a brokerage account.
          </p>

          <p>
            The stock price changes because buyers and sellers constantly react
            to new information. Earnings, business growth, interest rates,
            competition, inflation, economic news and investor sentiment can all
            affect stock prices.
          </p>

          <h2>Simple example: buying one stock</h2>

          <p>
            Imagine a beginner buys one share of a company for $100. If the
            share price later rises to $120 and the investor sells, the investor
            may have a $20 gain before taxes and possible fees. If the price
            falls to $80 and the investor sells, the investor may have a $20
            loss.
          </p>

          <p>
            This simple example shows why beginners should understand both
            potential growth and potential loss before investing. A stock is not
            the same as a savings account. Its value can change every trading
            day.
          </p>

          <h2>Why do companies issue stock?</h2>

          <p>
            A company may issue stock to raise money for growth, expansion,
            research, hiring, debt repayment or other business needs. By selling
            shares, the company gives investors a chance to own part of the
            business.
          </p>

          <p>
            In return, investors hope the company becomes more valuable over
            time. But there is no guarantee. A business can perform well, poorly
            or somewhere in between.
          </p>

          <h2>How investors can make money from stocks</h2>

          <p>
            There are two common ways investors may make money from stocks:
            price growth and dividends.
          </p>

          <h3>1. Stock price growth</h3>

          <p>
            If a stock becomes more valuable and you sell it for more than you
            paid, you may have a capital gain. In taxable accounts, capital
            gains may be taxable.
          </p>

          <h3>2. Dividends</h3>

          <p>
            Some companies pay dividends, which are payments to shareholders.
            Not all companies pay dividends, and dividends are not guaranteed.
            Dividends may also be taxable in a taxable account.
          </p>

          <h2>Why stock prices move</h2>

          <p>
            Stock prices move because investors constantly update what they
            think a company is worth. If investors become more optimistic, the
            price may rise. If investors become more worried, the price may fall.
          </p>

          <p>
            Some common reasons stock prices move include company earnings,
            revenue growth, profit margins, new products, lawsuits, leadership
            changes, industry competition, interest rates, inflation, recessions
            and overall market fear or optimism.
          </p>

          <h2>Why individual stocks can be risky</h2>

          <p>
            Buying one stock means your result depends heavily on one company.
            If that company has bad earnings, loses customers, faces lawsuits,
            becomes less competitive or disappoints investors, the stock price
            can fall.
          </p>

          <p>
            This is why many beginners learn about ETFs and index funds before
            buying individual stocks. A diversified fund can hold many companies
            instead of relying on only one business.
          </p>

          <h2>Stocks vs ETFs</h2>

          <p>
            A stock is ownership in one company. An ETF is usually a basket of
            investments that may hold many companies. For example, instead of
            buying one company, an investor may buy an ETF that tracks a broad
            market index.
          </p>

          <p>
            This does not mean ETFs are risk-free. ETFs can also lose value. But
            they may reduce company-specific risk because the investment is
            spread across many holdings.
          </p>

          <h2>Stocks vs saving money</h2>

          <p>
            Saving money usually means keeping cash in a safer and more stable
            place, such as a bank account. Investing in stocks means accepting
            more risk in exchange for the possibility of long-term growth.
          </p>

          <p>
            Money needed soon, such as rent, emergency expenses or short-term
            bills, usually should not be exposed to stock market risk. Many
            beginners first build emergency savings before investing.
          </p>

          <h2>What beginners should avoid</h2>

          <p>
            Beginners should be careful with social media stock tips, hot stock
            predictions, short-term trading, investing rent money, borrowing
            money to invest and putting all their savings into one company.
          </p>

          <p>
            A better first step is to learn the basics, understand risk, build
            emergency savings and start with a simple long-term plan.
          </p>
        </div>

        <div className="calculator-box" style={{ marginTop: 34 }}>
          <h2>Beginner stock checklist</h2>

          <p>
            Before buying an individual stock, ask yourself these questions:
          </p>

          <div className="grid">
            <div className="card">
              <h3>Do I understand the company?</h3>
              <p>
                Can you explain how the company makes money in simple language?
              </p>
            </div>

            <div className="card">
              <h3>Can I handle price drops?</h3>
              <p>
                Would you panic if the stock dropped 10%, 20% or more?
              </p>
            </div>

            <div className="card">
              <h3>Am I diversified?</h3>
              <p>
                Is too much of your money tied to one company or one industry?
              </p>
            </div>

            <div className="card">
              <h3>Do I understand taxes?</h3>
              <p>
                Selling for a profit or receiving dividends may create tax
                consequences in a taxable account.
              </p>
            </div>

            <div className="card">
              <h3>Am I investing long-term money?</h3>
              <p>
                Money needed soon may not belong in individual stocks because
                prices can fall quickly.
              </p>
            </div>

            <div className="card">
              <h3>Do I have a reason beyond hype?</h3>
              <p>
                Buying only because of social media, friends or short-term hype
                can lead to poor decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Practical beginner example</h2>

          <p>
            A beginner has $200 available after paying bills and building some
            emergency savings. They are interested in buying one popular stock
            because people online are talking about it.
          </p>

          <p>
            Before buying, a more careful beginner might ask: Do I understand
            the company? Do I know how it makes money? Would I be comfortable if
            the price dropped? Is this only a small part of my overall plan? Do
            I understand that I may owe taxes if I sell for a profit?
          </p>

          <p>
            This kind of thinking does not guarantee success, but it helps the
            beginner slow down and avoid making a decision only because of hype.
          </p>
        </div>

        <div className="calculator-box" style={{ marginTop: 34 }}>
          <h2>Try this next</h2>

          <p>
            Before buying individual stocks, try using an investment return
            calculator or compound interest calculator. These tools can help you
            compare short-term guessing with long-term investing assumptions.
          </p>

          <div className="grid">
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
                See how compounding may affect money over time with different
                contribution and return assumptions.
              </p>
            </a>

            <a className="card" href="/investing/beginner-guide">
              <h3>Beginner Investing Guide</h3>
              <p>
                Go back to the full step-by-step guide for learning how to get
                started with investing.
              </p>
            </a>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Frequently asked questions</h2>

          <h3>What is a stock?</h3>
          <p>
            A stock represents a small ownership share in a company. When you buy
            a stock, you own a small piece of that company, but the value of your
            investment can rise or fall.
          </p>

          <h3>How do beginners make money from stocks?</h3>
          <p>
            Beginners may make money from stocks if the stock price rises and
            they sell for a profit, or if the company pays dividends. However,
            stocks can also lose value.
          </p>

          <h3>Are stocks risky for beginners?</h3>
          <p>
            Yes. Stocks can be risky because prices can rise and fall.
            Beginners should understand risk, diversification and long-term
            investing before buying individual stocks.
          </p>

          <h3>Should beginners buy individual stocks first?</h3>
          <p>
            Some beginners buy individual stocks, but many first learn about
            diversified ETFs and index funds because they can reduce
            company-specific risk. The right choice depends on goals, risk
            tolerance, savings, debt and knowledge.
          </p>

          <h3>Is this stock guide financial advice?</h3>
          <p>
            No. This guide is for educational purposes only and is not
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
          title="Related investing tools and guides"
          tools={[
            {
              title: 'How to Start Investing in Stocks',
              href: '/investing/beginner-guide',
            },
            {
              title: 'Investing for Beginners',
              href: '/investing',
            },
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
          ]}
        />
      </div>
    </section>
  );
}