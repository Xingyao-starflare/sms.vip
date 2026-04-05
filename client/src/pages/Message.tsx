import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Language = 'zh' | 'en';

const Message = () => {
  const [language, setLanguage] = useState<Language>('zh');

  const content = {
    zh: {
      title: '消息服务',
      subtitle: '让消息传递变得简单',
      description: '通过优质的短信通道，与全球客户建立紧密的联系',
      advantages: {
        title: '我们的优势',
        items: [
          {
            title: '覆盖范围广',
            desc: '业务覆盖全球200多个国家和地区，支持多种语言',
          },
          {
            title: '全球部署',
            desc: '海外多点部署服务器，支持Web端与API短信接口发送，提交速度毫秒级别',
          },
          {
            title: '优质通道',
            desc: '链接全球1,500+合作伙伴运营商，专享优质语音通道',
          },
        ],
      },
      useCases: {
        title: '应用场景',
        items: [
          {
            icon: '🔐',
            name: '注册登录',
            desc: '用于APP、网站等平台快捷注册与登录，一键即达、方便快捷',
          },
          {
            icon: '🔑',
            name: '密码找回',
            desc: '用于平台用户快速找回密码，并完成密码修改，确保帐户安全',
          },
          {
            icon: '💳',
            name: '支付验证',
            desc: '用于线上支付交易时，核验用户身份，有效保障账户资金安全',
          },
          {
            icon: '👥',
            name: '用户拉新',
            desc: '通过短信将新用户注册福利、充值优惠等营销信息发送给消费者',
          },
          {
            icon: '📢',
            name: '产品推广',
            desc: '用于跨境电商、手游等平台的产品推广，精准触达目标客户',
          },
          {
            icon: '🔄',
            name: '用户召回',
            desc: '通过短信将新品折扣、限时促销等信息传递给老用户',
          },
          {
            icon: '👑',
            name: '会员服务',
            desc: '为会员客户提供贴心周到的服务通知，增强客户忠诚度',
          },
          {
            icon: '📋',
            name: '事项通知',
            desc: '及时给用户发送上课通知、还款通知、收货通知等各类提醒',
          },
          {
            icon: '🎉',
            name: '节日祝福',
            desc: '通过短信向客户发送真诚的问候和祝福，增强客户粘性',
          },
        ],
      },
      cta: '立即体验',
    },
    en: {
      title: 'Message Service',
      subtitle: 'Make Message Delivery Simple',
      description: 'Establish close connections with global customers through quality SMS channels',
      advantages: {
        title: 'Our Advantages',
        items: [
          {
            title: 'Wide Coverage',
            desc: 'Service coverage in 200+ countries and regions, supporting multiple languages',
          },
          {
            title: 'Global Deployment',
            desc: 'Multi-point deployment servers worldwide, millisecond-level submission speed',
          },
          {
            title: 'Quality Channels',
            desc: 'Connected to 1,500+ carrier partners globally, premium channel quality',
          },
        ],
      },
      useCases: {
        title: 'Use Cases',
        items: [
          {
            icon: '🔐',
            name: 'Registration & Login',
            desc: 'Quick registration and login for apps and websites with one-click convenience',
          },
          {
            icon: '🔑',
            name: 'Password Recovery',
            desc: 'Help users quickly recover passwords and ensure account security',
          },
          {
            icon: '💳',
            name: 'Payment Verification',
            desc: 'Verify user identity during online transactions to protect account security',
          },
          {
            icon: '👥',
            name: 'User Acquisition',
            desc: 'Send registration benefits and promotional offers to acquire new users',
          },
          {
            icon: '📢',
            name: 'Product Promotion',
            desc: 'Promote products for e-commerce and gaming platforms with precision targeting',
          },
          {
            icon: '🔄',
            name: 'User Reactivation',
            desc: 'Send discounts and promotions to inactive users to drive reactivation',
          },
          {
            icon: '👑',
            name: 'Member Services',
            desc: 'Provide thoughtful service notifications to enhance customer loyalty',
          },
          {
            icon: '📋',
            name: 'Event Notifications',
            desc: 'Send timely reminders for classes, payments, deliveries and more',
          },
          {
            icon: '🎉',
            name: 'Holiday Greetings',
            desc: 'Send sincere greetings and wishes to enhance customer engagement',
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              ? '立即开始使用闪信SMS消息服务，体验全球领先的短信解决方案'
              : 'Start using Shanxin SMS message service today and experience world-leading SMS solutions'}
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

export default Message;
