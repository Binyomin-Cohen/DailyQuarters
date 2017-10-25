import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MakeQuarterEvent from '@/components/MakeQuarterEvent'
import QuarterHistory from '@/components/QuarterHistory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'history',
      component: QuarterHistory
    },
    {
      path: '/makeQuarterEvent',
      name: 'MakeQuarterEvent',
      component: MakeQuarterEvent
    }
    ,
    {
      path: '/getQuarterHistory',
      name: 'QuarterHistory',
      component: QuarterHistory
    }
  ]
})
