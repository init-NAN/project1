import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const login = () => import('@/views/login/')
const main = () => import('@/views/home/main.vue')
//招商
const attractInvestment = () => import('@/views/home/attractInvestment/')
//资源
const resources = () => import('@/views/home/attractInvestment/resources/')
const charts = () => import('@/views/home/attractInvestment/resources/charts/')
//合同
const contract = () => import('@/views/home/attractInvestment/contract/')
//客户
const customer = () => import('@/views/home/attractInvestment/customer/')
//合同模板
const contractTemplate = () => import('@/views/home/attractInvestment/contractTemplate/')

const routes = [{
    path: '/login',
    component: login
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    component: main,
    children: [{
      path: '/attractInvestment',
      component: attractInvestment,

      children: [{
          path: '/resources',
          component: resources,
          name:'resources'
        },
        {
          path: '/charts',
          component: charts
        },
        {
          path: '/contract',
          component: contract,
          name:'contract'
        },
        {
          path: '/customer',
          component: customer
        },
        {
          path: '/contractTemplate',
          component: contractTemplate
        }
      ]
    }]

  }
]

const router = new VueRouter({
  routes
})

export default router