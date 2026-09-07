import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { LANGUAGE_OPTIONS, translations } from "./translations";

const STORAGE_KEY = "michu-lang";
const LanguageContext = createContext(null);

function interpolate(value, vars) {
  if (!vars || typeof value !== "string") return value;
  return Object.entries(vars).reduce((text, [key, replacement]) => text.replaceAll(`{${key}}`, replacement), value);
}

function readPath(source, path) {
  return path.split(".").reduce((current, part) => current?.[part], source);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return LANGUAGE_OPTIONS.some((option) => option.code === saved) ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    if (LANGUAGE_OPTIONS.some((option) => option.code === next)) {
      setLangState(next);
    }
  }, []);

  const t = useCallback(
    (key, vars) => {
      const fromCurrent = readPath(translations[lang], key);
      const fromEnglish = readPath(translations.en, key);
      const value = fromCurrent ?? fromEnglish ?? key;
      return interpolate(value, vars);
    },
    [lang]
  );

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
      copy: translations[lang],
      languages: LANGUAGE_OPTIONS,
    }),
    [lang, setLang, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
