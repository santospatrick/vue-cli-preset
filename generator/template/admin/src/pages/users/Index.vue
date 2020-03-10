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
                <th class="text-left">E-mail</th>
                <th class="text-left">Empresa</th>
                <th class="text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.company && item.company.name }}</td>
                <td class="text-right">
                  <router-link :to="`/users/${item.id}`" v-slot="{ navigate }">
                    <v-btn @click="navigate" text icon>
                      <!-- All icons: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/services/icons/presets/mdi.ts -->
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </router-link>
                  <v-btn @click="deleteItem(item)" text icon>
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
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'UsersIndex',
  mounted() {
    this.getList();
  },
  beforeDestroy() {
    this.clearList();
  },
  computed: {
    ...mapState('users', ['list']),
  },
  methods: {
    ...mapActions('users', ['getList', 'deleteItem']),
    ...mapMutations('users', ['clearList']),
  },
};
</script>
