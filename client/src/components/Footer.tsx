interface FooterProps {
  language: 'zh' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    zh: {
      company: '闪信SMS',
      tagline: '全球领先的国际短信服务平台',
      sections: {
        products: {
          title: '产品',
          items: [
            { label: '消息', href: '/message' },
            { label: '语音', href: '/voice' },
            { label: '数据', href: '/data' },
          ],
        },
        company: {
          title: '公司',
          items: [
            { label: '关于我们', href: '/' },
            { label: '服务协议', href: '#' },
            { label: '隐私政策', href: '#' },
          ],
        },
        contact: {
          title: '联系我们',
          items: [
            { label: 'Telegram: @sms_shanxin', href: 'https://t.me/sms_shanxin' },
            { label: 'WhatsApp: +852 6856 1065', href: 'https://wa.me/85268561065' },
          ],
        },
      },
      copyright: '© 2026 闪信SMS. 版权所有。',
    },
    en: {
      company: 'Shanxin SMS',
      tagline: 'Global Leading International SMS Service Platform',
      sections: {
        products: {
          title: 'Products',
          items: [
            { label: 'Message', href: '/message' },
            { label: 'Voice', href: '/voice' },
            { label: 'Data', href: '/data' },
          ],
        },
        company: {
          title: 'Company',
          items: [
            { label: 'About Us', href: '/' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Privacy Policy', href: '#' },
          ],
        },
        contact: {
          title: 'Contact',
          items: [
            { label: 'Telegram: @sms_shanxin', href: 'https://t.me/sms_shanxin' },
            { label: 'WhatsApp: +852 6856 1065', href: 'https://wa.me/85268561065' },
          ],
        },
      },
      copyright: '© 2026 Shanxin SMS. All rights reserved.',
    },
  };

  const t = content[language];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-700 mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663274490737/JNnADWDHhxVcCNh3co2tRK/短信平台Logo_0a960f33.png" alt="SMS Logo" className="h-10 w-auto" />
              <div>
                <h3 className="text-white font-bold text-lg">{t.company}</h3>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{t.tagline}</p>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6 text-cyan-400">{t.sections.products.title}</h4>
            <ul className="space-y-3">
              {t.sections.products.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6 text-cyan-400">{t.sections.company.title}</h4>
            <ul className="space-y-3">
              {t.sections.company.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6 text-cyan-400">{t.sections.contact.title}</h4>
            <ul className="space-y-3">
              {t.sections.contact.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-500 text-sm text-center">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
