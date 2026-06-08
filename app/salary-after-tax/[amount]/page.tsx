import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { salaryAmounts } from '../../../lib/salaryAmounts';

type PageProps = {
  params: {
    amount: string;
  };
};

export function generateStaticParams() {
  return salaryAmounts.map((amount) => ({
    amount: String(amount),
  }));
}

export function generateMetadata({ params }: PageProps) {
  const amount = Number(params.amount);

  return {
    title: `$${amount.toLocaleString(
      'en-US'
    )} After Tax Calculator | Salary After Taxes`,
    description: `Estimate how much a $${amount.toLocaleString(
      'en-US'
    )} salary may be after federal tax, payroll taxes, state tax and common deductions in the United States.`,
  };
}

export default function SalaryAfterTaxPage({ params }: PageProps) {
  const amount = Number(params.amount);

  if (!salaryAmounts.includes(amount)) {
    return (
      <section className="section">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Salary After Tax', href: '/salary-after-tax/70000' },
              { label: `$${amount.toLocaleString('en-US')} After Tax` },
            ]}
          />

          <div className="content-box">
            <h1>Salary after tax page not found</h1>
            <p>This salary after tax estimate page does not exist yet.</p>
          </div>
        </div>
      </section>
    );
  }

  const federalTax = amount * 0.12;
  const socialSecurity = amount * 0.062;
  const medicare = amount * 0.0145;
  const estimatedStateTax = amount * 0.04;

  const totalEstimatedTaxes =
    federalTax + socialSecurity + medicare + estimatedStateTax;

  const annualAfterTax = amount - totalEstimatedTaxes;

  const monthlyAfterTax = annualAfterTax / 12;
  const biweeklyAfterTax = annualAfterTax / 26;
  const weeklyAfterTax = annualAfterTax / 52;

  const monthlyGross = amount / 12;
  const biweeklyGross = amount / 26;
  const weeklyGross = amount / 52;

  const effectiveTaxRate = (totalEstimatedTaxes / amount) * 100;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Salary Calculator', href: '/salary-calculator' },
            { label: `$${amount.toLocaleString('en-US')} After Tax` },
          ]}
        />

        <p className="eyebrow">Salary after tax calculator</p>

        <h1>${amount.toLocaleString('en-US')} After Tax Calculator</h1>

        <p>
          Estimate how much a ${amount.toLocaleString('en-US')} salary may be
          after federal income tax, Social Security, Medicare and estimated state
          income tax.
        </p>

        <AdBanner slot={`salary-after-tax-${amount}-top`} />

        <div className="calculator-box">
          <h2>Estimated after-tax income</h2>

          <p>Annual gross salary: ${amount.toLocaleString('en-US')}</p>

          <div className="result">
            Estimated annual after-tax pay: ${annualAfterTax.toFixed(2)}
          </div>

          <div className="result">
            Estimated monthly after-tax pay: ${monthlyAfterTax.toFixed(2)}
          </div>

          <div className="result">
            Estimated biweekly after-tax pay: ${biweeklyAfterTax.toFixed(2)}
          </div>

          <div className="result">
            Estimated weekly after-tax pay: ${weeklyAfterTax.toFixed(2)}
          </div>

          <div className="result">
            Estimated total annual taxes: ${totalEstimatedTaxes.toFixed(2)}
          </div>

          <div className="result">
            Estimated effective tax rate: {effectiveTaxRate.toFixed(1)}%
          </div>
        </div>

        <AdBanner slot={`salary-after-tax-${amount}-middle`} />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>
            How much is ${amount.toLocaleString('en-US')} after taxes?
          </h2>

          <p>
            Based on the simplified assumptions used on this page, a $
            {amount.toLocaleString('en-US')} annual salary may result in an
            estimated after-tax income of ${annualAfterTax.toFixed(2)} per year.
            That is about ${monthlyAfterTax.toFixed(2)} per month, $
            {biweeklyAfterTax.toFixed(2)} every two weeks, or $
            {weeklyAfterTax.toFixed(2)} per week.
          </p>

          <h3>Gross pay before taxes</h3>

          <p>
            Before taxes, a ${amount.toLocaleString('en-US')} salary is about $
            {monthlyGross.toFixed(2)} per month, ${biweeklyGross.toFixed(2)} per
            biweekly paycheck, or ${weeklyGross.toFixed(2)} per week.
          </p>

          <h3>Estimated tax breakdown</h3>

          <p>
            This estimate includes simplified federal income tax, Social Security,
            Medicare and estimated state income tax. The estimated federal income
            tax is ${federalTax.toFixed(2)}, Social Security is $
            {socialSecurity.toFixed(2)}, Medicare is ${medicare.toFixed(2)}, and
            estimated state income tax is ${estimatedStateTax.toFixed(2)}.
          </p>

          <h3>Why your real after-tax pay may be different</h3>

          <p>
            Actual after-tax pay depends on filing status, federal tax brackets,
            state and local taxes, W-4 settings, tax credits, deductions,
            retirement contributions, health insurance, employer benefits and
            payroll rules.
          </p>

          <h3>Use this estimate for planning</h3>

          <p>
            A salary after tax estimate can help you plan rent, mortgage payments,
            car payments, savings goals, debt payoff and monthly budgeting. For a
            more detailed paycheck estimate, use the Paycheck Calculator.
          </p>

          <h3>Important note</h3>

          <p>
            This page provides a simplified educational estimate only. It is not
            tax, legal, payroll, accounting, financial or investment advice.
            Always verify important tax and payroll decisions with a qualified
            professional or official source.
          </p>
        </div>

        <RelatedCalculators
          title="Related salary and paycheck tools"
          tools={[
            {
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
            },
            {
              title: 'Federal Tax Calculator',
              href: '/calculators/federal-tax',
            },
            {
              title: `$${amount.toLocaleString('en-US')} Salary Calculator`,
              href: `/salary-calculator/${amount}`,
            },
            {
              title: 'Salary Calculator Directory',
              href: '/salary-calculator',
            },
            {
              title: 'Paycheck Calculators by State',
              href: '/paycheck-calculator',
            },
            {
              title: '401(k) Calculator',
              href: '/calculators/401k',
            },
          ]}
        />

        <AdBanner slot={`salary-after-tax-${amount}-bottom`} />
      </div>
    </section>
  );
}