import Vue from 'vue'
import Router from 'vue-router'
import Questions from 'components/questions/questions'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/questions',
    },
    {
      path: '/questions',
      component: Questions
    }
  ]
})
