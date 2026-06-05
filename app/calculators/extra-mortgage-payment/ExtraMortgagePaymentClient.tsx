'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function ExtraMortgagePaymentClient() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [extraMonthlyPayment, setExtraMonthlyPayment] = useState(200);

  function calculateMonthlyPayment(
    principal: number,
    annualRate: number,
    years: number
  ) {
    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }

    return (
      principal *
      ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
    );
  }

  function calculatePayoff(extraPayment: number) {
    const monthlyRate = interestRate / 100 / 12;
    const regularPayment = calculateMonthlyPayment(
      loanAmount,
      interestRate,
      loanTermYears
    );

    let balance = loanAmount;
    let months = 0;
    let totalInterest = 0;

    while (balance > 0 && months < loanTermYears * 12 + 600) {
      const interest = balance * monthlyRate;
      const principal = regularPayment + extraPayment - interest;

      if (principal <= 0) {
        break;
      }

      totalInterest += interest;
      balance -= principal;
      months += 1;

      if (balance < 0) {
        balance = 0;
      }
    }

    return {
      months,
      totalInterest,
      regularPayment,
    };
  }

  const regularScenario = calculatePayoff(0);
  const extraScenario = calculatePayoff(extraMonthlyPayment);

  const monthsSaved = Math.max(
    regularScenario.months - extraScenario.months,
    0
  );

  const interestSaved = Math.max(
    regularScenario.totalInterest - extraScenario.totalInterest,
    0
  );

  const yearsSaved = monthsSaved / 12;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Extra Mortgage Payment Calculator' },
  ]}
/>
        <p className="eyebrow">Extra mortgage payment calculator</p>

        <h1>Extra Mortgage Payment Calculator</h1>

        <p>
          Estimate how making extra monthly mortgage payments may reduce total
          interest and shorten your loan payoff time.
        </p>

        <AdBanner slot="extra-mortgage-payment-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Mortgage loan amount</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
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
              <option value={10}>10 years</option>
            </select>
          </div>

          <div className="input-group">
            <label>Extra monthly payment</label>
            <input
              type="number"
              value={extraMonthlyPayment}
              onChange={(e) => setExtraMonthlyPayment(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Regular monthly payment: $
            {regularScenario.regularPayment.toFixed(2)}
          </div>

          <div className="result">
            Interest saved: ${interestSaved.toFixed(2)}
          </div>

          <div className="result">
            Time saved: {monthsSaved} months ({yearsSaved.toFixed(1)} years)
          </div>

          <div className="result">
            New payoff time: {extraScenario.months} months (
            {(extraScenario.months / 12).toFixed(1)} years)
          </div>

          <div className="result">
            Estimated interest with extra payments: $
            {extraScenario.totalInterest.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="extra-mortgage-payment-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How extra mortgage payments work</h2>

          <p>
            Extra mortgage payments can reduce the loan balance faster. When the
            balance decreases faster, less interest may accumulate over time.
          </p>

          <h3>Why extra payments can save interest</h3>

          <p>
            Mortgage interest is usually calculated based on the remaining loan
            balance. Paying extra toward principal can reduce that balance and may
            lower the total interest paid.
          </p>

          <h3>Monthly extra payments</h3>

          <p>
            Even a small additional monthly payment may shorten the payoff
            timeline, especially on long-term mortgages with higher interest
            rates.
          </p>

          <h3>Mortgage payoff strategy</h3>

          <p>
            Some homeowners make extra monthly payments, one-time lump-sum
            payments or biweekly payments to reduce the loan balance faster.
            This calculator focuses on extra monthly payments.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides simplified educational estimates only. It
            does not include taxes, insurance, PMI, fees, prepayment penalties or
            lender-specific rules.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Mortgage Calculator',
              href: '/calculators/mortgage',
            },
            {
              title: 'Amortization Calculator',
              href: '/calculators/amortization',
            },
            {
              title: 'Refinance Calculator',
              href: '/calculators/refinance',
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
              title: 'Rent vs Buy Calculator',
              href: '/calculators/rent-vs-buy',
            },
          ]}
        />

        <AdBanner slot="extra-mortgage-payment-bottom" />
      </div>
    </section>
  );
}