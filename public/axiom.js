(function(window) {
  const script = document.currentScript;
  const attr = (name) => script.getAttribute(name);
  const endpoint = attr('data-endpoint') || '/api/collect';
  const siteId = attr('data-site-id');

  if (!siteId) return console.warn('Axiom: Site ID missing');

  function collect(type, props = {}) {
    if (navigator.doNotTrack === '1') return;

    const payload = {
      s: siteId,
      t: type,
      u: window.location.href,
      r: document.referrer,
      w: window.innerWidth,
      ...props
    };

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      mode: 'no-cors'
    }).catch(() => {});
  }

  // Track pageview on load
  collect('pageview');

  // SPA support: track on pushState/popstate
  let lastHref = window.location.href;
  const observer = new MutationObserver(() => {
    if (lastHref !== window.location.href) {
      lastHref = window.location.href;
      collect('pageview');
    }
  });
  observer.observe(document, { subtree: true, childList: true });

  window.axiom = { collect };
})(window);
