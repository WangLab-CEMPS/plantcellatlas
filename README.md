# 🌱 Plant Cell Atlas

Plant Cell Atlas 静态网站，在 GitHub Pages 上托管。

## 项目简介

Plant Cell Atlas 项目致力于构建全面、高分辨率的植物单细胞转录组图谱，揭示植物细胞的多样性与复杂性。

本网站由中国科学院分子植物科学卓越创新中心 (CEMPS) Wang Lab 维护。

## 文件结构

```
plantcellatlas/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # 交互脚本
└── README.md       # 说明文档
```

## 部署到 GitHub Pages

### 1. 推送代码到 GitHub

```bash
git add .
git commit -m "Initial commit: Plant Cell Atlas website"
git remote add origin git@github.com:WangLab-CEMPS/plantcellatlas.git
git branch -M main
git push -u origin main
```

### 2. 启用 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 **Settings** → **Pages**
3. 在 **Source** 下选择 `Deploy from a branch`
4. 选择 `main` 分支和 `/ (root)` 目录
5. 点击 **Save**

### 3. 访问网站

部署完成后，网站将可通过以下地址访问：

```
https://wanglab-cemps.github.io/plantcellatlas/
```

## 本地预览

可以使用 Python 内置服务器进行本地预览：

```bash
# Python 3
python -m http.server 8000

# 然后访问 http://localhost:8000
```

或者使用 VS Code 的 Live Server 扩展。

## 自定义内容

### 修改团队信息

编辑 `index.html` 中的 `#team` 部分，更新团队成员信息。

### 添加论文

在 `#publications` 部分添加新的论文条目，格式如下：

```html
<article class="pub-item">
    <span class="pub-year">年份</span>
    <div class="pub-content">
        <h3>论文标题</h3>
        <p class="pub-authors">作者列表</p>
        <p class="pub-journal"><em>期刊名称</em></p>
    </div>
    <a href="论文链接" class="pub-link">PDF</a>
</article>
```

### 修改联系方式

更新 `#contact` 部分的地址、邮箱和 GitHub 链接。

## 技术特性

- ✅ 纯静态网站，无需后端服务器
- ✅ 响应式设计，适配移动端
- ✅ 平滑滚动和动画效果
- ✅ 深色主题，植物/细胞美学设计
- ✅ SEO 友好

## 许可证

© 2025 WangLab @ CEMPS. All rights reserved.
