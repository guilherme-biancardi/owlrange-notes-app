import { createRoute } from './createRoute.js';

export const loginRoute  = createRoute('/', import('../../views/login/LoginView.vue'), 'app', {
    redirect: '/sign-in',
    children: [
        createRoute('sign-in', import('../../views/login/SignInView.vue'), 'login'),
        createRoute('register', import('../../views/login/RegisterView.vue'), 'login')
    ]
})