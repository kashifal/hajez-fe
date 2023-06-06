import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ExamplePage from "@/pages/ExamplePage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import Home from "@/pages/Home.vue";
import Reports from "@/pages/Reports.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/example",
      name: "example",
      component: ExamplePage,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpPage,
    },
    {
      path: "/homepage",
      name: "homepage",
      component: Home,
    },
    {
      path: "/reports",
      name: "reports",
      component: Reports,
    },
  ],
});

export default router;
