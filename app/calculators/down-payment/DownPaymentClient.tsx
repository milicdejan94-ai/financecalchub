'use client';

import { useState } from 'react';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

function formatCurrencyCents(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function DownPaymentClient() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [closingCostPercent, setClosingCostPercent] = useState(3);
  const [cashSavings, setCashSavings] = useState(100000);

  const safeHomePrice = Math.max(homePrice, 0);
  const safeDownPaymentPercent = Math.max(downPaymentPercent, 0);
  const safeClosingCostPercent = Math.max(closingCostPercent, 0);
  const safeCashSavings = Math.max(cashSavings, 0);

  const downPaymentAmount = safeHomePrice * (safeDownPaymentPercent / 100);
  const loanAmount = Math.max(safeHomePrice - downPaymentAmount, 0);
  const estimatedClosingCosts = safeHomePrice * (safeClosingCostPercent / 100);
  const estimatedCashNeeded = downPaymentAmount + estimatedClosingCosts;
  const remainingSavings = safeCashSavings - estimatedCashNeeded;
  const loanToValue = safeHomePrice > 0 ? (loanAmount / safeHomePrice) * 100 : 0;

  const commonDownPayments = [3.5, 5, 10, 20].map((percent) => {
    const amount = safeHomePrice * (percent / 100);
    const loan = Math.max(safeHomePrice - amount, 0);
    const cashNeeded = amount + estimatedClosingCosts;

    return {
      percent,
      amount,
      loan,
      cashNeeded,
      ltv: safeHomePrice > 0 ? (loan / safeHomePrice) * 100 : 0,
    };
  });

  const exampleHomePrice = 400000;
  const exampleTenPercent = exampleHomePrice * 0.1;
  const exampleTwentyPercent = exampleHomePrice * 0.2;
  const exampleDifference = exampleTwentyPercent - exampleTenPercent;

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
          Estimate a home down payment, the remaining mortgage amount and how
          much cash you may need at closing. Use the calculator to compare common
          down payment levels such as 3.5%, 5%, 10% and 20%.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label>Home price</label>
            <input
              type="number"
              value={homePrice}
              min="0"
              onChange={(e) => setHomePrice(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Down payment percentage (%)</label>
            <input
              type="number"
              value={downPaymentPercent}
              step="0.1"
              min="0"
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Estimated closing costs (%)</label>
            <input
              type="number"
              value={closingCostPercent}
              step="0.1"
              min="0"
              onChange={(e) => setClosingCostPercent(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Cash available for purchase</label>
            <input
              type="number"
              value={cashSavings}
              min="0"
              onChange={(e) => setCashSavings(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Down payment amount: {formatCurrencyCents(downPaymentAmount)}
          </div>

          <div className="result">
            Estimated loan amount: {formatCurrencyCents(loanAmount)}
          </div>

          <div className="result">
            Estimated closing costs: {formatCurrencyCents(estimatedClosingCosts)}
          </div>

          <div className="result">
            Estimated cash needed: {formatCurrencyCents(estimatedCashNeeded)}
          </div>

          <div className="result">
            Estimated loan-to-value: {loanToValue.toFixed(1)}%
          </div>

          <div className="result">
            {remainingSavings >= 0
              ? `Estimated cash left after purchase: ${formatCurrencyCents(
                  remainingSavings
                )}`
              : `Estimated cash shortfall: ${formatCurrencyCents(
                  Math.abs(remainingSavings)
                )}`}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Down payment summary</h2>

          <p>
            Based on the numbers entered, this estimate separates the upfront
            down payment from the mortgage amount and adds an estimated closing
            cost amount. Closing costs are included because buyers often need
            more cash than the down payment alone.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Estimate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Home price</td>
                  <td>{formatCurrencyCents(safeHomePrice)}</td>
                </tr>
                <tr>
                  <td>Down payment percentage</td>
                  <td>{safeDownPaymentPercent.toFixed(1)}%</td>
                </tr>
                <tr>
                  <td>Down payment amount</td>
                  <td>{formatCurrencyCents(downPaymentAmount)}</td>
                </tr>
                <tr>
                  <td>Estimated loan amount</td>
                  <td>{formatCurrencyCents(loanAmount)}</td>
                </tr>
                <tr>
                  <td>Estimated closing costs</td>
                  <td>{formatCurrencyCents(estimatedClosingCosts)}</td>
                </tr>
                <tr>
                  <td>Total estimated cash needed</td>
                  <td>{formatCurrencyCents(estimatedCashNeeded)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Common down payment examples</h2>

          <p>
            The table below compares common down payment percentages for a{' '}
            {formatCurrency(safeHomePrice)} home. These are planning examples,
            not loan approvals or lender requirements.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Down payment</th>
                  <th>Cash down</th>
                  <th>Loan amount</th>
                  <th>Loan-to-value</th>
                  <th>Cash needed with closing costs</th>
                </tr>
              </thead>
              <tbody>
                {commonDownPayments.map((row) => (
                  <tr key={row.percent}>
                    <td>{row.percent}%</td>
                    <td>{formatCurrencyCents(row.amount)}</td>
                    <td>{formatCurrencyCents(row.loan)}</td>
                    <td>{row.ltv.toFixed(1)}%</td>
                    <td>{formatCurrencyCents(row.cashNeeded)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>How this down payment calculator works</h2>

          <p>
            The calculator multiplies the home price by the selected down payment
            percentage to estimate the upfront amount paid toward the purchase.
            It then subtracts the down payment from the home price to estimate
            the mortgage amount before other lender adjustments.
          </p>

          <h3>Why the down payment matters</h3>

          <p>
            A larger down payment reduces the amount financed. That may lower the
            monthly mortgage payment, reduce total interest paid over time and
            improve the loan-to-value ratio. A smaller down payment may help a
            buyer purchase sooner, but it can increase the amount borrowed and
            the monthly cost.
          </p>

          <h3>Why 20% down is often used as a benchmark</h3>

          <p>
            A 20% down payment is commonly used as a planning benchmark because
            it often reduces the loan-to-value ratio to 80%. Depending on loan
            type and lender rules, that may help some buyers avoid private
            mortgage insurance. It is not the only possible down payment level,
            and many buyers use less than 20%.
          </p>

          <h3>Down payment vs closing costs</h3>

          <p>
            The down payment is only one part of the cash needed to buy a home.
            Buyers may also need money for closing costs, prepaid taxes,
            insurance, inspections, moving costs and an emergency fund after
            purchase. This calculator includes a simple closing cost estimate so
            the cash-needed number is more realistic.
          </p>

          <h3>Example</h3>

          <p>
            On a {formatCurrency(exampleHomePrice)} home, 10% down would be{' '}
            {formatCurrency(exampleTenPercent)}, while 20% down would be{' '}
            {formatCurrency(exampleTwentyPercent)}. The 20% option requires{' '}
            {formatCurrency(exampleDifference)} more cash upfront, but it also
            reduces the mortgage amount by the same amount before fees and other
            loan adjustments.
          </p>

          <h2>Frequently asked questions</h2>

          <h3>Is 20% down required to buy a home?</h3>

          <p>
            No. Some mortgage programs may allow lower down payments, depending
            on loan type, lender rules, credit profile, location and borrower
            qualifications. The right down payment depends on both approval rules
            and your personal budget.
          </p>

          <h3>Does a bigger down payment always make sense?</h3>

          <p>
            Not always. A bigger down payment can lower the mortgage amount, but
            using too much cash may leave too little for repairs, emergencies or
            moving costs. A strong plan balances the down payment with remaining
            savings.
          </p>

          <h3>What is loan-to-value?</h3>

          <p>
            Loan-to-value, or LTV, compares the mortgage amount with the home
            price. For example, 20% down usually means about 80% LTV before other
            loan costs. Lower LTV can sometimes improve loan terms.
          </p>

          <h3>Does this calculator include PMI?</h3>

          <p>
            This page does not calculate a monthly PMI payment. It shows the down
            payment and loan amount so you can see whether the down payment is
            above or below common thresholds. For full monthly payment estimates,
            use the mortgage calculator.
          </p>

          <h3>Important limitations</h3>

          <p>
            This calculator provides simplified educational estimates only. It is
            not mortgage, lending, tax, legal or financial advice. Actual cash
            needed depends on lender requirements, loan program, credit profile,
            appraisal, property taxes, insurance, closing costs and local rules.
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
              title: 'Methodology',
              href: '/methodology',
            },
          ]}
        />
      </div>
    </section>
  );
}
