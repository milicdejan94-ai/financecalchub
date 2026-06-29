import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedCalculators from '../../components/RelatedCalculators';

export const metadata = {
  title: 'Contact FinanceCalcHub | Questions, Feedback and Corrections',
  description:
    'Contact FinanceCalcHub for questions, suggestions, corrections, broken links or feedback about our free financial calculators and personal finance guides.',
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Contact' },
          ]}
        />

        <div className="content-box">
          <p className="eyebrow">Contact</p>

          <h1>Contact FinanceCalcHub</h1>

          <p>
            If you have questions, suggestions, corrections or feedback about
            FinanceCalcHub, you can contact us by email. We welcome feedback
            about our calculators, personal finance guides, broken links,
            confusing results and ideas for new tools.
          </p>

          <p>
            Email: <strong>contact@financecalchub.com</strong>
          </p>

          <h2>What you can contact us about</h2>

          <p>
            FinanceCalcHub is built around free educational financial
            calculators and beginner-friendly money guides. You can contact us
            about anything that may help improve the site for users.
          </p>

          <ul>
            <li>Suggestions for new financial calculators</li>
            <li>Feedback about existing calculators</li>
            <li>Possible errors or confusing calculator results</li>
            <li>Outdated assumptions or missing cost categories</li>
            <li>Website issues, broken links or technical problems</li>
            <li>Questions about salary after tax calculator pages</li>
            <li>Questions about hourly wage to salary calculator pages</li>
            <li>Questions about mortgage payment estimate pages</li>
            <li>Questions about beginner investing guides</li>
            <li>General questions about FinanceCalcHub</li>
          </ul>

          <h2>What to include in your message</h2>

          <p>
            To help us review your message more quickly, please include the page
            URL, the calculator or article name, the numbers you entered and a
            short description of the issue, question or suggestion.
          </p>

          <p>
            For example, if you are reporting a calculator issue, include the
            income, hourly wage, mortgage amount, interest rate, loan term, debt
            balance or other inputs you used. This makes it easier to understand
            the result you saw.
          </p>

          <h2>Calculator feedback</h2>

          <p>
            We especially welcome feedback about calculator clarity. If a result
            is confusing, a label is unclear, or a page needs a better
            explanation, you can let us know. Our goal is to make personal
            finance estimates easier to understand for everyday users.
          </p>

          <h2>Content corrections</h2>

          <p>
            Financial assumptions can change over time. Tax rules, interest
            rates, insurance costs, property taxes, market conditions and other
            inputs may affect estimates. If you notice outdated or unclear
            information, please send us the page URL and a short explanation.
          </p>

          <h2>Professional advice</h2>

          <p>
            FinanceCalcHub does not provide personal financial, tax, legal,
            mortgage, credit, payroll, insurance or investment advice. Our
            calculators and articles are educational estimates only.
          </p>

          <p>
            If you need advice about your specific financial situation, please
            contact a qualified professional such as a tax advisor, financial
            planner, mortgage lender, attorney, accountant, payroll specialist or
            insurance professional.
          </p>

          <h2>Useful pages</h2>

          <p>
            You may also want to review our{' '}
            <a href="/methodology">Methodology</a> page,{' '}
            <a href="/about">About</a> page and{' '}
            <a href="/disclaimer">Disclaimer</a> page to understand how
            calculator results are created and what limitations apply.
          </p>

          <p>
            For privacy-related information, please review our{' '}
            <a href="/privacy-policy">Privacy Policy</a>.
          </p>

          <h2>Popular sections</h2>

          <p>
            You can also browse our main calculator and guide sections for quick
            access to common tools:
          </p>

          <ul>
            <li>
              <a href="/calculators">All financial calculators</a>
            </li>
            <li>
              <a href="/salary-after-tax">Salary after tax calculators</a>
            </li>
            <li>
              <a href="/hourly-wage">Hourly wage to salary calculators</a>
            </li>
            <li>
              <a href="/mortgage-payment">Mortgage payment by amount</a>
            </li>
            <li>
              <a href="/investing">Investing beginner guides</a>
            </li>
            <li>
              <a href="/blog">Personal finance blog</a>
            </li>
          </ul>

          <h2>Response note</h2>

          <p>
            We review feedback and corrections as part of improving the website.
            While we may not be able to respond to every message immediately,
            useful reports can help us improve calculator pages, explanations
            and related guides over time.
          </p>
        </div>

        <RelatedCalculators
          title="Popular pages"
          tools={[
            {
              title: 'All Financial Calculators',
              href: '/calculators',
            },
            {
              title: 'About FinanceCalcHub',
              href: '/about',
            },
            {
              title: 'Methodology',
              href: '/methodology',
            },
            {
              title: 'Disclaimer',
              href: '/disclaimer',
            },
            {
              title: 'Salary After Tax Calculators',
              href: '/salary-after-tax',
            },
            {
              title: 'Hourly Wage to Salary Calculators',
              href: '/hourly-wage',
            },
            {
              title: 'Mortgage Payment by Amount',
              href: '/mortgage-payment',
            },
            {
              title: 'Investing for Beginners',
              href: '/investing',
            },
          ]}
        />
      </div>
    </section>
  );
}
