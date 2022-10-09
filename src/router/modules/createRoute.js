export const createRoute = (path, component) => ({
    path,
    component: () => component
})