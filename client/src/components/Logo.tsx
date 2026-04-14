const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 320 80"
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
          <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Chat Bubble Icon - Centered vertically at y=40 */}
      <g filter="url(#shadow)">
        {/* Main bubble body */}
        <path
          d="M 12 20 C 12 20 8 20 8 28 C 8 36 8 44 12 48 C 16 52 20 52 24 52 L 28 60 L 24 52 C 32 52 40 52 44 48 C 48 44 48 36 48 28 C 48 20 40 20 32 20 C 24 20 16 20 12 20 Z"
          fill="url(#smsGradient)"
          opacity="0.95"
        />

        {/* Highlight on bubble */}
        <ellipse
          cx="24"
          cy="28"
          rx="8"
          ry="5"
          fill="white"
          opacity="0.15"
        />

        {/* Three dots inside bubble */}
        <circle cx="18" cy="36" r="2" fill="white" />
        <circle cx="28" cy="36" r="2" fill="white" />
        <circle cx="38" cy="36" r="2" fill="white" />

        {/* Communication waves */}
        <path
          d="M 50 24 Q 56 20 62 18"
          stroke="url(#smsGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 52 32 Q 59 28 66 26"
          stroke="url(#smsGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 50 40 Q 57 36 64 34"
          stroke="url(#smsGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* SMS Text - Aligned to baseline y=52 */}
      <text
        x="75"
        y="52"
        fontSize="42"
        fontWeight="900"
        fill="white"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="1"
        textAnchor="start"
        dominantBaseline="middle"
      >
        SMS
      </text>

      {/* Shanxin Text (Chinese) - Aligned to baseline y=52, closer spacing */}
      <text
        x="195"
        y="52"
        fontSize="38"
        fontWeight="900"
        fill="white"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="0"
        textAnchor="start"
        dominantBaseline="middle"
      >
        闪信
      </text>
    </svg>
  );
};

export default Logo;
