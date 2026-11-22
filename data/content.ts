import type { ArticleItem, ToolItem } from '../types';

export interface SiteContent {
  articles: ArticleItem[];
  tools: ToolItem[];
  generatedAt: string;
}

export const siteContent: SiteContent = {
  "generatedAt": "2026-11-22T04:16:45.971Z",
  "articles": [
    {
      "title": "感谢 mygo，也感谢 mygo！！！",
      "href": "https://blog.ox0pine.cn/2026/11/11/mojian-five-days/",
      "date": "2026-11-11"
    },
    {
      "title": "我把 15 个 skill 装进了 OMP",
      "href": "https://blog.ox0pine.cn/2026/11/01/omp-skills/",
      "date": "2026-11-01"
    },
    {
      "title": "我是怎么把 GitHub Actions 用成个人主页内容编辑器的",
      "href": "https://blog.ox0pine.cn/2026/04/13/github-actions-content-editor/",
      "date": "2026-04-13"
    },
    {
      "title": "如何使用Cloudflare Tunnel",
      "href": "https://blog.ox0pine.cn/2026/01/24/cloudflare-tunnel-guide/",
      "date": "2026-01-24"
    },
    {
      "title": "2025年「且行且歌」",
      "href": "https://blog.ox0pine.cn/2025/12/31/2025-year-in-review/",
      "date": "2025-12-31"
    },
    {
      "title": "周记第三篇：考试？不要复习了哇",
      "href": "https://blog.ox0pine.cn/2025/12/14/weekly-03-exams/",
      "date": "2025-12-14"
    }
  ],
  "tools": [
    {
      "title": "mojian",
      "href": "https://github.com/ox0pine/mojian",
      "description": "A quiet text editor for plain files: native tabs, split panes, terminals, Git and SSH projects. Built with MyGo for macOS, Linux and Windows.",
      "updatedAt": "2026-11-22"
    },
    {
      "title": "ox0pine",
      "href": "https://github.com/ox0pine/ox0pine",
      "description": "最近更新的公开仓库。",
      "updatedAt": "2026-11-12"
    },
    {
      "title": "ox0pine.github.io",
      "href": "https://github.com/ox0pine/ox0pine.github.io",
      "description": "最近更新的公开仓库。",
      "updatedAt": "2026-11-12"
    },
    {
      "title": "ox0pine.cn",
      "href": "https://github.com/ox0pine/ox0pine.cn",
      "description": "一个使用 React、Vite 和 Base UI 搭建的个人主页，展示最近文章与工具。「没错，正是这个页面，Github Action每天都会抓取最新的文章和仓库。」",
      "updatedAt": "2026-11-12"
    },
    {
      "title": "RepoPilot",
      "href": "https://github.com/ox0pine/RepoPilot",
      "description": "🤖 自托管 AI 编码工作台，将 GitHub Issue 转化为可审阅的代码变更，支持人工审批、Docker 隔离执行与补丁交付。 | 🤖 A self-hosted AI coding workbench that turns GitHub issues into reviewable code changes, with human approval, Docker-isolated execution, and patch delivery.",
      "updatedAt": "2026-11-03"
    }
  ]
};
