import { DateTimeFormat, LocaleMessage } from 'vue-i18n'

export interface Language {
  readonly value: string
  readonly text: string
}

export interface LanguageOption {
  readonly language: Language
  readonly dateTimeFormat: DateTimeFormat
  readonly messages: {[key: string]: LocaleMessage }
}

export const ZH_CN: Language = {
  value: 'zh-CN',
  text: '简体中文'
}

export const DEFAULT = ZH_CN
export const LANGUAGES: Language[] = [
  ZH_CN
]
