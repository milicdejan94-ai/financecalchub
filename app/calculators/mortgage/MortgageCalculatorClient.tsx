'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(1.1);
  const [insurance, setInsurance] = useState(1200);

  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const totalPayments = loanTerm * 12;

  const principalAndInterest =
    monthlyRate > 0
      ? loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
          (Math.pow(1 + monthlyRate, totalPayments) - 1))
      : loanAmount / totalPayments;

  const monthlyPropertyTax = (homePrice * (propertyTax / 100)) / 12;
  const monthlyInsurance = insurance / 12;
  const totalMonthlyPayment =
    principalAndInterest + monthlyPropertyTax + monthlyInsurance;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Mortgage Calculator' },
  ]}
/>
        <p className="eyebrow">US mortgage calculator</p>

        <h1>Mortgage Calculator</h1>

        <p>
          Estimate your monthly mortgage payment including principal, interest,
          property tax and homeowners insurance.
        </p>

        <AdBanner slot="mortgage-top" />

        <div className="calculator-box">
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
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
            >
              <option value={30}>30 years</option>
              <option value={20}>20 years</option>
              <option value={15}>15 years</option>
              <option value={10}>10 years</option>
            </select>
          </div>

          <div className="input-group">
            <label>Annual property tax (%)</label>
            <input
              type="number"
              value={propertyTax}
              step="0.1"
              onChange={(e) => setPropertyTax(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Annual homeowners insurance</label>
            <input
              type="number"
              value={insurance}
              onChange={(e) => setInsurance(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Estimated monthly payment: ${totalMonthlyPayment.toFixed(2)}
          </div>

          <div className="result">
            Principal & interest: ${principalAndInterest.toFixed(2)}
          </div>

          <div className="result">
            Estimated monthly property tax: ${monthlyPropertyTax.toFixed(2)}
          </div>

          <div className="result">
            Estimated monthly insurance: ${monthlyInsurance.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="mortgage-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this mortgage calculator works</h2>

          <p>
            This mortgage calculator estimates your monthly housing payment by
            combining loan principal, interest, property tax and homeowners
            insurance. It is designed to help home buyers understand how changes
            in home price, down payment and interest rate may affect monthly cost.
          </p>

          <h3>What is principal and interest?</h3>

          <p>
            Principal is the amount borrowed from the lender. Interest is the cost
            paid to borrow that money. Together, principal and interest usually
            make up the largest part of a mortgage payment.
          </p>

          <h3>Why property tax matters</h3>

          <p>
            Property taxes vary by location and can significantly affect the total
            monthly cost of owning a home. This calculator lets you estimate
            annual property tax as a percentage of the home price.
          </p>

          <h3>Why homeowners insurance matters</h3>

          <p>
            Homeowners insurance can add to the total monthly housing payment.
            Actual insurance costs depend on location, property type, coverage and
            insurance provider.
          </p>

          <h3>Important note</h3>

          <p>
            This is a simplified estimate. Actual mortgage payments may include
            PMI, HOA fees, local taxes, lender fees and other costs.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Refinance Calculator',
              href: '/calculators/refinance',
            },
            {
              title: 'Mortgage Affordability Calculator',
              href: '/calculators/mortgage-affordability',
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

        <AdBanner slot="mortgage-bottom" />
      </div>
    </section>
  );
}