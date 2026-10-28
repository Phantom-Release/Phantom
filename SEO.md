# 网站维护与搜索可见性

本轮更新：2026-10-28。保留现有五个页面地址，新增 `about.html` 说明来源、维护方式和返佣关系。

## 已落实

- 首页提供任务入口与概要；套餐、节点、客户端、排障各自回答独立问题。
- 六页使用独立标题、摘要、绝对 canonical 和一致的内部链接；首页统一链接到目录地址。
- WebSite、WebPage 和面包屑 JSON-LD 与可见内容一致，不添加未经证实的评分、产品权益或测速。
- 手机导航始终可见；表格有标题和列标题；支持键盘焦点、跳过导航和原生问答展开。
- 价格注明核验日期和官方来源；历史节点快照不作为当前在线率或独立服务器数量。
- sitemap 仅列规范页面，lastmod 仅在正文或结构有实质变化时更新。

## 发布后维护

1. 用 GitHub Pages 部署记录确认对应提交发布成功，并访问页面检查内容和导航。
2. 如已验证 Search Console 资源，可提交 `https://phantom-release.github.io/Phantom/sitemap.xml`，使用网址检查查看实际抓取与索引。代码部署成功不代表已被收录。
3. 本项目位于 `/Phantom/`。爬虫读取的是域名根目录 `/robots.txt`，项目内 `/Phantom/robots.txt` 不能控制整个域名。若需修改爬虫策略，应在实际提供域名根目录的站点配置；本轮未修改该站点。
4. OAI-SearchBot 与 GPTBot 用途和控制独立。不要把允许搜索抓取等同于允许训练；也不要用 robots.txt 代替敏感信息保护。
5. canonical 是规范网址信号，不能保证搜索引擎选择；本轮未改变旧 NanoCloud 仓库的重定向或索引策略。
6. 价格、客户端下载入口和权益变化时，同步更新 README、对应网页及来源记录。不要为刷新日期而改日期。

## 本轮阅读的官方文档

- [OpenAI 前端提示指南](https://developers.openai.com/api/docs/guides/frontend-prompt)：明确用户任务，遵循现有视觉风格。
- [ChatGPT Sites 创建网站](https://learn.chatgpt.com/docs/sites/creating-a-site)：结合资料构建、审阅和迭代；本项目继续通过 GitHub Pages 发布。
- [Google SEO 入门指南](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)：清晰结构、描述性链接与独特内容。
- [Google 生成式 AI 内容指南](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)：核验事实并增加实际价值。
- [Google AI 功能与网站](https://developers.google.com/search/docs/appearance/ai-features)：遵循现有 SEO 基础，不需要特殊 AI 标记。
- [规范网址](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)与[站点地图](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)：规范链接保持一致，更新时间真实。
- [robots.txt 创建规则](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt)与[OpenAI 爬虫说明](https://developers.openai.com/api/docs/bots)：区分根目录策略和不同爬虫用途。

上述改进帮助读者理解页面并让搜索引擎读取内容，不保证排名、收录或 AI 引用。

## Sites 改进版同步到 GitHub Pages

2026-10-28：同步 Sites 版本的首页布局、月流量筛选、平台教程切换及按现象显示的排障指引，并应用 WRITING.md 中的任务型文档写作约定。保留六个页面地址。

发布时将页面 canonical、Open Graph、JSON-LD 与 sitemap 统一为 `https://phantom-release.github.io/Phantom/`。脚本和样式使用相对路径，适用于项目子目录。项目的 robots.txt 仍是参考文件，实际爬虫策略取决于域名根目录文件。

Sites 托管身份、访问配置和本地发布归档不属于公开站点源码，不随本次同步提交。GitHub Pages 的发布结果与搜索收录需要分别核查。
