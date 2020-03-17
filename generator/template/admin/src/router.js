import Vue from 'vue';
import VueRouter from 'vue-router';
import users from '@/modules/users/routes';
import Login from '@/modules/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  ...users,
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
