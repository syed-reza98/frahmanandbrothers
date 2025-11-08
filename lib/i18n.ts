import translations from './translations.json';

export type Language = 'en' | 'bn';

export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
}

export function getAllTranslations(lang: Language) {
  return translations[lang];
}

export const supportedLanguages: Language[] = ['en', 'bn'];

export const languageNames = {
  en: 'English',
  bn: 'বাংলা'
};
