import { createRouter, createWebHashHistory } from "vue-router"

import HomeView from "./views/HomeView.vue"
import ProductPage from "./views/ProductPage.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "home",
      component: HomeView,
      path: "/",
      meta: { title: "Home" },
    },
    {
      name: "products",
      component: ProductPage,
      path: "/products",
      meta: { title: "Products" },
    },
  ],
})
