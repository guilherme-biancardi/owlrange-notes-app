import { pinia } from '@/store/index.js';
import { useUserStore } from '@/store/userStore.js';
import { createRoute } from './createRoute.js';

const userStore = useUserStore(pinia)

export const forgotRoute = createRoute('/forgot-password', import('../../views/ForgotPassword.vue'), 'app', {
    beforeEnter: (to, from, next) => userStore.getLoggedIn ? next({ path: '/app' }) : next()
})