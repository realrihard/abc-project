import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        quizKeys: []
    }),

    actions: {
        getAnswer(answer) {
            this.quizKeys.push(answer)
        }
    }
})
