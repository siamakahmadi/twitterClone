import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Notification from '../views/Notification.vue'
import Message from '../views/Message.vue'
import Profile from '../views/Profile.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta:{layout:"Main"}
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification,
      meta:{layout:"Main"}
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta:{layout:"Main"}
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta:{layout:"Main"}
    },
  ]
})

export default router
