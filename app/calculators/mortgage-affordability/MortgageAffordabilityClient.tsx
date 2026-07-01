'use client';

import { useState } from 'react';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

function formatMoney(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatMoneyExact(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

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
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const housingTargets = {
    conservative: monthlyIncome * 0.25,
    balanced: monthlyIncome * 0.3,
    stretch: monthlyIncome * 0.35,
  };

  function paymentToLoanAmount(payment: number) {
    if (payment <= 0 || numberOfPayments <= 0) return 0;

    if (monthlyRate > 0) {
      return (
        payment *
        ((Math.pow(1 + monthlyRate, numberOfPayments) - 1) /
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)))
      );
    }

    return payment * numberOfPayments;
  }

  function principalAndInterest(loanAmount: number) {
    if (loanAmount <= 0 || numberOfPayments <= 0) return 0;

    if (monthlyRate > 0) {
      return (
        loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
      );
    }

    return loanAmount / numberOfPayments;
  }

  function estimateScenario(targetHousingPayment: number) {
    const recurringNonLoanCosts =
      annualInsurance / 12 + monthlyPmi + monthlyHoa + monthlyMaintenance;

    const availableBeforePropertyTax = Math.max(
      targetHousingPayment - recurringNonLoanCosts,
      0
    );

    let estimatedHomePrice = paymentToLoanAmount(availableBeforePropertyTax) + downPayment;

    for (let i = 0; i < 6; i += 1) {
      const monthlyPropertyTax = (estimatedHomePrice * (propertyTaxRate / 100)) / 12;
      const availableForLoan = Math.max(
        targetHousingPayment - recurringNonLoanCosts - monthlyPropertyTax,
        0
      );
      estimatedHomePrice = paymentToLoanAmount(availableForLoan) + downPayment;
    }

    const loanAmount = Math.max(estimatedHomePrice - downPayment, 0);
    const monthlyPrincipalInterest = principalAndInterest(loanAmount);
    const monthlyPropertyTax = (estimatedHomePrice * (propertyTaxRate / 100)) / 12;
    const monthlyInsurance = annualInsurance / 12;

    const totalMonthlyHousingCost =
      monthlyPrincipalInterest +
      monthlyPropertyTax +
      monthlyInsurance +
      monthlyPmi +
      monthlyHoa +
      monthlyMaintenance;

    const totalMonthlyDebtWithHousing = totalMonthlyHousingCost + monthlyDebts;

    const frontEndRatio =
      monthlyIncome > 0 ? (totalMonthlyHousingCost / monthlyIncome) * 100 : 0;

    const backEndRatio =
      monthlyIncome > 0 ? (totalMonthlyDebtWithHousing / monthlyIncome) * 100 : 0;

    return {
      targetHousingPayment,
      homePrice: Math.max(estimatedHomePrice, 0),
      loanAmount,
      monthlyPrincipalInterest,
      monthlyPropertyTax,
      monthlyInsurance,
      totalMonthlyHousingCost,
      frontEndRatio,
      backEndRatio,
    };
  }

  const conservativeScenario = estimateScenario(housingTargets.conservative);
  const balancedScenario = estimateScenario(housingTargets.balanced);
  const stretchScenario = estimateScenario(housingTargets.stretch);

  const scenarios = [
    { label: 'Conservative', note: 'About 25% of gross income', data: conservativeScenario },
    { label: 'Balanced', note: 'About 30% of gross income', data: balancedScenario },
    { label: 'Stretch', note: 'About 35% of gross income', data: stretchScenario },
  ];

  const dtiMessage =
    stretchScenario.backEndRatio > 43
      ? 'Your stretch scenario may be risky because estimated total debt-to-income is above 43%.'
      : balancedScenario.backEndRatio > 36
      ? 'Your balanced scenario may feel tight because estimated total debt-to-income is above 36%.'
      : 'Your estimated ranges appear reasonable based on the numbers entered, but your real monthly budget matters more than a calculator estimate.';

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
          Estimate how much house you may be able to afford based on household income,
          monthly debts, down payment, interest rate, property taxes, insurance, PMI,
          HOA fees and a maintenance buffer. The calculator shows conservative,
          balanced and stretch scenarios so you can compare affordability ranges.
        </p>

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
            Balanced estimated home price: {formatMoney(balancedScenario.homePrice)}
          </div>

          <div className="result">
            Balanced estimated loan amount: {formatMoney(balancedScenario.loanAmount)}
          </div>

          <div className="result">
            Balanced monthly housing cost: {formatMoneyExact(balancedScenario.totalMonthlyHousingCost)}
          </div>

          <div className="result">
            Balanced total debt-to-income ratio: {balancedScenario.backEndRatio.toFixed(1)}%
          </div>

          <div className="result">{dtiMessage}</div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Mortgage affordability estimate</h2>

          <p>
            These ranges are based on how much of your gross monthly income goes toward
            housing. A lower percentage may leave more room for savings, emergencies,
            retirement contributions and normal living expenses.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Estimated home price</th>
                  <th>Loan amount</th>
                  <th>Monthly housing cost</th>
                  <th>Total DTI</th>
                </tr>
              </thead>
              <tbody>
                {scenarios.map((scenario) => (
                  <tr key={scenario.label}>
                    <td>
                      <strong>{scenario.label}</strong>
                      <br />
                      {scenario.note}
                    </td>
                    <td>{formatMoney(scenario.data.homePrice)}</td>
                    <td>{formatMoney(scenario.data.loanAmount)}</td>
                    <td>{formatMoneyExact(scenario.data.totalMonthlyHousingCost)}</td>
                    <td>{scenario.data.backEndRatio.toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Monthly cost breakdown</h2>

          <p>
            Mortgage affordability is not only the principal and interest payment. Taxes,
            insurance, PMI, HOA fees and maintenance can change the real monthly cost of
            owning a home.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Monthly gross income</th>
                  <td>{formatMoneyExact(monthlyIncome)}</td>
                </tr>
                <tr>
                  <th>Existing monthly debt payments</th>
                  <td>{formatMoneyExact(monthlyDebts)}</td>
                </tr>
                <tr>
                  <th>Principal and interest</th>
                  <td>{formatMoneyExact(balancedScenario.monthlyPrincipalInterest)}</td>
                </tr>
                <tr>
                  <th>Estimated property tax</th>
                  <td>{formatMoneyExact(balancedScenario.monthlyPropertyTax)}</td>
                </tr>
                <tr>
                  <th>Homeowners insurance</th>
                  <td>{formatMoneyExact(balancedScenario.monthlyInsurance)}</td>
                </tr>
                <tr>
                  <th>PMI, HOA and maintenance</th>
                  <td>{formatMoneyExact(monthlyPmi + monthlyHoa + monthlyMaintenance)}</td>
                </tr>
                <tr>
                  <th>Balanced monthly housing cost</th>
                  <td>{formatMoneyExact(balancedScenario.totalMonthlyHousingCost)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How this mortgage affordability calculator works</h2>

          <p>
            The calculator starts with gross monthly income and tests three housing
            payment targets: 25%, 30% and 35% of gross income. It then estimates how
            much mortgage principal and interest can fit after property tax, insurance,
            PMI, HOA and maintenance assumptions are included.
          </p>

          <h3>What is debt-to-income ratio?</h3>

          <p>
            Debt-to-income ratio compares monthly debt payments with monthly gross
            income. The front-end ratio looks at housing costs only. The back-end ratio
            includes housing plus other debts such as car loans, student loans, personal
            loans and credit card payments.
          </p>

          <h3>Why the monthly payment matters more than the home price</h3>

          <p>
            Two homes with the same purchase price can have different monthly costs if
            taxes, insurance, HOA fees or required repairs are different. A home that is
            approved by a lender can still feel expensive if it leaves too little room
            for savings and daily expenses.
          </p>

          <h3>Example</h3>

          <p>
            If a household earns $90,000 per year, has $500 in monthly debt payments,
            uses a $60,000 down payment and estimates a 6.5% mortgage rate, the balanced
            scenario targets about 30% of gross monthly income for housing before checking
            the total DTI ratio. Changing the rate, down payment, insurance or monthly
            debts can move the affordable home price significantly.
          </p>

          <h3>Comfortable vs stretch affordability</h3>

          <p>
            A conservative scenario may be easier to handle during slower months or after
            unexpected expenses. A stretch scenario may help estimate the upper edge of
            affordability, but it can reduce flexibility and increase the risk of becoming
            house poor.
          </p>

          <h3>Limitations</h3>

          <p>
            This calculator provides simplified educational estimates only. It does not
            determine mortgage approval, final loan eligibility or the exact amount a lender
            may offer. Actual affordability depends on credit profile, lender rules, rate
            lock, taxes, insurance, cash reserves, employment history, property type,
            location and your personal budget.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Mortgage affordability FAQ</h2>

          <h3>How much house can I afford?</h3>
          <p>
            A practical estimate starts with income, debts, down payment and the monthly
            housing payment you can comfortably handle. The calculator shows conservative,
            balanced and stretch ranges, but your real budget should decide the final limit.
          </p>

          <h3>What is a good debt-to-income ratio?</h3>
          <p>
            Lower debt-to-income ratios usually provide more budget flexibility. Many buyers
            compare scenarios around the low-to-mid 30% range for total debt, while higher
            ratios may feel tighter and may depend more heavily on lender rules.
          </p>

          <h3>Does the down payment change affordability?</h3>
          <p>
            Yes. A larger down payment can reduce the loan amount, monthly principal and
            interest, and possibly PMI. However, keeping emergency savings after buying a
            home is also important.
          </p>

          <h3>Why include maintenance?</h3>
          <p>
            Homeownership includes repairs and ongoing upkeep. A maintenance buffer helps
            keep the estimate closer to real monthly ownership costs instead of focusing only
            on the mortgage payment.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Mortgage Calculator',
              href: '/calculators/mortgage',
            },
            {
              title: 'Down Payment Calculator',
              href: '/calculators/down-payment',
            },
            {
              title: 'Rent vs Buy Calculator',
              href: '/calculators/rent-vs-buy',
            },
            {
              title: 'Loan Calculator',
              href: '/calculators/loan',
            },
            {
              title: 'Amortization Calculator',
              href: '/calculators/amortization',
            },
            {
              title: 'Methodology',
              href: '/methodology',
            },
          ]}
        />
      </div>
    </section>
  );
}
