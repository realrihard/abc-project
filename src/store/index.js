import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        menu: false
    }),

    actions: {
        showMenu() {
            this.menu = !this.menu
        }
    }
})
