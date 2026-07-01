'use client';

import { useMemo, useState } from 'react';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

type PayoffResult = {
  months: number;
  totalInterest: number;
  totalPaid: number;
  regularPayment: number;
  paidOff: boolean;
};

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}

function formatYears(months: number) {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years <= 0) {
    return `${remainingMonths} months`;
  }

  if (remainingMonths === 0) {
    return `${years} years`;
  }

  return `${years} years, ${remainingMonths} months`;
}

export default function ExtraMortgagePaymentClient() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [extraMonthlyPayment, setExtraMonthlyPayment] = useState(200);
  const [oneTimeExtraPayment, setOneTimeExtraPayment] = useState(0);

  function calculateMonthlyPayment(
    principal: number,
    annualRate: number,
    years: number
  ) {
    const safePrincipal = Math.max(principal, 0);
    const numberOfPayments = Math.max(years * 12, 1);
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

  function calculatePayoff(extraPayment: number, oneTimePayment: number): PayoffResult {
    const monthlyRate = interestRate / 100 / 12;
    const regularPayment = calculateMonthlyPayment(
      loanAmount,
      interestRate,
      loanTermYears
    );

    let balance = Math.max(loanAmount - Math.max(oneTimePayment, 0), 0);
    let months = 0;
    let totalInterest = 0;
    let paidOff = balance <= 0;

    const maxMonths = loanTermYears * 12 + 600;

    while (balance > 0 && months < maxMonths) {
      const interest = balance * monthlyRate;
      const scheduledPayment = Math.min(
        regularPayment + Math.max(extraPayment, 0),
        balance + interest
      );
      const principal = scheduledPayment - interest;

      if (principal <= 0) {
        break;
      }

      totalInterest += interest;
      balance -= principal;
      months += 1;

      if (balance <= 0.01) {
        balance = 0;
        paidOff = true;
      }
    }

    return {
      months,
      totalInterest,
      totalPaid: Math.max(loanAmount, 0) + totalInterest,
      regularPayment,
      paidOff,
    };
  }

  const regularScenario = useMemo(
    () => calculatePayoff(0, 0),
    [loanAmount, interestRate, loanTermYears]
  );

  const extraMonthlyScenario = useMemo(
    () => calculatePayoff(extraMonthlyPayment, 0),
    [loanAmount, interestRate, loanTermYears, extraMonthlyPayment]
  );

  const combinedScenario = useMemo(
    () => calculatePayoff(extraMonthlyPayment, oneTimeExtraPayment),
    [loanAmount, interestRate, loanTermYears, extraMonthlyPayment, oneTimeExtraPayment]
  );

  const monthsSaved = Math.max(
    regularScenario.months - combinedScenario.months,
    0
  );

  const interestSaved = Math.max(
    regularScenario.totalInterest - combinedScenario.totalInterest,
    0
  );

  const monthlyOnlyInterestSaved = Math.max(
    regularScenario.totalInterest - extraMonthlyScenario.totalInterest,
    0
  );

  const monthlyOnlyMonthsSaved = Math.max(
    regularScenario.months - extraMonthlyScenario.months,
    0
  );

  const totalMonthlyPaymentWithExtra =
    regularScenario.regularPayment + Math.max(extraMonthlyPayment, 0);

  const comparisonRows = [
    {
      label: 'Regular payments only',
      monthlyExtra: 0,
      oneTimeExtra: 0,
      result: regularScenario,
    },
    {
      label: 'Extra monthly payment only',
      monthlyExtra: Math.max(extraMonthlyPayment, 0),
      oneTimeExtra: 0,
      result: extraMonthlyScenario,
    },
    {
      label: 'Extra monthly + one-time payment',
      monthlyExtra: Math.max(extraMonthlyPayment, 0),
      oneTimeExtra: Math.max(oneTimeExtraPayment, 0),
      result: combinedScenario,
    },
  ];

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

        <p className="eyebrow">Mortgage payoff planning</p>

        <h1>Extra Mortgage Payment Calculator</h1>

        <p>
          Use this extra mortgage payment calculator to estimate how additional
          principal payments may reduce total interest and shorten the time it
          takes to pay off a fixed-rate mortgage. Enter your loan balance, rate,
          term and extra payment amount to compare the regular payoff path with
          an accelerated payoff plan.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label>Mortgage loan amount</label>
            <input
              type="number"
              value={loanAmount}
              min="0"
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Interest rate (%)</label>
            <input
              type="number"
              value={interestRate}
              step="0.1"
              min="0"
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
            <label>Extra monthly principal payment</label>
            <input
              type="number"
              value={extraMonthlyPayment}
              min="0"
              onChange={(e) => setExtraMonthlyPayment(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>One-time extra principal payment</label>
            <input
              type="number"
              value={oneTimeExtraPayment}
              min="0"
              onChange={(e) => setOneTimeExtraPayment(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Regular monthly principal and interest payment:{' '}
            {formatCurrency(regularScenario.regularPayment)}
          </div>

          <div className="result">
            Monthly payment with extra principal:{' '}
            {formatCurrency(totalMonthlyPaymentWithExtra)}
          </div>

          <div className="result">
            Estimated interest saved: {formatCurrency(interestSaved)}
          </div>

          <div className="result">
            Estimated time saved: {formatYears(monthsSaved)}
          </div>

          <div className="result">
            New estimated payoff time: {formatYears(combinedScenario.months)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Extra mortgage payment summary</h2>

          <p>
            The table below compares your regular mortgage payoff estimate with
            the extra payment scenario. Extra payments are treated as additional
            principal payments, which means they reduce the loan balance faster.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Original loan amount</th>
                  <td>{formatCurrency(loanAmount)}</td>
                </tr>
                <tr>
                  <th>Interest rate</th>
                  <td>{interestRate.toFixed(2)}%</td>
                </tr>
                <tr>
                  <th>Original loan term</th>
                  <td>{loanTermYears} years</td>
                </tr>
                <tr>
                  <th>Regular monthly payment</th>
                  <td>{formatCurrency(regularScenario.regularPayment)}</td>
                </tr>
                <tr>
                  <th>Extra monthly principal</th>
                  <td>{formatCurrency(extraMonthlyPayment)}</td>
                </tr>
                <tr>
                  <th>One-time extra principal</th>
                  <td>{formatCurrency(oneTimeExtraPayment)}</td>
                </tr>
                <tr>
                  <th>Interest saved</th>
                  <td>{formatCurrency(interestSaved)}</td>
                </tr>
                <tr>
                  <th>Time saved</th>
                  <td>{formatYears(monthsSaved)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Regular payoff vs extra payment payoff</h2>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Monthly Extra</th>
                  <th>One-Time Extra</th>
                  <th>Payoff Time</th>
                  <th>Total Interest</th>
                  <th>Interest Saved</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{formatCurrency(row.monthlyExtra)}</td>
                    <td>{formatCurrency(row.oneTimeExtra)}</td>
                    <td>{formatYears(row.result.months)}</td>
                    <td>{formatCurrency(row.result.totalInterest)}</td>
                    <td>
                      {formatCurrency(
                        Math.max(
                          regularScenario.totalInterest - row.result.totalInterest,
                          0
                        )
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>How extra mortgage payments work</h2>

          <p>
            A standard fixed-rate mortgage payment is split between interest and
            principal. Early in the loan, a larger share of the payment often
            goes toward interest. When you send extra money toward principal, the
            balance can fall faster, which may reduce the amount of interest that
            builds up over the life of the loan.
          </p>

          <h3>Monthly extra payment vs one-time extra payment</h3>

          <p>
            A monthly extra payment is repeated every month and can steadily
            reduce the balance. A one-time extra payment is a lump-sum principal
            payment. Both can help, but the repeated monthly payment usually has
            a stronger long-term effect because it keeps reducing the balance
            throughout the repayment period.
          </p>

          <h3>Example: adding extra principal each month</h3>

          <p>
            With the current inputs, adding {formatCurrency(extraMonthlyPayment)}
            per month without a one-time payment would save about{' '}
            {formatCurrency(monthlyOnlyInterestSaved)} in estimated interest and
            shorten the payoff time by about {formatYears(monthlyOnlyMonthsSaved)}.
            Adding both the monthly extra payment and the one-time extra payment
            changes the estimate to about {formatCurrency(interestSaved)} saved.
          </p>

          <h3>Why lender rules matter</h3>

          <p>
            Some lenders automatically apply extra payments to principal, while
            others may require instructions. Some loans may also have prepayment
            penalties or special rules. Before sending extra money, check whether
            the payment will be applied to principal and whether any fees apply.
          </p>

          <h3>Should you pay extra on a mortgage?</h3>

          <p>
            Paying extra can be useful when your goal is to reduce interest and
            become debt-free sooner. It may be less attractive if you have higher
            interest debt, need emergency savings, can earn a better return
            elsewhere or plan to move before the savings become meaningful.
          </p>

          <h2>Frequently asked questions</h2>

          <h3>Does an extra mortgage payment reduce the monthly payment?</h3>
          <p>
            Usually no. Extra principal payments typically shorten the payoff
            timeline and reduce interest, but the required monthly payment often
            stays the same unless the loan is recast or refinanced.
          </p>

          <h3>Is one extra mortgage payment per year helpful?</h3>
          <p>
            It can be. One extra payment per year can reduce principal faster and
            may save interest over time. The exact savings depend on the loan
            balance, rate, term and when the extra payment is made.
          </p>

          <h3>Should extra payments go to principal?</h3>
          <p>
            For payoff acceleration, yes. The benefit comes from reducing the
            principal balance. Confirm with your lender that extra payments are
            applied as principal reduction, not just held for a future scheduled
            payment.
          </p>

          <h3>Does this calculator include taxes and insurance?</h3>
          <p>
            No. This calculator focuses on principal and interest. Property
            taxes, homeowners insurance, PMI, HOA fees, escrow changes and other
            costs are not included in the payoff calculation.
          </p>

          <h3>Important limitations</h3>
          <p>
            This calculator provides simplified educational estimates only. It is
            not mortgage, lending, tax, legal or financial advice. Actual savings
            can vary based on lender rules, payment timing, loan terms,
            prepayment penalties, escrow changes and how extra payments are
            applied.
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
              title: 'Down Payment Calculator',
              href: '/calculators/down-payment',
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
