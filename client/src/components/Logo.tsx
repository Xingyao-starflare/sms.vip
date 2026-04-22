import { cn } from "@/lib/utils";
import logoImage from '@/assets/logo_new.png';

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
          // 确保 Logo 在深色背景下清晰，并移除不必要的滤镜
          filter: 'drop-shadow(0 0 4px rgba(34, 211, 238, 0.2))',
          maxHeight: '100%',
        }}
      />
    </div>
  );
};

export default Logo;
