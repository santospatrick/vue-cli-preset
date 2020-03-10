<template>
  <div class="text-center">
    <h1>{{ title }}</h1>
    <UserForm v-if="!loading"
      :user="item"
      :submit-loading="submitLoading"
      @submit="onSubmit" />
    <v-progress-circular
      v-else
      class="mt-10"
      indeterminate
      color="primary"
    ></v-progress-circular>
  </div>
</template>

<script>
import UserForm from '@/forms/User.vue';
import { mapActions, mapState, mapMutations } from 'vuex';

export default {
  name: 'UsersFormContainer',
  components: {
    UserForm,
  },
  data() {
    return {
      loading: true,
      submitLoading: false,
    };
  },
  mounted() {
    this.getUser();
  },
  computed: {
    ...mapState('users', ['item']),
    title() {
      return this.isNew ? 'Novo usuário' : `Usuário: ${this.$route.params.id}`;
    },
    isNew() {
      return !this.$route.params.id;
    },
  },
  beforeDestroy() {
    this.clearItem();
  },
  methods: {
    ...mapActions('users', ['postItem', 'getRouteItem']),
    ...mapMutations('users', ['clearItem']),
    async getUser() {
      try {
        await this.getRouteItem();
      } finally {
        this.loading = false;
      }
    },
    async onSubmit(values) {
      this.submitLoading = true;

      try {
        if (this.isNew) {
          // Novo cadastro
          await this.postItem(values);
        } else {
          // Edição cadastro
          const { id } = this.$route.params;
          await this.putItem({ id, values });
        }
      } finally {
        this.submitLoading = false;
      }
    },
  },
};
</script>
