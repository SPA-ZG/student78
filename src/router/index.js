import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue';
import Home from '../views/Home.vue';
import { useCounterStore } from '../stores/counter';
import OhmsLaw from '../views/OhmsLaw.vue';
import MevConverter from '../views/MevConverter.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        const counterStore = useCounterStore();
        console.log('beforeEnter');
        console.log(counterStore.count);
        counterStore.increment();
        next();
      },
      
    },
    {
      path: '/ohms-law',
      name: 'OhmsLaw',
      component: OhmsLaw,
    },
    {
      path: '/mev-converter',
      name: 'MevConverter',
      component: MevConverter,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
