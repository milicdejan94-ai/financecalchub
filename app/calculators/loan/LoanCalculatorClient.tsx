'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function LoanCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPayment =
    monthlyRate > 0
      ? loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
      : loanAmount / numberOfPayments;

  const totalPaid = monthlyPayment * numberOfPayments;
  const totalInterest = totalPaid - loanAmount;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Loan Calculator' },
  ]}
/>
        <p className="eyebrow">US loan calculator</p>

        <h1>Loan Calculator</h1>

        <p>
          Estimate monthly payments, total interest and total repayment for a
          fixed-rate personal loan, auto loan or other installment loan.
        </p>

        <AdBanner slot="loan-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Loan amount</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Annual interest rate (%)</label>
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
              <option value={1}>1 year</option>
              <option value={2}>2 years</option>
              <option value={3}>3 years</option>
              <option value={4}>4 years</option>
              <option value={5}>5 years</option>
              <option value={6}>6 years</option>
              <option value={7}>7 years</option>
            </select>
          </div>

          <div className="result">
            Estimated monthly payment: ${monthlyPayment.toFixed(2)}
          </div>

          <div className="result">
            Total interest: ${totalInterest.toFixed(2)}
          </div>

          <div className="result">
            Total repayment: ${totalPaid.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="loan-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this loan calculator works</h2>

          <p>
            This calculator estimates the monthly payment for a fixed-rate loan.
            It uses the loan amount, annual interest rate and repayment term to
            calculate estimated monthly payments, total interest and total
            repayment.
          </p>

          <h3>What affects a loan payment?</h3>

          <p>
            The main factors are the amount borrowed, the interest rate and the
            length of the loan. A longer term usually lowers the monthly payment
            but may increase the total interest paid over time.
          </p>

          <h3>Personal loan and auto loan estimates</h3>

          <p>
            You can use this tool for simple personal loan, auto loan or other
            fixed installment loan estimates. It does not include lender fees,
            insurance, taxes or other charges.
          </p>

          <h3>APR vs interest rate</h3>

          <p>
            The interest rate shows the cost of borrowing before some fees. APR
            may include certain fees and can give a broader estimate of borrowing
            cost.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator is for educational estimates only. Actual loan offers
            depend on credit score, lender requirements, fees, income and other
            financial factors.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Car Loan Calculator',
              href: '/calculators/car-loan',
            },
            {
              title: 'APR Calculator',
              href: '/calculators/apr',
            },
            {
              title: 'Debt Payoff Calculator',
              href: '/calculators/debt-payoff',
            },
            {
              title: 'Credit Card Payoff Calculator',
              href: '/calculators/credit-card-payoff',
            },
            {
              title: 'Amortization Calculator',
              href: '/calculators/amortization',
            },
            {
              title: 'Mortgage Calculator',
              href: '/calculators/mortgage',
            },
          ]}
        />

        <AdBanner slot="loan-bottom" />
      </div>
    </section>
  );
}