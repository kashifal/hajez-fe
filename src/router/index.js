import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue';
import ExamplePage from '@/pages/ExamplePage.vue';
import LoginPage from '@/pages/Auth/LoginPage.vue';
import SignupPage from '@/pages/Auth/SignupPage.vue';
import AccountPage from '@/pages/AccountPage.vue';
import ReportsPage from '@/pages/ReportsPage.vue';
 

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
        },
        {
            path: '/account',
            name: 'account',
            component: AccountPage
        },
        {
            path: '/reports',
            name: 'reports',
            component: ReportsPage
        }
    ]
})

export default router;