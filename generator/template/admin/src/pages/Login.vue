<template>
  <v-app>
    <div :class="$style.container">
      <h4>Login</h4>
      <ExampleForm @submit="onSubmit" />
    </div>
  </v-app>
</template>

<style module>
.container {
  text-align: center;
}
</style>

<script>
import ExampleForm from '@/forms/Example.vue';

export default {
  name: 'Login',
  components: {
    ExampleForm,
  },
  methods: {
    onSubmit(values) {
      console.log('values:', values);
      this.$router.push('users');
    },
  },
};
</script>
