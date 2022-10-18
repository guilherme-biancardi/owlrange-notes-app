import { appRoute } from "./appRoute.js";
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
    forgotRoute
])