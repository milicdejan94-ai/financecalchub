import { states } from '../../../lib/states';
import StatePaycheckClient from './StatePaycheckClient';

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
      : 'State Paycheck Calculator | FinanceCalcHub',
    description: state
      ? `Free ${state.name} paycheck calculator. Estimate monthly, biweekly and weekly take-home pay after simplified federal payroll taxes and estimated ${state.name} state income tax.`
      : 'Free state paycheck calculator for US workers. Estimate take-home pay after simplified federal, payroll and state income taxes.',
  };
}

export default function StatePaycheckPage({ params }: PageProps) {
  return <StatePaycheckClient stateSlug={params.state} />;
}
