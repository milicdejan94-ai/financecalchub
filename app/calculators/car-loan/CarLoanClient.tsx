'use client';

import { useState } from 'react';
import AdBanner from '../../../components/AdBanner';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function CarLoanClient() {
  const [vehiclePrice, setVehiclePrice] = useState(35000);
  const [downPayment, setDownPayment] = useState(5000);
  const [tradeInValue, setTradeInValue] = useState(0);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTermMonths, setLoanTermMonths] = useState(60);
  const [salesTaxRate, setSalesTaxRate] = useState(6);

  const salesTax = vehiclePrice * (salesTaxRate / 100);
  const loanAmount = Math.max(
    vehiclePrice + salesTax - downPayment - tradeInValue,
    0
  );

  const monthlyRate = interestRate / 100 / 12;

  const monthlyPayment =
    monthlyRate > 0
      ? loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths)) /
          (Math.pow(1 + monthlyRate, loanTermMonths) - 1))
      : loanAmount / loanTermMonths;

  const totalPaid = monthlyPayment * loanTermMonths;
  const totalInterest = totalPaid - loanAmount;

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
          Estimate monthly auto loan payments using vehicle price, down payment,
          trade-in value, interest rate, sales tax and loan term.
        </p>

        <AdBanner slot="car-loan-top" />

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
            Estimated monthly payment: ${monthlyPayment.toFixed(2)}
          </div>

          <div className="result">
            Estimated loan amount: ${loanAmount.toFixed(2)}
          </div>

          <div className="result">
            Estimated sales tax: ${salesTax.toFixed(2)}
          </div>

          <div className="result">
            Estimated total interest: ${totalInterest.toFixed(2)}
          </div>

          <div className="result">
            Estimated total paid: ${totalPaid.toFixed(2)}
          </div>
        </div>

        <AdBanner slot="car-loan-middle" />

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>How this car loan calculator works</h2>

          <p>
            This calculator estimates monthly auto loan payments based on vehicle
            price, down payment, trade-in value, interest rate, sales tax and
            loan term.
          </p>

          <h3>What affects a car payment?</h3>

          <p>
            The biggest factors are vehicle price, loan amount, interest rate and
            repayment term. A longer loan term may lower the monthly payment but
            can increase total interest paid.
          </p>

          <h3>Why down payment matters</h3>

          <p>
            A larger down payment can reduce the loan amount and may lower both
            the monthly payment and total interest.
          </p>

          <h3>Trade-in value</h3>

          <p>
            A trade-in can reduce the amount financed. The higher the trade-in
            value, the lower the estimated loan amount may be.
          </p>

          <h3>Interest rate and loan term</h3>

          <p>
            Higher interest rates increase borrowing costs. Longer terms can make
            payments more affordable monthly, but the total cost may be higher.
          </p>

          <h3>Important note</h3>

          <p>
            This calculator provides simplified educational estimates only. It
            does not include dealer fees, registration fees, insurance, lender
            fees or other costs.
          </p>
        </div>

        <RelatedCalculators
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
              title: 'All Financial Calculators',
              href: '/calculators',
            },
          ]}
        />

        <AdBanner slot="car-loan-bottom" />
      </div>
    </section>
  );
}