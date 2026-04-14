const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <img
      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663274490737/JNnADWDHhxVcCNh3co2tRK/sms-logo-enlarged_08e04872.png"
      alt="SMS 闪信"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Logo;
