# 📚 GitHub Pages 详细部署教程

本教程将指导您一步步将闪信SMS官网部署到 GitHub Pages。

## 📋 前置要求

- GitHub 账户（免费注册：https://github.com）
- Git 已安装（下载：https://git-scm.com）
- Node.js 和 pnpm 已安装
- 本项目源代码

## 🎯 部署流程概览

```
1. 创建 GitHub 仓库
   ↓
2. 配置项目文件
   ↓
3. 本地测试构建
   ↓
4. 推送代码到 GitHub
   ↓
5. 启用 GitHub Pages
   ↓
6. 自动部署完成
```

---

## 第一步：创建 GitHub 仓库

### 1.1 登录 GitHub

1. 访问 https://github.com
2. 点击右上角头像 → Settings
3. 确认已登录

### 1.2 创建新仓库

1. 点击右上角 **+** 图标 → **New repository**
2. 填写仓库信息：
   - **Repository name**: `sms-vip` （或任何你喜欢的名字）
   - **Description**: `Shanxin SMS - High-efficiency international SMS service platform`
   - **Visibility**: 选择 **Public**（GitHub Pages 需要公开仓库）
   - **Initialize this repository with**: 不勾选任何选项

3. 点击 **Create repository**

### 1.3 获取仓库链接

创建成功后，你会看到类似的链接：
```
https://github.com/YOUR_USERNAME/sms-vip.git
```

记下这个链接，后面会用到。

---

## 第二步：配置项目文件

### 2.1 修改 vite.config.ts

这一步很重要！GitHub Pages 需要正确的 `base` 路径配置。

打开项目根目录的 `vite.config.ts` 文件，找到 `defineConfig` 部分：

```typescript
// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // 添加这一行（替换 sms-vip 为你的仓库名）
  base: '/sms-vip/',
  
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
  
  // ... 其他配置
})
```

**重要提示**：
- 如果你的仓库名是 `sms-vip`，则 `base` 应该是 `/sms-vip/`
- 如果你的仓库名是 `my-website`，则 `base` 应该是 `/my-website/`
- 如果你使用自定义域名，`base` 可以设置为 `/`

### 2.2 创建 GitHub Actions 工作流

这样可以实现自动部署。

1. 在项目根目录创建文件夹：`.github/workflows/`
2. 在该文件夹中创建文件：`deploy.yml`
3. 复制以下内容到 `deploy.yml`：

```yaml
# .github/workflows/deploy.yml

name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # 当推送到 main 分支时触发

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      # 检出代码
      - name: Checkout code
        uses: actions/checkout@v3
      
      # 设置 pnpm
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      # 设置 Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      
      # 安装依赖
      - name: Install dependencies
        run: pnpm install
      
      # 构建项目
      - name: Build project
        run: pnpm build
      
      # 部署到 GitHub Pages
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: ''  # 如果使用自定义域名，填写域名
```

**文件结构应该如下**：
```
sms-vip/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── client/
├── vite.config.ts
├── package.json
└── ...
```

---

## 第三步：本地测试构建

在推送到 GitHub 之前，先在本地测试构建是否成功。

### 3.1 安装依赖

```bash
pnpm install
```

### 3.2 本地开发测试

```bash
pnpm dev
```

访问 `http://localhost:5173` 验证网站正常运行。

### 3.3 构建生产版本

```bash
pnpm build
```

检查是否有错误。如果成功，会生成 `dist/` 文件夹。

### 3.4 预览构建结果

```bash
pnpm preview
```

访问 `http://localhost:4173` 预览生产版本。

---

## 第四步：初始化 Git 并推送代码

### 4.1 初始化 Git 仓库

在项目根目录打开终端，执行：

```bash
git init
```

### 4.2 添加所有文件

```bash
git add .
```

### 4.3 创建初始提交

```bash
git commit -m "Initial commit: Shanxin SMS website"
```

### 4.4 重命名分支为 main

```bash
git branch -M main
```

### 4.5 添加远程仓库

将 `YOUR_USERNAME` 替换为你的 GitHub 用户名，`sms-vip` 替换为你的仓库名：

```bash
git remote add origin https://github.com/YOUR_USERNAME/sms-vip.git
```

### 4.6 推送代码到 GitHub

```bash
git push -u origin main
```

系统会要求输入 GitHub 用户名和密码（或使用 Personal Access Token）。

---

## 第五步：启用 GitHub Pages

### 5.1 进入仓库设置

1. 访问你的 GitHub 仓库：`https://github.com/YOUR_USERNAME/sms-vip`
2. 点击 **Settings** 标签

### 5.2 找到 Pages 设置

1. 在左侧菜单中找到 **Pages**
2. 点击进入 Pages 设置

### 5.3 配置部署源

1. **Source** 部分，选择 **Deploy from a branch**
2. **Branch** 部分：
   - 第一个下拉菜单选择 **gh-pages**
   - 第二个下拉菜单选择 **/ (root)**
3. 点击 **Save**

### 5.4 等待部署

GitHub 会自动运行 GitHub Actions 工作流：

1. 点击 **Actions** 标签
2. 查看 "Deploy to GitHub Pages" 工作流的运行状态
3. 等待绿色的 ✅ 标记表示部署成功

---

## 第六步：访问你的网站

部署完成后，你的网站将在以下地址可访问：

```
https://YOUR_USERNAME.github.io/sms-vip/
```

例如：
- 如果用户名是 `john`，仓库名是 `sms-vip`
- 网站地址就是 `https://john.github.io/sms-vip/`

---

## 🔧 常见问题与解决方案

### Q1: 部署后页面显示 404

**原因**：`vite.config.ts` 中的 `base` 配置不正确

**解决方案**：
1. 确保 `base: '/sms-vip/'` 与你的仓库名一致
2. 修改后重新推送代码
3. GitHub Actions 会自动重新部署

```typescript
// 正确的配置
base: '/sms-vip/',  // 仓库名是 sms-vip
```

### Q2: 部署后样式丢失（页面显示白色）

**原因**：CSS 文件路径不正确

**解决方案**：
1. 检查浏览器控制台（F12）查看错误信息
2. 确认 `vite.config.ts` 中的 `base` 配置正确
3. 清除浏览器缓存：`Ctrl+Shift+Delete`

### Q3: GitHub Actions 构建失败

**原因**：可能是依赖安装失败或构建错误

**解决方案**：
1. 点击 **Actions** 标签查看失败的工作流
2. 点击失败的工作流查看详细日志
3. 根据错误信息修复问题
4. 重新推送代码

### Q4: 推送代码时要求输入密码

**原因**：GitHub 已弃用密码认证

**解决方案**：使用 Personal Access Token（PAT）

1. 访问 https://github.com/settings/tokens
2. 点击 **Generate new token** → **Generate new token (classic)**
3. 设置 Token 权限：
   - ✅ repo
   - ✅ workflow
4. 点击 **Generate token**
5. 复制 Token
6. 推送时，用户名输入你的 GitHub 用户名，密码输入 Token

### Q5: 如何更新已部署的网站

1. 在本地修改代码
2. 提交更改：
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push
   ```
3. GitHub Actions 会自动重新部署

---

## 📊 部署状态检查

### 查看部署历史

1. 访问你的仓库
2. 点击 **Actions** 标签
3. 查看 "Deploy to GitHub Pages" 工作流的运行记录

### 查看部署日志

1. 点击最新的工作流运行
2. 点击 "build-and-deploy" 任务
3. 查看详细的构建和部署日志

---

## 🚀 优化建议

### 1. 使用自定义域名

如果你有自己的域名，可以配置自定义域名：

1. 在 GitHub Pages 设置中，**Custom domain** 输入你的域名
2. 在你的域名 DNS 设置中，添加 CNAME 记录指向 `YOUR_USERNAME.github.io`
3. 修改 `vite.config.ts`：
   ```typescript
   base: '/',  // 使用自定义域名时，base 可以是 /
   ```

### 2. 启用 HTTPS

GitHub Pages 自动启用 HTTPS。如果使用自定义域名：

1. 在 GitHub Pages 设置中，勾选 **Enforce HTTPS**

### 3. 性能优化

- 定期更新依赖：`pnpm update`
- 检查构建大小：`pnpm build` 后查看 `dist/` 文件夹大小
- 使用 CDN 加速（可选）

---

## 📞 获取帮助

如果遇到问题，可以：

1. **查看 GitHub 官方文档**：https://docs.github.com/en/pages
2. **查看工作流日志**：Actions 标签中的详细日志
3. **联系我们**：
   - Telegram: @sms_shanxin
   - WhatsApp: +852 6856 1065

---

## ✅ 部署检查清单

在部署前，请确认以下事项：

- [ ] 已创建 GitHub 仓库
- [ ] 已修改 `vite.config.ts` 中的 `base` 配置
- [ ] 已创建 `.github/workflows/deploy.yml` 文件
- [ ] 已在本地测试构建成功（`pnpm build`）
- [ ] 已推送代码到 GitHub
- [ ] 已在 GitHub Pages 设置中选择 `gh-pages` 分支
- [ ] GitHub Actions 工作流已成功运行
- [ ] 网站在 `https://YOUR_USERNAME.github.io/sms-vip/` 可访问

---

## 🎉 恭喜！

如果你看到了你的网站在 GitHub Pages 上运行，说明部署成功！

现在你可以：

1. **分享你的网站链接**
2. **继续开发和更新**：修改代码后自动部署
3. **配置自定义域名**：使用你自己的域名
4. **监控网站流量**：使用 Google Analytics 等工具

---

**最后更新**: 2026-04-05  
**版本**: 1.0.0
