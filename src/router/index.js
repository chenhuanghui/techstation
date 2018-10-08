import Vue from 'vue'
import Router from 'vue-router'
import HomeStation from '@/components/HomeStation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeStation',
      component: HomeStation
    }
  ]
})
