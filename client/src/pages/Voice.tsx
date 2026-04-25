import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Language = 'zh' | 'en';

const Voice = () => {
  const [language, setLanguage] = useState<Language>('zh');

  const content = {
    zh: {
      title: '语音服务',
      subtitle: '用语音传递业务声音',
      description: '通过优质的语音通道，与全球客户建立紧密的联系',
      advantages: {
        title: '我们的优势',
        items: [
          {
            title: '覆盖范围广',
            desc: '业务覆盖全球185多个国家和地区，支持多种语言',
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
            name: '语音验证码',
            desc: '用于APP、网站等平台的注册与登录，通过语音验证码避免恶意注册',
          },
          {
            icon: '🔑',
            name: '密码找回',
            desc: '通过呼叫用户注册时预留的手机号，系统自动播报验证码，完成密码重置',
          },
          {
            icon: '💳',
            name: '支付验证',
            desc: '用于与资金支付相关的服务，通过语音向用户播报验证码，核验用户身份',
          },
          {
            icon: '📞',
            name: '会议通知',
            desc: '及时告知对方会议时间、地点、会议主题等内容，给予用户良好的体验',
          },
          {
            icon: '📦',
            name: '收货通知',
            desc: '提醒用户收货、订单反馈等，以周到的服务提升客户满意度',
          },
          {
            icon: '🎓',
            name: '课程通知',
            desc: '提醒有关课程安排、新课程上线等信息，及时让用户了解课程最新动态',
          },
          {
            icon: '☎️',
            name: '客服热线',
            desc: '通过SIP Trunk语音中继连接企业呼叫中心、客服系统等，及时解答咨询',
          },
          {
            icon: '📢',
            name: '营销推广',
            desc: '通过高质量语音服务快速连接全球用户，进行公司产品与服务推广',
          },
          {
            icon: '🌐',
            name: '用户链接',
            desc: '在几秒钟内快速连接世界各地的客户，与他们保持密切的联系',
          },
        ],
      },
      cta: '立即体验',
    },
    en: {
      title: 'Voice Service',
      subtitle: 'Transmit Business Voice',
      description: 'Establish close connections with global customers through quality voice channels',
      advantages: {
        title: 'Our Advantages',
        items: [
          {
            title: 'Wide Coverage',
            desc: 'Service coverage in 185+ countries and regions, supporting multiple languages',
          },
          {
            title: 'Global Deployment',
            desc: 'Multi-point deployment servers worldwide, millisecond-level submission speed',
          },
          {
            title: 'Quality Channels',
            desc: 'Connected to 1,500+ carrier partners globally, premium voice channel quality',
          },
        ],
      },
      useCases: {
        title: 'Use Cases',
        items: [
          {
            icon: '🔐',
            name: 'Voice Verification Code',
            desc: 'Prevent malicious registration through voice verification codes for apps and websites',
          },
          {
            icon: '🔑',
            name: 'Password Recovery',
            desc: 'Call the registered phone number and automatically play verification code for password reset',
          },
          {
            icon: '💳',
            name: 'Payment Verification',
            desc: 'Verify user identity for payment-related services through voice verification codes',
          },
          {
            icon: '📞',
            name: 'Meeting Notifications',
            desc: 'Timely notification of meeting time, location, and agenda for better user experience',
          },
          {
            icon: '📦',
            name: 'Delivery Notifications',
            desc: 'Remind users of delivery and order feedback to enhance customer satisfaction',
          },
          {
            icon: '🎓',
            name: 'Course Notifications',
            desc: 'Remind users of course schedules and new courses to keep them updated',
          },
          {
            icon: '☎️',
            name: 'Customer Service Hotline',
            desc: 'Connect enterprise call centers and customer service systems through SIP Trunk',
          },
          {
            icon: '📢',
            name: 'Marketing Promotion',
            desc: 'Connect global users quickly through quality voice service for product promotion',
          },
          {
            icon: '🌐',
            name: 'User Connection',
            desc: 'Connect with customers worldwide in seconds and maintain close relationships',
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
              href="https://t.me/wwwsmsvip"
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
              ? '立即开始使用闪信SMS语音服务，体验全球领先的语音解决方案'
              : 'Start using Shanxin SMS voice service today and experience world-leading voice solutions'}
          </p>
          <a
            href="https://t.me/wwwsmsvip"
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

export default Voice;
