'use client';

import { useState } from 'react';
import RelatedCalculators from '../../../components/RelatedCalculators';
import Breadcrumbs from '../../../components/Breadcrumbs';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

function formatCurrencyCents(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

export default function RentVsBuyClient() {
  const [monthlyRent, setMonthlyRent] = useState(2000);
  const [rentIncreaseRate, setRentIncreaseRate] = useState(3);
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.1);
  const [homeInsurance, setHomeInsurance] = useState(1200);
  const [monthlyHoa, setMonthlyHoa] = useState(0);
  const [monthlyMaintenance, setMonthlyMaintenance] = useState(250);
  const [buyingClosingCosts, setBuyingClosingCosts] = useState(8000);
  const [yearsToCompare, setYearsToCompare] = useState(7);

  const safeYearsToCompare = Math.max(yearsToCompare, 1);
  const months = safeYearsToCompare * 12;

  let totalRentCost = 0;
  let currentRent = monthlyRent;

  for (let year = 1; year <= safeYearsToCompare; year += 1) {
    totalRentCost += currentRent * 12;
    currentRent *= 1 + rentIncreaseRate / 100;
  }

  const loanAmount = Math.max(homePrice - downPayment, 0);
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const monthlyMortgage =
    loanAmount <= 0
      ? 0
      : monthlyRate > 0
      ? loanAmount *
        ((monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
          (Math.pow(1 + monthlyRate, numberOfPayments) - 1))
      : loanAmount / numberOfPayments;

  const monthlyPropertyTax = (homePrice * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = homeInsurance / 12;

  const estimatedMonthlyBuyingCost =
    monthlyMortgage +
    monthlyPropertyTax +
    monthlyInsurance +
    monthlyHoa +
    monthlyMaintenance;

  const totalBuyingMonthlyCost = estimatedMonthlyBuyingCost * months;
  const totalBuyingCost = downPayment + buyingClosingCosts + totalBuyingMonthlyCost;
  const difference = totalBuyingCost - totalRentCost;
  const downPaymentPercent = homePrice > 0 ? (downPayment / homePrice) * 100 : 0;
  const averageMonthlyRentCost = totalRentCost / months;
  const averageMonthlyBuyingCost = totalBuyingCost / months;
  const monthlyCostGap = estimatedMonthlyBuyingCost - monthlyRent;

  const resultText =
    difference > 0
      ? `Buying costs about ${formatCurrency(difference)} more than renting over ${safeYearsToCompare} years based on these inputs.`
      : `Buying costs about ${formatCurrency(Math.abs(difference))} less than renting over ${safeYearsToCompare} years based on these inputs.`;

  const rentScenario5 = (() => {
    let total = 0;
    let rent = monthlyRent;
    for (let year = 1; year <= 5; year += 1) {
      total += rent * 12;
      rent *= 1 + rentIncreaseRate / 100;
    }
    return total;
  })();

  const rentScenario10 = (() => {
    let total = 0;
    let rent = monthlyRent;
    for (let year = 1; year <= 10; year += 1) {
      total += rent * 12;
      rent *= 1 + rentIncreaseRate / 100;
    }
    return total;
  })();

  const buyingCost5 = downPayment + buyingClosingCosts + estimatedMonthlyBuyingCost * 60;
  const buyingCost10 = downPayment + buyingClosingCosts + estimatedMonthlyBuyingCost * 120;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: 'Rent vs Buy Calculator' },
          ]}
        />

        <p className="eyebrow">Rent vs buy calculator</p>

        <h1>Rent vs Buy Calculator</h1>

        <p>
          Compare estimated renting costs with estimated homeownership costs over
          a selected time period. This calculator includes rent growth, down
          payment, mortgage payment, property taxes, insurance, HOA fees,
          maintenance and closing costs.
        </p>

        <div className="calculator-box">
          <div className="input-group">
            <label>Monthly rent</label>
            <input
              type="number"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Annual rent increase (%)</label>
            <input
              type="number"
              value={rentIncreaseRate}
              step="0.1"
              onChange={(e) => setRentIncreaseRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Home price</label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
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
            <label>Mortgage interest rate (%)</label>
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
            </select>
          </div>

          <div className="input-group">
            <label>Property tax rate (%)</label>
            <input
              type="number"
              value={propertyTaxRate}
              step="0.1"
              onChange={(e) => setPropertyTaxRate(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Annual homeowners insurance</label>
            <input
              type="number"
              value={homeInsurance}
              onChange={(e) => setHomeInsurance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly HOA fee</label>
            <input
              type="number"
              value={monthlyHoa}
              onChange={(e) => setMonthlyHoa(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Monthly maintenance estimate</label>
            <input
              type="number"
              value={monthlyMaintenance}
              onChange={(e) => setMonthlyMaintenance(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Estimated buying closing costs</label>
            <input
              type="number"
              value={buyingClosingCosts}
              onChange={(e) => setBuyingClosingCosts(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Years to compare</label>
            <input
              type="number"
              value={yearsToCompare}
              onChange={(e) => setYearsToCompare(Number(e.target.value))}
            />
          </div>

          <div className="result">
            Estimated renting cost: {formatCurrencyCents(totalRentCost)}
          </div>

          <div className="result">
            Estimated buying cost: {formatCurrencyCents(totalBuyingCost)}
          </div>

          <div className="result">
            Estimated monthly buying cost: {formatCurrencyCents(estimatedMonthlyBuyingCost)}
          </div>

          <div className="result">{resultText}</div>
        </div>

        <div className="content-box" style={{ marginTop: 34 }}>
          <h2>Rent vs buy summary</h2>

          <p>
            The output below compares the main assumptions behind the estimate.
            Buying often has higher upfront costs, while renting may have lower
            flexibility costs but no home equity benefit in this simplified model.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <tbody>
                <tr>
                  <th>Comparison period</th>
                  <td>{safeYearsToCompare} years</td>
                </tr>
                <tr>
                  <th>Monthly rent today</th>
                  <td>{formatCurrencyCents(monthlyRent)}</td>
                </tr>
                <tr>
                  <th>Average monthly rent over period</th>
                  <td>{formatCurrencyCents(averageMonthlyRentCost)}</td>
                </tr>
                <tr>
                  <th>Home price</th>
                  <td>{formatCurrencyCents(homePrice)}</td>
                </tr>
                <tr>
                  <th>Down payment</th>
                  <td>
                    {formatCurrencyCents(downPayment)} ({downPaymentPercent.toFixed(1)}%)
                  </td>
                </tr>
                <tr>
                  <th>Estimated loan amount</th>
                  <td>{formatCurrencyCents(loanAmount)}</td>
                </tr>
                <tr>
                  <th>Monthly principal and interest</th>
                  <td>{formatCurrencyCents(monthlyMortgage)}</td>
                </tr>
                <tr>
                  <th>Monthly property tax</th>
                  <td>{formatCurrencyCents(monthlyPropertyTax)}</td>
                </tr>
                <tr>
                  <th>Monthly insurance</th>
                  <td>{formatCurrencyCents(monthlyInsurance)}</td>
                </tr>
                <tr>
                  <th>Monthly HOA</th>
                  <td>{formatCurrencyCents(monthlyHoa)}</td>
                </tr>
                <tr>
                  <th>Monthly maintenance estimate</th>
                  <td>{formatCurrencyCents(monthlyMaintenance)}</td>
                </tr>
                <tr>
                  <th>Estimated monthly buying cost</th>
                  <td>{formatCurrencyCents(estimatedMonthlyBuyingCost)}</td>
                </tr>
                <tr>
                  <th>Average monthly buying cost including upfront costs</th>
                  <td>{formatCurrencyCents(averageMonthlyBuyingCost)}</td>
                </tr>
                <tr>
                  <th>Monthly cost gap before upfront costs</th>
                  <td>
                    {monthlyCostGap >= 0
                      ? `${formatCurrencyCents(monthlyCostGap)} more to buy per month`
                      : `${formatCurrencyCents(Math.abs(monthlyCostGap))} less to buy per month`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Shorter vs longer comparison periods</h2>

          <p>
            Time horizon matters. Buying may look expensive over a short period
            because down payment and closing costs are paid upfront. Renting may
            look cheaper in the short run, especially if you plan to move soon.
          </p>

          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Estimated rent cost</th>
                  <th>Estimated buy cost</th>
                  <th>Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5 years</td>
                  <td>{formatCurrencyCents(rentScenario5)}</td>
                  <td>{formatCurrencyCents(buyingCost5)}</td>
                  <td>
                    {buyingCost5 >= rentScenario5
                      ? `${formatCurrency(buyingCost5 - rentScenario5)} more to buy`
                      : `${formatCurrency(rentScenario5 - buyingCost5)} less to buy`}
                  </td>
                </tr>
                <tr>
                  <td>10 years</td>
                  <td>{formatCurrencyCents(rentScenario10)}</td>
                  <td>{formatCurrencyCents(buyingCost10)}</td>
                  <td>
                    {buyingCost10 >= rentScenario10
                      ? `${formatCurrency(buyingCost10 - rentScenario10)} more to buy`
                      : `${formatCurrency(rentScenario10 - buyingCost10)} less to buy`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>How this rent vs buy calculator works</h2>

          <p>
            This calculator compares rent payments with estimated home buying
            costs over time. Renting costs are based on monthly rent and an
            annual rent increase. Buying costs include down payment, estimated
            closing costs, mortgage principal and interest, property taxes,
            homeowners insurance, HOA fees and a monthly maintenance estimate.
          </p>

          <h3>What this calculator includes</h3>

          <p>
            The buying side includes the major monthly ownership costs many home
            buyers plan for: mortgage payment, property tax, insurance, HOA and
            maintenance. The renting side includes rent increases over time, so
            the estimate does not assume rent stays flat forever.
          </p>

          <h3>When renting can make more sense</h3>

          <p>
            Renting may be better when you expect to move soon, need flexibility,
            do not want repair responsibility, or would have to use too much of
            your savings for the down payment and closing costs. Renting can also
            make sense when local home prices are high compared with rent.
          </p>

          <h3>When buying can make more sense</h3>

          <p>
            Buying may be more attractive when you plan to stay in the same home
            for several years, have a stable emergency fund after closing, can
            comfortably afford the full monthly cost, and value long-term housing
            stability. Buying may also build equity, but this simplified tool
            does not count future home appreciation.
          </p>

          <h3>Example</h3>

          <p>
            Suppose rent is $2,000 per month and a home costs $400,000 with an
            $80,000 down payment. At a 6.5% mortgage rate, buying may have a
            higher monthly cost once property taxes, insurance and maintenance
            are included. Over a short period, the down payment and closing costs
            can make renting look cheaper. Over a longer period, the result may
            change depending on rent growth, home appreciation, selling costs and
            mortgage payoff progress.
          </p>

          <h3>Important limitations</h3>

          <p>
            This calculator provides simplified educational estimates only. It
            does not include home appreciation, selling costs, real estate agent
            commissions, tax deductions, investment returns on the down payment,
            PMI, repairs beyond the maintenance estimate, moving costs or local
            market changes. It is not mortgage, tax, legal, investment or
            financial advice.
          </p>
        </div>

        <div className="content-box" style={{ marginTop: 24 }}>
          <h2>Rent vs buy FAQ</h2>

          <h3>Is it always better to buy instead of rent?</h3>
          <p>
            No. Buying can be powerful over time, but it also adds upfront costs,
            repair risk and less flexibility. The better choice depends on your
            time horizon, local market, savings and personal plans.
          </p>

          <h3>Why does the calculator include maintenance?</h3>
          <p>
            Homeowners usually need to budget for repairs and ongoing upkeep.
            Even if no major repair happens in a given month, setting aside a
            maintenance buffer can make the estimate more realistic.
          </p>

          <h3>Does this calculator include home equity?</h3>
          <p>
            It focuses on cash cost comparison, not future sale proceeds or home
            appreciation. For a full decision, consider equity, appreciation,
            selling costs and the opportunity cost of using cash for a down
            payment.
          </p>

          <h3>Why does a longer time period change the result?</h3>
          <p>
            Buying has large upfront costs, while renting costs usually build
            gradually. The longer you stay, the more time you have to spread out
            buying costs and potentially benefit from mortgage principal payoff.
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
              title: 'Down Payment Calculator',
              href: '/calculators/down-payment',
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
            {
              title: 'Methodology',
              href: '/methodology',
            },
            {
              title: 'Disclaimer',
              href: '/disclaimer',
            },
          ]}
        />
      </div>
    </section>
  );
}
