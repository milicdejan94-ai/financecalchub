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
    title: `$${amount.toLocaleString('en-US')} Salary Calculator | Take-Home Pay Estimate`,
    description: `Estimate monthly, biweekly and weekly take-home pay for a $${amount.toLocaleString(
      'en-US'
    )} annual salary in the United States.`,
  };
}

export default function SalaryAmountPage({ params }: PageProps) {
  const amount = Number(params.amount);

  if (!salaryAmounts.includes(amount)) {
    return (
      <section className="section">
        <div className="container">
            <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Salary Calculator', href: '/salary-calculator' },
    { label: `$${amount.toLocaleString('en-US')} Salary Calculator` },
  ]}
/>
          <div className="content-box">
            <h1>Salary page not found</h1>
            <p>This salary calculator page does not exist yet.</p>
          </div>
        </div>
      </section>
    );
  }

  const federalTax = amount * 0.12;
  const socialSecurity = amount * 0.062;
  const medicare = amount * 0.0145;
  const estimatedStateTax = amount * 0.04;

  const annualTakeHome =
    amount - federalTax - socialSecurity - medicare - estimatedStateTax;

  const monthlyTakeHome = annualTakeHome / 12;
  const biweeklyTakeHome = annualTakeHome / 26;
  const weeklyTakeHome = annualTakeHome / 52;

  const hourlyEquivalent = amount / 2080;
  const monthlyGross = amount / 12;
  const biweeklyGross = amount / 26;
  const weeklyGross = amount / 52;

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Salary calculator</p>

        <h1>${amount.toLocaleString('en-US')} Salary Calculator</h1>

        <p>
          Estimate take-home pay for a ${amount.toLocaleString('en-US')} annual
          salary using simplified federal payroll tax and state tax assumptions.
        </p>

        <AdBanner slot={`salary-${amount}-top`} />

        <div className="calculator-box">
          <h2>Estimated take-home pay</h2>

          <p>Annual gross salary: ${amount.toLocaleString('en-US')}</p>

          <div className="result">
            Monthly take-home pay: ${monthlyTakeHome.toFixed(2)}
          </div>

          <div className="result">
            Biweekly take-home pay: ${biweeklyTakeHome.toFixed(2)}
          </div>

          <div className="result">
            Weekly take-home pay: ${weeklyTakeHome.toFixed(2)}
          </div>

          <div className="result">
            Estimated hourly equivalent: ${hourlyEquivalent.toFixed(2)}
          </div>
        </div>

        <AdBanner slot={`salary-${amount}-middle`} />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How much is ${amount.toLocaleString('en-US')} after taxes?</h2>

          <p>
            A ${amount.toLocaleString('en-US')} salary after taxes depends on
            filing status, state income tax, deductions, benefits and payroll
            withholding. This page provides a simplified educational estimate for
            US workers.
          </p>

          <h3>Gross pay breakdown</h3>

          <p>
            Before taxes, a ${amount.toLocaleString('en-US')} annual salary is
            approximately ${monthlyGross.toFixed(2)} per month, $
            {biweeklyGross.toFixed(2)} every two weeks, or $
            {weeklyGross.toFixed(2)} per week.
          </p>

          <h3>Monthly pay estimate</h3>

          <p>
            Based on the assumptions used here, a $
            {amount.toLocaleString('en-US')} annual salary is approximately $
            {monthlyTakeHome.toFixed(2)} per month after estimated taxes.
          </p>

          <h3>Biweekly pay estimate</h3>

          <p>
            For workers paid every two weeks, the estimated biweekly take-home
            pay is approximately ${biweeklyTakeHome.toFixed(2)}.
          </p>

          <h3>Weekly pay estimate</h3>

          <p>
            For weekly payroll, the estimated take-home pay is approximately $
            {weeklyTakeHome.toFixed(2)} per week.
          </p>

          <h3>Hourly equivalent</h3>

          <p>
            If you divide a ${amount.toLocaleString('en-US')} annual salary by
            2,080 working hours, the estimated hourly equivalent is approximately
            ${hourlyEquivalent.toFixed(2)} before taxes.
          </p>

          <h3>Important note</h3>

          <p>
            This is not tax advice. Actual take-home pay may vary depending on
            tax brackets, state taxes, local taxes, deductions, credits,
            retirement contributions, insurance and employer payroll settings.
          </p>
        </div>

        <RelatedCalculators
          title="More salary and paycheck tools"
          tools={[
            {
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
            },
            {
              title: 'Hourly Paycheck Calculator',
              href: '/calculators/hourly-paycheck',
            },
            {
              title: 'Salary To Hourly Calculator',
              href: '/calculators/salary-to-hourly',
            },
            {
              title: 'Overtime Calculator',
              href: '/calculators/overtime',
            },
            {
              title: 'Salary Calculator Directory',
              href: '/salary-calculator',
            },
            {
              title: 'Paycheck Calculators by State',
              href: '/paycheck-calculator',
            },
          ]}
        />

        <AdBanner slot={`salary-${amount}-bottom`} />
      </div>
    </section>
  );
}