import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Language = 'zh' | 'en';

const Data = () => {
  const [language, setLanguage] = useState<Language>('zh');

  const content = {
    zh: {
      title: '数据服务',
      subtitle: '客户数据安全第一',
      description: '防止欺诈活动，确保企业业务和客户数据的安全',
      advantages: {
        title: '我们的优势',
        items: [
          {
            title: '辨识空号',
            desc: '高效辨识号码是否是空号',
          },
          {
            title: '识别归属地',
            desc: '高效识别号码归属国家/地区',
          },
          {
            title: '识别运营商',
            desc: '高效识别号码归属运营商',
          },
        ],
      },
      useCases: {
        title: '应用场景',
        items: [
          {
            icon: '📢',
            name: '营销推广',
            desc: '批量检测号码，识别空号、错号等，再进行精准的营销推送，降本增效',
          },
          {
            icon: '✅',
            name: '信息审核',
            desc: '核验用户号码来确认用户身份的真实性和准确性，减少虚假账户和盗刷风险',
          },
          {
            icon: '🔐',
            name: '注册/登录',
            desc: '通过简化登录流程，为用户提供畅通无阻的通道和瞬时登录的卓越体验',
          },
          {
            icon: '🛡️',
            name: '防范刷单',
            desc: '基于四维防护体系，有效识别羊毛党、黄牛等风险设备，确保业务的安全性',
          },
          {
            icon: '💳',
            name: '支付确认',
            desc: '用于线上支付、转账等敏感操作上，提升账户安全性，避免盗用转账',
          },
          {
            icon: '⚙️',
            name: '自定义防护',
            desc: '支持流量控制、号段控制、国家方向控制等丰富的自定义保护方式',
          },
          {
            icon: '📊',
            name: '实时监控',
            desc: '通过 7*24 持续监控，主动预防欺诈、及时截停风险',
          },
          {
            icon: '🚨',
            name: '可视化告警',
            desc: '检测不常见的短信模式，发出告警信息或暂停流量以管理风险',
          },
        ],
      },
      cta: '立即体验',
    },
    en: {
      title: 'Data Service',
      subtitle: 'Customer Data Security First',
      description: 'Prevent fraud and ensure enterprise business and customer data security',
      advantages: {
        title: 'Our Advantages',
        items: [
          {
            title: 'Identify Invalid Numbers',
            desc: 'Efficiently identify whether a number is invalid',
          },
          {
            title: 'Identify Location',
            desc: 'Efficiently identify the country/region where the number belongs',
          },
          {
            title: 'Identify Carrier',
            desc: 'Efficiently identify the carrier that the number belongs to',
          },
        ],
      },
      useCases: {
        title: 'Use Cases',
        items: [
          {
            icon: '📢',
            name: 'Marketing Promotion',
            desc: 'Batch detect numbers to identify invalid/wrong numbers for precise marketing campaigns',
          },
          {
            icon: '✅',
            name: 'Information Verification',
            desc: 'Verify user numbers to confirm identity authenticity and reduce fraud risk',
          },
          {
            icon: '🔐',
            name: 'Registration/Login',
            desc: 'Simplify login process to provide seamless and instant login experience',
          },
          {
            icon: '🛡️',
            name: 'Anti-Fraud Protection',
            desc: 'Identify risky devices and fraudulent users with four-dimensional protection system',
          },
          {
            icon: '💳',
            name: 'Payment Confirmation',
            desc: 'Enhance account security for online payments and transfers to prevent fraud',
          },
          {
            icon: '⚙️',
            name: 'Custom Protection',
            desc: 'Support traffic control, number segment control, country direction control and more',
          },
          {
            icon: '📊',
            name: 'Real-time Monitoring',
            desc: '24/7 continuous monitoring to proactively prevent fraud and stop risks',
          },
          {
            icon: '🚨',
            name: 'Visual Alerts',
            desc: 'Detect unusual SMS patterns and send alerts or pause traffic to manage risks',
          },
        ],
      },
      cta: 'Get Started',
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <Header language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {t.title}
            </h1>
            <p className="text-2xl text-cyan-400 font-semibold mb-4">
              {t.subtitle}
            </p>
            <p className="text-lg text-slate-300 mb-8">
              {t.description}
            </p>
            <a
              href="https://t.me/sms_shanxin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient px-8 py-4 rounded-lg font-semibold text-white inline-block"
            >
              {language === 'zh' ? '联系我们' : 'Contact Us'}
            </a>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {t.advantages.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.advantages.items.map((item, idx) => (
              <div
                key={idx}
                className="card-gradient p-8 rounded-lg hover:border-cyan-400 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {t.useCases.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {t.useCases.items.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-cyan-400 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {useCase.name}
                </h3>
                <p className="text-slate-400 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '准备好了吗？' : 'Ready to Get Started?'}
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            {language === 'zh'
              ? '立即开始使用闪信SMS数据服务，体验全球领先的数据安全解决方案'
              : 'Start using Shanxin SMS data service today and experience world-leading data security solutions'}
          </p>
          <a
            href="https://t.me/sms_shanxin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient px-8 py-4 rounded-lg font-semibold text-white inline-flex items-center gap-2"
          >
            {language === 'zh' ? '联系我们' : 'Contact Us'}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default Data;
