'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function RefinanceClient() {
  const [currentBalance, setCurrentBalance] = useState(300000);
  const [currentRate, setCurrentRate] = useState(7);
  const [currentTermYears, setCurrentTermYears] = useState(25);

  const [newRate, setNewRate] = useState(5.75);
  const [newTermYears, setNewTermYears] = useState(30);
  const [closingCosts, setClosingCosts] = useState(5000);

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

  const currentPayment = calculateMonthlyPayment(
    currentBalance,
    currentRate,
    currentTermYears
  );

  const newPayment = calculateMonthlyPayment(
    currentBalance,
    newRate,
    newTermYears
  );

  const monthlySavings = currentPayment - newPayment;
  const breakEvenMonths = monthlySavings > 0 ? closingCosts / monthlySavings : 0;

  const totalCurrentPayments = currentPayment * currentTermYears * 12;
  const totalNewPayments = newPayment * newTermYears * 12 + closingCosts;
  const estimatedLifetimeDifference = totalCurrentPayments - totalNewPayments;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Refinance Calculator' },
  ]}
/>
        <p className="eyebrow">Mortgage refinance calculator</p>

        <h1>Refinance Calculator</h1>

        <p>
          Estimate monthly savings, break-even time and potential cost difference
          when refinancing a mortgage.
        </p>

        <AdBanner slot="refinance-top" />

        <div className="calculator-box">
          <div className="input-group">
            <label>Current mortgage balance</label>
            <input
              type="number"
              value={currentBalance}
              onChange={(e) => setCurrentBalance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Current interest rate (%)</label>
            <input
              type="number"
              value={currentRate}
              step="0.1"
              onChange={(e) => setCurrentRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Years remaining on current loan</label>
            <input
              type="number"
              value={currentTermYears}
              onChange={(e) => setCurrentTermYears(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>New refinance interest rate (%)</label>
            <input
              type="number"
              value={newRate}
              step="0.1"
              onChange={(e) => setNewRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>New loan term</label>
            <select
              value={newTermYears}
              onChange={(e) => setNewTermYears(Number(e.target.value))}
            >
              <option value={30}>30 years</option>
              <option value={25}>25 years</option>
              <option value={20}>20 years</option>
              <option value={15}>15 years</option>
              <option value={10}>10 years</option>
            </select>
          </div>

          <div className="input-group">
            <label>Estimated closing costs</label>
            <input
              type="number"
              value={closingCosts}
              onChange={(e) => setClosingCosts(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Current estimated payment: ${currentPayment.toFixed(2)}
          </div>

          <div className="result">
            New estimated payment: ${newPayment.toFixed(2)}
          </div>

          <div className="result">
            Estimated monthly savings: ${monthlySavings.toFixed(2)}
          </div>

          <div className="result">
            Break-even time:{' '}
            {monthlySavings > 0
              ? `${breakEvenMonths.toFixed(1)} months`
              : 'No monthly savings based on these inputs'}
          </div>

          <div className="result">
            Estimated lifetime difference: $
            {estimatedLifetimeDifference.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="refinance-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this refinance calculator works</h2>

          <p>
            This calculator compares an estimated current mortgage payment with a
            new refinanced mortgage payment. It also estimates how long it may
            take for monthly savings to recover closing costs.
          </p>

          <h3>What is a refinance break-even point?</h3>

          <p>
            The break-even point is the estimated time needed for monthly savings
            to offset refinance closing costs. A shorter break-even period may
            make refinancing more attractive.
          </p>

          <h3>Monthly savings are not the only factor</h3>

          <p>
            A refinance can lower the monthly payment but may extend the loan
            term. That can reduce monthly costs while increasing total interest
            over time.
          </p>

          <h3>Closing costs matter</h3>

          <p>
            Refinance closing costs may include lender fees, appraisal fees,
            title fees and other charges. Higher closing costs increase the
            break-even time.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides educational estimates only. It is not
            mortgage, lending, financial or tax advice.
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
              title: 'Amortization Calculator',
              href: '/calculators/amortization',
            },
            {
              title: 'Extra Mortgage Payment Calculator',
              href: '/calculators/extra-mortgage-payment',
            },
            {
              title: 'Rent vs Buy Calculator',
              href: '/calculators/rent-vs-buy',
            },
            {
              title: 'Down Payment Calculator',
              href: '/calculators/down-payment',
            },
          ]}
        />

        <AdBanner slot="refinance-bottom" />
      </div>
    </section>
  );
}