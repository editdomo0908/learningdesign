/* Learning goal matcher interactions. */

(() => {
  // Find the learning goals, content panels and compact-screen select.
  const tabs = [...document.querySelectorAll('.goal-choice')];
  const panels = [...document.querySelectorAll('.goal-detail')];
  const select = document.querySelector('#goal-select');
  const status = document.querySelector('#goal-status');
  const compact = window.matchMedia('(max-width: 900px)');
  if (!tabs.length) return;
  const aliases = {
    remember: 'recall',
    understand: 'explain',
    analyse: 'diagnose',
    explore: 'connect',
    practise: 'perform',
  };
  let current = null;
  // Use tab panels on desktop and labeled regions on small screens.
  function presentation() {
    panels.forEach((panel, index) => {
      panel.setAttribute('role', compact.matches ? 'region' : 'tabpanel');
      panel.setAttribute(
        'aria-labelledby',
        compact.matches ? 'goal-heading-' + index : tabs[index].id,
      );
    });
  }
  // Select a goal and keep content, focus, URL and announcements in sync.
  function activate(tab, focus = false, updateUrl = false, announce = false) {
    if (!tab) return;
    const changed = current !== tab;
    const hiddenFocus = panels.some(
      (panel) => panel.id !== tab.dataset.panel && panel.contains(document.activeElement),
    );
    tabs.forEach((item) => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      item.classList.toggle('active', selected);
    });
    panels.forEach((panel) => {
      panel.hidden = panel.id !== tab.dataset.panel;
    });
    if (select) select.value = tab.dataset.goal;
    current = tab;
    presentation();
    if (focus) tab.focus();
    else if (hiddenFocus) document.getElementById(tab.dataset.panel)?.focus();
    if (updateUrl) history.replaceState(null, '', '#goal-' + tab.dataset.goal);
    if (announce && changed && status)
      status.textContent =
        tab.querySelector('strong').textContent + ' selected. Methods updated below.';
  }
  // Restore a goal from the URL, including older link aliases.
  function fromHash(initial = false) {
    const match = location.hash.match(/^#goal-([a-z]+)$/);
    if (!match) {
      if (initial) activate(tabs[0]);
      return;
    }
    const key = aliases[match[1]] || match[1];
    const tab = tabs.find((item) => item.dataset.goal === key);
    if (tab) activate(tab, false, false, !initial);
    else if (initial) activate(tabs[0]);
  }
  // Mouse and keyboard navigation between goals.
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab, false, true, true));
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        activate(tabs[next], true, true, true);
      }
    });
  });
  // Compact-screen selection, breakpoint changes and initial state.
  select?.addEventListener('change', () =>
    activate(
      tabs.find((item) => item.dataset.goal === select.value),
      false,
      true,
      true,
    ),
  );
  compact.addEventListener('change', () => {
    presentation();
    if (compact.matches && tabs.includes(document.activeElement)) select?.focus();
    else if (!compact.matches && document.activeElement === select) current?.focus();
  });
  window.addEventListener('hashchange', () => fromHash());
  fromHash(true);
})();
