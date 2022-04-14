import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home/index.vue';
import Message from '../views/Message/index.vue';
import Notification from '../views/Notification/index.vue';
import Profile from '../views/Profile/index.vue';
import Explore from '../views/Explore/index.vue';
import Bookmarks from '../views/Bookmarks/index.vue';
import Lists from '../views/Lists/index.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { layout: 'Home' }

        },
        {
            path:'/message',
            name:'message',
            component:Message,
            meta:{layout:"Direct"}
        },
        {
            path:'/profile',
            name:'profile',
            component:Profile,
            meta:{layout:"Home"}
        },
        {
            path:'/notification',
            name:'notification',
            component:Notification,
            meta:{layout:'Home'}
        },
        {
            path:'/explore',
            name:'explore',
            component:Explore,
            meta:{layout:'Home'}
        },
        {
            path:'/bookmarks',
            name:'bookmarks',
            component:Bookmarks,
            meta:{layout:'Home'}
        },
        {
            path:'/lists',
            name:'lists',
            component:Lists,
            meta:{layout:'Home'}
        }


    ]
});
export default router;
