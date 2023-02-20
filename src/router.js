import { createRouter, createWebHashHistory } from "vue-router"

import HomeView from "./views/HomeView.vue"
import AboutView from "./views/AboutView.vue"
import CareerView from "./views/CareerView.vue"
import ProductPage from "./views/ProductPage.vue"
import ApiProducts from "./views/ApiProducts.vue"

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
    {
      name: "about",
      component: AboutView,
      path: "/about",
      meta: { title: "About" },
    },
    {
      name: "career",
      component: CareerView,
      path: "/career",
      meta: { title: "Career" },
    },
    {
      name: "apiProducts",
      component: apiProductsView,
      path: "/apiProducts",
      meta: { title: "apiProducts" },
    },
  ],
})
