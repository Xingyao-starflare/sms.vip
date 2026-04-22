import { cn } from "@/lib/utils";
import logoImage from '@/assets/logo.png';

interface LogoProps {
  className?: string;
  /**
   * Whether to apply filters to the logo.
   * For the new colorful logo, we might want to keep its original colors.
   */
  useOriginalColor?: boolean;
}

const Logo = ({ className, useOriginalColor = true }: LogoProps) => {
  return (
    <div className={cn("flex items-center justify-start", className)}>
      <img
        src={logoImage}
        alt="SMS 闪信"
        className={cn(
          "h-full w-auto object-contain transition-all duration-300",
          !useOriginalColor && "brightness-0 invert"
        )}
        style={{ 
          maxHeight: '100%',
          filter: !useOriginalColor ? 'brightness(0) invert(1) opacity(0.95)' : 'drop-shadow(0 0 2px rgba(0,0,0,0.3))',
        }}
      />
    </div>
  );
};

export default Logo;
