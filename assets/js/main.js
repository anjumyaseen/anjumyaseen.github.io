// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle with local persistence
(function () {
  const storageKey = 'ay-theme';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle ? toggle.querySelector('.theme-toggle-icon') : null;
  const text = toggle ? toggle.querySelector('.theme-toggle-text') : null;

  const safeGet = () => {
    try {
      return localStorage.getItem(storageKey);
    } catch (err) {
      return null;
    }
  };

  const safeSet = (value) => {
    try {
      localStorage.setItem(storageKey, value);
    } catch (err) {
      /* ignore storage errors */
    }
  };

  const applyTheme = (theme) => {
    document.body.setAttribute('data-theme', theme);
    if (toggle) {
      const isDark = theme === 'dark';
      toggle.setAttribute('aria-pressed', String(isDark));
      if (icon) icon.textContent = isDark ? '☀' : '🌙';
      if (text) text.textContent = isDark ? 'Light' : 'Dark';
    }
  };

  const initTheme = () => {
    const stored = safeGet();
    if (stored === 'light' || stored === 'dark') {
      applyTheme(stored);
      return;
    }
    applyTheme(prefersDark.matches ? 'dark' : 'light');
  };

  initTheme();

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    safeSet(next);
  });

  const handleMediaChange = (event) => {
    if (safeGet()) return;
    applyTheme(event.matches ? 'dark' : 'light');
  };

  if (typeof prefersDark.addEventListener === 'function') {
    prefersDark.addEventListener('change', handleMediaChange);
  } else if (typeof prefersDark.addListener === 'function') {
    prefersDark.addListener(handleMediaChange);
  }
})();
