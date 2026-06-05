type AdBannerProps = {
  slot?: string;
  label?: string;
};

export default function AdBanner({
  slot = 'auto',
  label = 'Advertisement',
}: AdBannerProps) {
  return (
    <div className="ad-wrapper">
      <span>{label}</span>

      <div className="ad-box">
        AdSense Ad Slot: {slot}
      </div>
    </div>
  );
}