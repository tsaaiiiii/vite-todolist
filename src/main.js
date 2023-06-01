import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGtag from 'vue-gtag'

import App from './App.vue'
import router from './router'
const vueGTagSettings = {
  config: { id: `${import.meta.env.VITE_GA4_MEASUREMENT_ID}` }
}

const app = createApp(App)

app.use(createPinia())
app.use(VueGtag, vueGTagSettings, router)

import { event } from 'vue-gtag'
event('export_order_btn', {
  event_label: 'Export Data Xlsx',
  event_value: 1
})

app.mount('#app')
