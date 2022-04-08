import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Notification from '../views/Notification.vue'
import Message from '../views/Message.vue'
import Profile from '../views/Profile.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
  ]
})

export default router
