import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: { layout: 'Home' }

        },
    ]
});
export default router;
