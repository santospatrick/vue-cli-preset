import Vue from 'vue';
import VueRouter from 'vue-router';
import users from '@/pages/users/routes';
import Login from './pages/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ './pages/About.vue'),
  },
  ...users
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
