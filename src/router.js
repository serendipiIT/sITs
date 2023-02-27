import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ApiProducts from './views/ApiProducts.vue'
import CartView from './views/CartView.vue'
import HomeView from './views/HomeView.vue'
import ProductPage from './views/ProductPage.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'about',
      component: AboutView,
      path: '/about',
      meta: { title: 'About' },
    },
    {
      name: 'apiProducts',
      component: ApiProducts,
      path: '/apiProducts',
      meta: { title: 'apiProducts' },
    },
    {
      name: 'cart',
      component: CartView,
      path: '/cart',
      meta: { title: 'Cart' },
    },
    {
      name: 'home',
      component: HomeView,
      path: '/',
      meta: { title: 'Home' },
    },
    {
      name: 'products',
      component: ProductPage,
      path: '/products',
      meta: { title: 'Products' },
    },
  ],
})
