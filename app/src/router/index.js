import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NumbersGraph from '../components/NumbersGraph.vue'
import InputChart from '../components/InputChart.vue'
import CriticalGraph from '../components/CriticalGraph.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/numbers',
      name: 'Bar Graph',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: NumbersGraph,
    },
    {
      path: '/criticalchart',
      name: 'Critical Graph',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CriticalGraph,
    },
    {
      path: '/inputchart',
      name: 'Input Chart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: InputChart,
    }
  ],
})

export default router
