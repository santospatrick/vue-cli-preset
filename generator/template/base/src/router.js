import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
