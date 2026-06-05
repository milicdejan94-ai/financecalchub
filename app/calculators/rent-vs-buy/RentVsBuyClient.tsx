'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function RentVsBuyClient() {
  const [monthlyRent, setMonthlyRent] = useState(2000);
  const [rentIncreaseRate, setRentIncreaseRate] = useState(3);
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.1);
  const [homeInsurance, setHomeInsurance] = useState(1200);
  const [yearsToCompare, setYearsToCompare] = useState(7);

  const months = yearsToCompare * 12;

  let totalRentCost = 0;
  let currentRent = monthlyRent;

  for (let year = 1; year <= yearsToCompare; year += 1) {
    totalRentCost += currentRent * 12;
    currentRent *= 1 + rentIncreaseRate / 100;
  }

  const loanAmount = Math.max(homePrice - downPayment, 0);
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const monthlyMortgage =
    monthlyRate > 0
      ? loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
      : loanAmount / numberOfPayments;

  const monthlyPropertyTax = (homePrice * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = homeInsurance / 12;

  const estimatedMonthlyBuyingCost =
    monthlyMortgage + monthlyPropertyTax + monthlyInsurance;

  const totalBuyingMonthlyCost = estimatedMonthlyBuyingCost * months;
  const totalBuyingCost = downPayment + totalBuyingMonthlyCost;

  const difference = totalBuyingCost - totalRentCost;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Rent vs Buy Calculator' },
  ]}
/>
        <p className="eyebrow">Rent vs buy calculator</p>

        <h1>Rent vs Buy Calculator</h1>

        <p>
          Compare estimated renting costs with home buying costs over a selected
          time period.
        </p>

        <AdBanner slot="rent-vs-buy-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Monthly rent</label>
            <input
              type="number"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Annual rent increase (%)</label>
            <input
              type="number"
              value={rentIncreaseRate}
              step="0.1"
              onChange={(e) => setRentIncreaseRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Home price</label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
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
            <label>Mortgage interest rate (%)</label>
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
            <label>Property tax rate (%)</label>
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
              value={homeInsurance}
              onChange={(e) => setHomeInsurance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Years to compare</label>
            <input
              type="number"
              value={yearsToCompare}
              onChange={(e) => setYearsToCompare(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Estimated renting cost: ${totalRentCost.toFixed(2)}
          </div>

          <div className="result">
            Estimated buying cost: ${totalBuyingCost.toFixed(2)}
          </div>

          <div className="result">
            Estimated monthly buying cost: ${estimatedMonthlyBuyingCost.toFixed(2)}
          </div>

          <div className="result">
            Difference:{' '}
            {difference > 0
              ? `Buying costs about $${difference.toFixed(2)} more`
              : `Buying costs about $${Math.abs(difference).toFixed(2)} less`}
          </div>
        </div>

        <AdBanner slot="rent-vs-buy-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this rent vs buy calculator works</h2>

          <p>
            This calculator compares estimated rent payments with estimated home
            buying costs over time. It includes rent increases, down payment,
            mortgage payments, property taxes and homeowners insurance.
          </p>

          <h3>Renting costs</h3>

          <p>
            Renting costs are estimated using current monthly rent and an annual
            rent increase assumption. Actual rental costs may vary depending on
            lease terms, location and market changes.
          </p>

          <h3>Buying costs</h3>

          <p>
            Buying costs include down payment, estimated mortgage payments,
            property taxes and homeowners insurance. Other costs may also apply.
          </p>

          <h3>Renting vs buying decision</h3>

          <p>
            The best choice depends on your budget, local housing market, how
            long you plan to stay, maintenance costs, home appreciation and other
            financial factors.
          </p>

          <h3>Important limitations</h3>

          <p>
            This calculator does not include home appreciation, selling costs,
            repairs, maintenance, HOA fees, tax deductions, investment returns or
            opportunity cost. It is a simplified educational estimate.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Mortgage Calculator',
              href: '/calculators/mortgage',
            },
            {
              title: 'Mortgage Affordability Calculator',
              href: '/calculators/mortgage-affordability',
            },
            {
              title: 'Down Payment Calculator',
              href: '/calculators/down-payment',
            },
            {
              title: 'Refinance Calculator',
              href: '/calculators/refinance',
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

        <AdBanner slot="rent-vs-buy-bottom" />
      </div>
    </section>
  );
}