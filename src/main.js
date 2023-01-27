import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import antDesign from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(store).use(antDesign).mount('#app')
