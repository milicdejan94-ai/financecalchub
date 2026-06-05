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
      ? `${state.name} Paycheck Calculator | Estimate Take-Home Pay`
      : 'State Paycheck Calculator',
    description: state
      ? `Free ${state.name} paycheck calculator. Estimate take-home pay after federal payroll taxes and state income tax.`
      : 'Free state paycheck calculator for US workers.',
  };
}

export default function StatePaycheckPage({ params }: PageProps) {
  return <StatePaycheckClient stateSlug={params.state} />;
}