import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        loggedIn: true
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