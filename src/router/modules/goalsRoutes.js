import { createRoute } from "./createRoute.js"

const routerView = 'main'

const addGoal = createRoute('add-goal', import('../../views/studentGoals/addGoal.vue'), routerView)

export {
    addGoal
}