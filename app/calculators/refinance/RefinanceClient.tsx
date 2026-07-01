'use client';

import { useMemo, useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatNumber(value: number, digits = 1) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(Number.isFinite(value) ? value : 0);
}

function calculateMonthlyPayment(principal: number, annualRate: number, years: number) {
  const safePrincipal = Math.max(principal, 0);
  const safeYears = Math.max(years, 0);
  const numberOfPayments = safeYears * 12;

  if (safePrincipal === 0 || numberOfPayments === 0) {
    return 0;
  }

  const monthlyRate = annualRate / 100 / 12;

  if (monthlyRate === 0) {
    return safePrincipal / numberOfPayments;
  }

  return (
    safePrincipal *
    ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
  );
}

export default function RefinanceClient() {
  const [currentBalance, setCurrentBalance] = useState(300000);
  const [currentRate, setCurrentRate] = useState(7);
  const [currentTermYears, setCurrentTermYears] = useState(25);
  const [newRate, setNewRate] = useState(5.75);
  const [newTermYears, setNewTermYears] = useState(30);
  const [closingCosts, setClosingCosts] = useState(5000);

  const results = useMemo(() => {
    const currentPayment = calculateMonthlyPayment(
      currentBalance,
      currentRate,
      currentTermYears
    );

    const newPayment = calculateMonthlyPayment(currentBalance, newRate, newTermYears);
    const monthlySavings = currentPayment - newPayment;
    const breakEvenMonths = monthlySavings > 0 ? closingCosts / monthlySavings : 0;

    const currentRemainingPayments = currentPayment * currentTermYears * 12;
    const newTotalPaymentsWithCosts = newPayment * newTermYears * 12 + closingCosts;
    const estimatedLifetimeDifference = currentRemainingPayments - newTotalPaymentsWithCosts;

    const currentInterestRemaining = Math.max(currentRemainingPayments - currentBalance, 0);
    const newInterestWithCosts = Math.max(newPayment * newTermYears * 12 - currentBalance + closingCosts, 0);

    const rateDifference = currentRate - newRate;
    const termDifferenceYears = newTermYears - currentTermYears;

    let decisionNote = 'Review the monthly savings, break-even point and total cost before deciding.';

    if (monthlySavings > 0 && breakEvenMonths <= 36) {
      decisionNote =
        'This scenario shows monthly savings and a relatively shorter break-even period, but total lifetime cost still depends on the new term.';
    } else if (monthlySavings > 0) {
      decisionNote =
        'This scenario lowers the monthly payment, but closing costs take longer to recover.';
    } else {
      decisionNote =
        'This scenario does not create monthly savings based on the numbers entered.';
    }

    return {
      currentPayment,
      newPayment,
      monthlySavings,
      breakEvenMonths,
      currentRemainingPayments,
      newTotalPaymentsWithCosts,
      estimatedLifetimeDifference,
      currentInterestRemaining,
      newInterestWithCosts,
      rateDifference,
      termDifferenceYears,
      decisionNote,
    };
  }, [currentBalance, currentRate, currentTermYears, newRate, newTermYears, closingCosts]);

  const comparisonRows = [
    {
      label: 'Current loan',
      rate: `${formatNumber(currentRate, 2)}%`,
      term: `${currentTermYears} years remaining`,
      payment: formatCurrency(results.currentPayment),
      total: formatCurrency(results.currentRemainingPayments),
    },
    {
      label: 'New refinance loan',
      rate: `${formatNumber(newRate, 2)}%`,
      term: `${newTermYears} years`,
      payment: formatCurrency(results.newPayment),
      total: formatCurrency(results.newTotalPaymentsWithCosts),
    },
  ];

  const breakEvenText =
    results.monthlySavings > 0
      ? `${formatNumber(results.breakEvenMonths, 1)} months (${formatNumber(
          results.breakEvenMonths / 12,
          1
        )} years)`
      : 'No break-even point because the new payment is not lower';

  const lifetimeDifferenceText =
    results.estimatedLifetimeDifference >= 0
      ? `${formatCurrency(results.estimatedLifetimeDifference)} estimated savings`
      : `${formatCurrency(Math.abs(results.estimatedLifetimeDifference))} estimated extra cost`;

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
          Estimate whether refinancing a mortgage could lower your payment, how long it may
          take to recover closing costs, and whether the new loan may save or cost more over
          time. This calculator compares your current remaining mortgage with a possible new
          refinance loan.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label>Current mortgage balance</label>
            <input
              type="number"
              min="0"
              value={currentBalance}
              onChange={(event) => setCurrentBalance(Number(event.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Current interest rate (%)</label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={currentRate}
              onChange={(event) => setCurrentRate(Number(event.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Years remaining on current loan</label>
            <input
              type="number"
              min="1"
              value={currentTermYears}
              onChange={(event) => setCurrentTermYears(Number(event.target.value))}
            />
          </div>

          <div className="input-group">
            <label>New refinance interest rate (%)</label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={newRate}
              onChange={(event) => setNewRate(Number(event.target.value))}
            />
          </div>

          <div className="input-group">
            <label>New loan term</label>
            <select
              value={newTermYears}
              onChange={(event) => setNewTermYears(Number(event.target.value))}
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
              min="0"
              value={closingCosts}
              onChange={(event) => setClosingCosts(Number(event.target.value))}
            />
          </div>

          <div className="result">
            New estimated payment: {formatCurrency(results.newPayment)}
          </div>

          <div className="result">
            Estimated monthly savings: {formatCurrency(results.monthlySavings)}
          </div>

          <div className="result">Break-even point: {breakEvenText}</div>

          <div className="result">Long-term difference: {lifetimeDifferenceText}</div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Refinance estimate summary</h2>

          <p>
            A refinance can look attractive when the new payment is lower, but payment alone
            is not the full decision. Closing costs, the new term length, how long you plan to
            keep the loan, and total interest over time can change the answer.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Current estimated payment</th>
                  <td>{formatCurrency(results.currentPayment)}</td>
                </tr>
                <tr>
                  <th>New estimated payment</th>
                  <td>{formatCurrency(results.newPayment)}</td>
                </tr>
                <tr>
                  <th>Estimated monthly savings</th>
                  <td>{formatCurrency(results.monthlySavings)}</td>
                </tr>
                <tr>
                  <th>Estimated closing costs</th>
                  <td>{formatCurrency(closingCosts)}</td>
                </tr>
                <tr>
                  <th>Break-even point</th>
                  <td>{breakEvenText}</td>
                </tr>
                <tr>
                  <th>Interest rate difference</th>
                  <td>{formatNumber(results.rateDifference, 2)} percentage points</td>
                </tr>
                <tr>
                  <th>Term change</th>
                  <td>
                    {results.termDifferenceYears === 0
                      ? 'Same term length'
                      : `${Math.abs(results.termDifferenceYears)} years ${
                          results.termDifferenceYears > 0 ? 'longer' : 'shorter'
                        }`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: 18 }}>
            <strong>Result note:</strong> {results.decisionNote}
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Current loan vs refinance loan</h2>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Rate</th>
                  <th>Term</th>
                  <th>Monthly payment</th>
                  <th>Total remaining payments</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.rate}</td>
                    <td>{row.term}</td>
                    <td>{row.payment}</td>
                    <td>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: 18 }}>
            In this estimate, the current loan has about{' '}
            <strong>{formatCurrency(results.currentInterestRemaining)}</strong> of remaining
            interest, while the refinance scenario has about{' '}
            <strong>{formatCurrency(results.newInterestWithCosts)}</strong> of estimated
            interest plus closing costs.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>How this refinance calculator works</h2>

          <p>
            The calculator estimates a payment for the remaining balance on your current loan
            and compares it with a new payment using the refinance rate and term. It then
            estimates monthly savings, the break-even period, and the difference in total
            remaining payments.
          </p>

          <h3>What is a refinance break-even point?</h3>
          <p>
            The break-even point is the estimated time needed for monthly savings to recover
            refinance closing costs. For example, if closing costs are $5,000 and the refinance
            saves $200 per month, the simple break-even point is about 25 months.
          </p>

          <h3>When can refinancing make sense?</h3>
          <p>
            Refinancing may make sense when the new rate is meaningfully lower, the monthly
            savings are useful, the break-even period is shorter than the time you expect to
            keep the loan, or the new term supports your budget goals. It may be less helpful
            if the loan term is extended so much that total interest rises.
          </p>

          <h3>Why a lower payment can still cost more</h3>
          <p>
            A 30-year refinance may reduce the monthly payment by spreading the balance over a
            longer period. That can improve monthly cash flow, but it can also increase the
            total amount paid if the loan lasts much longer.
          </p>

          <h3>Closing costs matter</h3>
          <p>
            Refinance closing costs may include lender fees, appraisal fees, title fees,
            recording fees and other charges. Higher closing costs increase the break-even
            point and reduce the benefit of refinancing.
          </p>

          <h3>Important limitations</h3>
          <p>
            This calculator provides simplified educational estimates only. It does not include
            taxes, insurance changes, PMI changes, escrow changes, cash-out refinancing,
            prepayment penalties, lender-specific fees or tax effects. It is not mortgage,
            lending, financial, legal or tax advice.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Refinance calculator FAQ</h2>

          <h3>Is refinancing always worth it when the rate is lower?</h3>
          <p>
            No. A lower rate can help, but closing costs, the new term and how long you keep
            the loan matter. A refinance with a lower monthly payment can still cost more over
            the life of the loan if the repayment period is extended too much.
          </p>

          <h3>Should I compare APR or interest rate?</h3>
          <p>
            The interest rate affects the monthly payment, while APR is intended to reflect a
            broader borrowing cost that may include certain fees. When comparing offers, review
            both the payment and the full cost of the loan.
          </p>

          <h3>What is a good break-even period?</h3>
          <p>
            A shorter break-even period is generally easier to justify, but there is no single
            correct number. The key question is whether you expect to keep the mortgage long
            enough to recover the refinance costs.
          </p>

          <h3>Does this calculator include taxes and insurance?</h3>
          <p>
            No. This calculator focuses on principal and interest for the loan comparison. Your
            actual monthly mortgage payment may also include property taxes, homeowners
            insurance, PMI, HOA fees or escrow adjustments.
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
              title: 'Extra Mortgage Payment Calculator',
              href: '/calculators/extra-mortgage-payment',
            },
            {
              title: 'APR Calculator',
              href: '/calculators/apr',
            },
            {
              title: 'Mortgage Affordability Calculator',
              href: '/calculators/mortgage-affordability',
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
