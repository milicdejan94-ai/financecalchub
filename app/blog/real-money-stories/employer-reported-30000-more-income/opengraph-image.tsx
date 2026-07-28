import { ImageResponse } from 'next/og';
import OpenGraphCard from '../../../../components/branding/OpenGraphCard';
import { financeCalcHubBrand } from '../../../../lib/branding/constants';

export const runtime = 'edge';

export const alt = 'His Former Employer Reported $30,000 More Income Than He Expected — Then the IRS Letter Arrived';

export const size = {
  width: financeCalcHubBrand.ogWidth,
  height: financeCalcHubBrand.ogHeight,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <OpenGraphCard
      title={'His Former Employer Reported $30,000 More Income Than He Expected — Then the IRS Letter Arrived'}
      category={'Tax Story'}
    />,
    size
  );
}
