import { ImageResponse } from 'next/og';
import OpenGraphCard from '../../../../components/branding/OpenGraphCard';
import { financeCalcHubBrand } from '../../../../lib/branding/constants';

export const runtime = 'edge';

export const alt = "She Was Taxed in the Wrong State — Then Payroll Said It Couldn't Fix the Problem";

export const size = {
  width: financeCalcHubBrand.ogWidth,
  height: financeCalcHubBrand.ogHeight,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <OpenGraphCard
      title={"She Was Taxed in the Wrong State — Then Payroll Said It Couldn't Fix the Problem"}
      category={'Tax Story'}
    />,
    size
  );
}
