import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeContainer from "../components/tabbar/homeContainer"
import ShopcarContainer from "../components/tabbar/shopcarContainer"
import SearchContainer from "../components/tabbar/searchContainer"
import LoginContainer from "../components/tabbar/loginContainer"
import NewsList from "../components/news/newsList"
import Login from "../components/login/login"
import Register from "../components/login/register"
import {Toast} from "mint-ui"

const router =  new Router({
  routes: [
    {  path:"/" ,redirect:"/home"  },
    {  path:"/home", component:HomeContainer  },
    // {  path:"/search", component:SearchContainer  },
    {  path:"/shopcar", component:ShopcarContainer,meta:{ requiresAuth:true } },
    {  path:"/loginContainer", component: LoginContainer, meta:{ requiresAuth:true } },
    {  path:"/newslist", component:NewsList  },
    { path:"/login",component:Login },
    { path: "/register",component:Register }
  ],
  linkActiveClass:"mui-active" //默认是router-link-active,通过linkActiveClass更改成mui-active(mui自带)
})
router.beforeEach((to, from, next) => {
  let token = window.sessionStorage.getItem('username')
  if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
    Toast("检测到您还没登录");
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
