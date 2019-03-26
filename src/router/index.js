import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home'
import PublicShow from '../components/PublicShow'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/publicShow',
      name: 'publicShow',
      component: PublicShow
    }
  ]
})
