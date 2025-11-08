'use client';

import { useState } from 'react';
import { supportedLanguages, languageNames, type Language } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en';
    
    const stored = localStorage.getItem('preferredLanguage') as Language;
    if (stored && supportedLanguages.includes(stored)) {
      return stored;
    }
    
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'bn') {
      return 'bn';
    }
    
    return 'en';
  });

  const switchLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('preferredLanguage', lang);
    // Reload page to apply language change
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2">
      {supportedLanguages.map((lang) => (
        <button
          key={lang}
          onClick={() => switchLanguage(lang)}
          className={`px-3 py-1 rounded text-sm font-medium transition ${
            currentLang === lang
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-label={`Switch to ${languageNames[lang]}`}
        >
          {languageNames[lang]}
        </button>
      ))}
    </div>
  );
}
