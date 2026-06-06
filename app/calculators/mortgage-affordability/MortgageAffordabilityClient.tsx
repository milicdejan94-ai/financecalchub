'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function MortgageAffordabilityClient() {
  const [annualIncome, setAnnualIncome] = useState(90000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.1);
  const [annualInsurance, setAnnualInsurance] = useState(1200);
  const [monthlyPmi, setMonthlyPmi] = useState(0);
  const [monthlyHoa, setMonthlyHoa] = useState(0);
  const [monthlyMaintenance, setMonthlyMaintenance] = useState(200);

  const monthlyIncome = annualIncome / 12;

  const comfortableHousingPayment = monthlyIncome * 0.25;
  const moderateHousingPayment = monthlyIncome * 0.3;
  const stretchHousingPayment = monthlyIncome * 0.35;

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  function calculateLoanAmountFromPayment(payment: number) {
    const nonLoanCosts =
      monthlyPmi + monthlyHoa + monthlyMaintenance + annualInsurance / 12;

    const estimatedAvailableForPrincipalInterest = Math.max(
      payment - nonLoanCosts,
      0
    );

    if (monthlyRate > 0) {
      return (
        estimatedAvailableForPrincipalInterest *
        ((Math.pow(1 + monthlyRate, numberOfPayments) - 1) /
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)))
      );
    }

    return estimatedAvailableForPrincipalInterest * numberOfPayments;
  }

  function estimateHomePriceFromPayment(payment: number) {
    const baseLoanAmount = calculateLoanAmountFromPayment(payment);

    /*
      Property tax depends on home price, so we estimate affordability
      by subtracting an annual tax estimate from the available payment.
      This is still simplified, but much better than ignoring taxes.
    */
    const estimatedHomePriceBeforeTax = baseLoanAmount + downPayment;
    const estimatedMonthlyPropertyTax =
      (estimatedHomePriceBeforeTax * (propertyTaxRate / 100)) / 12;

    const adjustedPayment = Math.max(payment - estimatedMonthlyPropertyTax, 0);
    const adjustedLoanAmount = calculateLoanAmountFromPayment(adjustedPayment);

    return Math.max(adjustedLoanAmount + downPayment, 0);
  }

  function calculateMonthlyPrincipalInterest(loanAmount: number) {
    if (loanAmount <= 0 || numberOfPayments <= 0) {
      return 0;
    }

    if (monthlyRate > 0) {
      return (
        loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
      );
    }

    return loanAmount / numberOfPayments;
  }

  function calculateScenario(paymentTarget: number) {
    const homePrice = estimateHomePriceFromPayment(paymentTarget);
    const loanAmount = Math.max(homePrice - downPayment, 0);
    const principalAndInterest = calculateMonthlyPrincipalInterest(loanAmount);
    const monthlyPropertyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    const monthlyInsurance = annualInsurance / 12;

    const totalMonthlyHousingCost =
      principalAndInterest +
      monthlyPropertyTax +
      monthlyInsurance +
      monthlyPmi +
      monthlyHoa +
      monthlyMaintenance;

    const totalMonthlyDebtWithHousing =
      totalMonthlyHousingCost + monthlyDebts;

    const frontEndRatio =
      monthlyIncome > 0 ? (totalMonthlyHousingCost / monthlyIncome) * 100 : 0;

    const backEndRatio =
      monthlyIncome > 0 ? (totalMonthlyDebtWithHousing / monthlyIncome) * 100 : 0;

    return {
      homePrice,
      loanAmount,
      principalAndInterest,
      monthlyPropertyTax,
      monthlyInsurance,
      totalMonthlyHousingCost,
      frontEndRatio,
      backEndRatio,
    };
  }

  const comfortableScenario = calculateScenario(comfortableHousingPayment);
  const moderateScenario = calculateScenario(moderateHousingPayment);
  const stretchScenario = calculateScenario(stretchHousingPayment);

  const warningText =
    stretchScenario.backEndRatio > 43
      ? 'Your stretch scenario may be risky because total debt-to-income is above 43%.'
      : moderateScenario.backEndRatio > 36
      ? 'Your moderate scenario may feel tight because total debt-to-income is above 36%.'
      : 'Your estimated ranges appear reasonable based on the numbers entered, but your real budget matters more than lender approval.';

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: 'Mortgage Affordability Calculator' },
          ]}
        />

        <p className="eyebrow">Mortgage affordability calculator</p>

        <h1>Mortgage Affordability Calculator</h1>

        <p>
          Estimate how much house you may be able to afford using income, monthly
          debts, down payment, interest rate, property taxes, insurance, PMI, HOA
          fees and a maintenance buffer.
        </p>

        <AdBanner slot="mortgage-affordability-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Annual household income</label>
            <input
              type="number"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly debt payments</label>
            <input
              type="number"
              value={monthlyDebts}
              onChange={(e) => setMonthlyDebts(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Down payment</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Interest rate (%)</label>
            <input
              type="number"
              value={interestRate}
              step="0.1"
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Loan term</label>
            <select
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(Number(e.target.value))}
            >
              <option value={30}>30 years</option>
              <option value={25}>25 years</option>
              <option value={20}>20 years</option>
              <option value={15}>15 years</option>
            </select>
          </div>

          <div className="input-group">
            <label>Annual property tax (%)</label>
            <input
              type="number"
              value={propertyTaxRate}
              step="0.1"
              onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Annual homeowners insurance</label>
            <input
              type="number"
              value={annualInsurance}
              onChange={(e) => setAnnualInsurance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly PMI</label>
            <input
              type="number"
              value={monthlyPmi}
              onChange={(e) => setMonthlyPmi(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly HOA fee</label>
            <input
              type="number"
              value={monthlyHoa}
              onChange={(e) => setMonthlyHoa(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly maintenance buffer</label>
            <input
              type="number"
              value={monthlyMaintenance}
              onChange={(e) => setMonthlyMaintenance(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Monthly gross income: ${monthlyIncome.toFixed(2)}
          </div>

          <div className="result">
            Comfortable range, about 25% of gross income:{' '}
            ${comfortableScenario.homePrice.toFixed(2)} home price
          </div>

          <div className="result">
            Moderate range, about 30% of gross income:{' '}
            ${moderateScenario.homePrice.toFixed(2)} home price
          </div>

          <div className="result">
            Stretch range, about 35% of gross income:{' '}
            ${stretchScenario.homePrice.toFixed(2)} home price
          </div>

          <div className="result">
            Comfortable monthly housing cost:{' '}
            ${comfortableScenario.totalMonthlyHousingCost.toFixed(2)}
          </div>

          <div className="result">
            Moderate monthly housing cost:{' '}
            ${moderateScenario.totalMonthlyHousingCost.toFixed(2)}
          </div>

          <div className="result">
            Stretch monthly housing cost:{' '}
            ${stretchScenario.totalMonthlyHousingCost.toFixed(2)}
          </div>

          <div className="result">
            Estimated DTI at comfortable range:{' '}
            {comfortableScenario.backEndRatio.toFixed(1)}%
          </div>

          <div className="result">
            Estimated DTI at moderate range:{' '}
            {moderateScenario.backEndRatio.toFixed(1)}%
          </div>

          <div className="result">
            Estimated DTI at stretch range:{' '}
            {stretchScenario.backEndRatio.toFixed(1)}%
          </div>

          <div className="result">{warningText}</div>
        </div>

        <AdBanner slot="mortgage-affordability-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this mortgage affordability calculator works</h2>

          <p>
            This calculator estimates a comfortable, moderate and stretch home
            price range based on your income, existing debts, down payment,
            mortgage rate and estimated ownership costs.
          </p>

          <h3>Why monthly payment matters more than purchase price</h3>

          <p>
            The home price alone does not show whether a mortgage is affordable.
            Property taxes, homeowners insurance, PMI, HOA fees and maintenance
            can make two homes with the same purchase price feel very different
            in a monthly budget.
          </p>

          <h3>Comfortable vs stretch affordability</h3>

          <p>
            A comfortable estimate uses about 25% of gross monthly income for
            housing. A moderate estimate uses about 30%. A stretch estimate uses
            about 35%. These are general planning ranges and may not match lender
            approval rules.
          </p>

          <h3>What is debt-to-income ratio?</h3>

          <p>
            Debt-to-income ratio compares monthly debt payments with monthly
            income. This calculator includes your existing monthly debts plus the
            estimated housing cost to show an approximate back-end DTI.
          </p>

          <h3>Why taxes, insurance, PMI and HOA fees matter</h3>

          <p>
            Many buyers focus only on principal and interest, but the full
            monthly cost of homeownership can include property taxes, insurance,
            PMI, HOA fees and ongoing repairs. This calculator includes those
            costs to create a more realistic estimate.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides simplified educational estimates only. It is
            not mortgage, financial, tax, legal or investment advice. Actual
            affordability depends on your lender, credit profile, location,
            interest rate, taxes, insurance, savings, emergency fund and personal
            budget.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Mortgage Calculator',
              href: '/calculators/mortgage',
            },
            {
              title: 'Refinance Calculator',
              href: '/calculators/refinance',
            },
            {
              title: 'Rent vs Buy Calculator',
              href: '/calculators/rent-vs-buy',
            },
            {
              title: 'Down Payment Calculator',
              href: '/calculators/down-payment',
            },
            {
              title: 'Amortization Calculator',
              href: '/calculators/amortization',
            },
            {
              title: 'Extra Mortgage Payment Calculator',
              href: '/calculators/extra-mortgage-payment',
            },
          ]}
        />

        <AdBanner slot="mortgage-affordability-bottom" />
      </div>
    </section>
  );
}