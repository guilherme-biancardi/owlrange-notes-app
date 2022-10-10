import { createRoute } from "./createRoute.js";

const studentArea = createRoute('/student-area', import('../../views/studentArea.vue'))
const goalsSchedule = createRoute('/goals-schedule', import('../../views/studentGoals.vue'))
const studentMaterial = createRoute('/material-student', import('../../views/studentMaterial.vue'))
const studentPerfil = createRoute('/account', import('../../views/studentPerfil.vue'))
const studentSetting = createRoute('/settings', import('../../views/studentSetting.vue'))




export const useRoutes = () => ([
    {
        path: '/',
        redirect: '/student-area'
    },
    studentArea,
    goalsSchedule,
    studentMaterial,
    studentPerfil,
    studentSetting,
])