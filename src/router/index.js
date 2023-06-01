import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue';
import ExamplePage from '@/pages/ExamplePage.vue';
 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/example',
            name: 'example',
            component: ExamplePage
        }
    ]
})

export default router;