import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/module/view/shortner.vue"
import SuccessPage from "@/module/components/successPage.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
