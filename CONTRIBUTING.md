# Phantom 内容更新实践

仓库同时维护 GitHub README 和 GitHub Pages。两者面向不同阅读场景，
但涉及产品信息、教程、排障、安全结论、网络观察或外部链接时，
必须在同一个 Pull Request 中同步检查。

## 修改前

1. 明确事实来源和核验日期。产品操作优先引用 Phantom 官方教程，Mihomo 配置优先核对当前官方文档。
2. 区分直接测量、部署材料、运营者转述和用户反馈，避免把局部现象写成全国结论。
3. 不提交订阅 URL、UUID、密码、token、浏览器配置或本地测试产物。

## 同步范围

- `README.md`：GitHub 仓库中的完整说明和证据边界。
- `index.html`：Pages 的可浏览版本，应保留与 README 一致的关键结论、操作入口和来源。
- `assets/site.css`、`assets/site.js`：只在页面布局或交互确实需要时修改。

只改 README 不代表 Pages 正文已更新。只改 Pages 也会让 GitHub 读者看到过时内容。

## 提交与部署

1. 从最新 `main` 创建 `codex/<description>` 分支。
2. 只暂存本次相关文件，运行 `git diff --check` 并检查完整差异。
3. 对 Pages 变更执行 HTML 校验，并在桌面和移动视口检查正文、折叠区、表格和 Mermaid。
4. 推送分支并通过 Pull Request 合并，不直接向 `main` 堆叠未经审阅的内容修改。
5. 合并后确认 GitHub Pages Actions 对应的是新的 `main` 提交且结论为 `success`。
6. 打开线上页面验证新增正文标记、链接和交互。删除公开文件时，还要确认原 URL 返回 `404`。

Actions 构建成功只表示当前文件已发布，不能证明 README 的变化已经同步进 `index.html`。部署完成以线上内容检查为准。

## 追加事实记录

1. 编辑 data/observations.json。新事实使用稳定 id；后续观察追加到 observations，保留旧条目。错误记录也不覆盖，以新观察说明更正并引用原条目 id。
2. 记录日期、来源 id、方法、证据边界；待核查和用户确认状态必须写 nextCheck。日期使用 Australia/Sydney，无法确定事实生效时间时不推定。
3. observed 仅表示读到官网页面内容，不等于产品效果已实测。资料缺失不能写成零值；历史节点统计不冒充实时值。reviewAfterDays 是维护建议，新鲜度与证据类型分开。
4. 使用 pnpm run build（执行 Bun）生成页面，再运行 pnpm run check、pnpm dlx html-validate '*.html'。build 已生成并提交静态文件，GitHub Pages 无需 Node 运行时。首次使用先安装 Bun 与 pnpm。
5. 同步检查 README 与相应产品页。当前首页套餐表和记录页从 JSON 生成，其余操作正文仍为人工维护；修改产品事实后必须复核相关页，不能假定自动同步全部正文。
6. 检查历史记录未修改、页面无横向溢出、筛选与无结果提示、禁用 JS 正文、桌面和移动布局。通过 PR 发布并确认 Pages 与线上内容。

本库不会自动采集新事实。复核提醒不代表已完成复核，不新建后台任务。
