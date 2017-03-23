import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/home/Index'
import Activity from '@/components/home/Activity'
import Task from '@/components/home/Task'

import Page1 from '@/components/path1'
import Page2 from '@/components/path2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      redirect: '/home/index',
      component: Home,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: Index
        },
        {
          path: 'activity',
          name: 'Activity',
          component: Activity
        },
        {
          path: 'task',
          name: 'Task',
          component: Task
        },{
          path: '*',
          redirect: '/home/index'
        }
      ]
    },
    {
      path: '*',
      redirect: '/home/index'
    }
    // {
    //   path: '/page1/:id',
    //   name: 'Page1',
    //   component: Page1,
    //   children: [
    //     {
    //         path: 'profile',
    //         component: Login
    //     },
    //     {
    //         path: 'posts',
    //         component: Page2
    //     }
    //   ]
    // },
    // {
    //   path: '/page2',
    //   component: Page2
    // }
  ]

})
