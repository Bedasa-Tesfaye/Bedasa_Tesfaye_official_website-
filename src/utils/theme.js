const STORAGE_KEY = "michu-theme";
const DEFAULT_THEME = "dark";

export function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
}

export function applyTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute("content", nextTheme === "dark" ? "#07111f" : "#f6f9fc");
  }

  return nextTheme;
}

export function initTheme() {
  return applyTheme(getStoredTheme());
}

export function toggleTheme(currentTheme) {
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE_KEY, nextTheme);
  return applyTheme(nextTheme);
}

export default {
  getStoredTheme,
  applyTheme,
  initTheme,
  toggleTheme,
};
