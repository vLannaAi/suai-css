/* SUAI theme switcher — progressive enhancement ONLY.
   Flips data-su-theme / data-su-mode on <html>; injects no CSS.
   The page is fully styled without this file. */
(() => {
  const root = document.documentElement;
  const K = 'su-theme', M = 'su-mode';
  const t = localStorage.getItem(K), m = localStorage.getItem(M);
  if (t) root.setAttribute('data-su-theme', t);
  if (m) root.setAttribute('data-su-mode', m);

  // Reflect the current skin/mode on the switcher buttons via aria-pressed so
  // the active selection is visible. Styling lives in suai.css — none here.
  const sync = () => {
    const theme = root.getAttribute('data-su-theme');
    const mode = root.getAttribute('data-su-mode');
    document.querySelectorAll('[data-su-set-theme]').forEach((b) =>
      b.setAttribute('aria-pressed', String(b.dataset.suSetTheme === theme)));
    document.querySelectorAll('[data-su-set-mode]').forEach((b) =>
      b.setAttribute('aria-pressed', String(b.dataset.suSetMode === mode)));
  };

  document.addEventListener('click', (e) => {
    const th = e.target.closest('[data-su-set-theme]');
    const md = e.target.closest('[data-su-set-mode]');
    if (th) { const v = th.dataset.suSetTheme; root.setAttribute('data-su-theme', v); localStorage.setItem(K, v); }
    if (md) { const v = md.dataset.suSetMode;  root.setAttribute('data-su-mode', v);  localStorage.setItem(M, v); }
    if (th || md) sync();
  });

  sync(); // script is deferred → DOM is parsed when this runs
})();
