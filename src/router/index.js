import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Article from '@/components/Article'

Vue.use(VueRouter)
Vue.use(VueResource)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Article',
      component: Article
    }
  ]
})
