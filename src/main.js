import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VuePageTransition from 'vue-page-transition'

import iconsList from './icon.config.js'

library.add(...iconsList)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.use(VuePageTransition)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
