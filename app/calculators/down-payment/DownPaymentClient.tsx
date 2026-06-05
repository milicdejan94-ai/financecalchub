'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function DownPaymentClient() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);

  const downPaymentAmount = homePrice * (downPaymentPercent / 100);
  const loanAmount = homePrice - downPaymentAmount;

  const fivePercentDown = homePrice * 0.05;
  const tenPercentDown = homePrice * 0.1;
  const twentyPercentDown = homePrice * 0.2;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Down Payment Calculator' },
  ]}
/>
        <p className="eyebrow">Home down payment calculator</p>

        <h1>Down Payment Calculator</h1>

        <p>
          Estimate how much money you may need for a home down payment and how
          much of the purchase price may be financed.
        </p>

        <AdBanner slot="down-payment-top" />

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
            <label>Down payment percentage (%)</label>
            <input
              type="number"
              value={downPaymentPercent}
              step="0.1"
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Down payment amount: ${downPaymentAmount.toFixed(2)}
          </div>

          <div className="result">
            Estimated loan amount: ${loanAmount.toFixed(2)}
          </div>

          <div className="result">
            Down payment percentage: {downPaymentPercent.toFixed(1)}%
          </div>
        </div>

        <AdBanner slot="down-payment-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Common down payment examples</h2>

          <p>
            For a ${homePrice.toLocaleString('en-US')} home, common down payment
            examples may look like this:
          </p>

          <ul>
            <li>5% down: ${fivePercentDown.toFixed(2)}</li>
            <li>10% down: ${tenPercentDown.toFixed(2)}</li>
            <li>20% down: ${twentyPercentDown.toFixed(2)}</li>
          </ul>

          <h2>How this down payment calculator works</h2>

          <p>
            This calculator multiplies the home price by the selected down
            payment percentage to estimate the upfront amount paid toward the
            purchase. It also estimates the remaining loan amount after the down
            payment.
          </p>

          <h3>Why down payment matters</h3>

          <p>
            A larger down payment reduces the loan amount. This may lower the
            monthly mortgage payment, reduce interest paid over time and may help
            some buyers avoid private mortgage insurance.
          </p>

          <h3>Is 20% down required?</h3>

          <p>
            Many buyers use 20% as a traditional benchmark, but some mortgage
            programs may allow lower down payments. Actual requirements depend on
            lender rules, loan type, credit profile and other factors.
          </p>

          <h3>Down payment and affordability</h3>

          <p>
            The down payment can affect how much home you may be able to afford.
            A larger upfront payment usually lowers the amount that needs to be
            financed.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides simplified educational estimates only. It is
            not mortgage, lending, tax or financial advice.
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
              title: 'Rent vs Buy Calculator',
              href: '/calculators/rent-vs-buy',
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

        <AdBanner slot="down-payment-bottom" />
      </div>
    </section>
  );
}