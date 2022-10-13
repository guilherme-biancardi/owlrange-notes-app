export const createRoute = (path, component, routerView, routeParams = {}) => {
    const route = {
        path,
        components: {
            [routerView]: () => component
        }
    }

    return Object.assign(route, routeParams)
}