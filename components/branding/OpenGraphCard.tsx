import {
  brandColors,
  financeCalcHubBrand,
  getCategoryStyle,
  type OgCategory,
} from '../../lib/branding';

type OpenGraphCardProps = {
  title: string;
  category?: OgCategory;
  eyebrow?: string;
};

const accentColors = {
  teal: brandColors.teal,
  blue: brandColors.blue,
  green: brandColors.green,
  amber: brandColors.amber,
  red: brandColors.red,
  purple: brandColors.purple,
} as const;

function getTitleSize(title: string) {
  if (title.length > 92) return 48;
  if (title.length > 70) return 54;
  if (title.length > 48) return 61;
  return 68;
}

export default function OpenGraphCard({
  title,
  category = 'Finance Guide',
  eyebrow,
}: OpenGraphCardProps) {
  const categoryStyle = getCategoryStyle(category);
  const accent = accentColors[categoryStyle.accent];
  const titleSize = getTitleSize(title);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '58px 68px 48px',
        color: brandColors.white,
        background:
          'linear-gradient(135deg, #071521 0%, #0A2235 52%, #10364E 100%)',
        fontFamily:
          'Arial, Helvetica, system-ui, -apple-system, sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 520,
          height: 520,
          right: -180,
          top: -230,
          borderRadius: 999,
          border: `2px solid ${accent}44`,
          display: 'flex',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: 340,
          height: 340,
          right: -70,
          top: -130,
          borderRadius: 999,
          background: `${accent}14`,
          display: 'flex',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: 470,
          height: 2,
          right: -60,
          bottom: 135,
          background: `${accent}44`,
          transform: 'rotate(-16deg)',
          display: 'flex',
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: 330,
          height: 2,
          right: 70,
          bottom: 190,
          background: `${accent}25`,
          transform: 'rotate(-16deg)',
          display: 'flex',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: '-0.8px',
          }}
        >
          <span style={{ color: brandColors.white }}>FinanceCalc</span>
          <span style={{ color: accent }}>Hub</span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 20px',
            borderRadius: 999,
            border: `1px solid ${accent}88`,
            background: `${accent}18`,
            color: accent,
            fontSize: 17,
            fontWeight: 800,
            letterSpacing: '1.6px',
          }}
        >
          {eyebrow || categoryStyle.label}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '91%',
          zIndex: 2,
          marginTop: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 88,
            height: 7,
            borderRadius: 999,
            background: accent,
            marginBottom: 28,
          }}
        />

        <div
          style={{
            display: 'flex',
            color: brandColors.white,
            fontSize: titleSize,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-2.2px',
            maxWidth: 1030,
          }}
        >
          {title}
        </div>
      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 2,
          borderTop: '1px solid rgba(184, 202, 216, 0.22)',
          paddingTop: 23,
        }}
      >
        <div
          style={{
            display: 'flex',
            color: brandColors.muted,
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          {financeCalcHubBrand.tagline}
        </div>

        <div
          style={{
            display: 'flex',
            color: brandColors.white,
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          {financeCalcHubBrand.domain}
        </div>
      </div>
    </div>
  );
}
