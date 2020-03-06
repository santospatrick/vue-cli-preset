<template>
    <div>
      <h4>Login</h4>
      <ExampleForm @submit="onSubmit" />
    </div>
</template>

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
    },
  },
};
</script>
