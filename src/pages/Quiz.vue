<template>
    <div class="quiz__wrapper" v-if="questionData.value">
            <statusbar  :totalSteps="totalQuestions" :currentStep="currentIndex"/>

            <transition name="move" mode="out-in" :leave-active-class="moveLeaveActive" :enter-from-class="moveEnterFrom" :leave-to-class="moveLeaveTo">
                <div class="quiz__content" :key="currentIndex">
                    <q-list  v-if="questionData.value.type === 'list'" :questionData="questionData.value" @choose-answer="chooseAnswer"/>
                    <q-lusher v-if="questionData.value.type === 'lusher'" :questionData="questionData.value" @choose-answer="chooseAnswer"/>
                    <q-numbers :key="currentIndex" v-if="questionData.value.type === 'numbers'" :questionData="questionData.value" @choose-answer="chooseAnswer"/>
                </div>
            </transition>

            <div class="quiz__next" style="color: #fff">
                <app-btn btnText="Далее" :btnState="tempAnswer === null" @click="getAnswer"></app-btn>
            </div>
    </div>

    <div class="quiz__wrapper" v-if="currentIndex >= totalQuestions ">
        <statusbar :totalSteps="totalQuestions" :currentStep="currentIndex"/>
        <q-load />
    </div>
</template>

<script>
import { onMounted, ref, reactive, computed, onUnmounted } from 'vue'
import quizData from '../data/quiz.json'
import QList from '../components/quiz/QList.vue'
import QLusher from '../components/quiz/QLusher.vue'
import QNumbers from '../components/quiz/QNumbers.vue'
import Statusbar from '../components/quiz/Statusbar.vue'
import QLoad from '../components/quiz/QLoad.vue'
import { useStore } from '../store'

export default {
    name: 'Quiz',
    components: {
        QList,
        QLusher,
        QNumbers,
        Statusbar,
        QLoad
    },
    setup() {
        const store = useStore()
        const questionData = reactive({})
        const currentIndex = ref(0)
        const tempAnswer = ref(null)

        onMounted(() => {
            loadQuestionData()
        })
        onUnmounted(() => {
            currentIndex.value = 0
        })

        const totalQuestions = computed(() => {
            return Object.keys(quizData).length
        })

        const loadQuestionData = () => {
            questionData.value = quizData[currentIndex.value]
        }

        const chooseAnswer = (data) => {
            tempAnswer.value = data
        }

        const getAnswer = () => {
            store.getAnswer(tempAnswer.value)
            currentIndex.value++
            loadQuestionData(currentIndex.value)
            tempAnswer.value = null
        }

        return {
            questionData,
            totalQuestions,
            currentIndex,
            tempAnswer,
            loadQuestionData,
            chooseAnswer,
            getAnswer,
            moveLeaveActive: 'move-leave-active',
            moveEnterFrom: 'move-enter-from',
            moveLeaveTo: 'move-leave-to',
        }
    }
}
</script>

<style lang="scss" scoped>
.quiz {
    &__wrapper {
        background: url('../assets/quiz_bg.jpg');
        background-size: contain;
        height: calc(100vh - 46px);
        overflow: hidden;
    }

    &__next {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
}

.move-enter-active, .move-leave-active {
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.move-enter-from {
    transform: translateX(100%);
}
.move-leave-to {
    transform: translateX(-100%);
}
</style>