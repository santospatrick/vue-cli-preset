<template>
  <v-container>
    <div class="d-flex flex-column">
      <h1>Users</h1>
      <router-link
        to="/users/new"
        v-slot="{ navigate }"
      >
        <v-btn class="align-self-end mb-10" @click="navigate" color="primary">Novo usuário</v-btn>
      </router-link>
      <v-card outlined>
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
      </v-card>
    </div>
  </v-container>
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
