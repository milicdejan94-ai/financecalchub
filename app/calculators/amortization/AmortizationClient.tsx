'use client';

import { useMemo, useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedCalculators from '../../../components/RelatedCalculators';

function formatMoney(value: number) {
  if (!Number.isFinite(value)) return '$0.00';

  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatPercent(value: number) {
  if (!Number.isFinite(value)) return '0.00%';
  return `${value.toFixed(2)}%`;
}

type ScheduleRow = {
  month: number;
  year: number;
  principal: number;
  interest: number;
  payment: number;
  remainingBalance: number;
};

type YearlyScheduleRow = {
  year: number;
  principal: number;
  interest: number;
  payments: number;
  remainingBalance: number;
};

export default function AmortizationClient() {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  const calculation = useMemo(() => {
    const safeLoanAmount = Math.max(loanAmount, 0);
    const safeTermYears = Math.max(loanTermYears, 1);
    const numberOfPayments = safeTermYears * 12;
    const monthlyRate = Math.max(interestRate, 0) / 100 / 12;

    const monthlyPayment =
      monthlyRate > 0
        ? safeLoanAmount *
          ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
        : safeLoanAmount / numberOfPayments;

    let balance = safeLoanAmount;
    let totalInterest = 0;
    const monthlySchedule: ScheduleRow[] = [];
    const yearlySchedule: YearlyScheduleRow[] = [];

    for (let month = 1; month <= numberOfPayments; month += 1) {
      const interest = balance * monthlyRate;
      let principal = monthlyPayment - interest;
      let payment = monthlyPayment;

      if (principal > balance) {
        principal = balance;
        payment = principal + interest;
      }

      balance = Math.max(balance - principal, 0);
      totalInterest += interest;

      monthlySchedule.push({
        month,
        year: Math.ceil(month / 12),
        principal,
        interest,
        payment,
        remainingBalance: balance,
      });
    }

    for (let year = 1; year <= safeTermYears; year += 1) {
      const rows = monthlySchedule.filter((row) => row.year === year);
      yearlySchedule.push({
        year,
        principal: rows.reduce((sum, row) => sum + row.principal, 0),
        interest: rows.reduce((sum, row) => sum + row.interest, 0),
        payments: rows.reduce((sum, row) => sum + row.payment, 0),
        remainingBalance: rows[rows.length - 1]?.remainingBalance ?? 0,
      });
    }

    return {
      monthlyPayment,
      totalInterest,
      totalPaid: safeLoanAmount + totalInterest,
      monthlyRate,
      numberOfPayments,
      firstYearSchedule: monthlySchedule.slice(0, 12),
      yearlySchedule,
    };
  }, [loanAmount, interestRate, loanTermYears]);

  const totalInterestShare =
    calculation.totalPaid > 0 ? (calculation.totalInterest / calculation.totalPaid) * 100 : 0;

  const fifteenYearMonthlyRate = interestRate / 100 / 12;
  const fifteenYearPayments = 15 * 12;
  const fifteenYearPayment =
    fifteenYearMonthlyRate > 0
      ? loanAmount *
        ((fifteenYearMonthlyRate * Math.pow(1 + fifteenYearMonthlyRate, fifteenYearPayments)) /
          (Math.pow(1 + fifteenYearMonthlyRate, fifteenYearPayments) - 1))
      : loanAmount / fifteenYearPayments;
  const fifteenYearTotalInterest = fifteenYearPayment * fifteenYearPayments - loanAmount;

  const thirtyYearPayments = 30 * 12;
  const thirtyYearPayment =
    fifteenYearMonthlyRate > 0
      ? loanAmount *
        ((fifteenYearMonthlyRate * Math.pow(1 + fifteenYearMonthlyRate, thirtyYearPayments)) /
          (Math.pow(1 + fifteenYearMonthlyRate, thirtyYearPayments) - 1))
      : loanAmount / thirtyYearPayments;
  const thirtyYearTotalInterest = thirtyYearPayment * thirtyYearPayments - loanAmount;

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
          Estimate a fixed-rate loan payment, total interest and an amortization schedule
          that shows how each payment is split between principal and interest. This tool
          can be used for mortgages, auto loans, personal loans and other installment loans.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label htmlFor="loanAmount">Loan amount</label>
            <input
              id="loanAmount"
              type="number"
              min="0"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label htmlFor="interestRate">Interest rate (%)</label>
            <input
              id="interestRate"
              type="number"
              min="0"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label htmlFor="loanTermYears">Loan term</label>
            <select
              id="loanTermYears"
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(Number(e.target.value))}
            >
              <option value={30}>30 years</option>
              <option value={25}>25 years</option>
              <option value={20}>20 years</option>
              <option value={15}>15 years</option>
              <option value={10}>10 years</option>
              <option value={5}>5 years</option>
            </select>
          </div>

          <div className="result">Monthly payment: {formatMoney(calculation.monthlyPayment)}</div>
          <div className="result">Total interest: {formatMoney(calculation.totalInterest)}</div>
          <div className="result">Total paid: {formatMoney(calculation.totalPaid)}</div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Amortization summary</h2>
          <p>
            The table below summarizes the main estimate. The monthly payment is based on
            a fixed interest rate and a fully amortizing repayment schedule, meaning the
            balance reaches zero at the end of the selected term.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Loan amount</th>
                  <td>{formatMoney(loanAmount)}</td>
                </tr>
                <tr>
                  <th>Interest rate</th>
                  <td>{formatPercent(interestRate)}</td>
                </tr>
                <tr>
                  <th>Loan term</th>
                  <td>{loanTermYears} years ({calculation.numberOfPayments} monthly payments)</td>
                </tr>
                <tr>
                  <th>Monthly payment</th>
                  <td>{formatMoney(calculation.monthlyPayment)}</td>
                </tr>
                <tr>
                  <th>Total interest</th>
                  <td>{formatMoney(calculation.totalInterest)}</td>
                </tr>
                <tr>
                  <th>Interest as share of total paid</th>
                  <td>{formatPercent(totalInterestShare)}</td>
                </tr>
                <tr>
                  <th>Total paid</th>
                  <td>{formatMoney(calculation.totalPaid)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>First 12 months of the amortization schedule</h2>
          <p>
            Early payments usually include more interest because the outstanding balance is
            still high. As the loan balance falls, more of each payment typically goes toward
            principal.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Payment</th>
                  <th>Principal</th>
                  <th>Interest</th>
                  <th>Remaining balance</th>
                </tr>
              </thead>
              <tbody>
                {calculation.firstYearSchedule.map((row) => (
                  <tr key={row.month}>
                    <td>{row.month}</td>
                    <td>{formatMoney(row.payment)}</td>
                    <td>{formatMoney(row.principal)}</td>
                    <td>{formatMoney(row.interest)}</td>
                    <td>{formatMoney(row.remainingBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Yearly amortization schedule</h2>
          <p>
            This yearly view shows how much principal and interest may be paid each year
            and how the remaining balance may decline over time.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Payments</th>
                  <th>Principal paid</th>
                  <th>Interest paid</th>
                  <th>Remaining balance</th>
                </tr>
              </thead>
              <tbody>
                {calculation.yearlySchedule.map((row) => (
                  <tr key={row.year}>
                    <td>{row.year}</td>
                    <td>{formatMoney(row.payments)}</td>
                    <td>{formatMoney(row.principal)}</td>
                    <td>{formatMoney(row.interest)}</td>
                    <td>{formatMoney(row.remainingBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>How this amortization calculator works</h2>
          <p>
            This calculator estimates a standard fixed-rate installment loan. It divides the
            loan into equal monthly payments. Each payment first covers the interest charged
            for that month, and the rest reduces the principal balance.
          </p>

          <h3>Principal vs interest</h3>
          <p>
            Principal is the amount borrowed. Interest is the cost of borrowing that money.
            In the early part of many loans, a larger share of the payment goes to interest.
            Later, as the balance becomes smaller, more of each payment goes to principal.
          </p>

          <h3>Why amortization matters</h3>
          <p>
            An amortization schedule helps show the real long-term cost of a loan. Two loans
            can have similar monthly payments but very different total interest costs if the
            terms, fees or interest rates are different.
          </p>

          <h3>Example</h3>
          <p>
            On a {formatMoney(loanAmount)} loan at {formatPercent(interestRate)} for{' '}
            {loanTermYears} years, the estimated monthly payment is{' '}
            {formatMoney(calculation.monthlyPayment)}. Over the full term, estimated
            interest is {formatMoney(calculation.totalInterest)}, bringing the estimated
            total paid to {formatMoney(calculation.totalPaid)}.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>15-year vs 30-year example</h2>
          <p>
            A shorter term usually has a higher monthly payment but can sharply reduce total
            interest. A longer term may be easier month to month, but the lifetime borrowing
            cost may be higher.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Estimated monthly payment</th>
                  <th>Estimated total interest</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 years</td>
                  <td>{formatMoney(fifteenYearPayment)}</td>
                  <td>{formatMoney(fifteenYearTotalInterest)}</td>
                </tr>
                <tr>
                  <td>30 years</td>
                  <td>{formatMoney(thirtyYearPayment)}</td>
                  <td>{formatMoney(thirtyYearTotalInterest)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Frequently asked questions</h2>

          <h3>Does this calculator include taxes, insurance or fees?</h3>
          <p>
            No. The estimate focuses on principal and interest only. Mortgages may also
            include property taxes, homeowners insurance, PMI, HOA dues and lender fees.
          </p>

          <h3>Why does interest start high and decline later?</h3>
          <p>
            Interest is calculated on the remaining balance. At the beginning, the balance is
            highest, so the interest portion of each payment is usually larger.
          </p>

          <h3>Can this be used for auto loans and personal loans?</h3>
          <p>
            Yes, it can estimate many fixed-rate installment loans. For auto loans, remember
            that taxes, registration, dealer fees and trade-in details may change the amount
            financed.
          </p>

          <h3>Is this the same as an official lender amortization schedule?</h3>
          <p>
            No. Lenders may calculate APR, fees, escrow, payment timing and rounding
            differently. Use lender documents for official loan terms.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Limitations of this estimate</h2>
          <p>
            This calculator provides educational estimates only and is not financial, legal,
            mortgage, tax or lending advice. It assumes a fixed interest rate, equal monthly
            payments and no extra payments, late fees, prepayment penalties, escrow items or
            changing interest rates.
          </p>
        </div>

        <RelatedCalculators
          tools={[
            { title: 'Loan Calculator', href: '/calculators/loan' },
            { title: 'Mortgage Calculator', href: '/calculators/mortgage' },
            { title: 'APR Calculator', href: '/calculators/apr' },
            { title: 'Car Loan Calculator', href: '/calculators/car-loan' },
            { title: 'Extra Mortgage Payment Calculator', href: '/calculators/extra-mortgage-payment' },
            { title: 'Methodology', href: '/methodology' },
          ]}
        />
      </div>
    </section>
  );
}
