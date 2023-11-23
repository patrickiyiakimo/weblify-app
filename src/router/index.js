import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from '../views/Signup.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/Signup',
  //   name: 'signup',
  //  component:SignupView
  // },
  
    // ... your existing routes ...
    {
       path: '/signup', 
       name:'Signup',
       component: Signup
    },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
