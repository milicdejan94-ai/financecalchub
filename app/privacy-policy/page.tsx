import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for FinanceCalcHub, including information about cookies, analytics and advertising.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Privacy Policy' },
          ]}
        />

        <div className="content-box">
          <p className="eyebrow">Privacy Policy</p>

          <h1>Privacy Policy</h1>

          <p>Last updated: May 27, 2026</p>

          <p>
            This Privacy Policy explains how FinanceCalcHub may collect, use and
            protect information when visitors use this website.
          </p>

          <h2>Information we collect</h2>

          <p>
            FinanceCalcHub may collect limited non-personal information such as
            browser type, device type, pages visited, approximate location based
            on IP address, referring pages and general usage data. This
            information helps us understand how visitors use the website and how
            we can improve it.
          </p>

          <h2>Information you provide</h2>

          <p>
            If you contact us by email, we may receive your email address and any
            information you choose to include in your message. We use this
            information only to respond to your inquiry or feedback.
          </p>

          <h2>Calculator inputs</h2>

          <p>
            The calculators on FinanceCalcHub are designed for educational
            estimates. Calculator inputs are processed in your browser to display
            results. You should not enter sensitive personal information into any
            calculator.
          </p>

          <h2>Cookies</h2>

          <p>
            This website may use cookies and similar technologies to improve user
            experience, analyze website traffic and support advertising features.
            Cookies are small files stored on your device by your browser.
          </p>

          <h2>Google Analytics</h2>

          <p>
            FinanceCalcHub may use Google Analytics or similar analytics tools to
            understand website traffic and user behavior. Analytics information
            is generally used in aggregate and does not personally identify
            individual users.
          </p>

          <h2>Advertising and Google AdSense</h2>

          <p>
            FinanceCalcHub may display advertisements through Google AdSense or
            other advertising partners. Advertising partners may use cookies or
            similar technologies to serve ads, measure ad performance and
            personalize ads where allowed.
          </p>

          <p>
            Google and its partners may use cookies to serve ads based on a
            visitor’s prior visits to this website or other websites.
          </p>

          <h2>Third-party links</h2>

          <p>
            This website may contain links to third-party websites. We are not
            responsible for the privacy practices, content or policies of those
            external websites.
          </p>

          <h2>Data security</h2>

          <p>
            We take reasonable steps to keep the website secure. However, no
            website or internet transmission can be guaranteed to be completely
            secure.
          </p>

          <h2>Your choices</h2>

          <p>
            You can adjust your browser settings to block or delete cookies. Some
            website features may not work properly if cookies are disabled.
          </p>

          <h2>Children’s privacy</h2>

          <p>
            FinanceCalcHub is not intended for children under 13. We do not
            knowingly collect personal information from children.
          </p>

          <h2>Changes to this policy</h2>

          <p>
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with a revised “Last updated” date.
          </p>

          <h2>Contact</h2>

          <p>
            For privacy-related questions, contact us at{' '}
            <strong>contact@financecalchub.com</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}