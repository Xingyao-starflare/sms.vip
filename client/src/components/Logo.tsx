import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /**
   * Whether to force the logo to be white using CSS filters.
   * Useful for dark backgrounds to ensure visibility.
   * Defaults to true as the site uses a dark theme.
   */
  forceWhite?: boolean;
}

const Logo = ({ className, forceWhite = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663274490737/JNnADWDHhxVcCNh3co2tRK/sms-logo-optimized_03d08656.png"
        alt="SMS 闪信"
        className={cn(
          "h-full w-auto object-contain transition-all duration-300",
          forceWhite && "brightness-0 invert"
        )}
        style={{ 
          // Ensure contrast ratio is maintained on dark backgrounds
          // Set opacity to 0.95 for natural blending with background
          filter: forceWhite ? 'brightness(0) invert(1) opacity(0.95)' : undefined,
          opacity: forceWhite ? 0.95 : 1
        }}
      />
    </div>
  );
};

export default Logo;
