<template>
  <div>
    <h1>Users</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.name">
            <td>{{ item.name }}</td>
            <td><router-link :to="`/users/${item.id}`">Editar usuário</router-link></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'UsersIndex',
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const response = await api.get('/users');
      this.list = response.data;
    },
  },
};
</script>
