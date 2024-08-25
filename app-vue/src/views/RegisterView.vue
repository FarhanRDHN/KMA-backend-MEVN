<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <div>
        <label for="Name">Name:</label>
        <input type="Name" v-model="name" required />
      </div>

      <button type="submit">Login</button>
    </form>
    <!-- <button @click="store.resetInvalCredent()">reset</button> -->


    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import registerServices from '@/services/registerService.js'
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const name = ref('');
const error = ref('');

const registerUser = async () => {
  try {
    await registerServices.register({ username: username.value, password: password.value, name: name.value });

    router.push('/login')
  } catch (err) {
    error.value = 'Username already exists!';
  }
};
  

</script>
