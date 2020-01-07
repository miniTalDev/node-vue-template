import { AxiosInstance } from 'axios'

// Vue Declares
declare module 'vue/types/vue' {
  interface Vue {
    readonly $api: AxiosInstance
  }
}
