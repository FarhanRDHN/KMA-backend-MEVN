import { defineStore } from 'pinia'
import authService from '../services/authService';

const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isLoggedIn: false
  }),
      actions: {
        async login(credentials) {
          try {
            const response = await authService.loginAuth(credentials);
            this.user = response.data
            this.isLoggedIn = true
            
          } catch (error) {
            throw new Error('Login failed');
          }
        },
        logout() {
          this.user = null
          this.isLoggedIn = false

        },
      },
      persist: true
})

export default useAuthStore