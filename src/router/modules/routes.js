import { studentArea, goalsSchedule, studentMaterial, studentPerfil, studentSetting } from "./mainRoutes.js";

export const useRoutes = () => ([
    {
        path: '/',
        redirect: '/student-area'
    },
    studentArea, 
    goalsSchedule, 
    studentMaterial, 
    studentPerfil, 
    studentSetting
])