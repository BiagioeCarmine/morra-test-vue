import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import("../views/Signup.vue"),
  },
  {
    path: "/play",
    name: "Play",
    component: () =>
      import("../views/Play.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
