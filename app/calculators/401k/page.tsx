import FourOhOneKClient from './FourOhOneKClient';

export const metadata = {
  title: '401k Calculator | Estimate Retirement Savings Growth',
  description:
    'Free 401k calculator. Estimate future retirement savings based on salary, contribution rate, employer match and investment return.',
};

export default function FourOhOneKPage() {
  return <FourOhOneKClient />;
}