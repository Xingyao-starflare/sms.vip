const Logo = ({ className = "h-14 w-auto" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 300 100"
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
      </defs>

      {/* Chat Bubble Icon */}
      <g>
        {/* Bubble shape with gradient */}
        <path
          d="M 30 20 Q 50 10 65 10 Q 85 10 85 30 L 85 50 Q 85 70 65 70 L 45 70 L 35 85 L 40 70 L 25 70 Q 5 70 5 50 L 5 30 Q 5 10 25 10 Q 35 10 45 15"
          fill="url(#smsGradient)"
          opacity="0.9"
        />

        {/* Three dots inside bubble */}
        <circle cx="25" cy="40" r="3" fill="white" />
        <circle cx="40" cy="40" r="3" fill="white" />
        <circle cx="55" cy="40" r="3" fill="white" />

        {/* Curved lines for communication effect */}
        <path
          d="M 75 25 Q 82 20 88 18"
          stroke="url(#smsGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 78 35 Q 87 32 95 30"
          stroke="url(#smsGradient)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* SMS Text */}
      <text
        x="110"
        y="55"
        fontSize="48"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
        letterSpacing="2"
      >
        SMS
      </text>

      {/* Shanxin Text (Chinese) */}
      <text
        x="210"
        y="55"
        fontSize="40"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
        letterSpacing="1"
      >
        闪信
      </text>
    </svg>
  );
};

export default Logo;
