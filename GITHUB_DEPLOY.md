# 闪信SMS官网 - GitHub 部署指南

## 📋 项目概述

这是闪信SMS官网的完整源代码，可以一键部署到 GitHub Pages 或任何支持 Node.js 的服务器。

## 🚀 快速开始

### 1. 克隆或上传到 GitHub

```bash
# 如果还没有 GitHub 仓库，创建一个新仓库
git init
git add .
git commit -m "Initial commit: Shanxin SMS website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sms-vip.git
git push -u origin main
```

### 2. 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 访问 http://localhost:5173
```

### 3. 构建生产版本

```bash
# 构建项目
pnpm build

# 输出文件在 dist/ 目录
```

## 🌐 部署选项

### 选项 A: GitHub Pages 部署

1. **修改 vite.config.ts**
   ```typescript
   // 添加 base 配置
   export default defineConfig({
     base: '/sms-vip/',  // 替换为你的仓库名
     // ... 其他配置
   })
   ```

2. **创建 GitHub Actions 工作流**
   
   在项目根目录创建 `github/workflows/deploy.yml`：
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: pnpm/action-setup@v2
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'pnpm'
         
         - run: pnpm install
         - run: pnpm build
         
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "gh-pages" 和 "/ (root)"
   - 保存

### 选项 B: Vercel 部署

1. **连接 GitHub 仓库到 Vercel**
   - 访问 https://vercel.com
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 选择 "Other" 作为框架
   - 设置构建命令：`pnpm build`
   - 设置输出目录：`dist`
   - 部署

### 选项 C: Netlify 部署

1. **连接 GitHub 仓库到 Netlify**
   - 访问 https://netlify.com
   - 点击 "New site from Git"
   - 选择你的 GitHub 仓库
   - 设置构建命令：`pnpm build`
   - 设置发布目录：`dist`
   - 部署

### 选项 D: 自托管服务器部署

```bash
# 1. SSH 连接到服务器
ssh user@your-server.com

# 2. 克隆仓库
git clone https://github.com/YOUR_USERNAME/sms-vip.git
cd sms-vip

# 3. 安装依赖
pnpm install

# 4. 构建
pnpm build

# 5. 使用 PM2 运行（可选）
npm install -g pm2
pm2 start "pnpm preview" --name "sms-vip"

# 或使用 Nginx 反向代理 dist 目录
```

## 📁 项目结构

```
sms-vip/
├── client/                 # 前端代码
│   ├── public/            # 静态文件
│   ├── src/
│   │   ├── pages/         # 页面组件
│   │   ├── components/    # 可复用组件
│   │   ├── contexts/      # React Contexts
│   │   ├── hooks/         # 自定义 Hooks
│   │   ├── lib/           # 工具函数
│   │   ├── App.tsx        # 主应用组件
│   │   ├── main.tsx       # 入口文件
│   │   └── index.css      # 全局样式
│   └── index.html         # HTML 模板
├── server/                # 后端占位符
├── shared/                # 共享类型
├── package.json           # 项目配置
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
└── pnpm-lock.yaml         # 依赖锁定文件
```

## 🛠 可用命令

```bash
# 开发
pnpm dev              # 启动开发服务器
pnpm build            # 构建生产版本
pnpm preview          # 预览生产构建
pnpm lint             # 代码检查

# 其他
pnpm type-check       # TypeScript 类型检查
```

## 📝 环境变量

项目不需要特殊的环境变量配置，所有配置都在代码中。

## 🎨 自定义

### 修改品牌信息

编辑 `client/src/pages/Home.tsx` 和其他页面文件中的内容。

### 修改样式

编辑 `client/src/index.css` 中的 CSS 变量和全局样式。

### 添加新页面

1. 在 `client/src/pages/` 创建新组件
2. 在 `client/src/App.tsx` 中添加路由

## 🐛 故障排除

### 部署后样式丢失

- 检查 `vite.config.ts` 中的 `base` 配置
- 确保 CSS 文件被正确引入

### 页面 404 错误

- 检查路由配置
- 确保 HTML 重定向规则正确配置

### 构建失败

```bash
# 清除缓存并重新构建
rm -rf node_modules dist
pnpm install
pnpm build
```

## 📞 联系方式

- Telegram: @sms_shanxin
- WhatsApp: +852 6856 1065

## 📄 许可证

MIT License

---

**最后更新**: 2026-04-05
