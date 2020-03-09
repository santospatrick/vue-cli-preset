export default [
  {
    path: '/users',
    name: 'Usuários',
    component: () => import(/* webpackChunkName: "usersIndex" */ './Index.vue'),
  },
  {
    path: '/users/new',
    name: 'Novos Usuários',
    component: () => import(/* webpackChunkName: "usersForm" */ './Form.vue'),
  },
  {
    path: '/users/:id',
    name: 'Edição Usuários',
    component: () => import(/* webpackChunkName: "usersForm" */ './Form.vue'),
  },
];
