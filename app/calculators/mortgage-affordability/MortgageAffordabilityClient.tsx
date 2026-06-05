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
  const [debtToIncomeLimit, setDebtToIncomeLimit] = useState(36);

  const monthlyIncome = annualIncome / 12;
  const maxTotalDebtPayment = monthlyIncome * (debtToIncomeLimit / 100);
  const maxMortgagePayment = Math.max(maxTotalDebtPayment - monthlyDebts, 0);

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const estimatedLoanAmount =
    monthlyRate > 0
      ? maxMortgagePayment *
        ((Math.pow(1 + monthlyRate, numberOfPayments) - 1) /
          (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)))
      : maxMortgagePayment * numberOfPayments;

  const estimatedHomePrice = estimatedLoanAmount + downPayment;

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
          Estimate how much house you may be able to afford based on income,
          monthly debts, down payment, interest rate and debt-to-income ratio.
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
            <label>Debt-to-income limit (%)</label>
            <input
              type="number"
              value={debtToIncomeLimit}
              onChange={(e) => setDebtToIncomeLimit(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Estimated affordable home price: ${estimatedHomePrice.toFixed(2)}
          </div>

          <div className="result">
            Estimated loan amount: ${estimatedLoanAmount.toFixed(2)}
          </div>

          <div className="result">
            Estimated max mortgage payment: ${maxMortgagePayment.toFixed(2)}
          </div>

          <div className="result">
            Monthly income used: ${monthlyIncome.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="mortgage-affordability-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this mortgage affordability calculator works</h2>

          <p>
            This calculator estimates how much home you may be able to afford by
            using income, existing monthly debt payments, down payment, interest
            rate and a debt-to-income limit.
          </p>

          <h3>What is debt-to-income ratio?</h3>

          <p>
            Debt-to-income ratio compares monthly debt payments with monthly
            income. Lenders often use this ratio when reviewing mortgage
            applications.
          </p>

          <h3>Why down payment matters</h3>

          <p>
            A larger down payment can increase estimated home affordability
            because it reduces the loan amount needed to buy a home.
          </p>

          <h3>Interest rates affect affordability</h3>

          <p>
            Higher interest rates usually reduce affordability because they
            increase the monthly payment for the same loan amount.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides simplified educational estimates only. It
            does not include property taxes, homeowners insurance, PMI, HOA fees
            or lender-specific approval rules.
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