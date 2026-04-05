# 闪信SMS - 高效国际短信服务平台

## 🌟 项目特性

- ✅ **现代化设计** - 深蓝 + 青色科技感设计
- ✅ **中英双语** - 完整的中文和英文支持
- ✅ **响应式布局** - 完美适配各种设备
- ✅ **快速加载** - 优化的性能和加载速度
- ✅ **SEO 友好** - 搜索引擎优化

## 📦 技术栈

- **前端框架**: React 19
- **样式系统**: Tailwind CSS 4
- **UI 组件**: shadcn/ui
- **路由**: Wouter
- **构建工具**: Vite
- **语言**: TypeScript

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 `http://localhost:5173`

### 生产构建

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 📁 项目结构

```
client/
├── public/              # 静态资源
├── src/
│   ├── pages/          # 页面组件
│   │   ├── Home.tsx    # 首页
│   │   ├── Message.tsx # 消息产品页
│   │   ├── Voice.tsx   # 语音产品页
│   │   ├── Data.tsx    # 数据产品页
│   │   └── Pricing.tsx # 价格页
│   ├── components/     # 可复用组件
│   │   ├── Header.tsx  # 导航栏
│   │   ├── Footer.tsx  # 页脚
│   │   └── FloatingContact.tsx # 浮动联系按钮
│   ├── App.tsx         # 主应用
│   ├── main.tsx        # 入口
│   └── index.css       # 全局样式
└── index.html          # HTML 模板
```

## 🎨 页面内容

### 首页 (Home)
- 产品介绍和核心优势
- 特性展示
- 常见问题解答
- 行动号召按钮

### 消息产品 (Message)
- 营销短信功能介绍
- 应用场景展示
- 优势说明

### 语音产品 (Voice)
- 验证码功能介绍
- 应用场景展示
- 优势说明

### 数据产品 (Data)
- 防欺诈功能介绍
- 应用场景展示
- 优势说明

### 价格页 (Pricing)
- 营销短信和验证码价格表
- 8 个主要国家/地区
- 常见问题解答

## 🌐 部署

详见 [GITHUB_DEPLOY.md](./GITHUB_DEPLOY.md)

支持以下部署方式：
- GitHub Pages
- Vercel
- Netlify
- 自托管服务器

## 📞 联系方式

- **Telegram**: @sms_shanxin
- **WhatsApp**: +852 6856 1065

## 🔧 配置

### 修改品牌信息

编辑 `client/src/pages/Home.tsx` 中的内容和 `client/src/index.css` 中的样式变量。

### 修改联系方式

编辑 `client/src/components/FloatingContact.tsx` 中的联系链接。

### 修改价格

编辑 `client/src/pages/Pricing.tsx` 中的价格数据。

## 📝 许可证

MIT License

## 🎯 开发路线图

- [ ] 添加客户案例展示
- [ ] 集成在线客服
- [ ] 后台管理系统
- [ ] 价格动态更新
- [ ] 多语言支持扩展

---

**项目版本**: 1.0.0  
**最后更新**: 2026-04-05
