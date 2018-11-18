import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeContainer from "../components/tabbar/homeContainer"
import MemberContainer from "../components/tabbar/memberContainer"
import ShopcarContainer from "../components/tabbar/shopcarContainer"
import SearchContainer from "../components/tabbar/searchContainer"
import NewsList from "../components/news/newsList"

export default new Router({
  routes: [
    {  path:"/" ,redirect:"/home"  },
    {  path:"/home", component:HomeContainer  },
    {  path:"/member", component:MemberContainer  },
    {  path:"/shopcar", component:ShopcarContainer  },
    {  path:"/search", component:SearchContainer  },
    {  path:"/home/newslist", component:NewsList  }
  ],
  linkActiveClass:"mui-active" //默认是router-link-active,通过linkActiveClass更改成mui-active(mui自带)
})
