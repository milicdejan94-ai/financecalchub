'use client';

import { useState } from 'react';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatPercent(value: number) {
  return `${(Number.isFinite(value) ? value : 0).toFixed(2)}%`;
}

export default function CarLoanClient() {
  const [vehiclePrice, setVehiclePrice] = useState(35000);
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeInValue, setTradeInValue] = useState(0);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTermMonths, setLoanTermMonths] = useState(60);
  const [salesTaxRate, setSalesTaxRate] = useState(6);

  const salesTax = Math.max(vehiclePrice, 0) * (Math.max(salesTaxRate, 0) / 100);
  const amountFinancedBeforeInterest = Math.max(
    vehiclePrice + salesTax - downPayment - tradeInValue,
    0
  );

  const monthlyRate = interestRate / 100 / 12;

  const monthlyPayment =
    amountFinancedBeforeInterest > 0 && loanTermMonths > 0
      ? monthlyRate > 0
        ? amountFinancedBeforeInterest *
          ((monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) /
            (Math.pow(1 + monthlyRate, loanTermMonths) - 1))
        : amountFinancedBeforeInterest / loanTermMonths
      : 0;

  const totalPaid = monthlyPayment * loanTermMonths;
  const totalInterest = Math.max(totalPaid - amountFinancedBeforeInterest, 0);
  const totalVehicleCost = vehiclePrice + salesTax + totalInterest;
  const totalCashReduction = downPayment + tradeInValue;
  const interestShare =
    amountFinancedBeforeInterest > 0
      ? (totalInterest / amountFinancedBeforeInterest) * 100
      : 0;

  const shorterTermMonths = Math.max(loanTermMonths - 12, 12);
  const longerTermMonths = loanTermMonths + 12;

  const paymentForTerm = (termMonths: number) => {
    if (amountFinancedBeforeInterest <= 0 || termMonths <= 0) return 0;
    if (monthlyRate <= 0) return amountFinancedBeforeInterest / termMonths;

    return (
      amountFinancedBeforeInterest *
      ((monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
        (Math.pow(1 + monthlyRate, termMonths) - 1))
    );
  };

  const termScenarios = [shorterTermMonths, loanTermMonths, longerTermMonths].map(
    (term) => {
      const payment = paymentForTerm(term);
      const paid = payment * term;
      const interest = Math.max(paid - amountFinancedBeforeInterest, 0);

      return {
        term,
        payment,
        paid,
        interest,
      };
    }
  );

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: 'Car Loan Calculator' },
          ]}
        />

        <p className="eyebrow">Auto loan calculator</p>

        <h1>Car Loan Calculator</h1>

        <p>
          Estimate a monthly auto loan payment using vehicle price, down payment,
          trade-in value, sales tax, interest rate and loan term. This calculator
          can help you compare car financing scenarios before visiting a dealer or
          lender.
        </p>

        <div className="content-box" style={{ marginTop: 28, marginBottom: 28 }}>
          <h2>Estimate the payment before focusing only on the sticker price</h2>
          <p>
            A car payment depends on more than the vehicle price. Sales tax, down
            payment, trade-in value, interest rate and loan term can all change
            the amount you finance and the total interest you pay over time.
          </p>
          <p>
            Use the results as an educational estimate. Dealer fees, title fees,
            registration, insurance, warranties and lender charges can change the
            real out-the-door cost.
          </p>
        </div>

        <div className="calculator-box">
          <div className="input-group">
            <label>Vehicle price</label>
            <input
              type="number"
              value={vehiclePrice}
              onChange={(e) => setVehiclePrice(Number(e.target.value))}
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
            <label>Trade-in value</label>
            <input
              type="number"
              value={tradeInValue}
              onChange={(e) => setTradeInValue(Number(e.target.value))}
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
              value={loanTermMonths}
              onChange={(e) => setLoanTermMonths(Number(e.target.value))}
            >
              <option value={24}>24 months</option>
              <option value={36}>36 months</option>
              <option value={48}>48 months</option>
              <option value={60}>60 months</option>
              <option value={72}>72 months</option>
              <option value={84}>84 months</option>
            </select>
          </div>

          <div className="input-group">
            <label>Sales tax rate (%)</label>
            <input
              type="number"
              value={salesTaxRate}
              step="0.1"
              onChange={(e) => setSalesTaxRate(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Estimated monthly payment: {formatCurrency(monthlyPayment)}
          </div>

          <div className="result">
            Estimated amount financed: {formatCurrency(amountFinancedBeforeInterest)}
          </div>

          <div className="result">
            Estimated sales tax: {formatCurrency(salesTax)}
          </div>

          <div className="result">
            Estimated total interest: {formatCurrency(totalInterest)}
          </div>

          <div className="result">
            Total of loan payments: {formatCurrency(totalPaid)}
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Car loan estimate breakdown</h2>
          <p>
            This table shows how the calculator moves from vehicle price to the
            estimated amount financed and total repayment.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Estimated amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vehicle price</td>
                  <td>{formatCurrency(vehiclePrice)}</td>
                </tr>
                <tr>
                  <td>Estimated sales tax</td>
                  <td>{formatCurrency(salesTax)}</td>
                </tr>
                <tr>
                  <td>Down payment</td>
                  <td>-{formatCurrency(downPayment)}</td>
                </tr>
                <tr>
                  <td>Trade-in value</td>
                  <td>-{formatCurrency(tradeInValue)}</td>
                </tr>
                <tr>
                  <td><strong>Estimated amount financed</strong></td>
                  <td><strong>{formatCurrency(amountFinancedBeforeInterest)}</strong></td>
                </tr>
                <tr>
                  <td>Estimated total interest</td>
                  <td>{formatCurrency(totalInterest)}</td>
                </tr>
                <tr>
                  <td>Total of loan payments</td>
                  <td>{formatCurrency(totalPaid)}</td>
                </tr>
                <tr>
                  <td>Interest as % of amount financed</td>
                  <td>{formatPercent(interestShare)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Loan term comparison</h2>
          <p>
            A longer loan term can lower the monthly payment, but it can also
            increase the total amount of interest paid. Compare nearby terms
            before choosing a loan length.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Loan term</th>
                  <th>Monthly payment</th>
                  <th>Total interest</th>
                  <th>Total paid</th>
                </tr>
              </thead>
              <tbody>
                {termScenarios.map((scenario) => (
                  <tr key={scenario.term}>
                    <td>{scenario.term} months</td>
                    <td>{formatCurrency(scenario.payment)}</td>
                    <td>{formatCurrency(scenario.interest)}</td>
                    <td>{formatCurrency(scenario.paid)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this car loan calculator works</h2>

          <p>
            The calculator starts with the vehicle price, adds estimated sales
            tax, then subtracts your down payment and trade-in value. The
            remaining amount is treated as the estimated amount financed.
          </p>

          <h3>What affects a car payment?</h3>
          <p>
            The biggest factors are vehicle price, loan amount, interest rate and
            repayment term. A higher price or higher rate usually increases the
            payment. A larger down payment or trade-in usually lowers it.
          </p>

          <h3>Why down payment and trade-in value matter</h3>
          <p>
            Down payments and trade-ins reduce the amount financed. Financing a
            smaller balance can reduce both monthly payment and total interest.
          </p>

          <h3>Why a longer loan term can cost more</h3>
          <p>
            Longer terms often reduce the monthly payment, but interest has more
            time to accumulate. A lower monthly payment is not always the lower
            total-cost choice.
          </p>

          <h3>Example car loan estimate</h3>
          <p>
            With a {formatCurrency(vehiclePrice)} vehicle price,
            {` ${formatCurrency(downPayment)} `}down payment,
            {` ${formatPercent(salesTaxRate)} `}sales tax,
            {` ${formatPercent(interestRate)} `}interest rate and
            {` ${loanTermMonths} `}month term, the estimated monthly payment is
            about {formatCurrency(monthlyPayment)}. Total interest is estimated
            at about {formatCurrency(totalInterest)}.
          </p>

          <h3>Important limitations</h3>
          <p>
            This calculator provides simplified educational estimates only. It
            does not include every dealer fee, registration fee, title fee,
            warranty, insurance cost, lender charge, negative equity, rebate,
            incentive or state-specific rule. It is not financial, legal, tax,
            lending or car-buying advice.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Frequently asked questions</h2>

          <h3>Does this calculator include taxes and fees?</h3>
          <p>
            It includes a simple sales tax estimate based on the percentage you
            enter. It does not include dealer documentation fees, title,
            registration, insurance, warranties or lender-specific charges.
          </p>

          <h3>Is a longer car loan always better?</h3>
          <p>
            Not always. A longer term may lower the monthly payment, but it can
            increase total interest and may keep you in debt longer.
          </p>

          <h3>Why is my dealer quote different?</h3>
          <p>
            Dealer quotes may include exact taxes, fees, rebates, add-ons,
            warranties, negative equity, credit-based rates and lender-specific
            terms that this simplified calculator does not fully model.
          </p>

          <h3>Should I compare APR too?</h3>
          <p>
            Yes. APR can help compare loan offers because it may include interest
            and certain financing fees. Use the APR calculator along with this
            car loan calculator when comparing offers.
          </p>
        </div>

        <RelatedCalculators
          title="Related auto and loan calculators"
          tools={[
            {
              title: 'Loan Calculator',
              href: '/calculators/loan',
            },
            {
              title: 'APR Calculator',
              href: '/calculators/apr',
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
              title: 'Debt Payoff Calculator',
              href: '/calculators/debt-payoff',
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
