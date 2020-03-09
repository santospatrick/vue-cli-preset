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
                <th class="text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.name">
                <td>{{ item.name }}</td>
                <td class="text-right">
                  <router-link :to="`/users/${item.id}`" v-slot="{ navigate }">
                    <v-btn @click="navigate" text icon>
                      <!-- All icons: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/services/icons/presets/mdi.ts -->
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </router-link>
                  <v-btn @click="deleteUser(item)" text icon>
                    <!-- All icons: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/services/icons/presets/mdi.ts -->
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
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
    async deleteUser({ name, id }) {
      // eslint-disable-next-line
      if (window.confirm(`Deseja deletar "${name}"?`)) {
        await api.delete(`/users/${id}`);
        this.list = this.list.filter((item) => item.id !== id);
      }
    },
  },
};
</script>
