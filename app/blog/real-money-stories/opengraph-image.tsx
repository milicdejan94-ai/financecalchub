import { ImageResponse } from 'next/og';
import OpenGraphCard from '../../../components/branding/OpenGraphCard';
import { financeCalcHubBrand } from '../../../lib/branding/constants';

export const runtime = 'edge';

export const alt = 'Real Money Stories';

export const size = {
  width: financeCalcHubBrand.ogWidth,
  height: financeCalcHubBrand.ogHeight,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <OpenGraphCard
      title="Real Money Stories"
      category="Real Money Story"
    />,
    size
  );
}
