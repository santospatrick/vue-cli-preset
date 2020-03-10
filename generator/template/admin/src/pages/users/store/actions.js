import api from '@/services/api';
import router from '@/router';

export default {
  async getList({ commit }) {
    const response = await api.get('users');
    commit('setList', response.data);
  },
  async getItem({ commit }, id) {
    const response = await api.get(`users/${id}`);
    commit('setItem', response.data);
  },
  async getRouteItem({ dispatch }) {
    const { id } = router.currentRoute.params;
    if (!id) return;
    await dispatch('getItem', id);
  },
  async deleteItem({ commit }, { id, name }) {
    // eslint-disable-next-line
    if (!window.confirm(`Deseja deletar "${name}"?`)) return;

    await api.delete(`users/${id}`);
    commit('deleteItem', id);
  },
  async postItem(_params, item) {
    const response = await api.post('users', item);
    router.push(`/users/${response.data.id}`);
  },
  async putItem(_params, { id, values }) {
    // ".patch()" pq o json-server é semântico.
    // Na vida real isso pode ser ".put()" sem problemas.
    await api.patch(`users/${id}`, values);
    router.push('/users');
  },
};
