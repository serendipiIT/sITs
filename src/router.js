import { createRouter, createWebHashHistory } from "vue-router"

import HomeView from "./views/HomeView.vue"
import AboutView from "./views/AboutView.vue"
import CareerView from "./views/CareerView.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "home",
      component: HomeView,
      path: "/",
    },
    {
      name: "about",
      component: AboutView,
      path: "/about",
    },
    {
      name: "career",
      component: CareerView,
      path: "/career",
    },
  ],
})
