# 部署到 GitHub Pages

## 步骤 1: 在 GitHub 上创建仓库

1. 登录 GitHub (https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称填写: `my-portfolio`
4. 选择 Public
5. 不要勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

## 步骤 2: 连接本地仓库到 GitHub

在终端运行以下命令（替换 YOUR_USERNAME 为你的 GitHub 用户名）:

```bash
cd ~/Documents/github/my-portfolio
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

## 步骤 3: 部署到 GitHub Pages

运行以下命令：

```bash
cd ~/Documents/github/my-portfolio
npm run deploy
```

这个命令会：
1. 自动构建你的项目
2. 将构建好的文件推送到 gh-pages 分支
3. GitHub 会自动部署该分支

## 步骤 4: 启用 GitHub Pages

1. 在 GitHub 上打开你的仓库
2. 点击 "Settings" 标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分，选择 "gh-pages" 分支
5. 点击 "Save"

几分钟后，你的网站就会发布在:
`https://YOUR_USERNAME.github.io/my-portfolio/`

## 本地开发

运行以下命令启动开发服务器：

```bash
cd ~/Documents/github/my-portfolio
npm run dev
```

然后在浏览器中打开 http://localhost:5173

## 更新网站

每次修改代码后，运行以下命令重新部署：

```bash
git add .
git commit -m "更新内容描述"
git push
npm run deploy
```

## 自定义内容

编辑 `src/App.jsx` 文件来修改网站内容：
- 修改个人信息
- 更新技能列表
- 添加项目展示
- 修改联系方式链接

编辑 `src/App.css` 来修改样式和颜色。
