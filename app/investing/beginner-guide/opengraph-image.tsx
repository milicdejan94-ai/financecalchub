import { ImageResponse } from 'next/og';
import OpenGraphCard from '../../../components/branding/OpenGraphCard';
import { financeCalcHubBrand } from '../../../lib/branding/constants';

export const runtime = 'edge';

export const alt = 'How to Start Investing in Stocks for Beginners';

export const size = {
  width: financeCalcHubBrand.ogWidth,
  height: financeCalcHubBrand.ogHeight,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <OpenGraphCard
      title={'How to Start Investing in Stocks for Beginners'}
      category={'Investing Guide'}
    />,
    size
  );
}
