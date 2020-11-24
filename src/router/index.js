import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import NotFound from '../views/NotFound.vue'
import TravelInfo from '../views/TravelInfo.vue'
import Seasons from '../views/Seasons.vue'
import Experiences from '../views/Experiences.vue'
import MyFavorite from '../views/MyFavorite.vue'

//路由词典，定义了访问地址与路由组件间的关系
const routes = [
	{path: '/', component: Index},
	{path: '/info', component: TravelInfo},
	{path: '/seasons', component: Seasons},
	{path: '/experiences', component: Experiences},
	{path: '/mf', component: MyFavorite},
	{path: '/:pathNotFound(.*)', component: NotFound},
	
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
