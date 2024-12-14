import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store, { key } from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/scss/index.css'

import { UserFilled, Lock } from '@element-plus/icons-vue'

import './permission'

// import { hasPermission } from '@/utils/permission'

// hasPermission()

const app = createApp(App)

app.component('UserFilled', UserFilled)
app.component('Lock', Lock)

app.use(store, key)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
