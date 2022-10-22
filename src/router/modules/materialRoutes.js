import { createRoute } from "./createRoute.js"

const routerView = 'main'

const addMaterial = createRoute('add-material', import('../../views/studentMaterial/AddMaterialView.vue'), routerView,{
    meta: {
        breadcrumb: [
            { path: 'student-area', name: 'Área do Estudante' },
            { path: 'material-student', name: 'Material de Estudo' },
            { path: 'add-material', name: 'Adicionar Material' }
        ]
    }
})

export {
    addMaterial
}