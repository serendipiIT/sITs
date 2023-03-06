import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import CartView from './views/CartView.vue'
import HomeView from './views/HomeView.vue'
import ProductPage from './views/ProductPage.vue'
import FavouritesPage from './views/FavouritesPage.vue'
import ProductInfo from './views/ProductInfo.vue'
import HeroSection from './components/HeroSection.vue'

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
      name: 'cart',
      component: CartView,
      path: '/cart',
      meta: { title: 'Cart' },
    },
    {
      name: 'home',
      components: {
        default: HomeView,
        hero: HeroSection,
      },
      path: '/',
      meta: { title: 'Home' },
    },
    {
      name: 'products',
      component: ProductPage,
      path: '/products',
      meta: { title: 'Products' },
    },
    {
      name: 'bookmarks',
      component: FavouritesPage,
      path: '/favorutites',
      meta: { title: 'Saved Products' },
    },
    {
      name: 'productInfo',
      component: ProductInfo,
      path: '/product/:id',
      meta: { title: 'Product Information' },
    },
  ],
})
