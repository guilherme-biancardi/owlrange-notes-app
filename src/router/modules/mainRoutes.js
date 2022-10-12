import { createRoute } from './createRoute.js'

const routerView = 'main'

const studentArea = createRoute('/student-area', import('../../views/studentArea.vue'), routerView)
const goalsSchedule = createRoute('/goals-schedule', import('../../views/studentGoals.vue'), routerView)
const studentMaterial = createRoute('/material-student', import('../../views/studentMaterial.vue'), routerView)
const studentPerfil = createRoute('/account', import('../../views/studentPerfil.vue'), routerView)
const studentSetting = createRoute('/settings', import('../../views/studentSetting.vue'), routerView)

export {
    studentArea,
    goalsSchedule,
    studentMaterial,
    studentPerfil,
    studentSetting,
}