const Logo = ({ className = "h-14 w-auto" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 380 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Define gradient */}
      <defs>
        <linearGradient id="smsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#00D9A3" />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Chat Bubble Icon - Refined Design */}
      <g filter="url(#shadow)">
        {/* Main bubble body */}
        <path
          d="M 20 15 C 20 15 15 15 15 25 C 15 35 15 45 20 50 C 25 55 30 55 35 55 L 40 65 L 35 55 C 45 55 55 55 60 50 C 65 45 65 35 65 25 C 65 15 55 15 45 15 C 35 15 25 15 20 15 Z"
          fill="url(#smsGradient)"
          opacity="0.95"
        />

        {/* Highlight/shine effect on bubble */}
        <ellipse
          cx="35"
          cy="25"
          rx="12"
          ry="8"
          fill="white"
          opacity="0.15"
        />

        {/* Three dots inside bubble - more refined */}
        <circle cx="28" cy="38" r="2.5" fill="white" />
        <circle cx="40" cy="38" r="2.5" fill="white" />
        <circle cx="52" cy="38" r="2.5" fill="white" />

        {/* Communication waves - curved lines */}
        <path
          d="M 68 22 Q 75 18 82 16"
          stroke="url(#smsGradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 70 32 Q 78 28 86 26"
          stroke="url(#smsGradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 68 42 Q 76 38 84 36"
          stroke="url(#smsGradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* SMS Text - Better positioned */}
      <text
        x="110"
        y="58"
        fontSize="52"
        fontWeight="900"
        fill="white"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="3"
      >
        SMS
      </text>

      {/* Spacing gap between SMS and Shanxin */}
      {/* Shanxin Text (Chinese) - Properly spaced */}
      <text
        x="250"
        y="58"
        fontSize="44"
        fontWeight="900"
        fill="white"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="2"
      >
        闪信
      </text>
    </svg>
  );
};

export default Logo;
