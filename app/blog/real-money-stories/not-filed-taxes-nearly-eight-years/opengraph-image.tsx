import { ImageResponse } from 'next/og';
import OpenGraphCard from '../../../../components/branding/OpenGraphCard';
import { financeCalcHubBrand } from '../../../../lib/branding/constants';

export const runtime = 'edge';

export const alt = "He Hadn't Filed Taxes in Nearly Eight Years — and Was Afraid to Find Out What He Owed";

export const size = {
  width: financeCalcHubBrand.ogWidth,
  height: financeCalcHubBrand.ogHeight,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <OpenGraphCard
      title={"He Hadn't Filed Taxes in Nearly Eight Years — and Was Afraid to Find Out What He Owed"}
      category={'Tax Story'}
    />,
    size
  );
}
