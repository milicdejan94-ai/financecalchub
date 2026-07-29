import { notFound } from "next/navigation";
import { states } from "../../../lib/states";
import { TAX_YEAR } from "../../../lib/tax2026";
import StatePaycheckClient from "./StatePaycheckClient";
import {
  CalculatorStructuredData,
  CalculatorTrustPanel,
} from "../../../components/calculator";
import {
  CALCULATOR_LAST_REVIEWED,
  taxCalculatorSources,
} from "../../../lib/calculator-trust";

type PageProps = {
  params: {
    state: string;
  };
};

export function generateStaticParams() {
  return states.map((state) => ({
    state: state.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const state = states.find((item) => item.slug === params.state);

  return {
    title: state
      ? `${state.name} Paycheck Calculator | Estimate Take-Home Pay | FinanceCalcHub`
      : "State Paycheck Calculator | FinanceCalcHub",
    description: state
      ? `Free ${state.name} paycheck calculator. Estimate monthly, biweekly and weekly take-home pay using 2026 federal income-tax rules, payroll taxes and an illustrative ${state.name} state income-tax rate.`
      : "Free state paycheck calculator for US workers. Estimate take-home pay using federal, payroll and illustrative state income taxes.",
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: state
        ? `/paycheck-calculator/${state.slug}`
        : "/paycheck-calculator",
    },
  };
}

export default function StatePaycheckPage({ params }: PageProps) {
  const state = states.find((item) => item.slug === params.state);

  if (!state) {
    notFound();
  }

  return (
    <>
      <CalculatorStructuredData
        dateModified={CALCULATOR_LAST_REVIEWED}
        description={`Estimate take-home pay in ${state.name} using federal payroll taxes and an illustrative state income-tax rate.`}
        name={`${state.name} Paycheck Calculator`}
        path={`/paycheck-calculator/${state.slug}`}
      />

      <StatePaycheckClient stateSlug={state.slug} />

      <section className="section calculator-trust-page-section">
        <div className="container">
          <CalculatorTrustPanel
            assumptions={[
              `${TAX_YEAR} federal income-tax rules are used.`,
              "Social Security and Medicare payroll taxes are estimated.",
              `${state.name} state income tax is illustrative and may not reflect every bracket, credit, deduction or local tax.`,
              "Employer benefits, retirement contributions and other payroll deductions can change take-home pay.",
            ]}
            calculationNote="The calculator combines gross pay, selected pay frequency, federal income-tax estimates, employee payroll taxes and an illustrative state tax assumption. Results are educational estimates rather than payroll or tax-return calculations."
            lastReviewed={CALCULATOR_LAST_REVIEWED}
            sources={taxCalculatorSources}
          />
        </div>
      </section>
    </>
  );
}
