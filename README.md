# Phantom 使用指南：套餐、注册与客户端

Phantom 代理机场提供多地区代理订阅。本页整理注册入口、试用节点、客户端配置和常见问题，帮助核对信息并选择适合自己的配置方式；试用条件以官方平台为准。

[在线指南](https://phantom-release.github.io/Phantom/) · [套餐](https://phantom-release.github.io/Phantom/plans.html) · [客户端](https://phantom-release.github.io/Phantom/windows-client.html) · [资料来源与返佣说明](https://phantom-release.github.io/Phantom/about.html)

本指南由 Phantom-Release 维护，使用 AI 辅助整理并按已访问的官方页面核对套餐与客户端目录。账户、订阅、购买和售后由官方平台处理。

## 注册与使用入口

**[注册 Phantom →](https://pin.dianping.men/auth/register?code=vyMwqgOF)** · **[打开控制台 →](https://pin.dianping.men/app/dashboard)**

| 入口 | 地址 | 用途 |
| --- | --- | --- |
| AFF 注册 | [使用邀请码注册](https://pin.dianping.men/auth/register?code=vyMwqgOF) | 邀请码 `vyMwqgOF` |
| 普通注册 | [直接注册](https://pin.dianping.men/auth/register) | 不使用邀请码 |
| 控制台 | [Phantom Dashboard](https://pin.dianping.men/app/dashboard) | 登录后查看套餐、订阅和账户信息 |

通过 AFF 入口注册，推荐者可能获得平台返佣。试用额度、期限和套餐价格请在登录后的控制台查看。

## Phantom 试用节点

本次未重新获取原始订阅。以下统计不代表当前在线节点数、独立服务器数量或测速结果，当前试用资格、流量和时长请在控制台核对。

沿用原仓库整理的试用配置快照，包含 **50 条节点记录、4 种协议、8 类地区标签**。

| 协议 | 节点记录 | 配置特征 |
| --- | ---: | --- |
| TUIC | 24 | ALPN 为 h3，使用 BBR，未跳过证书验证 |
| Hysteria2 | 3 | 配置有 50 或 200 的上、下行参数，未跳过证书验证 |
| Mieru | 7 | TCP 传输，低级别复用 |
| VLESS | 16 | WebSocket + TLS |

Hysteria2 的上、下行参数是客户端配置值，不是实测速率。

| 地区标签 | 节点记录 |
| --- | ---: |
| 美国 | 12 |
| 日本 | 11 |
| 新加坡 | 7 |
| 香港 | 7 |
| 马来西亚 | 4 |
| 台湾 | 4 |
| 韩国 | 3 |
| 英国 | 2 |
| **合计** | **50** |

地区按配置中的名称与旗帜归类；这里统计的是订阅条目，不是独立服务器或出口 IP 数量。水瓶座“教育”节点按旗帜计入马来西亚与台湾。

### 节点名称怎么选

- **通用：** 可以作为首次连接的起点，先打开自己常用的网站。
- **流量：** 这份配置中的“流量”节点使用 IPv6 地址或带 v6 标记的域名；使用前检查本机网络是否支持 IPv6。
- **下载：** 本次配置中有 2 条日本 Hysteria2 下载节点。
- **教育：** 本次配置中有 2 条水瓶座 TUIC 节点。
- **M：** 对应 Mieru 节点，需要客户端内核支持。

## 客户端与快速开始

官方使用文档提供 Phantom 安卓版、Mac 版和 Win 版教程；iOS 栏目列有 Nextin、Clash Lite 和 ClashMi，官网将前两项标为推荐。请按自己的平台阅读对应教程。核验日期：2026 年 10 月 28 日。

1. 注册并登录 [Phantom 控制台](https://pin.dianping.men/app/dashboard)，确认当前套餐和试用信息。
2. 使用控制台提供的客户端下载或订阅导入方式。
3. 使用自己的 Clash/Mihomo 类客户端时，先更新到支持订阅内协议的版本；Mieru 是否可用要检查具体内核版本。
4. 更新订阅后先连接一个“通用”节点，再打开常用网页。
5. 在自己经常使用的网络和时段测试 AI、视频、下载和登录体验。

| 需求 | 建议检查 |
| --- | --- |
| 日常网页、AI 对话 | 连续使用常用网站，观察连接中断、登录和地区识别 |
| 视频 | 连续播放并拖动进度条，观察缓冲 |
| 下载 | 下载实际需要的文件，观察持续速度 |
| 手机流量 / 家庭宽带 | 分别测试同一节点 |
| IPv6 节点 | 用 [test-IPv6](https://test-ipv6.com/) 检查本机网络 |
| 出口与 DNS | 用 [IPLeak](https://ipleak.net/) 查看实际出口和 DNS |

## 套餐与购买

核验日期：2026 年 10 月 28 日。来源：[Phantom 官方购买套餐页](https://pin.dianping.men/app/plan)（需登录）。

| 套餐 | 月付 | 流量 |
| --- | ---: | ---: |
| 天蝎座 | ¥1 | 100G |
| 水瓶座 | ¥10 | 300G |
| 双子座 | ¥20 | 650G |

官网列表将天蝎座、水瓶座的“带宽”分别标为 `100G`、`300G`，双子座标为“无限制”；前两项单位有歧义，不能据此换算 Mbps。设备数、其他付款周期、退款和试用规则需在详情及使用文档核对，价格以购买时页面为准。

官方入口：[使用文档](https://pin.dianping.men/app/knowledge) · [Telegram 机器人 @phanAir_bot](https://t.me/phanAir_bot)。


套餐价格、月流量、设备数和购买周期在 [Phantom 控制台](https://pin.dianping.men/app/dashboard)中查看。如官方提供试用，可先验证网络适配，再按月流量和设备需求选择。

本介绍沿用 [NanoCloud 指南](https://github.com/NanoCloud-Release/NanoCloud)的“注册—节点—客户端—测试—排障”结构；Phantom 的套餐、优惠、退款、续费和客户端规则需分别核对。

## 常见问题

| 现象 | 排查顺序 |
| --- | --- |
| 节点全部超时 | 确认套餐有效，更新订阅，再换网络测试 |
| “流量”节点超时，“通用”可用 | 检查本机、路由器和运营商的 IPv6 支持 |
| 导入后缺少节点或提示未知协议 | 更新客户端与内核，检查是否支持 Mieru、TUIC、Hysteria2、VLESS |
| 浏览器能用，其他应用不能用 | 检查应用是否遵循系统代理；按客户端说明使用 TUN |
| 某个网站打不开 | 换节点后复测，检查规则是否让该网站经过代理 |
| 高峰期卡顿 | 在同一网络换地区或协议，对比持续使用体验 |

## 配置与传输安全

本次配置中 TUIC 和 Hysteria2 均明确设置 `skip-cert-verify: false`，VLESS 均启用 TLS。代理会转发你的流量，HTTPS 负责加密浏览器与目标网站之间的内容；服务端仍可能看到目标地址、连接时间和流量大小。

订阅链接、节点密码、UUID 和账户信息应自行保管，不要放进公开仓库。

## 来源与更新

- 节点统计：沿用原仓库的 Phantom 试用配置快照，原整理日期 **2026 年 10 月 28 日**。
- 注册入口：NanoCloud 现有介绍中的 Phantom 推荐入口。
- [Phantom 控制台](https://pin.dianping.men/app/dashboard)。
- 本仓库仅发布节点汇总和使用指南，不包含原始订阅或连接凭据。

网站结构、搜索可见性和后续核查说明见 [SEO.md](SEO.md)。
