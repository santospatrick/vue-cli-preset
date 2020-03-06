<template>
  <v-app>
    <v-form v-model="valid" @submit="onSubmit">
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
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
              v-model="password"
              :rules="passwordRules"
              type="password"
              label="Password"
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
              color="success"
              class="mr-4"
              type="submit"
              block
            >
              Entrar
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
import {
  VApp,
  VForm,
  VContainer,
  VRow,
  VCol,
  VTextField,
} from 'vuetify/lib';

export default {
  name: 'ExampleForm',
  components: {
    VApp,
    VForm,
    VContainer,
    VRow,
    VCol,
    VTextField,
  },
  data() {
    return {
      valid: false,
      email: '',
      emailRules: [
        (v) => !!v || 'Campo obrigatório',
        (v) => /.+@.+/.test(v) || 'E-mail inválido',
      ],
      password: '',
      passwordRules: [
        (v) => !!v || 'Campo obrigatório',
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (!this.valid) return;
      this.$emit('submit', { email: this.email, password: this.password });
    },
  },
};
</script>
