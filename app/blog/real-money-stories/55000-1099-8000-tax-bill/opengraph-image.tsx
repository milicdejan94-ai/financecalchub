import { ImageResponse } from 'next/og';
import OpenGraphCard from '../../../../components/branding/OpenGraphCard';
import { financeCalcHubBrand } from '../../../../lib/branding/constants';

export const runtime = 'edge';

export const alt = 'She Made About $55,000 as a 1099 Contractor — Then She Saw an $8,000 Tax Bill';

export const size = {
  width: financeCalcHubBrand.ogWidth,
  height: financeCalcHubBrand.ogHeight,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <OpenGraphCard
      title={'She Made About $55,000 as a 1099 Contractor — Then She Saw an $8,000 Tax Bill'}
      category={'Tax Story'}
    />,
    size
  );
}
