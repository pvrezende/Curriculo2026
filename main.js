const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const printResume = document.getElementById('printResume');
const THEME_KEY = 'curriculo_2026_theme';

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? 'Tema claro' : 'Tema escuro';
  }
}

function getSavedTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

applyTheme(getSavedTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

if (printResume) {
  printResume.addEventListener('click', () => {
    window.print();
  });
}
