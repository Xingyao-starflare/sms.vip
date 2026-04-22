import { useState } from 'react';
import { CheckCircle2, Globe, Clock, Shield, Zap, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Language = 'zh' | 'en';
type PricingType = 'message' | 'voice';

const Home = () => {
  const [language, setLanguage] = useState<Language>('zh');
  const [pricingType, setPricingType] = useState<PricingType>('message');

  const content = {
    zh: {
      hero: {
        title: '高效国际短信',
        subtitle: '24小时全球服务',
        slogan: '闪信SMS:高触达，全覆盖，快响应，一站式短信通讯解决方案，助力品牌一键出海',
        description: '闪信SMS提供全球领先的国际短信服务，帮助企业快速、可靠地与全球客户沟通。闪信SMS:高触达，全覆盖，快响应，一站式短信通讯解决方案，助力品牌一键出海',
        cta: '联系我们'
      },
      pricing: {
        title: '价格',
        subtitle: '透明的价格体系，满足不同需求',
        description: '随时享受优质的国际短信和语音服务',
        tabs: {
          message: '营销短信',
          voice: '验证码',
        },
        data: {
          message: {
            title: '营销短信价格',
            unit: 'USD/条',
            countries: [
              { name: '巴西', code: 'BR', price: '0.0070' },
              { name: '印度', code: 'IN', price: '0.0046' },
              { name: '泰国', code: 'TH', price: '0.0057' },
              { name: '越南', code: 'VN', price: '0.0253' },
              { name: '墨西哥', code: 'MX', price: '0.0023' },
              { name: '菲律宾', code: 'PH', price: '0.0060' },
              { name: '孟加拉', code: 'BD', price: '0.0063' },
              { name: '印度尼西亚', code: 'ID', price: '0.0062' },
            ],
          },
          voice: {
            title: '验证码价格',
            unit: 'USD/条',
            countries: [
              { name: '巴西', code: 'BR', price: '0.0084' },
              { name: '印度', code: 'IN', price: '0.0034' },
              { name: '泰国', code: 'TH', price: '0.0036' },
              { name: '越南', code: 'VN', price: '0.0180' },
              { name: '墨西哥', code: 'MX', price: '0.0022' },
              { name: '菲律宾', code: 'PH', price: '0.0054' },
              { name: '孟加拉', code: 'BD', price: '0.0042' },
              { name: '印度尼西亚', code: 'ID', price: '0.0282' },
            ],
          }
        },
        note: '更多国家和地区的价格请联系我们客服获取。',
      },
      features: {
        title: '为什么选择闪信SMS',
        items: [
          {
            icon: '⚡',
            title: '极速发送',
            description: '毫秒级送达，确保您的信息及时传递到全球客户',
          },
          {
            icon: '🌍',
            title: '全球覆盖',
            description: '支持超过200个国家和地区，无缝连接全球市场',
          },
          {
            icon: '🔒',
            title: '安全可靠',
            description: '采用先进的加密技术，确保数据安全和隐私保护',
          },
          {
            icon: '💰',
            title: '灵活定价',
            description: '按需付费，无隐藏费用，透明的价格体系',
          },
          {
            icon: '📊',
            title: '详细报告',
            description: '实时数据分析，掌握每一条短信的发送状态',
          },
          {
            icon: '👥',
            title: '专业支持',
            description: '24/7技术支持团队，随时为您解答问题',
          },
        ],
      },
      services: {
        title: '我们的服务',
        description: '满足不同行业的个性化需求',
        items: [
          {
            title: '金融服务',
            description: '银行、保险、证券等金融机构的短信解决方案',
          },
          {
            title: '电商物流',
            description: '订单通知、物流追踪、营销推广一站式服务',
          },
          {
            title: '游戏娱乐',
            description: '游戏验证码、活动通知、用户维护',
          },
          {
            title: '教育培训',
            description: '课程通知、成绩推送、学生沟通',
          },
          {
            title: '医疗健康',
            description: '预约提醒、检查结果、健康咨询',
          },
          {
            title: '其他行业',
            description: '根据您的需求定制专属解决方案',
          },
        ],
      },
      stats: {
        title: '闪信SMS的实力',
        items: [
          { number: '200+', label: '国家覆盖' },
          { number: '99.9%', label: '送达率' },
          { number: '24/7', label: '技术支持' },
          { number: '10000+', label: '企业客户' },
        ],
      },
      faq: {
        title: '常见问题',
        items: [
          {
            q: '如何开始使用？',
            a: '注册账户后，充值余额即可立即开始发送短信。我们提供详细的API文档和示例代码。',
          },
          {
            q: '支持哪些支付方式？',
            a: '我们支持USDT/USDC,银行转账,支付宝,微信等多种支付方式。',
          },
          {
            q: '短信有效期是多久？',
            a: '短信通常在发送后几秒内送达。如果未送达，我们会自动重试。',
          },
          {
            q: '可以发送中文短信吗？',
            a: '可以。我们完全支持中文、英文及其他多种语言的短信发送。',
          },
        ],
      },
      cta: {
        title: '准备好了吗？',
        description: '立即开始使用闪信SMS，体验全球领先的短信服务',
        button: '联系我们',
      },
    },
    en: {
      hero: {
        title: 'Efficient International SMS',
        subtitle: '24/7 Global Service',
        slogan: 'Shanxin SMS: High reach, full coverage, quick response, one-stop SMS communication solution, empowering brands to go global with one click',
        description: 'Shanxin SMS provides world-leading international SMS services to help enterprises communicate quickly and reliably with global customers',
        cta: 'Contact Us',
      },
      pricing: {
        title: 'Pricing',
        subtitle: 'Transparent pricing for different needs',
        description: 'Choose the service that fits your business and enjoy quality international SMS and voice services',
        tabs: {
          message: 'Marketing SMS',
          voice: 'Verification Code',
        },
        data: {
          message: {
            title: 'Marketing SMS Pricing',
            unit: 'USD/SMS',
            countries: [
              { name: 'Brazil', code: 'BR', price: '0.0070' },
              { name: 'India', code: 'IN', price: '0.0046' },
              { name: 'Thailand', code: 'TH', price: '0.0057' },
              { name: 'Vietnam', code: 'VN', price: '0.0253' },
              { name: 'Mexico', code: 'MX', price: '0.0023' },
              { name: 'Philippines', code: 'PH', price: '0.0060' },
              { name: 'Bangladesh', code: 'BD', price: '0.0063' },
              { name: 'Indonesia', code: 'ID', price: '0.0062' },
            ],
          },
          voice: {
            title: 'Verification Code Pricing',
            unit: 'USD/SMS',
            countries: [
              { name: 'Brazil', code: 'BR', price: '0.0084' },
              { name: 'India', code: 'IN', price: '0.0034' },
              { name: 'Thailand', code: 'TH', price: '0.0036' },
              { name: 'Vietnam', code: 'VN', price: '0.0180' },
              { name: 'Mexico', code: 'MX', price: '0.0022' },
              { name: 'Philippines', code: 'PH', price: '0.0054' },
              { name: 'Bangladesh', code: 'BD', price: '0.0042' },
              { name: 'Indonesia', code: 'ID', price: '0.0282' },
            ],
          }
        },
        note: 'For pricing of more countries and regions, please contact our customer service.',
      },
      features: {
        title: 'Why Choose Shanxin SMS',
        items: [
          {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Millisecond delivery ensures your messages reach global customers instantly',
          },
          {
            icon: '🌍',
            title: 'Global Coverage',
            description: 'Support for 200+ countries and regions, seamless global market connection',
          },
          {
            icon: '🔒',
            title: 'Secure & Reliable',
            description: 'Advanced encryption technology ensures data security and privacy protection',
          },
          {
            icon: '💰',
            title: 'Flexible Pricing',
            description: 'Pay-as-you-go model with no hidden fees, transparent pricing',
          },
          {
            icon: '📊',
            title: 'Detailed Reports',
            description: 'Real-time analytics to track every SMS delivery status',
          },
          {
            icon: '👥',
            title: 'Expert Support',
            description: '24/7 technical support team ready to assist you anytime',
          },
        ],
      },
      services: {
        title: 'Our Services',
        description: 'Customized solutions for different industries',
        items: [
          {
            title: 'Financial Services',
            description: 'SMS solutions for banks, insurance, securities and other financial institutions',
          },
          {
            title: 'E-commerce & Logistics',
            description: 'Order notifications, logistics tracking, marketing campaigns',
          },
          {
            title: 'Gaming & Entertainment',
            description: 'Game verification codes, event notifications, user engagement',
          },
          {
            title: 'Education & Training',
            description: 'Course notifications, grade updates, student communication',
          },
          {
            title: 'Healthcare',
            description: 'Appointment reminders, test results, health consultations',
          },
          {
            title: 'Other Industries',
            description: 'Customized solutions tailored to your specific needs',
          },
        ],
      },
      stats: {
        title: 'Shanxin SMS Strength',
        items: [
          { number: '200+', label: 'Countries Covered' },
          { number: '99.9%', label: 'Delivery Rate' },
          { number: '24/7', label: 'Technical Support' },
          { number: '10000+', label: 'Enterprise Clients' },
        ],
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            q: 'How do I get started?',
            a: 'Sign up for an account, add credit, and start sending SMS immediately. We provide detailed API documentation and code samples.',
          },
          {
            q: 'What payment methods do you accept?',
            a: 'We support USDT/USDC, bank transfer, Alipay, WeChat Pay and other payment methods.',
          },
          {
            q: 'How long does SMS delivery take?',
            a: 'SMS typically arrives within seconds of sending. If not delivered, we automatically retry.',
          },
          {
            q: 'Can I send Chinese SMS?',
            a: 'Yes, we fully support Chinese, English, and many other languages for SMS delivery.',
          },
        ],
      },
      cta: {
        title: 'Ready to Get Started?',
        description: 'Start using Shanxin SMS today and experience world-leading SMS services',
        button: 'Contact Us',
      },
    },
  };

  const t = content[language];
  const currentPricing = t.pricing.data[pricingType];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <Header language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-40 pb-12 px-4 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663274490737/JNnADWDHhxVcCNh3co2tRK/hero-banner-mKAWfphK4dWWWUaM4RJunn.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-3xl text-cyan-400 font-semibold mb-4">
                {t.hero.subtitle}
              </p>
              <p className="text-base md:text-xl text-cyan-300 font-semibold mb-6 pb-4 border-b border-cyan-400/30">
                {t.hero.slogan}
              </p>
              <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/sms_shanxin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-gradient px-8 py-4 rounded-lg font-semibold text-white"
              >
                {t.hero.cta}
              </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:block animate-slide-in-right">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663274490737/JNnADWDHhxVcCNh3co2tRK/global-coverage-illustration-AMzgWCMTAjgkeSaxKpMCrJ.webp"
                alt="Global Coverage"
                className="w-full h-auto rounded-lg shadow-2xl shadow-cyan-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Moved to Top */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-4">
              {t.pricing.subtitle}
            </p>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
              {t.pricing.description}
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setPricingType('message')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                pricingType === 'message'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.pricing.tabs.message}
            </button>
            <button
              onClick={() => setPricingType('voice')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                pricingType === 'voice'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.pricing.tabs.voice}
            </button>
          </div>

          {/* Pricing Table */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {currentPricing.title}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-4 px-6 text-white font-semibold">
                      {language === 'zh' ? '国家' : 'Country'}
                    </th>
                    <th className="text-left py-4 px-3 md:px-6 text-white font-semibold whitespace-nowrap text-sm md:text-base">
                      {language === 'zh' ? '国家代码' : 'Code'}
                    </th>
                    <th className="text-left py-4 px-3 md:px-6 text-white font-semibold whitespace-nowrap text-sm md:text-base">
                      {language === 'zh' ? '单价' : 'Price'} ({currentPricing.unit})
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentPricing.countries.map((country, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="py-4 px-6 text-slate-300">{country.name}</td>
                      <td className="py-4 px-6 text-slate-400">{country.code}</td>
                      <td className="py-4 px-6 text-cyan-400 font-semibold">
                        {country.price || '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-slate-300 mt-8 text-base font-semibold">
              {t.pricing.note}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
              {t.features.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((item, index) => (
              <div
                key={index}
                className="card-gradient p-8 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-slate-400">{t.services.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 p-8 rounded-lg hover:border-cyan-400 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - 2 Column Layout */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {t.faq.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.faq.items.map((item, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-6 h-full flex flex-col">
                <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                <p className="text-slate-400 flex-grow">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-12 md:p-16 text-center">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
              {t.cta.title}
            </h2>
            <p className="text-lg text-slate-100 mb-8 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <a
              href="https://t.me/sms_shanxin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-cyan-600 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300"
            >
              {t.cta.button}
            </a>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default Home;
