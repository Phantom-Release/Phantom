# Phantom 页面与资料重构

本轮按资料查询和操作指南组织内容，面向需要核对套餐、配置客户端和排障的读者。

## 设计取舍

- Raindrop 参考：[DNS.SB](https://dns.sb/features/why-privacy-is-important/)，用户备注“简练而精美的文档风格”；[Tavily Agents](https://docs.tavily.com/agents)，用户备注认可其文档组织。2026-11-04 已在 Edge 查看，借鉴可读行长、章节导航、直接任务入口；不复制其素材和品牌。
- 配色：正文 #202B38、次级文字 #5C6A7B、白底 #FFFFFF、面板 #F5F8FC、蓝色操作 #355DC5、细线 #DCE3EC。证据状态另用带文字的绿/琥珀/灰标签，不仅依赖颜色。
- 字体：Segoe UI Variable Display 用于标题，Segoe UI Variable Text 用于正文，Cascadia Code 用于日期与标识；均设系统回退，不加载远程字体。
- 桌面为侧栏、正文与页内导航；窄屏侧栏变为横向章节导航。保留表格的局部横向滚动。
- 页面辨识点为可追溯的证据记录：状态、日期、展开历史和来源链接。删去大价格海报与装饰性图形，优先阅读和比较。

## 方法与边界

通过 Exa 查到并参考 [GOV.UK 用户需求与内容设计](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/understand-content-design/)、[W3C Data on the Web Best Practices](https://www.w3.org/TR/dwbp/) 的来源、质量和版本历史建议，以及 [Martin Fowler 的渐进替换方法](https://www.martinfowler.com/bliki/StranglerFigApplication.html)。本项目采用适合小型静态站的部分原则，不宣称实现完整 PROV-O、正式置信评估或这些机构的认证。

保留既有地址和静态发布方式，先分离事实数据，再生成记录页与共享导航。JSON 是公开事实记录库，由维护者追加；不是实时采集系统，也没有自动登录任务。完整正文可在禁用 JavaScript 时阅读，JavaScript 仅增强筛选和复核提醒。
