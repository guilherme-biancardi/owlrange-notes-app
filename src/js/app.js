import moment from "moment"
import { useRoute, useRouter } from "vue-router"

export const useApp = () => ({
    moment, 
    router: useRouter(),
    route: useRoute()
})