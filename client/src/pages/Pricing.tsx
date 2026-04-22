import { useState } from 'react';
import { Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Language = 'zh' | 'en';
type PricingType = 'message' | 'voice';

const Pricing = () => {
  const [language, setLanguage] = useState<Language>('zh');
  const [pricingType, setPricingType] = useState<PricingType>('message');

  const content = {
    zh: {
      title: '价格',
      subtitle: '透明的价格体系，满足不同需求',
      description: '随时享受优质的国际短信和语音服务',
      tabs: {
        message: '营销短信',
        voice: '验证码',
      },
      pricing: {
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
      faq: {
        title: '常见问题',
        items: [
          {
            q: '如何开始使用？',
            a: '注册账户后，充值余额即可立即开始发送短信。我们提供详细的API文档 and 示例代码。',
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
      note: '更多国家和地区的价格请联系我们客服获取。',
      cta: '联系我们获取报价',
    },
    en: {
      title: 'Pricing',
      subtitle: 'Transparent pricing for different needs',
      description: 'Choose the service that fits your business and enjoy quality international SMS and voice services',
      tabs: {
        message: 'Marketing SMS',
        voice: 'Verification Code',
      },
      pricing: {
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
      note: 'For pricing of more countries and regions, please contact our customer service.',
      cta: 'Contact Us for Quote',
    },
  };

  const t = content[language];
  const currentPricing = t.pricing[pricingType];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <Header language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <section className="pt-24 md:pt-40 pb-10 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-4">
            {t.subtitle}
          </p>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
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
              {t.tabs.message}
            </button>
            <button
              onClick={() => setPricingType('voice')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                pricingType === 'voice'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.tabs.voice}
            </button>
          </div>

          {/* Pricing Table */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {currentPricing.title}
            </h2>
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
                        {country.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-slate-300 mt-8 text-base font-semibold">
              {t.note}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {t.faq.title}
          </h2>
          <div className="space-y-6">
            {t.faq.items.map((item, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                <p className="text-slate-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '准备好了吗？' : 'Ready to Get Started?'}
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            {language === 'zh'
              ? '立即联系我们，获取个性化的报价和解决方案。'
              : 'Contact us now to get personalized quotes and solutions.'}
          </p>
          <a
            href="https://t.me/sms_shanxin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient px-8 py-4 rounded-lg font-semibold text-white inline-block"
          >
            {t.cta}
          </a>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default Pricing;
