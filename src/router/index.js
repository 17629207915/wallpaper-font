import Vue from 'vue'
import Router from 'vue-router'
import Index from "../view/Index"
import Wrap from "../components/Wrap"
import Home from "../components/Home"
import Classify from "../components/Classify"
import Upload from "../components/Upload"
import Contact from "../components/Contact"
import Mine from "../components/Mine"
import Detail from "../components/Detail"



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Wrap',
      component: Wrap,
      children: [
        {
          path: '/Wrap/Home',
          component: Home,
        },
        {
          path: '/Wrap/Classify',
          component: Classify,
        },
        {
          path: '/Wrap/Upload',
          component: Upload,
        },
        {
          path: '/Wrap/Contact',
          component: Contact,
        },
        {
          path: '/Wrap/Mine',
          component: Mine,
        },
      ]
    }
  ]
})
