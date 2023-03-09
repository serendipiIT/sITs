import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import shortText from './directives/shortText'

const app = createApp(App)
app.directive('shortText', shortText)
app.use(router)
app.use(store)
app.mount('#app')
