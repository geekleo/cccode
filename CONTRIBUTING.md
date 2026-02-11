# 贡献指南

感谢你对 Claude Code 教程的关注！我们欢迎所有形式的贡献。

## 如何贡献

### 报告问题

- 内容错误或过时信息 → 提交 [Bug Report](.github/ISSUE_TEMPLATE/bug_report.yml)
- 新教程或功能建议 → 提交 [Feature Request](.github/ISSUE_TEMPLATE/feature_request.yml)

### 提交内容

1. **Fork** 本仓库
2. 创建你的分支：`git checkout -b feature/your-feature`
3. 提交改动：`git commit -m 'Add: 你的改动描述'`
4. 推送分支：`git push origin feature/your-feature`
5. 创建 **Pull Request**

### 内容规范

- 教程使用 MDX 格式，存放在 `src/content/` 目录
- 每篇教程需包含 frontmatter：`title`、`description`、`order`、`section`
- 使用 `<CalloutBox>` 组件添加提示/警告信息
- 代码示例需可运行，避免伪代码
- 中文排版遵循 [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines)

### 目录结构

```
src/content/
├── beginner/       # 入门篇
├── intermediate/   # 进阶篇
├── advanced/       # 高级篇
├── practical/      # 实战篇
├── platforms/      # 多平台使用
├── best-practices/ # 最佳实践
└── comparisons/    # 工具对比
```

### Frontmatter 模板

```yaml
---
title: "教程标题"
description: "简短描述"
order: 1
section: "beginner"
difficulty: "beginner"
readingTime: 10
tags: ["tag1", "tag2"]
pubDate: 2025-01-01
---
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview
```

## 行为准则

- 尊重每一位贡献者
- 保持友善和建设性的讨论
- 聚焦技术内容，避免无关争论
