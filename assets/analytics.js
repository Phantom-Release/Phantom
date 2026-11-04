// Public project identifiers; keep Phantom separate from other sites.
if (location.hostname === 'phantom.jichang.space') {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-FCFD43FZMJ');
  const google = document.createElement('script');
  google.async = true;
  google.src = 'https://www.googletagmanager.com/gtag/js?id=G-FCFD43FZMJ';
  document.head.append(google);
  window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
  const clarity = document.createElement('script');
  clarity.async = true;
  clarity.src = 'https://www.clarity.ms/tag/z88y19ryw7';
  document.head.append(clarity);

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-aff]');
    if (!link) return;
    const placement = link.dataset.aff;
    const plan = link.dataset.plan || '';
    window.gtag('event', 'affiliate_click', {
      placement,
      plan,
      page_path: location.pathname,
      outbound_host: new URL(link.href, location.href).host
    });
    if (window.clarity) window.clarity('event', 'affiliate_click_' + placement);
  });
}
