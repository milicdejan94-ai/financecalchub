import { ImageResponse } from 'next/og';
import OpenGraphCard from '../../../../components/branding/OpenGraphCard';
import { financeCalcHubBrand } from '../../../../lib/branding/constants';

export const runtime = 'edge';

export const alt = 'The IRS Said He Owed $20,000 — But He Says He Was Still in High School';

export const size = {
  width: financeCalcHubBrand.ogWidth,
  height: financeCalcHubBrand.ogHeight,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <OpenGraphCard
      title={'The IRS Said He Owed $20,000 — But He Says He Was Still in High School'}
      category={'Tax Story'}
    />,
    size
  );
}
