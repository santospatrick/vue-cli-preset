import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes as users } from '@/modules/users';
import { routes as dashboard } from '@/modules/dashboard';

Vue.use(VueRouter);

const routes = [
  ...dashboard,
  ...users,
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
