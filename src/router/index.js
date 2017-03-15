import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Page1 from '@/components/path1'
import Page2 from '@/components/path2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/page1/:id',
      name: 'Page1',
      component: Page1,
      children: [
        {
            path: 'profile',
            component: Hello
        },
        {
            path: 'posts',
            component: Page2
        }
      ]
    },
    {
      path: '/page2',
      component: Page2
    }
  ]

})
