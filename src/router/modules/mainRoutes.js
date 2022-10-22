import { createRoute } from './createRoute.js'

const routerView = 'main'

const studentArea = createRoute('student-area', import('../../views/studentAreaView.vue'), routerView)
const goalsSchedule = createRoute('goals-schedule', import('../../views/studentGoalsView.vue'), routerView, {
    meta: {
        breadcrumb: [
            { path: 'student-area', name: 'Área do Estudante' },
            { path: 'goals-schedule', name: 'Cronograma de Metas' }
        ]
    }
})
const studentMaterial = createRoute('material-student', import('../../views/studentMaterialView.vue'), routerView, {
    meta: {
        breadcrumb: [
            { path: 'student-area', name: 'Área do Estudante' },
            { path: 'material-student', name: 'Material de Estudo' }
        ]
    }
})
const studentPerfil = createRoute('account', import('../../views/studentPerfilView.vue'), routerView, {
    meta: {
        breadcrumb: [
            { path: 'student-area', name: 'Área do Estudante' },
            { path: 'account', name: 'Perfil' }
        ]
    }
})
const studentSetting = createRoute('settings', import('../../views/studentSettingView.vue'), routerView, {
    meta: {
        breadcrumb: [
            { path: 'student-area', name: 'Área do Estudante' },
            { path: 'settings', name: 'Configurações' }
        ]
    }
})

export {
    studentArea,
    goalsSchedule,
    studentMaterial,
    studentPerfil,
    studentSetting,
}
