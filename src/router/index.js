import Vue from 'vue'
import Router from 'vue-router'
import Template from '@/components/Template'
import QueryTemplate from '@/components/QueryTemplate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QueryTemplate',
      component: QueryTemplate
    }
  ]
})
