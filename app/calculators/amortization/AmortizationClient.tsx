'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function AmortizationClient() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const monthlyPayment =
    monthlyRate > 0
      ? loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
      : loanAmount / numberOfPayments;

  let balance = loanAmount;
  let totalInterest = 0;

  const schedule = [];

  for (let year = 1; year <= loanTermYears; year += 1) {
    let yearlyPrincipal = 0;
    let yearlyInterest = 0;

    for (let month = 1; month <= 12; month += 1) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;

      yearlyInterest += interestPayment;
      yearlyPrincipal += principalPayment;
      totalInterest += interestPayment;
      balance -= principalPayment;

      if (balance < 0) {
        balance = 0;
      }
    }

    schedule.push({
      year,
      principal: yearlyPrincipal,
      interest: yearlyInterest,
      remainingBalance: balance,
    });
  }

  const totalPaid = loanAmount + totalInterest;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Amortization Calculator' },
  ]}
/>
        <p className="eyebrow">Loan amortization calculator</p>

        <h1>Amortization Calculator</h1>

        <p>
          Estimate monthly payment, total interest and a yearly amortization
          schedule for a mortgage or fixed-rate loan.
        </p>

        <AdBanner slot="amortization-top" />

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

          <div className="result">
            Monthly payment: ${monthlyPayment.toFixed(2)}
          </div>

          <div className="result">
            Total interest: ${totalInterest.toFixed(2)}
          </div>

          <div className="result">
            Total paid: ${totalPaid.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="amortization-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Yearly amortization schedule</h2>

          <p>
            This simplified amortization schedule shows how much principal and
            interest may be paid each year and how the remaining loan balance may
            decrease over time.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Principal Paid</th>
                  <th>Interest Paid</th>
                  <th>Remaining Balance</th>
                </tr>
              </thead>

              <tbody>
                {schedule.map((row) => (
                  <tr key={row.year}>
                    <td>{row.year}</td>
                    <td>${row.principal.toFixed(2)}</td>
                    <td>${row.interest.toFixed(2)}</td>
                    <td>${row.remainingBalance.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>How this amortization calculator works</h2>

          <p>
            This calculator estimates how a fixed-rate loan may be paid down over
            time. Each payment is split between interest and principal. Early in
            the loan, more of the payment usually goes toward interest. Later in
            the loan, more goes toward principal.
          </p>

          <h3>What is amortization?</h3>

          <p>
            Amortization is the process of paying off a loan over time through
            scheduled payments. A mortgage amortization schedule shows how the
            balance may decline each year.
          </p>

          <h3>Why amortization matters</h3>

          <p>
            Understanding amortization can help borrowers see how much interest
            they may pay and how quickly the loan balance may decrease.
          </p>

          <h3>Principal vs interest</h3>

          <p>
            Principal is the amount borrowed. Interest is the cost of borrowing.
            An amortization schedule shows how each payment is divided between
            these two parts.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides simplified educational estimates only. It
            does not include taxes, insurance, PMI, fees or lender-specific loan
            terms.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            {
              title: 'Mortgage Calculator',
              href: '/calculators/mortgage',
            },
            {
              title: 'Extra Mortgage Payment Calculator',
              href: '/calculators/extra-mortgage-payment',
            },
            {
              title: 'Refinance Calculator',
              href: '/calculators/refinance',
            },
            {
              title: 'Loan Calculator',
              href: '/calculators/loan',
            },
            {
              title: 'APR Calculator',
              href: '/calculators/apr',
            },
            {
              title: 'Car Loan Calculator',
              href: '/calculators/car-loan',
            },
          ]}
        />

        <AdBanner slot="amortization-bottom" />
      </div>
    </section>
  );
}