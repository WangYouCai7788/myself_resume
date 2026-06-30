# 王雨阳 · 简历网站

> 暗黑赛博风 · 双语切换 · 多端适配

## 目录结构

```
E:\work\project\myself_resume\
├── index.html       ← 主页面（双击可直接在浏览器打开）
├── server.js        ← 本地服务器（手机同WiFi访问用）
└── DEPLOY.md        ← 本指南
```

## 启动本地服务器（手机可访问）

```bash
cd /d E:\work\project\myself_resume
node server.js
```

**手机访问**：手机连同一 WiFi → 浏览器打开 `http://你的电脑IP:3000`

## 部署到 GitHub Pages（推荐，永久在线）

1. 打开 https://github.com → 新建仓库（Public）
2. 执行：

```bash
git clone https://github.com/你的用户名/仓库名.git
cd 仓库名
copy E:\work\project\myself_resume\index.html index.html
git add .
git commit -m "🎉 个人简历网站"
git push
```

3. 仓库 Settings → Pages → 选 main → Save
4. 访问 `https://你的用户名.github.io/仓库名`

## 功能

- 🌐 右上角 **中 / EN** 一键切换中英文
- 🌧️ 矩阵雨 + 粒子特效 + 故障文字
- 📱 手机自适应
- 🎯 技能进度条动画
- 💻 终端风格自我介绍
