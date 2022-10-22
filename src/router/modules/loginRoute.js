import { pinia } from '@/store/index.js';
import { useUserStore } from '@/store/userStore.js';
import { createRoute } from './createRoute.js';

const userStore = useUserStore(pinia)

export const loginRoute  = createRoute('/', import('../../views/login/LoginView.vue'), 'app', {
    redirect: '/sign-in',
    children: [
        createRoute('sign-in', import('../../views/login/SignInView.vue'), 'login'),
        createRoute('register', import('../../views/login/RegisterView.vue'), 'login')
    ],
    beforeEnter: (to, from, next) => userStore.getLoggedIn ? next({ path: 'app' }) : next(),
})