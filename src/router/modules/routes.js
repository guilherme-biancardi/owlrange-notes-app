import { appRoute } from "./appRoute.js";
import { createRoute } from "./createRoute.js";
import { forgotRoute } from "./forgotRoute.js";
import { loginRoute } from "./loginRoute.js";

export const useRoutes = () => ([
    {
        path: '/',
        children: [
            loginRoute,
            appRoute
        ]
    },
    createRoute('/:pathMatch(.*)*', import('../../views/NotFoundView.vue'), 'app'),
    forgotRoute
])