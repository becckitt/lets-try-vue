import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Article from '@/components/Article'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.use(VueLazyLoad, {
  preLoad: 1.2,
  lazyComponent: 'Ad'
})

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Article',
      component: Article
    }
  ]
})
