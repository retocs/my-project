import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import search from '@/page/search/search'
import shopcart from '@/page/shopcart/shopcart'
import vip from '@/page/vip/vip'
import newsList from '@/page/news/news'
import newsDetail from '@/page/news/newsdetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: shopcart
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: newsList
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail
    }
  ]
})
