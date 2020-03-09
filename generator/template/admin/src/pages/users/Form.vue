<template>
  <div class="text-center">
    <h1>{{ title }}</h1>
    <UserForm v-if="!loading" :user="user" :submit-loading="submitLoading" @submit="onSubmit" />
    <v-progress-circular
      v-else
      class="mt-10"
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
</template>

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
      loading: true,
      submitLoading: false,
    };
  },
  mounted() {
    this.getUser();
  },
  computed: {
    title() {
      return this.isNew ? 'Novo usuário' : `Usuário: ${this.$route.params.id}`;
    },
    isNew() {
      return !this.$route.params.id;
    },
  },
  methods: {
    async getUser() {
      const { id } = this.$route.params;
      if (!id) {
        this.loading = false;
        return;
      }
      try {
        const response = await api.get(`users/${id}`);
        this.user = response.data;
      } finally {
        this.loading = false;
      }
    },
    async onSubmit(values) {
      this.submitLoading = true;

      // Novo cadastro
      if (this.isNew) {
        try {
          const response = await api.post('users', values);
          this.$router.push(`${response.data.id}`);
        } finally {
          this.submitLoading = false;
        }
        return;
      }

      // Edição de cadastro
      try {
        const { id } = this.$route.params;
        // ".patch()" pq o json-server é semântico.
        // Na vida real isso pode ser PUT sem problemas.
        await api.patch(`users/${id}`, values);
        this.$router.push('/users');
      } finally {
        this.submitLoading = false;
      }
    },
  },
};
</script>
