import Index from './pages/Index.vue';
import Form from './pages/Form.vue';

export default [
  {
    path: '/users',
    name: 'Usuários',
    component: Index,
  },
  {
    path: '/users/new',
    name: 'Novos Usuários',
    component: Form,
  },
  {
    path: '/users/:id',
    name: 'Edição Usuários',
    component: Form,
  },
];
