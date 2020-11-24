import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//导入全局样式文件——保证所有页面/组件都可以使用
import  './assets/css/base.css'
import  './assets/css/font-awesome.css'

// 给根组件添加路由器-其中可以提供很多路由信息
createApp(App).use(router).mount('#app')
