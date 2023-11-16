import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/student/view.vue'
import StudentCreate from '../views/student/create.vue'
import StudentEdit from '../views/student/edit.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/student',
      name: 'student',
      component: StudentView
    },
    {
      path: '/student/create',
      name: 'studentcreate',
      component: StudentCreate
    },
    {
      path: '/student/:id/edit',
      name: 'studentedit',
      component: StudentEdit
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
