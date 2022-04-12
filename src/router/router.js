import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta:{layout:'Main'}

        },
    ]
});
export default router;
