export type SectionGroup = 'learning-path' | 'topic-reference';

export interface SectionMeta {
  id: string;
  title: string;
  titleShort: string;
  description: string;
  icon: string;
  collectionName: string;
  urlPrefix: string;
  order: number;
  group: SectionGroup;
}

export const sections: SectionMeta[] = [
  {
    id: 'beginner',
    title: '入门篇',
    titleShort: '入门',
    description: '从安装到第一次对话，快速上手 Claude Code',
    icon: '🚀',
    collectionName: 'beginner',
    urlPrefix: '/beginner',
    order: 1,
    group: 'learning-path',
  },
  {
    id: 'intermediate',
    title: '进阶篇',
    titleShort: '进阶',
    description: '掌握 CLAUDE.md、Plan Mode、Hooks 等核心功能',
    icon: '📈',
    collectionName: 'intermediate',
    urlPrefix: '/intermediate',
    order: 2,
    group: 'learning-path',
  },
  {
    id: 'advanced',
    title: '高级篇',
    titleShort: '高级',
    description: 'MCP Server、插件开发、多 Agent 协作、CI/CD 集成',
    icon: '⚡',
    collectionName: 'advanced',
    urlPrefix: '/advanced',
    order: 3,
    group: 'learning-path',
  },
  {
    id: 'practical',
    title: '实战篇',
    titleShort: '实战',
    description: '完整项目实战，从零构建到重构调试',
    icon: '🛠️',
    collectionName: 'practical',
    urlPrefix: '/practical',
    order: 4,
    group: 'learning-path',
  },
  {
    id: 'platforms',
    title: '多平台使用',
    titleShort: '平台',
    description: '终端、VS Code、JetBrains、Web 版、Slack 全覆盖',
    icon: '💻',
    collectionName: 'platforms',
    urlPrefix: '/platforms',
    order: 5,
    group: 'topic-reference',
  },
  {
    id: 'best-practices',
    title: '最佳实践',
    titleShort: '实践',
    description: 'Prompt 技巧、上下文优化、Token 管理',
    icon: '✨',
    collectionName: 'best-practices',
    urlPrefix: '/best-practices',
    order: 6,
    group: 'topic-reference',
  },
  {
    id: 'comparisons',
    title: '工具对比',
    titleShort: '对比',
    description: '与 GitHub Copilot、Cursor 等工具的客观对比',
    icon: '⚖️',
    collectionName: 'comparisons',
    urlPrefix: '/comparisons',
    order: 7,
    group: 'topic-reference',
  },
];

// Standalone pages (non-collection pages)
export type StandaloneGroup = 'reference-catalog' | 'learning-tool' | 'community';

export interface StandalonePage {
  title: string;
  icon: string;
  href: string;
  group: StandaloneGroup;
  external?: boolean;
}

export const standalonePages: StandalonePage[] = [
  { title: 'MCP 插件目录', icon: '🔌', href: '/mcp-directory', group: 'reference-catalog' },
  { title: 'Skill 命令目录', icon: '⚡', href: '/skill-directory', group: 'reference-catalog' },
  { title: '学习进度', icon: '📊', href: '/progress', group: 'learning-tool' },
  { title: '社区交流', icon: '👥', href: '/community', group: 'community' },
  { title: '资源合集', icon: '📚', href: '/resources', group: 'community' },
  { title: '更新日志', icon: '📋', href: '/changelog', group: 'community' },
];

// Pre-filtered helpers
export const learningPathSections = sections.filter((s) => s.group === 'learning-path');
export const topicReferenceSections = sections.filter((s) => s.group === 'topic-reference');
export const referenceCatalogPages = standalonePages.filter((p) => p.group === 'reference-catalog');
export const communityPages = standalonePages.filter((p) => p.group === 'community');
export const learningToolPages = standalonePages.filter((p) => p.group === 'learning-tool');

export function getSectionByCollectionName(name: string): SectionMeta | undefined {
  return sections.find((s) => s.collectionName === name);
}
