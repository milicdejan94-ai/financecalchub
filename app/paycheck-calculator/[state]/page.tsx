import { notFound } from 'next/navigation';
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
      ? `Free ${state.name} paycheck calculator. Estimate monthly, biweekly and weekly take-home pay using 2026 federal income-tax rules, payroll taxes and an illustrative ${state.name} state income-tax rate.`
      : 'Free state paycheck calculator for US workers. Estimate take-home pay using federal, payroll and illustrative state income taxes.',
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function StatePaycheckPage({ params }: PageProps) {
  const state = states.find((item) => item.slug === params.state);

  if (!state) {
    notFound();
  }

  return <StatePaycheckClient stateSlug={state.slug} />;
}
