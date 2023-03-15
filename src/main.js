import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './api/mock.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Cookie from 'js-cookie'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())

router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  const token = Cookie.get('token')
  if (!token && to.name !== 'login') {
    return { name: 'login' }
  } else if (token && to.name == 'login') {
    return { name: 'home' }
  }
})

app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')

