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
            :rules="nameRules"
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
          <v-btn
            :disabled="!valid"
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
  },
  data() {
    return {
      valid: false,
      data: {
        name: this.user.name,
      },
      nameRules: [
        (v) => !!v || 'Campo obrigatório',
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
