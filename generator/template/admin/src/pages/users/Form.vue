<template>
  <div :class="$style.container">
    <h1>{{ title }}</h1>
    <UserForm v-if="user.id" :user="user" @submit="onSubmit" />
    <v-progress-circular
      v-else
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
</template>

<style module>
.container {
  text-align: center;
}
</style>

<script>
import api from '@/services/api';
import UserForm from '@/forms/User.vue';

export default {
  name: 'UsersFormContainer',
  components: {
    UserForm,
  },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.getUser();
  },
  computed: {
    title() {
      return this.$route.params.id ? `Usuário: ${this.$route.params.id}` : 'Novo usuário';
    },
  },
  methods: {
    async getUser() {
      const { id } = this.$route.params;
      if (!id) return;
      const response = await api.get(`users/${id}`);
      this.user = response.data;
    },
    onSubmit(values) {
      console.log('UserForm | values:', values);
    },
  },
};
</script>
