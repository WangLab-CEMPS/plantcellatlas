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

### 添加细胞图谱

当前已添加的图谱：
- 2019 Arabidopsis root  https://explorer.plantcellatlas.com/?dataset=ath_root
- 2021 Arabidopsis shoot https://explorer.plantcellatlas.com/?dataset=ath_shoot
- 2023 Marchantia polymorpha census https://explorer.plantcellatlas.com/?dataset=mp_census

**添加新图谱需要修改 2 个文件：**

#### 1. 修改 `index.html`

在 `<section id="atlas">` 的 `.atlas-grid` 中添加新的卡片：

```html
<div class="atlas-card">
    <div class="atlas-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <!-- 可选择不同的图标路径 -->
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
            <path d="M12 6v6l4 2"/>
        </svg>
    </div>
    <span class="atlas-year">2024</span>  <!-- 发表年份 -->
    <h3 data-i18n-html="true">中文名 <em>拉丁学名</em></h3>
    <p data-i18n="atlas.newAtlas.desc">图谱描述文字</p>
    <a href="https://explorer.plantcellatlas.com/?dataset=数据集ID" target="_blank" class="atlas-link" data-i18n="atlas.explore">探索图谱 →</a>
</div>
```

#### 2. 修改 `script.js`

在 `translations` 对象中添加中英文翻译：

**中文部分 (zh)：**
```javascript
'atlas.newAtlas.desc': '新图谱的中文描述',
```

**英文部分 (en)：**
```javascript
'atlas.newAtlas.desc': 'English description of the new atlas',
```

> **注意**：`data-i18n` 属性的值需要与 `script.js` 中的翻译键名一致。

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
