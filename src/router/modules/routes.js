import { createRoute } from "./createRoute.js";

const teste = createRoute('/student-area', import('../../views/studentArea.vue'))

export const useRoutes = () => ([
    {
        path: '/',
        redirect: '/student-area'
    },
    teste
])