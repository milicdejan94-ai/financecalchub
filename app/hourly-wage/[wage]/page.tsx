import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { hourlyWages } from '../../../lib/hourlyWages';

type PageProps = {
  params: {
    wage: string;
  };
};

export function generateStaticParams() {
  return hourlyWages.map((wage) => ({
    wage: String(wage),
  }));
}

export function generateMetadata({ params }: PageProps) {
  const wage = Number(params.wage);
  const annualSalary = wage * 40 * 52;

  return {
    title: `$${wage} an Hour Is How Much a Year? | Hourly to Salary Calculator`,
    description: `Estimate how much $${wage} an hour is per year, month, week and paycheck. A $${wage}/hour wage is about $${annualSalary.toLocaleString(
      'en-US'
    )} per year before taxes at 40 hours per week.`,
  };
}

export default function HourlyWagePage({ params }: PageProps) {
  const wage = Number(params.wage);

  if (!hourlyWages.includes(wage)) {
    return (
      <section className="section">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Hourly Wage', href: '/hourly-wage' },
              { label: `$${wage} an Hour` },
            ]}
          />

          <div className="content-box">
            <h1>Hourly wage page not found</h1>
            <p>This hourly wage calculator page does not exist yet.</p>
          </div>
        </div>
      </section>
    );
  }

  const hoursPerWeek = 40;
  const weeksPerYear = 52;
  const annualGross = wage * hoursPerWeek * weeksPerYear;
  const monthlyGross = annualGross / 12;
  const biweeklyGross = annualGross / 26;
  const weeklyGross = wage * hoursPerWeek;
  const dailyGross = wage * 8;

  const federalTax = annualGross * 0.12;
  const socialSecurity = annualGross * 0.062;
  const medicare = annualGross * 0.0145;
  const estimatedStateTax = annualGross * 0.04;

  const annualAfterTax =
    annualGross - federalTax - socialSecurity - medicare - estimatedStateTax;

  const monthlyAfterTax = annualAfterTax / 12;
  const biweeklyAfterTax = annualAfterTax / 26;
  const weeklyAfterTax = annualAfterTax / 52;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Hourly Wage', href: '/hourly-wage' },
            { label: `$${wage} an Hour` },
          ]}
        />

        <p className="eyebrow">Hourly to salary calculator</p>

        <h1>${wage} an Hour Is How Much a Year?</h1>

        <p>
          Estimate how much ${wage} an hour is per year, month, week and
          paycheck before taxes and after simplified estimated taxes.
        </p>

        <AdBanner slot={`hourly-wage-${wage}-top`} />

        <div className="calculator-box">
          <h2>${wage}/hour salary estimate</h2>

          <p>
            Assumption: {hoursPerWeek} hours per week and {weeksPerYear} weeks
            per year.
          </p>

          <div className="result">
            Estimated annual gross pay: ${annualGross.toLocaleString('en-US')}
          </div>

          <div className="result">
            Estimated monthly gross pay: ${monthlyGross.toFixed(2)}
          </div>

          <div className="result">
            Estimated biweekly gross pay: ${biweeklyGross.toFixed(2)}
          </div>

          <div className="result">
            Estimated weekly gross pay: ${weeklyGross.toFixed(2)}
          </div>

          <div className="result">
            Estimated daily gross pay: ${dailyGross.toFixed(2)}
          </div>

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
        </div>

        <AdBanner slot={`hourly-wage-${wage}-middle`} />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>
            How much is ${wage} an hour per year?
          </h2>

          <p>
            At {hoursPerWeek} hours per week and {weeksPerYear} weeks per year,
            ${wage} an hour is about ${annualGross.toLocaleString('en-US')} per
            year before taxes.
          </p>

          <h3>Monthly pay estimate</h3>

          <p>
            Before taxes, ${wage} an hour is approximately $
            {monthlyGross.toFixed(2)} per month. After simplified estimated
            taxes, it may be about ${monthlyAfterTax.toFixed(2)} per month.
          </p>

          <h3>Biweekly paycheck estimate</h3>

          <p>
            If paid every two weeks, ${wage} an hour is approximately $
            {biweeklyGross.toFixed(2)} before taxes per paycheck. After
            simplified estimated taxes, the biweekly take-home estimate is about
            ${biweeklyAfterTax.toFixed(2)}.
          </p>

          <h3>Weekly pay estimate</h3>

          <p>
            At 40 hours per week, ${wage} an hour is about $
            {weeklyGross.toFixed(2)} per week before taxes, or about $
            {weeklyAfterTax.toFixed(2)} after simplified estimated taxes.
          </p>

          <h3>What affects take-home pay?</h3>

          <p>
            Actual take-home pay can vary based on federal tax brackets, state
            income tax, local taxes, filing status, W-4 settings, overtime,
            unpaid time off, health insurance, retirement contributions and
            other payroll deductions.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides simplified educational estimates only. It is
            not tax, payroll, legal, financial or investment advice.
          </p>
        </div>

        <RelatedCalculators
          title="Related salary and paycheck tools"
          tools={[
            {
              title: 'Hourly Paycheck Calculator',
              href: '/calculators/hourly-paycheck',
            },
            {
              title: 'Salary To Hourly Calculator',
              href: '/calculators/salary-to-hourly',
            },
            {
              title: 'Paycheck Calculator',
              href: '/calculators/paycheck',
            },
            {
              title: 'Salary Calculator',
              href: '/salary-calculator',
            },
            {
              title: 'Salary After Tax Calculators',
              href: '/salary-after-tax',
            },
            {
              title: 'Paycheck Calculators by State',
              href: '/paycheck-calculator',
            },
          ]}
        />

        <AdBanner slot={`hourly-wage-${wage}-bottom`} />
      </div>
    </section>
  );
}