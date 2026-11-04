# Phantom 布局与内容原则

主要目标是 AFF 注册获客。首页先展示 1 元/100G 卖点和注册入口，接着说明服务、套餐、设备和常见问题。资料记录继续作为信任支撑。

## 本轮布局参考

用户指定的 [Eternal Network](https://eternalnetwork-release.github.io/) 是主要视觉和结构参考。本轮读取其现有 index.html：单列大标题、四栏服务速览、横向服务说明、套餐列表配侧栏、平台入口和左右分栏的支持区域。Phantom 按自身内容改写，不挪用 Eternal 的 IEPL、AnyTLS、设备或线路承诺。

采用黑 #111、灰 #5F5F5F、细线 #D7D7D7、面板 #F5F5F3 和白底。方角按钮、系统字体与较大留白承接参考站的节奏；不加载远程字体。手机下线性折叠各列，保留首屏注册入口。桌面 FAQ 左侧为注册提示，右侧为问答。

此前 DNS.SB 和 Tavily 的文档组织参考仍用于文档页；首页以用户指定的 Eternal Network 结构为准。

## FAQ 写法

通过 Exa 读取 [Mullvad FAQ](https://mullvad.net/en/help/faq)，并检索 [Proton VPN 新用户指南与 FAQ](https://protonvpn.com/support/protonvpn-setup-guide)。借鉴价格、账户、设备、安装、续费、连接、退款与支持的提问方式，以及先答结论、再给动作的表达。其他服务的价格、退款和隐私政策不用于 Phantom。

问答数据在 data/faq.json，保留依据和写作参考，构建时生成正文。FAQ 给出明确回答；缺少支持的问题不放入 FAQ，保留在资料记录中。未将试用到账、签到周期、实测速率或解锁效果写成确定的 FAQ 结论。

推荐入口沿用现有主邀请码。data-aff 只标记入口位置，未接入统计上报；没有转化率测试，不宣称获客效果已经提高。

品牌更新：页头和标签使用 Phantom 官方源图标；Google Sans 用于拉丁字符，MiSans 用于中文，HarmonyOS Sans 作为本机字体回退。远程字体采用 swap，服务不可达时使用系统字体。每日签到用三栏奖励序列呈现，保留注册入口。
