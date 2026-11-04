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
}
