<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <!-- <button @click="store.resetInvalCredent()">reset</button> -->


    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import useAuthStore from '@/stores/useAuthStore';
import { useRouter } from 'vue-router';

const store = useAuthStore();
const router = useRouter();
const username = ref('');
const password = ref('');
const error = ref('');

onMounted(() => {
  if(store.isLoggedIn) {
    return router.push('/')
  }
}) 

const loginUser = async () => {
  try {
    await store.login({ username: username.value, password: password.value });
    router.push('/about')
  } catch (err) {
    error.value = 'Invalid credentials';
  }
};
  

</script>
