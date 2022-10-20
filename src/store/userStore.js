import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        loggedIn: false
    }),
    getters: {
        getLoggedIn: state => state.loggedIn
    },
    actions: {
        setLogin(value) {
            this.loggedIn = value
        }
    }
})
