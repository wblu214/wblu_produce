# 个人履历展示网站 - 现代化设计版本

一个基于 React + Vite + Framer Motion + Tailwind CSS 的现代化个人履历展示网站，采用最新设计趋势，具有沉浸式动画体验和优雅的用户界面。

## 🎨 设计升级亮点

### 现代化Hero区域
- **渐变背景**: 采用135度蓝紫渐变，更具视觉冲击力
- **动态头像**: 带有在线状态指示器和旋转动画
- **问候语标签**: 半透明毛玻璃效果的问候语
- **渐变文字**: 使用CSS渐变的姓名显示
- **社交链接**: 毛玻璃效果的社交媒体图标
- **CTA按钮**: 现代化的下载简历按钮

### 优化的时间线设计
- **卡片式布局**: 圆角更大的现代化卡片
- **渐变装饰**: 顶部渐变条和悬停效果
- **图标徽章**: 彩色背景的时间和成就图标
- **动画列表**: 成就项目的逐个动画显示
- **背景装饰**: 模糊圆形装饰元素

### 精美的项目卡片
- **渐变背景**: 多色渐变的项目头部
- **悬停效果**: 光晕和阴影的悬停动画
- **技术标签**: 圆角更大的技术栈标签
- **状态徽章**: 带有图标的项目状态显示
- **按钮动画**: 图标旋转的交互按钮

### 现代化导航栏
- **毛玻璃效果**: 半透明背景和模糊效果
- **活跃指示**: 渐变背景的活跃状态
- **滚动响应**: 根据滚动位置调整透明度
- **动画切换**: 平滑的标签切换动画

## 🚀 技术栈

- **框架**：React 18 + Vite
- **样式**：Tailwind CSS (扩展配置)
- **动画**：Framer Motion (高级动画)
- **图标**：React Icons
- **包管理**：Yarn

## 📱 新增功能特性

### 1. 增强的动画系统
- **弹簧动画**: 使用spring类型的自然动画
- **交错动画**: 元素依次出现的交错效果
- **悬停微交互**: 精细的悬停状态动画
- **滚动触发**: 基于viewport的滚动动画

### 2. 改进的视觉层次
- **渐变元素**: 大量使用渐变提升视觉效果
- **阴影系统**: 多层次的阴影和光晕效果
- **间距优化**: 更合理的元素间距
- **字体层次**: 清晰的字体大小和权重层次

### 3. 响应式优化
- **移动端适配**: 更好的移动端布局
- **触摸友好**: 适合触摸操作的按钮大小
- **性能优化**: 优化的动画性能

## 🎯 设计原则

### 现代化设计趋势
- **毛玻璃效果**: 广泛使用backdrop-blur
- **渐变设计**: 多色渐变背景和文字
- **圆角设计**: 更大的圆角半径
- **微交互**: 细致的交互动画

### 用户体验优化
- **视觉反馈**: 清晰的交互状态反馈
- **加载体验**: 优雅的加载和过渡动画
- **导航体验**: 直观的导航和状态指示
- **内容层次**: 清晰的信息架构

## 📦 安装与运行

### 环境要求
- Node.js 16+
- Yarn

### 安装依赖
```bash
yarn install
```

### 开发模式
```bash
yarn dev
```
访问 http://localhost:3000

### 构建生产版本
```bash
yarn build
```

### 预览生产版本
```bash
yarn preview
```

## 🎨 自定义配置

### Tailwind CSS 扩展
```javascript
// tailwind.config.js
theme: {
  extend: {
    animation: {
      'float': 'float 3s ease-in-out infinite',
      'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    backdropBlur: {
      xs: '2px',
    },
    spacing: {
      '128': '32rem',
    },
    boxShadow: {
      'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
      'glow-lg': '0 0 40px rgba(59, 130, 246, 0.2)',
    }
  }
}
```

### Framer Motion 配置
- **弹簧动画**: `type: "spring", stiffness: 100`
- **交错延迟**: `delay: index * 0.15`
- **布局动画**: `layoutId` 用于平滑过渡

## 🔧 组件架构

### Hero 组件
- 渐变背景和装饰元素
- 动态头像和状态指示器
- 社交链接和CTA按钮
- 滚动指示器

### Timeline 组件
- 响应式时间线布局
- 卡片式内容展示
- 动画节点和连接线
- 成就列表动画

### ProjectCard 组件
- 渐变项目头部
- 技术栈标签系统
- 状态徽章显示
- 悬停光晕效果

### TabBar 组件
- 毛玻璃导航栏
- 活跃状态动画
- 滚动响应效果
- 渐变背景切换

## 📊 性能优化

- **懒加载**: 图片和组件的懒加载
- **动画优化**: 使用transform和opacity
- **内存管理**: 合理的useEffect清理
- **包大小**: 按需引入组件和图标

## 🎯 未来规划

- [ ] 深色模式支持
- [ ] 国际化多语言
- [ ] 更多动画效果
- [ ] PWA支持
- [ ] 性能监控

---

⭐ 如果这个项目对您有帮助，请给个星标支持！

**设计升级完成** - 采用现代化设计趋势，提升用户体验和视觉效果。

## 🌟 项目特色

- **沉浸式动画体验**：镜头拉近、滚动触发动画、自动滚动浏览
- **现代化设计**：采用 Tailwind CSS 构建响应式界面
- **流畅交互**：基于 Framer Motion 的高性能动画效果
- **移动端优化**：完美适配手机、平板、桌面设备
- **底部导航**：固定底部 Tab Bar，选中态为粉色主题

## 🚀 技术栈

- **框架**：React 18 + Vite
- **样式**：Tailwind CSS
- **动画**：Framer Motion
- **路由**：React Router
- **图标**：React Icons
- **包管理**：Yarn

## 📱 功能模块

### 1. 首页 (/)
- **Hero Section**：全屏展示，蓝紫渐变背景，镜头拉近动画
- **教育经历**：时间线布局，左右交替显示，滚动触发动画
- **工作经历**：突出关键成果和职责，响应式时间线
- **项目成果**：卡片布局，悬停动画效果
- **自动滚动**：页面加载后每4秒自动滚动，用户操作时停止

### 2. 记录页 (/record)
- **履历时间线**：统一展示教育和工作经历
- **统计概览**：数字化展示个人成就
- **技能积累**：可视化技能熟练度

### 3. 统计页 (/stats)
- **能力分析**：技能熟练度进度条动画
- **成果统计**：项目数量、代码行数等数据可视化
- **项目状态**：进行中、已完成项目分布图

### 4. 我的页 (/profile)
- **个人信息**：头像、联系方式、个人简介
- **设置选项**：编辑资料、下载简历功能
- **数据统计**：个人能力数据汇总

## 🎨 设计规范

### 颜色主题
- **主色调**：蓝色 (#3B82F6) 到紫色 (#8B5CF6) 渐变
- **选中态**：粉色 (#EC4899)
- **成功色**：绿色 (#10B981)
- **警告色**：橙色 (#F59E0B)

### 响应式断点
- **手机**：375px+
- **平板**：768px+
- **桌面**：1200px+

### 动画规范
- **进入动画**：淡入 + 位移，持续时间 0.6s
- **悬停动画**：缩放 1.05，位移 -5px
- **滚动触发**：仅触发一次，延迟递增

## 📁 项目结构

```
wblu_produce/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/          # 组件
│   │   ├── TabBar.jsx      # 底部导航
│   │   ├── Hero.jsx        # 英雄区域
│   │   ├── Timeline.jsx    # 时间线
│   │   ├── ProjectCard.jsx # 项目卡片
│   │   └── Projects.jsx    # 项目展示
│   ├── pages/              # 页面
│   │   ├── Home.jsx        # 首页
│   │   ├── Record.jsx      # 记录页
│   │   ├── Stats.jsx       # 统计页
│   │   └── Profile.jsx     # 个人页
│   ├── data/               # 数据
│   │   └── resume.json     # 简历数据
│   ├── assets/             # 资源 (需要自行添加)
│   │   ├── avatar-example.jpg    # 个人头像
│   │   ├── project-example.png   # 项目截图
│   │   └── resume-example.pdf    # 简历PDF
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🛠 安装与运行

### 环境要求
- Node.js 16+
- Yarn

### 安装依赖
```bash
yarn install
```

### 开发模式
```bash
yarn dev
```
访问 http://localhost:3000

### 构建生产版本
```bash
yarn build
```

### 预览生产版本
```bash
yarn preview
```

## 📝 数据配置

### 修改个人信息
编辑 `src/data/resume.json` 文件：

```json
{
  "personal": {
    "name": "你的姓名",
    "title": "你的职位",
    "subtitle": "你的标签",
    "bio": "个人简介",
    "contact": {
      "email": "your.email@example.com",
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourusername",
      "wechat": "your_wechat_id"
    }
  }
}
```

### 添加教育经历
```json
{
  "education": [
    {
      "id": "edu1",
      "year": "2018-2022",
      "degree": "学位",
      "school": "学校名称",
      "major": "专业",
      "desc": "详细描述",
      "location": "地点",
      "achievements": ["成就1", "成就2"]
    }
  ]
}
```

### 添加工作经历
```json
{
  "work": [
    {
      "id": "work1",
      "year": "2022-至今",
      "company": "公司名称",
      "position": "职位",
      "desc": "工作描述",
      "location": "地点",
      "responsibilities": ["职责1", "职责2"],
      "achievements": ["成就1", "成就2"]
    }
  ]
}
```

### 添加项目
```json
{
  "projects": [
    {
      "id": "project1",
      "name": "项目名称",
      "desc": "项目描述",
      "tech": ["React", "Node.js"],
      "link": "https://project-demo.com",
      "github": "https://github.com/username/project",
      "features": ["功能1", "功能2"],
      "status": "已完成",
      "duration": "2022.01 - 2022.06"
    }
  ]
}
```

## 🎯 自定义配置

### 更换主题色
编辑 `tailwind.config.js`：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color'
      }
    }
  }
}
```

### 修改动画时长
编辑对应组件中的 Framer Motion 配置：

```javascript
transition={{ duration: 0.8 }} // 修改持续时间
```

### 调整自动滚动间隔
编辑 `src/pages/Home.jsx`：

```javascript
const interval = setInterval(() => {
  // ...
}, 5000) // 修改为5秒
```

## 📸 资源替换

### 个人头像
将您的头像文件重命名为 `avatar-example.jpg` 并放置在 `src/assets/` 目录下。

### 项目截图
将项目截图重命名为 `project-example.png` 并放置在 `src/assets/` 目录下。

### 简历PDF
将简历PDF重命名为 `resume-example.pdf` 并放置在 `src/assets/` 目录下。

## 🔧 高级功能

### 自定义动画
使用 Framer Motion 创建自定义动画：

```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  内容
</motion.div>
```

### 响应式设计
使用 Tailwind CSS 断点：

```javascript
<div className="text-base md:text-lg lg:text-xl">
  响应式文字
</div>
```

### 滚动触发动画
使用 whileInView 属性：

```javascript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  滚动时显示
</motion.div>
```

## 🐛 常见问题

### Q: 为什么动画不流畅？
A: 检查设备性能，可以通过减少动画复杂度或调整 `prefers-reduced-motion` 来优化。

### Q: 如何禁用自动滚动？
A: 在 `Home.jsx` 中设置 `useState(false)` 或添加用户偏好设置。

### Q: 移动端适配问题？
A: 检查 Tailwind CSS 断点使用是否正确，确保使用 `sm:` `md:` `lg:` 前缀。

### Q: 如何添加新页面？
A: 1. 在 `src/pages/` 创建新组件 2. 在 `App.jsx` 添加路由 3. 在 `TabBar.jsx` 添加导航

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 👨‍💻 作者

**AI进化论-花生**
- 创建时间：2024年
- 技术栈：React + Vite + Framer Motion + Tailwind CSS

---

⭐ 如果这个项目对您有帮助，请给个星标支持！
