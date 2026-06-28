import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export const metadata = {
  title: 'What Are Stocks? Beginner Guide | FinanceCalcHub',
  description:
    'Learn what stocks are, how shares work, why stock prices move and what beginners should understand before buying individual stocks.',
};

export default function WhatAreStocksPage() {
  return (
    <section className="section">
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
              <p>Buying a stock means owning a small share of one company.</p>
            </div>

            <div className="card">
              <h3>Price movement</h3>
              <p>
                Stock prices can rise or fall based on company results, investor
                expectations, news and market conditions.
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

          <h2>How investors can make money from stocks</h2>

          <p>
            Investors may make money from stocks if the stock price rises and
            they sell for a profit. Some companies also pay dividends, which are
            payments to shareholders. However, neither price growth nor dividends
            are guaranteed.
          </p>

          <h2>Why individual stocks can be risky</h2>

          <p>
            Buying one stock means your result depends heavily on one company.
            If that company has bad earnings, loses customers, faces lawsuits or
            disappoints investors, the stock price can fall.
          </p>

          <p>
            This is why many beginners learn about ETFs and index funds before
            buying individual stocks. A diversified fund can hold many companies
            instead of relying on only one business.
          </p>

          <h2>Important note</h2>

          <p>
            This content is for educational purposes only and is not financial,
            investment, tax or legal advice. Investing involves risk, including
            possible loss of principal.
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
          ]}
        />
      </div>
    </section>
  );
}