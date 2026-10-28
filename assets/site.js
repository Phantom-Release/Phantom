'use strict';
const usageForm = document.querySelector('#usage-filter');
if (usageForm) {
  usageForm.hidden = false;
  usageForm.addEventListener('submit', event => {
    event.preventDefault();
    const input = usageForm.elements.usage;
    if (!input.reportValidity()) return;
    const required = Number(input.value);
    const cards = [...document.querySelectorAll('[data-capacity]')];
    const match = cards.find(card => Number(card.dataset.capacity) >= required);
    cards.forEach(card => card.classList.toggle('match', card === match));
    document.querySelector('#plan-result').textContent = match
      ? `满足 ${required}G 月流量的最低档：${match.querySelector('h3').textContent}。购买前，请核对付款周期和设备限制。`
      : '现有三档月流量均低于输入值，请到官网核对其他可选套餐。';
  });
}
const devices = {
  win: ['Windows · Phantom(Win版)', '在官方使用文档中选择 Phantom(Win版)，按教程下载客户端并导入订阅。'],
  android: ['Android · Phantom(安卓版)', '在官方使用文档中选择 Phantom(安卓版)，按教程安装并导入控制台提供的订阅。'],
  mac: ['macOS · Phantom(Mac版)', '在官方使用文档中选择 Phantom(Mac版)，核对当前版本要求并完成安装和订阅导入。'],
  ios: ['iOS · Nextin / Clash Lite', '官方目录将 Nextin、Clash Lite 标为推荐，ClashMi 标为不推荐。请在当前教程中确认安装与导入方式。']
};
const deviceTabs = [...document.querySelectorAll('[data-device]')];
if (deviceTabs.length) {
  document.querySelector('.device-tabs').hidden = false;
  const panel = document.querySelector('#device-panel');
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', 'tab-win');
  function selectDevice(tab, focus = false) {
    deviceTabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });
    const [name, description] = devices[tab.dataset.device];
    document.querySelector('#device-name').textContent = name;
    document.querySelector('#device-description').textContent = description;
    panel.setAttribute('aria-labelledby', tab.id);
    if (focus) tab.focus();
  }
  deviceTabs.forEach((tab,index) => {
    tab.addEventListener('click', () => selectDevice(tab));
    tab.addEventListener('keydown', event => {
      const offset = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
      let target = offset ? (index + offset + deviceTabs.length) % deviceTabs.length
        : event.key === 'Home' ? 0 : event.key === 'End' ? deviceTabs.length-1 : null;
      if (target !== null) { event.preventDefault(); selectDevice(deviceTabs[target], true); }
    });
  });
}
const symptoms = {
  timeout: ['检查账户并更新订阅','先在控制台确认套餐有效。然后更新订阅，选择一个“通用”节点（如果有）进行测试。仍超时时，换一个网络复测。'],
  ipv6: ['检查本地 IPv6 支持','历史配置中的“流量”节点使用 IPv6 地址或带 v6 标记的域名。检查设备、路由器与运营商的 IPv6 支持，再与“通用”节点对比。'],
  protocol: ['核对客户端和内核版本','更新客户端与内核，检查是否支持订阅中的 Mieru、TUIC、Hysteria2 和 VLESS。记录完整错误提示，并按官方教程重新导入。'],
  app: ['检查应用的代理设置','部分应用不遵循系统代理。按客户端文档检查系统代理或 TUN，并确认规则让目标应用或网站经过代理。']
};
const symptomButtons = [...document.querySelectorAll('[data-symptom]')];
if (symptomButtons.length) {
  document.querySelector('.symptom-options').hidden = false;
  symptomButtons.forEach(button => button.addEventListener('click', () => {
    symptomButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const [heading, description] = symptoms[button.dataset.symptom];
    document.querySelector('#help-heading').textContent = heading;
    document.querySelector('#help-description').textContent = description;
  }));
}
