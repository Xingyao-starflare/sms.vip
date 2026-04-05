# 🚀 快速开始指南

## 步骤 1: 解压文件

```bash
tar -xzf sms-vip-github-deploy.tar.gz
cd sms-vip-deploy
```

## 步骤 2: 安装依赖

```bash
pnpm install
```

如果没有安装 pnpm，先运行：
```bash
npm install -g pnpm
```

## 步骤 3: 本地开发

```bash
pnpm dev
```

然后访问 `http://localhost:5173`

## 步骤 4: 上传到 GitHub

### 4.1 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 创建新仓库（例如：sms-vip）
3. 选择 "Public" 或 "Private"

### 4.2 上传代码

```bash
# 初始化 git
git init
git add .
git commit -m "Initial commit: Shanxin SMS website"
git branch -M main

# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/sms-vip.git

# 推送到 GitHub
git push -u origin main
```

## 步骤 5: 部署

选择以下任意一种部署方式：

### 选项 A: GitHub Pages（免费）

1. 进入仓库 Settings → Pages
2. Source 选择 "Deploy from a branch"
3. Branch 选择 "main" 和 "/ (root)"
4. 修改 `vite.config.ts`：
   ```typescript
   base: '/sms-vip/',  // 替换为你的仓库名
   ```
5. 运行 `pnpm build`
6. 将 `dist` 文件夹上传到 `gh-pages` 分支

### 选项 B: Vercel（推荐）

1. 访问 https://vercel.com
2. 点击 "New Project"
3. 选择你的 GitHub 仓库
4. 设置构建命令：`pnpm build`
5. 设置输出目录：`dist`
6. 点击 Deploy

### 选项 C: Netlify

1. 访问 https://netlify.com
2. 点击 "New site from Git"
3. 选择你的 GitHub 仓库
4. 设置构建命令：`pnpm build`
5. 设置发布目录：`dist`
6. 点击 Deploy

## 常见问题

### Q: 如何修改网站内容？

A: 编辑 `client/src/pages/` 下的文件，然后运行 `pnpm dev` 查看效果。

### Q: 如何修改样式？

A: 编辑 `client/src/index.css` 中的 CSS 变量。

### Q: 如何修改联系方式？

A: 编辑 `client/src/components/FloatingContact.tsx`。

### Q: 部署后样式丢失怎么办？

A: 检查 `vite.config.ts` 中的 `base` 配置是否正确。

## 📞 需要帮助？

- Telegram: @sms_shanxin
- WhatsApp: +852 6856 1065

---

**祝您部署顺利！** 🎉
