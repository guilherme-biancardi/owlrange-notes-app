import { createRouter, createWebHistory } from 'vue-router'
import { useRoutes } from './modules/routes.js'

const routes = useRoutes()
console.log(useRoutes());

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
