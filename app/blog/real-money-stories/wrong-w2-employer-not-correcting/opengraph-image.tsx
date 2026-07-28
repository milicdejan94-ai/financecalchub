import { ImageResponse } from 'next/og';
import OpenGraphCard from '../../../../components/branding/OpenGraphCard';
import { financeCalcHubBrand } from '../../../../lib/branding/constants';

export const runtime = 'edge';

export const alt = "Her W-2 Was Wrong — Her Employer Still Hadn't Fixed It as Tax Day Got Closer";

export const size = {
  width: financeCalcHubBrand.ogWidth,
  height: financeCalcHubBrand.ogHeight,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <OpenGraphCard
      title={"Her W-2 Was Wrong — Her Employer Still Hadn't Fixed It as Tax Day Got Closer"}
      category={'Tax Story'}
    />,
    size
  );
}
