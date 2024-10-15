import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router' // 引入 router
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 创建 Pinia 实例
const pinia = createPinia()

// 创建 Vue 应用
const app = createApp(App)

// 将 Pinia 和 Router 添加到应用中
app.use(pinia)
app.use(router) 
app.use(ElementPlus)

// 挂载应用
app.mount('#app')
