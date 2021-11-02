import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from './vuex'
import store from './vuex'
import './index.css'


createApp(App).use(router).mount('#app')
