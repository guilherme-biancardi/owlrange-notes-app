import { createRoute } from "./createRoute.js"

const routerView = 'main'

const addMaterial = createRoute('/add-material', import('../../views/studentMaterial/AddMaterialView.vue'), routerView)

export {
    addMaterial
}