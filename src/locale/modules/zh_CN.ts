import { LanguageOption, ZH_CN } from '../defined'

const option: LanguageOption = {
  language: ZH_CN,
  dateTimeFormat: {
    short: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    },
    long: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }
  },
  messages: {
  }
}

export default option
