import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from "./router/index";
import axios from 'axios'
import $ from 'jquery'
import store from "@/store"
import myXss from "@/utlis/xss";


const app = createApp(App)
// createApp(App).mount('#app')
app.config.globalProperties.$xss = myXss
app.config.globalProperties.$http = axios;
app.use(router).use(ElementPlus).use(store).mount('#app')

window.jQuery = $
window.$ = $
