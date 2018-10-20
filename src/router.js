import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import NProgress from 'nprogress';
import '../node_modules/nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        breadcrumb:[
          {name: 'Dashboard'}
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta:{
        breadcrumb:[
          {name: 'About'}
        ]
      }
    },
    {
      path: '/user_list',
      name: 'userList',
      component: () => import('./views/UserList.vue'),
      meta:{
        breadcrumb:[
          {name: 'user liist'}
        ]
      }
    },
    {
      path: '/post_list',
      name: 'postList',
      component: () => import('./views/PostList.vue'),
      meta:{
        breadcrumb:[
          {name: 'post liist'}
        ]
      }
    },
    {
      path: '/comments/:postId',
      name: 'comments',
      component: () => import('./views/Comments.vue'),
      meta:{
        breadcrumb:[
          {name: 'post / comments'}
        ]
      }
    }
  ]
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router;
