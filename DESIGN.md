# Phantom 页面与资料重构

网页首要目标是 AFF 注册获客。首页面向从搜索或推荐入口进入的新访客，先回答价格与额度、提供邀请码注册，再解决选套餐和配置客户端的问题。资料和操作文档承担转化支持。

## 设计取舍

- Raindrop 参考：[DNS.SB](https://dns.sb/features/why-privacy-is-important/)，用户备注“简练而精美的文档风格”；[Tavily Agents](https://docs.tavily.com/agents)，用户备注认可其文档组织。2026-11-04 已在 Edge 查看，借鉴可读行长、章节导航、直接任务入口；不复制其素材和品牌。
- 配色：正文 #202B38、次级文字 #5C6A7B、白底 #FFFFFF、面板 #F5F8FC、蓝色操作 #355DC5、细线 #DCE3EC。证据状态另用带文字的绿/琥珀/灰标签，不仅依赖颜色。
- 字体：Segoe UI Variable Display 用于标题，Segoe UI Variable Text 用于正文，Cascadia Code 用于日期与标识；均设系统回退，不加载远程字体。
- 首页采用营销落地页结构：价格主张、邀请码注册、三档套餐卡片、三步使用说明、常见问题、页尾注册。文档内页保留侧栏和局部表格滚动。
- 首页恢复醒目的 1 元/100G 展示。来源和权益限定靠近对应内容，用低视觉权重呈现；完整核查记录放在资料页。首屏不使用证据库侧栏或核查提示条。所有主导航补回 AFF 注册按钮。
- 推荐入口统一沿用现有首页与 README 的 vyMwqgOF，不创建新的推荐归属。不伪造限时优惠、速度、稳定性、成功率或用户背书。
- data-aff 仅为入口位置标记，未接入统计上报。入口和布局检查不能证明实际注册或佣金提升，后续需要在有数据时衡量。

## 方法与边界

通过 Exa 查到并参考 [GOV.UK 用户需求与内容设计](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/understand-content-design/)、[W3C Data on the Web Best Practices](https://www.w3.org/TR/dwbp/) 的来源、质量和版本历史建议，以及 [Martin Fowler 的渐进替换方法](https://www.martinfowler.com/bliki/StranglerFigApplication.html)。本项目采用适合小型静态站的部分原则，不宣称实现完整 PROV-O、正式置信评估或这些机构的认证。

保留既有地址和静态发布方式，先分离事实数据，再生成记录页与共享导航。JSON 是公开事实记录库，由维护者追加；不是实时采集系统，也没有自动登录任务。完整正文可在禁用 JavaScript 时阅读，JavaScript 仅增强筛选和复核提醒。
