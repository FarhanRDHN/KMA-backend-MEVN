/* eslint-disable */
<template>
  <nav class="navbar">
    <div class="navbar-links">
      <div>
        <button v-if="isAuthenticated" @click="logOut()" class="nav-item logout-button">Logout</button>
        <router-link v-if="!isAuthenticated" to="/login" class="nav-item"> Login </router-link> 
      </div>
      <div>
        <router-link to="/register" class="nav-item"> Register </router-link>
      </div>
      </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import useAuthStore from '@/stores/useAuthStore';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useAuthStore();
const isAuthenticated = computed(() => store.isLoggedIn);

function logOut() {
  store.logout()
  router.push('/')
}
</script>
