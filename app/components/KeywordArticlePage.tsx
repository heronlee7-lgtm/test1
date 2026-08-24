/* eslint-disable @next/next/no-html-link-for-pages -- Native navigation avoids a vinext client-router crash in preview and production. */
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { keywordArticles, keywordEntry, type KeywordArticleKey } from "./keywordArticles";

export function KeywordArticlePage({ articleKey }: { articleKey: KeywordArticleKey }) {
  const article = keywordArticles[articleKey];
  const entry = keywordEntry(articleKey);
  return <><SiteHeader locale="en" route="guides"/><main id="main-content" className="keyword-page shell-wide" lang="zh-CN">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><a href="/">Machine Party</a></li><li><a href="/guides/">Guides</a></li><li>{entry.keyword}</li></ol></nav>
    <header className="keyword-page__header"><p>Verified keyword guide · 核对日期 2026-08-23</p><h1>{entry.title}</h1><div className="keyword-page__term">目标关键词：<strong>{entry.keyword}</strong></div></header>
    <article className="keyword-page__article">
      <section className="keyword-answer" aria-label="直接回答"><span>直接回答</span><p>{article.answer}</p></section>
      {article.sections.map(([title, paragraphs]) => <section key={title}><h2>{title}</h2>{paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</section>)}
      <section className="keyword-sources"><h2>资料来源</h2><p>以下链接是本文使用的官方来源、可靠实机或已明确标注的社区资料。动态信息在再次发布前仍需重新核对。</p><ul>{article.sources.map(([label, href]) => <li key={href}><a href={href}>{label} ↗</a></li>)}</ul></section>
    </article>
  </main><SiteFooter locale="en"/></>;
}
