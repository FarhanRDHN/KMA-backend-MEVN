import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import Login from '@/views/LoginView.vue';
import Register from '@/views/RegisterView.vue';
import useAuthStore from '@/stores/useAuthStore.js';

const routes = [
  { path: '/', 
    component: Home 
  },
  { 
    path: '/login', 
    component: Login 
  },  
  { 
    path: '/register', 
    component: Register 
  },
  { 
    path: '/about', 
    component: About, 
  },
  { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const store = useAuthStore()

    if (!store.isLoggedIn) {
      return next('/login');
    }
  }
  next();
});

export default router;
