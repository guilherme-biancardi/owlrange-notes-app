import { appRoute } from "./appRoute.js";
import { loginRoute } from "./loginRoute.js";

export const useRoutes = () => ([
    {
        path: '/',
        redirect: '/app',
        children: [
            loginRoute,
            appRoute
        ]
    },
])