<template>
  <v-form v-model="valid" @submit="onSubmit">
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="data.name"
            :rules="rules"
            label="Nome"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="data.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="data.company.name"
            :rules="rules"
            label="Empresa"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          cols="12"
          md="4"
        >
          <v-btn
            :disabled="!valid"
            :loading="submitLoading"
            color="success"
            class="mr-4"
            type="submit"
            block
          >
            Salvar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
    submitLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      valid: false,
      data: {
        name: this.user.name,
        email: this.user.email,
        company: {
          // Optional Chaining: https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
          name: this.user.company?.name,
        },
      },
      rules: [
        (v) => !!v || 'Campo obrigatório',
      ],
      emailRules: [
        (v) => !!v || 'Campo obrigatório',
        (v) => /.+@.+/.test(v) || 'E-mail inválido',
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (!this.valid) return;
      this.$emit('submit', this.data);
    },
  },
};
</script>
