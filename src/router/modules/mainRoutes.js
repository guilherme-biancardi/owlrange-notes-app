import { createRoute } from './createRoute.js'

const routerView = 'main'

const studentArea = createRoute('student-area', import('../../views/studentAreaView.vue'), routerView)
const goalsSchedule = createRoute('goals-schedule', import('../../views/studentGoalsView.vue'), routerView)
const studentMaterial = createRoute('material-student', import('../../views/studentMaterialView.vue'), routerView)
const studentPerfil = createRoute('account', import('../../views/studentPerfilView.vue'), routerView)
const studentSetting = createRoute('settings', import('../../views/studentSettingView.vue'), routerView)

export {
    studentArea,
    goalsSchedule,
    studentMaterial,
    studentPerfil,
    studentSetting,
}
