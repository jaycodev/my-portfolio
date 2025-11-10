import enTranslations from './en.json'
import esTranslations from './es.json'

export const languages = {
  es: 'Español',
  en: 'English',
} as const

export type Language = keyof typeof languages

export const defaultLang: Language = 'es'

export const sectionIds = {
  es: {
    experience: 'experiencia',
    projects: 'proyectos',
    about: 'sobre-mi',
  },
  en: {
    experience: 'experience',
    projects: 'projects',
    about: 'about',
  },
} as const

type TranslationValue = string | Record<string, unknown>

function flattenObject(obj: Record<string, TranslationValue>, prefix = ''): Record<string, string> {
  return Object.keys(obj).reduce((acc: Record<string, string>, key: string) => {
    const prefixKey = prefix.length ? `${prefix}.` : ''
    const value = obj[key]

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(acc, flattenObject(value as Record<string, TranslationValue>, prefixKey + key))
    } else {
      acc[prefixKey + key] = value as string
    }
    return acc
  }, {})
}

const esFlat = flattenObject(esTranslations as Record<string, TranslationValue>)
const enFlat = flattenObject(enTranslations as Record<string, TranslationValue>)

export const ui = {
  es: esFlat,
  en: enFlat,
} as const

type UIKeys = keyof typeof esFlat

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as Language
  return defaultLang
}

export function useTranslations(lang: Language = defaultLang) {
  return function t(key: UIKeys): string {
    return ui[lang][key] || ui[defaultLang][key]
  }
}
