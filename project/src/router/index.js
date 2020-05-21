import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



const login = () => import('@/views/login/')
//招商
const attractInvestment = () => import('@/views/attractInvestment/')
    //资源
const resources = () => import('@/views/attractInvestment/resources/')
    //合同
const contract = () => import('@/views/attractInvestment/contract/')
    //客户
const customer = () => import('@/views/attractInvestment/customer')
    //合同模板
const contractTemplate = () => import('@/views/attractInvestment/contractTemplate')

const routes = [
  { path: '/login', component: login },
  { path: '/', redirect: '/login' },
  {
    path: '/attractInvestment', component: attractInvestment,

    children: [
      { path: '/resources', component: resources },
      { path: '/contract', component: contract },
      { path: '/customer', component: customer},
      {path: '/contractTemplate', component:contractTemplate}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
