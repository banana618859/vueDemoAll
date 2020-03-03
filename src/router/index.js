import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Second from '@/components/Second'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      {
      		path:'first',
      		component:First
      	},
      	{
      		path:'second',
      		component:Second
      	}
      ]
    }
  ]
})
