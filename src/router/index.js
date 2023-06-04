import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue';
import ExamplePage from '@/pages/ExamplePage.vue';
import LoginPage from '@/pages/Auth/LoginPage.vue';
import SignupPage from '@/pages/Auth/SignupPage.vue'
 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignupPage
        }
    ]
})

export default router;