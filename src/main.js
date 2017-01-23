import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import about from './components/about.vue'
import portfolio from './components/portfolio.vue'
import lifestyle from './components/lifestyle.vue'
import contact from './components/contact.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: about,
      name:'about'
    },
    {
      path: '/portfolio',
      component: portfolio,
      name:'portfolio'
    },
    {
      path: '/lifestyle',
      component: lifestyle,
      name:'lifestyle'
    },
    {
      path: '/contact',
      component: contact,
      name:'contact'
    }
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
