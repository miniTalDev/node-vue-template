import { RouteConfig } from 'vue-router'

const route: RouteConfig[] = [
  {
    path: '/',
    component: () => import('@/views/Index.vue')
  }
]

export default route
