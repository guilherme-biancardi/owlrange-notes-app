export const createRoute = (path, component, routeParams = {}) => {
    const route = {
        path,
        component: () => component
    }

    return Object.assign(route, routeParams)
}