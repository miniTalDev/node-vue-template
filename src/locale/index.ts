import Vue from 'vue'
import VueI18n, { DateTimeFormat, LocaleMessages } from 'vue-i18n'
import { LanguageOption, DEFAULT } from './defined'

import optZhCN from './modules/zh_CN'

Vue.use(VueI18n)

const options: {[key: string]: LanguageOption} = {}
const locale = DEFAULT.value
const messages: LocaleMessages = {}
const dateTimeFormats: {[key: string]: DateTimeFormat} = {}

const install = (opt: LanguageOption) => {
  options[opt.language.value] = opt
  messages[opt.language.value] = opt.messages
  dateTimeFormats[opt.language.value] = opt.dateTimeFormat
}

install(optZhCN)

export default new VueI18n({
  locale,
  messages,
  dateTimeFormats
})
