// 路由器UI想模块

import Vue from "vue"
import VueRouter from "vue-router"
import About from "../views/About.vue"
import Home from "../views/Home.vue"
import News from  "../views/News.vue"
import Message from "../views/Message.vue"
import MessageDetail from "../views/message-detail.vue"

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "news",
          component: News
        },
        {
          path: "/home/message",
          component: Message,
          children: [
            {
              path: "/home/message/detail/:id",
              component: MessageDetail
            }
          ]
        }
      ]
    },
    {
      path: "/",
      redirect: "/about"
    }
  ]
})
