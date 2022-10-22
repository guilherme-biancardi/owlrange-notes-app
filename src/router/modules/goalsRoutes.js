import { createRoute } from "./createRoute.js"

const routerView = 'main'

const addGoal = createRoute('add-goal', import('../../views/studentGoals/addGoal.vue'), routerView, {
    meta: {
        breadcrumb: [
            { path: 'student-area', name: 'Área do Estudante' },
            { path: 'goals-schedule', name: 'Cronograma de Metas' },
            { path: 'add-goal', name: 'Adicionar Meta' }
        ]
    }
})

export {
    addGoal
}