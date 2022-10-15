import { pinia } from "@/store/index.js";
import { useUserStore } from "@/store/userStore.js";
import { createRoute } from "./createRoute.js";
import { studentArea, goalsSchedule, studentMaterial, studentPerfil, studentSetting } from "./mainRoutes.js";

const userStore = useUserStore(pinia)

export const appRoute = createRoute('app', import('../../views/MainContentView.vue'), 'app', {
    name: 'teste',
    redirect: 'app/student-area',
    children: [
        studentArea,
        goalsSchedule,
        studentMaterial,
        studentPerfil,
        studentSetting
    ],
    beforeEnter: (to, from, next) => !userStore.getLoggedIn ? next({ path: '/' }) : next(),
})