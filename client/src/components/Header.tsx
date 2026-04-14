import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  language: 'zh' | 'en';
  onLanguageChange: (lang: 'zh' | 'en') => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = {
    zh: [
      { label: '首页', href: '/' },
      { label: '消息', href: '/message' },
      { label: '语音', href: '/voice' },
      { label: '数据', href: '/data' },
      { label: '价格', href: '/pricing' },
    ],
    en: [
      { label: 'Home', href: '/' },
      { label: 'Message', href: '/message' },
      { label: 'Voice', href: '/voice' },
      { label: 'Data', href: '/data' },
      { label: 'Pricing', href: '/pricing' },
    ],
  };

  const isActive = (href: string) => location === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-900 to-slate-900/80 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663274490737/JNnADWDHhxVcCNh3co2tRK/sms-logo-final-YCdn5tfVrBM6XQ5NJhoLAQ.webp" alt="SMS 闪信" className="h-12 w-auto" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems[language].map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-cyan-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => onLanguageChange('zh')}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'zh'
                    ? 'bg-cyan-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                中文
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'bg-cyan-500 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Login Button */}
            <a
              href="https://ok.sms.vip"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors font-semibold"
            >
              <Globe className="w-4 h-4" />
              {language === 'zh' ? '登录' : 'Login'}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-700">
            {navItems[language].map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 transition-colors ${
                    isActive(item.href)
                      ? 'text-cyan-400 font-semibold bg-slate-800'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <a
              href="https://ok.sms.vip"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-cyan-400 font-semibold hover:bg-slate-800 transition-colors"
            >
              {language === 'zh' ? '登录' : 'Login'}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
