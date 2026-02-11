export type Locale = 'zh-cn' | 'en';

export const defaultLocale: Locale = 'zh-cn';

export const localeNames: Record<Locale, string> = {
  'zh-cn': '中文',
  en: 'English',
};

export const translations = {
  'zh-cn': {
    'site.title': 'Claude Code 教程',
    'site.description': '从入门到精通，全面掌握 Claude Code AI 编程助手',
    'nav.home': '首页',
    'nav.more': '更多',
    'nav.topics': '专题内容',
    'nav.community': '社区',
    'hero.badge': 'Anthropic 官方 AI 编程助手',
    'hero.title.prefix': '掌握 ',
    'hero.title.highlight': 'Claude Code',
    'hero.description': '从安装到高级应用的完整教程。学习使用 Anthropic 官方 AI 编程助手，提升你的开发效率。',
    'hero.cta.start': '开始学习',
    'hero.cta.projects': '查看实战项目',
    'stats.sections': '学习板块',
    'stats.lessons': '篇教程',
    'stats.free': '免费开放',
    'section.learning': '学习路径',
    'section.learning.desc': '按照推荐顺序循序渐进，从基础到高级',
    'section.topics': '专题内容',
    'section.topics.desc': '深入了解特定主题，拓展你的使用技巧',
    'cta.title': '加入社区，一起学习',
    'cta.description': '参与讨论、贡献内容、获取帮助。与其他 Claude Code 开发者共同成长。',
    'cta.community': '加入社区',
    'cta.resources': '资源合集',
    'cta.changelog': '更新日志',
  },
  en: {
    'site.title': 'Claude Code Tutorial',
    'site.description': 'Master Claude Code AI programming assistant from beginner to expert',
    'nav.home': 'Home',
    'nav.more': 'More',
    'nav.topics': 'Topics',
    'nav.community': 'Community',
    'hero.badge': "Anthropic's Official AI Coding Assistant",
    'hero.title.prefix': 'Master ',
    'hero.title.highlight': 'Claude Code',
    'hero.description': 'A complete tutorial from installation to advanced usage. Learn to use Anthropic\'s official AI coding assistant to boost your development productivity.',
    'hero.cta.start': 'Get Started',
    'hero.cta.projects': 'View Projects',
    'stats.sections': 'Sections',
    'stats.lessons': 'Lessons',
    'stats.free': 'Free & Open',
    'section.learning': 'Learning Path',
    'section.learning.desc': 'Follow the recommended order, from basics to advanced',
    'section.topics': 'Special Topics',
    'section.topics.desc': 'Deep dive into specific topics to expand your skills',
    'cta.title': 'Join the Community',
    'cta.description': 'Participate in discussions, contribute content, and get help. Grow together with other Claude Code developers.',
    'cta.community': 'Community',
    'cta.resources': 'Resources',
    'cta.changelog': 'Changelog',
  },
} as const;

export function t(key: keyof (typeof translations)['zh-cn'], locale: Locale = defaultLocale): string {
  return translations[locale]?.[key] || translations[defaultLocale][key] || key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'zh-cn';
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}
