import { cn } from "@/lib/utils";
import logoImage from '@/assets/logo_core.png';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("flex items-center justify-start", className)}>
      <img
        src={logoImage}
        alt="SMS 闪信"
        className="h-full w-auto object-contain transition-all duration-300"
        style={{ 
          // 增加亮度使 Logo 在深色背景下更显眼
          filter: 'brightness(1.1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.3))',
          // 确保 Logo 比例正确
          maxHeight: '100%',
        }}
      />
    </div>
  );
};

export default Logo;
