# Claude Code 教程

从入门到精通，全面掌握 Claude Code AI 编程助手。

**[cccode.dev](https://cccode.dev)**

## 内容概览

| 板块 | 课程数 | 内容 |
|------|--------|------|
| 入门篇 | 5 | 安装配置、第一次对话、基础命令、订阅方案、5 分钟快速入门 |
| 进阶篇 | 6 | CLAUDE.md、Plan Mode、上下文管理、Hooks、Sub-agent |
| 高级篇 | 7 | MCP Server、插件开发、多 Agent 协作、CI/CD、脚本自动化 |
| 实战篇 | 5 | Web 应用、CLI 工具、API 服务、遗留代码重构、复杂 Bug 调试 |
| 多平台 | 5 | 终端、VS Code、JetBrains、Web 版、Slack |
| 最佳实践 | 4 | Prompt 技巧、上下文优化、Token 管理、何时清除对话 |
| 工具对比 | 3 | vs GitHub Copilot、vs Cursor、综合对比 |

另有 MCP 插件目录、Skill 命令目录、学习进度追踪、社区交流等功能页面，共计 **50 个页面**。

## 技术栈

- [Astro 5](https://astro.build/) — 静态站点生成
- [Tailwind CSS v4](https://tailwindcss.com/) — 样式
- [MDX](https://mdxjs.com/) — 内容编写
- [Expressive Code](https://expressive-code.com/) — 代码高亮
- [Pagefind](https://pagefind.app/) — 全站搜索
- [Giscus](https://giscus.app/) — 评论系统

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
src/
├── content/          # 35 篇 MDX 教程（7 个分类）
├── components/       # Astro 组件
├── layouts/          # 页面布局
├── pages/            # 路由页面
├── lib/              # 工具函数、导航配置、常量
└── styles/           # 全局样式
public/
├── robots.txt        # 搜索引擎 + AI 爬虫配置
├── llms.txt          # AI 检索导航文件
└── favicon.svg       # 网站图标
```

## SEO & AI 检索

- Sitemap 自动生成（@astrojs/sitemap）
- JSON-LD 结构化数据（WebSite / Article / BreadcrumbList）
- Open Graph + Twitter Card
- hreflang 多语言标签（zh / en）
- robots.txt 配置 11 个 AI 爬虫（GPTBot、ClaudeBot、PerplexityBot 等）
- llms.txt AI 导航文件

## 许可

内容使用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 许可。
