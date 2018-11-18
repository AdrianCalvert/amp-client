import React from 'react';

const SvgBay = props => (
  <svg width={64} height={64} {...props}>
    <defs>
      <linearGradient id="bay_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bay_svg__b" cx={16} cy={15} r={15} />
      <filter id="bay_svg__a" width="111.7%" height="111.7%" x="-5.8%" y="-4.2%" filterUnits="objectBoundingBox">
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0" />
      </filter>
      <path
        id="bay_svg__e"
        d="M22.03 14.977c.052-.059.11-.118.167-.177.186-.204.392-.42.584-.63a4.417 4.417 0 0 0 1.206-3.032c0-.079.013-.4.013-.446C23.91 8.106 21.761 6 19.22 6h-8v3.268H8V24h11.349C21.87 24 24 21.73 24 19.039c.006-1.923-1.168-3.281-1.97-4.062zm-9.206-4.069l6.37.007-4.002 4.108 3.958 4.069h-6.326v-8.184zm6.525 11.445H9.604V10.902h1.617v9.823h7.929c.654 0 1.238-.4 1.488-1.017a1.664 1.664 0 0 0-.346-1.791l-2.83-2.9 2.875-2.947a1.664 1.664 0 0 0 .346-1.791 1.607 1.607 0 0 0-1.488-1.018H12.83V7.634h6.396c1.694 0 3.118 1.398 3.176 3.097 0 .072-.013.355-.013.361v.033c0 .958-.475 1.608-.764 1.91-.199.21-.404.433-.59.63-.314.334-.584.623-.712.754l-.577.578.57.584c.078.078.174.17.29.282.666.63 1.79 1.68 1.79 3.163.006 1.772-1.419 3.327-3.048 3.327z"
      />
      <filter id="bay_svg__d" width="118.8%" height="116.7%" x="-9.4%" y="-8.3%" filterUnits="objectBoundingBox">
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation={0.5} />
        <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0" />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#bay_svg__a)" xlinkHref="#bay_svg__b" />
      <use fill="#6356AB" xlinkHref="#bay_svg__b" />
      <use
        fill="url(#bay_svg__c)"
        style={{
          mixBlendMode: 'soft-light',
        }}
        xlinkHref="#bay_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#bay_svg__d)" xlinkHref="#bay_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#bay_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgBay;