/* SUAI theme switcher — progressive enhancement ONLY.
   Flips data-su-theme / data-su-mode on <html>; injects no CSS.
   The page is fully styled without this file. */
(() => {
  const root = document.documentElement;
  const K = 'su-theme', M = 'su-mode';
  const t = localStorage.getItem(K), m = localStorage.getItem(M);
  if (t) root.setAttribute('data-su-theme', t);
  if (m) root.setAttribute('data-su-mode', m);
  document.addEventListener('click', (e) => {
    const th = e.target.closest('[data-su-set-theme]');
    const md = e.target.closest('[data-su-set-mode]');
    if (th) { const v = th.dataset.suSetTheme; root.setAttribute('data-su-theme', v); localStorage.setItem(K, v); }
    if (md) { const v = md.dataset.suSetMode;  root.setAttribute('data-su-mode', v);  localStorage.setItem(M, v); }
  });
})();
