import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Language = 'zh' | 'en';

const Products = () => {
  const [language, setLanguage] = useState<Language>('zh');

  const content = {
    zh: {
      title: '产品中心',
      subtitle: '全面的国际短信解决方案',
      products: [
        {
          id: 1,
          name: '国际短信',
          icon: '📱',
          description: '高效可靠的国际短信发送服务',
          features: [
            '支持200+国家和地区',
            '99.9%送达率',
            '毫秒级发送速度',
            '实时送达报告',
            '灵活的API接口',
            '支持批量发送',
          ],
        },
        {
          id: 2,
          name: '验证码服务',
          icon: '🔐',
          description: '安全可靠的用户身份验证',
          features: [
            '多种验证方式',
            '高安全性',
            '快速送达',
            '自定义模板',
            '防止滥用机制',
            '详细的日志记录',
          ],
        },
        {
          id: 3,
          name: '营销短信',
          icon: '📢',
          description: '精准高效的营销推广工具',
          features: [
            '精准用户定位',
            '个性化内容',
            'A/B测试支持',
            '实时效果分析',
            '合规性检查',
            '智能发送优化',
          ],
        },
        {
          id: 4,
          name: '通知提醒',
          icon: '🔔',
          description: '及时准确的业务通知服务',
          features: [
            '订单通知',
            '物流追踪',
            '预约提醒',
            '账户提醒',
            '紧急通知',
            '自动重试机制',
          ],
        },
        {
          id: 5,
          name: '全球号码',
          icon: '🌍',
          description: '虚拟号码和本地号码服务',
          features: [
            '全球虚拟号码',
            '本地号码申请',
            '号码管理平台',
            '来电显示',
            '通话录音',
            '智能路由',
          ],
        },
        {
          id: 6,
          name: '客户互动',
          icon: '💬',
          description: '双向沟通和客户管理平台',
          features: [
            '双向短信',
            '客户管理',
            '对话历史',
            '自动回复',
            '客户分组',
            '数据分析',
          ],
        },
      ],
    },
    en: {
      title: 'Products',
      subtitle: 'Comprehensive International SMS Solutions',
      products: [
        {
          id: 1,
          name: 'International SMS',
          icon: '📱',
          description: 'Efficient and reliable international SMS service',
          features: [
            '200+ countries and regions',
            '99.9% delivery rate',
            'Millisecond sending speed',
            'Real-time delivery reports',
            'Flexible API interface',
            'Batch sending support',
          ],
        },
        {
          id: 2,
          name: 'Verification Code',
          icon: '🔐',
          description: 'Secure and reliable user authentication',
          features: [
            'Multiple verification methods',
            'High security',
            'Fast delivery',
            'Custom templates',
            'Abuse prevention',
            'Detailed logging',
          ],
        },
        {
          id: 3,
          name: 'Marketing SMS',
          icon: '📢',
          description: 'Precise and efficient marketing tool',
          features: [
            'Precise user targeting',
            'Personalized content',
            'A/B testing support',
            'Real-time analytics',
            'Compliance checking',
            'Smart optimization',
          ],
        },
        {
          id: 4,
          name: 'Notifications',
          icon: '🔔',
          description: 'Timely and accurate business notifications',
          features: [
            'Order notifications',
            'Logistics tracking',
            'Appointment reminders',
            'Account alerts',
            'Emergency notifications',
            'Auto-retry mechanism',
          ],
        },
        {
          id: 5,
          name: 'Global Numbers',
          icon: '🌍',
          description: 'Virtual and local number services',
          features: [
            'Global virtual numbers',
            'Local number application',
            'Number management',
            'Caller ID display',
            'Call recording',
            'Smart routing',
          ],
        },
        {
          id: 6,
          name: 'Customer Interaction',
          icon: '💬',
          description: 'Two-way communication and customer management',
          features: [
            'Two-way SMS',
            'Customer management',
            'Conversation history',
            'Auto-reply',
            'Customer grouping',
            'Data analytics',
          ],
        },
      ],
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <Header language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.products.map((product) => (
              <div
                key={product.id}
                className="card-gradient p-8 rounded-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="text-5xl mb-4">{product.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 mb-6">{product.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-cyan-400 font-bold">✓</span>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                  {language === 'zh' ? '了解详情' : 'Learn More'}
                  <ArrowRight className="w-4 h-4 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              {language === 'zh' ? '轻松集成' : 'Easy Integration'}
            </h2>
            <p className="text-lg text-slate-400 mb-8 text-center">
              {language === 'zh'
                ? '我们提供完整的API文档和SDK，支持多种编程语言，让您快速集成闪信SMS服务。'
                : 'We provide comprehensive API documentation and SDKs supporting multiple programming languages for quick integration.'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['REST API', 'Python SDK', 'Node.js SDK', 'Java SDK', 'PHP SDK', 'Go SDK', 'Ruby SDK', '.NET SDK'].map(
                (sdk, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800 border border-slate-700 p-4 rounded-lg text-center text-slate-300 hover:border-cyan-400 transition-colors"
                  >
                    {sdk}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
};

export default Products;
