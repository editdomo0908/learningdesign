/* Shared portfolio interactions. */

(() => {
  // Theme setup: stored preference and time-based default.
  const root = document.documentElement;
  const key = 'edit-portfolio-theme';
  const toggle = document.querySelector('.theme-toggle');
  const symbol = toggle?.querySelector('.theme-icon');
  const automaticTheme = () => {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 17 ? 'light' : 'dark';
  };
  // Apply the palette, toggle label and matching illustrations.
  function applyTheme(theme) {
    root.dataset.theme = theme;
    const light = theme === 'light';
    toggle?.setAttribute('aria-pressed', String(light));
    toggle?.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} mode`);
    toggle?.setAttribute('title', `Switch to ${light ? 'dark' : 'light'} mode`);
    if (symbol) symbol.textContent = light ? '☾' : '☼';
    document.querySelectorAll('img.theme-art').forEach((image) => {
      const next = light ? image.dataset.lightSrc : image.dataset.darkSrc;
      if (next && image.getAttribute('src') !== next) image.setAttribute('src', next);
    });
  }
  // Theme events: local button and changes in another tab.
  applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
  toggle?.addEventListener('click', () => {
    const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(theme);
    try {
      localStorage.setItem(key, theme);
    } catch (_) {}
  });
  window.addEventListener('storage', (event) => {
    if (event.key === key)
      applyTheme(
        event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : automaticTheme(),
      );
  });

  // Mobile navigation: open state, visibility and keyboard focus.
  const menu = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-navigation');
  const mobile = window.matchMedia('(max-width: 760px)');
  function setMenu(open, restoreFocus = false) {
    if (!menu || !navigation) return;
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
    navigation.classList.toggle('is-open', open);
    navigation.inert = mobile.matches && !open;
    if (mobile.matches && !open) navigation.setAttribute('aria-hidden', 'true');
    else navigation.removeAttribute('aria-hidden');
    if (open) navigation.querySelector('a')?.focus();
    else if (restoreFocus) menu.focus();
  }
  // Navigation events: links, Escape, outside clicks and breakpoint changes.
  setMenu(false);
  menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  navigation?.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    setMenu(false);
    const target = new URL(link.href, location.href);
    if (target.pathname === location.pathname && target.hash) {
      const section = document.getElementById(target.hash.slice(1));
      if (section) {
        section.setAttribute('tabindex', '-1');
        section.focus({ preventScroll: true });
      }
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true')
      setMenu(false, true);
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header'))
      setMenu(false, navigation?.contains(document.activeElement));
  });
  document.addEventListener('focusin', (event) => {
    if (
      mobile.matches &&
      menu?.getAttribute('aria-expanded') === 'true' &&
      !navigation.contains(event.target) &&
      !menu.contains(event.target)
    )
      setMenu(false);
  });
  mobile.addEventListener('change', () =>
    setMenu(false, mobile.matches && navigation?.contains(document.activeElement)),
  );
  // Measure the sticky header so anchor targets remain visible.
  const header = document.querySelector('.site-header');
  const updateHeaderHeight = () => {
    if (header)
      root.style.setProperty(
        '--header-height',
        Math.ceil(header.getBoundingClientRect().height) + 'px',
      );
  };
  updateHeaderHeight();
  if (header && 'ResizeObserver' in window) new ResizeObserver(updateHeaderHeight).observe(header);
  // Keep footer copyright years current.
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();
