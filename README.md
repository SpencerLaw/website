# 天津博瑞林特自动化科技有限公司 - 现代化企业网站

一个采用最新技术栈构建的现代化工业企业网站，专为NORGREN电磁阀、减压阀、气缸等工业自动化产品展示而设计。参考Linear App的简约现代设计理念，提供出色的用户体验。

## 🚀 技术特性

### 核心技术栈
- **HTML5**: 语义化标签，完整的SEO优化
- **TailwindCSS 3.0+**: 现代化CSS框架，通过CDN引入
- **Vanilla JavaScript**: 原生JS，无框架依赖
- **Font Awesome 6.5+**: 专业图标库

### 设计特色
- **现代简约**: 参考Linear App的设计理念
- **深色/浅色模式**: 完整的主题切换，默认跟随系统设置
- **响应式设计**: 完美适配所有设备（手机、平板、桌面）
- **微交互动画**: 精致的悬停效果和滚动动画
- **性能优化**: 图片懒加载、快速加载、优化的资源管理

## 📁 项目结构

```
website/
├── index.html          # 主页面文件（使用TailwindCSS）
├── script.js          # JavaScript交互逻辑
├── styles.css         # 自定义补充样式
├── vercel.json        # Vercel部署配置
├── .gitignore         # Git忽略文件
├── README.md          # 项目说明文档
└── assets/
    └── images/        # 产品图片目录（支持WebP格式）
```

## 🎨 设计亮点

### 视觉特色
- **清晰层次**: 使用TailwindCSS构建的清晰视觉层次
- **专业配色**: 蓝色主色调配合灰度系统，适合长时间阅读
- **现代字体**: Inter字体系统，提供优秀的可读性
- **玻璃效果**: 导航栏使用backdrop-blur毛玻璃效果

### 交互体验
- **平滑动画**: 页面加载、滚动和悬停的流畅动画
- **主题切换**: 一键切换深色/浅色模式，自动保存用户偏好
- **智能导航**: 移动端折叠菜单，桌面端固定导航
- **微交互**: 按钮悬停放大、卡片悬停阴影等精致效果

### 无障碍支持
- **键盘导航**: 完整的键盘访问支持
- **屏幕阅读器**: 语义化HTML和适当的ARIA标签
- **高对比度**: 支持系统高对比度模式
- **减少动画**: 尊重用户的动画偏好设置

## 🔧 快速开始

### 1. 克隆项目
```bash
git clone <repository-url>
cd website
```

### 2. 本地预览
使用任何HTTP服务器：

```bash
# 使用Node.js http-server（推荐）
npx http-server -p 3000 -o

# 使用Python
python -m http.server 3000

# 使用PHP
php -S localhost:3000
```

### 3. 替换产品图片

将您的产品图片放入项目根目录，并在HTML中更新图片链接：

- **格式要求**: WebP格式（推荐）或JPG/PNG
- **文件大小**: 每张图片 < 200KB
- **尺寸建议**: 400x300像素，保持4:3比例
- **命名规范**: 使用语义化文件名

**图片替换步骤**:
1. 将新图片放入项目目录
2. 编辑 `index.html` 中的图片src属性
3. 更新对应的alt属性（用于SEO和无障碍）

示例：
```html
<img src="your-product-image.webp" 
     alt="NORGREN 电磁阀型号 XXX" 
     class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
     loading="lazy">
```

### 4. 自定义内容

#### 修改公司信息
编辑 `index.html` 中的以下部分：
- 公司名称和标语
- 联系电话和地址
- 产品描述和介绍文字
- SEO meta标签

#### 主题色彩定制
在 `index.html` 的TailwindCSS配置中修改：
```javascript
colors: {
    primary: {
        50: '#eff6ff',
        500: '#3b82f6',    // 主色调
        600: '#2563eb',
        700: '#1d4ed8',
    }
}
```

## 🌐 部署指南

### Vercel部署（推荐）

1. **准备代码**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Vercel部署**:
   - 访问 [vercel.com](https://vercel.com)
   - 导入GitHub仓库
   - Framework Preset: "Other"
   - 点击Deploy

3. **自动部署**: 每次推送到main分支自动触发部署

### GitHub Pages

1. 在仓库Settings > Pages中启用
2. Source: "Deploy from a branch"
3. Branch: "main" / "root"
4. 访问: `https://username.github.io/repository-name`

### Cloudflare Pages

1. 连接GitHub仓库
2. 构建设置：
   - 构建命令：留空
   - 输出目录：`/`
3. 配置自定义域名和CDN

## 📱 响应式断点

网站在以下断点完美适配：

- **手机**: < 640px (单列布局)
- **平板**: 640px - 1024px (2列布局)
- **桌面**: 1024px - 1280px (3列布局)
- **大屏**: > 1280px (4列布局)

## ⚡ 性能优化

### 已实现的优化
- **图片懒加载**: 使用Intersection Observer API
- **资源优化**: 通过CDN加载外部资源
- **代码分离**: CSS和JavaScript分离加载
- **缓存策略**: Vercel自动配置缓存头

### 性能监控
使用以下工具监控网站性能：
- **Lighthouse**: Chrome DevTools内置
- **PageSpeed Insights**: Google官方工具
- **WebPageTest**: 详细的性能分析

## 🛠️ 开发指南

### 代码结构
- **HTML**: 语义化标签，使用TailwindCSS类名
- **CSS**: 最小化自定义CSS，主要使用Tailwind
- **JavaScript**: 模块化函数，清晰的注释

### 添加新功能
1. **新页面**: 复制现有结构，修改内容
2. **新组件**: 使用TailwindCSS类名构建
3. **新动画**: 在styles.css中添加keyframes

### 调试技巧
- 使用Chrome DevTools的响应式模式测试
- 检查TailwindCSS类名是否正确应用
- 使用Console查看JavaScript错误

## 🔒 SEO优化

### 已优化项目
- **Meta标签**: 完整的title、description、keywords
- **语义化HTML**: 正确使用h1-h6、nav、main、section等
- **图片Alt**: 所有图片都有描述性alt属性
- **结构化数据**: 可根据需要添加JSON-LD

### 进一步优化建议
- 添加sitemap.xml
- 配置robots.txt
- 添加Open Graph标签
- 实现结构化数据标记

## 🤝 技术支持

### 联系信息
- **业务咨询**: 13302082627
- **技术支持**: 通过GitHub Issues

### 常见问题

**Q: 如何更改主题色？**
A: 修改HTML中TailwindCSS配置的primary颜色值。

**Q: 如何添加新的产品类别？**
A: 复制现有的产品卡片HTML结构，修改图片和文字内容。

**Q: 网站支持哪些浏览器？**
A: 支持所有现代浏览器（Chrome、Firefox、Safari、Edge），IE不支持。

**Q: 如何优化网站加载速度？**
A: 压缩图片、使用WebP格式、启用CDN、配置适当的缓存策略。

## 📄 许可证

© 2025 天津博瑞林特自动化科技有限公司. 保留所有权利.

---

## 🚀 升级日志

### v2.0.0 (2025-01-26)
- 🎨 完全重新设计，采用Linear App风格
- 🌙 添加深色/浅色模式切换
- 📱 全面优化响应式设计
- ⚡ 使用TailwindCSS提升开发效率
- 🎯 完善的无障碍支持
- 🔧 性能优化和SEO增强

### v1.0.0 (2025-01-25)
- 🎉 初始版本发布
- 📦 基础HTML/CSS/JS结构
- 🏭 工业风格设计
- 📞 联系功能集成

---

**注意**: 部署前请确保所有产品图片都已替换为您的实际产品图片，并检查所有联系信息的准确性。如需要更多定制功能或技术支持，请联系开发团队。