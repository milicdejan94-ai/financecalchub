import './globals.css';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://financecalchub.com'),

  title: {
    default: 'FinanceCalcHub | Free US Financial Calculators',
    template: '%s | FinanceCalcHub',
  },

  description:
    'Free financial calculators for US users. Estimate paychecks, salary, mortgage payments, loans, debt payoff, savings, compound interest and retirement planning.',

  keywords: [
    'finance calculator',
    'paycheck calculator',
    'salary calculator',
    'mortgage calculator',
    'loan calculator',
    'debt payoff calculator',
    'credit card payoff calculator',
    'retirement calculator',
    '401k calculator',
    'compound interest calculator',
    'US financial calculators',
  ],

  authors: [{ name: 'FinanceCalcHub' }],

  creator: 'FinanceCalcHub',
  publisher: 'FinanceCalcHub',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://financecalchub.com',
    siteName: 'FinanceCalcHub',
    title: 'FinanceCalcHub | Free US Financial Calculators',
    description:
      'Free calculators for paychecks, salary, mortgage payments, loans, debt payoff, savings, compound interest and retirement planning.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'FinanceCalcHub | Free US Financial Calculators',
    description:
      'Free US financial calculators for paychecks, mortgages, loans, debt payoff, savings and retirement planning.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="logo">
              FinanceCalcHub
            </a>

            <nav className="main-nav">
              <a href="/calculators">All Calculators</a>
              <a href="/calculators/paycheck">Paycheck</a>
              <a href="/paycheck-calculator">By State</a>
              <a href="/salary-calculator">Salary</a>
              <a href="/calculators/mortgage">Mortgage</a>
              <a href="/calculators/loan">Loan</a>
              <a href="/blog">Blog</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <h3>FinanceCalcHub</h3>
                <p>
                  Free educational financial calculators for US users. Estimate
                  paychecks, mortgages, loans, debt payoff, savings and
                  retirement planning.
                </p>
              </div>

              <div>
                <h4>Calculators</h4>
                <a href="/calculators">All Calculators</a>
                <a href="/calculators/paycheck">Paycheck Calculator</a>
                <a href="/paycheck-calculator">Paycheck by State</a>
                <a href="/salary-calculator">Salary Calculator</a>
                <a href="/calculators/mortgage">Mortgage Calculator</a>
                <a href="/calculators/loan">Loan Calculator</a>
              </div>

              <div>
                <h4>Popular Tools</h4>
                <a href="/calculators/mortgage-affordability">
                  Mortgage Affordability
                </a>
                <a href="/calculators/refinance">Refinance Calculator</a>
                <a href="/calculators/debt-payoff">Debt Payoff Calculator</a>
                <a href="/calculators/credit-card-payoff">
                  Credit Card Payoff
                </a>
                <a href="/calculators/401k">401k Calculator</a>
                <a href="/calculators/compound-interest">
                  Compound Interest
                </a>
              </div>

              <div>
                <h4>Company</h4>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms">Terms</a>
                <a href="/disclaimer">Disclaimer</a>
              </div>
            </div>

            <div className="footer-bottom">
              <p>
                © 2026 FinanceCalcHub. Educational estimates only. Not financial,
                tax, legal, mortgage or investment advice.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}