import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
// import ProjectsPage from '@/views/ProjectsPage.vue'
// import AboutPage from '@/views/AboutPage.vue'

const routes = [
  { path: '/', component: HomePage },
//   { path: '/projects', component: ProjectsPage },
//   { path: '/about', component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
