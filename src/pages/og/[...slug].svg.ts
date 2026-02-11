import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { sections } from '@lib/navigation';

// Escape XML special characters
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Truncate text to fit
function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max - 1) + '…' : str;
}

function generateSvg(title: string, description: string, section?: string, icon?: string): string {
  const safeTitle = escapeXml(truncate(title, 60));
  const safeDesc = escapeXml(truncate(description, 120));
  const sectionLabel = section ? escapeXml(section) : '';
  const sectionIcon = icon ? escapeXml(icon) : '';

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="iconBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4f46e5;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Grid pattern -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" stroke-width="0.5" opacity="0.3" />
  </pattern>
  <rect width="1200" height="630" fill="url(#grid)" />

  <!-- Decorative circles -->
  <circle cx="1050" cy="100" r="200" fill="#6366f1" opacity="0.08" />
  <circle cx="150" cy="530" r="150" fill="#8b5cf6" opacity="0.06" />

  <!-- Accent bar -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)" />

  <!-- Logo area -->
  <rect x="70" y="60" width="44" height="44" rx="10" fill="url(#iconBg)" />
  <text x="92" y="89" font-family="monospace" font-size="22" font-weight="bold" fill="white" text-anchor="middle">&lt;/&gt;</text>
  <text x="128" y="90" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="white">Claude Code 教程</text>

  ${sectionLabel ? `
  <!-- Section badge -->
  <rect x="70" y="160" width="${sectionLabel.length * 14 + (sectionIcon ? 50 : 30)}" height="36" rx="18" fill="#6366f1" opacity="0.15" />
  <text x="${sectionIcon ? '100' : '85'}" y="184" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#a5b4fc">${sectionIcon ? sectionIcon + ' ' : ''}${sectionLabel}</text>
  ` : ''}

  <!-- Title -->
  <text x="70" y="${sectionLabel ? '270' : '230'}" font-family="system-ui, -apple-system, 'Noto Sans SC', sans-serif" font-size="48" font-weight="800" fill="white" letter-spacing="-0.02em">
    ${safeTitle}
  </text>

  <!-- Description -->
  <text x="70" y="${sectionLabel ? '330' : '290'}" font-family="system-ui, -apple-system, 'Noto Sans SC', sans-serif" font-size="22" fill="#94a3b8" letter-spacing="0.01em">
    ${safeDesc}
  </text>

  <!-- Bottom bar -->
  <line x1="70" y1="540" x2="1130" y2="540" stroke="#334155" stroke-width="1" />
  <text x="70" y="575" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="#64748b">从入门到精通 · 全面掌握 AI 编程助手</text>
  <text x="1130" y="575" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="#64748b" text-anchor="end">cc-course.dev</text>
</svg>`;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { slug: string }; props: { title: string; description: string; section?: string; icon?: string } }[] = [];

  // Homepage
  paths.push({
    params: { slug: 'index' },
    props: {
      title: 'Claude Code 教程',
      description: '从入门到精通，全面掌握 Claude Code AI 编程助手',
    },
  });

  // Section index pages + individual lessons
  for (const sec of sections) {
    // Section index
    paths.push({
      params: { slug: sec.collectionName },
      props: {
        title: sec.title,
        description: sec.description,
        section: sec.title,
        icon: sec.icon,
      },
    });

    // Lessons
    const lessons = await getCollection(sec.collectionName as any, ({ data }: any) => !data.draft);
    for (const lesson of lessons) {
      paths.push({
        params: { slug: `${sec.collectionName}/${lesson.id}` },
        props: {
          title: lesson.data.title,
          description: (lesson.data as any).description || '',
          section: sec.title,
          icon: sec.icon,
        },
      });
    }
  }

  // Static pages
  const staticPages = [
    { slug: 'community', title: '社区', description: '加入 Claude Code 学习社区' },
    { slug: 'resources', title: '资源合集', description: '精选 Claude Code 学习资源' },
    { slug: 'changelog', title: '更新日志', description: '网站更新记录' },
    { slug: 'mcp-directory', title: 'MCP 插件目录', description: '发现并使用 MCP Server 插件' },
    { slug: 'skill-directory', title: 'Skill 目录', description: '内置命令与社区 Skill 完整索引' },
    { slug: 'progress', title: '学习进度', description: '追踪你的 Claude Code 学习进度' },
  ];

  for (const page of staticPages) {
    paths.push({
      params: { slug: page.slug },
      props: { title: page.title, description: page.description },
    });
  }

  return paths;
};

export const GET: APIRoute = ({ props }) => {
  const { title, description, section, icon } = props as { title: string; description: string; section?: string; icon?: string };
  const svg = generateSvg(title, description, section, icon);

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
