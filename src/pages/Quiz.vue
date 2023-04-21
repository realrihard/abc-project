<template>
    <div class="quiz__wrapper" v-if="questionData.value">
            <statusbar  :totalSteps="totalQuestions" :currentStep="currentIndex"/>
            <transition name="move" mode="out-in" v-leave-active-class="move-leave-active" v-enter-from-class="move-enter-from" v-leave-to-class="move-leave-to">
                <q-list :key="currentIndex" v-if="questionData.value.type === 'list'" :questionData="questionData.value" @get-answer="getAnswer"/>
            </transition>
            <transition name="move" mode="out-in" v-leave-active-class="move-leave-active" v-enter-from-class="move-enter-from" v-leave-to-class="move-leave-to">
                <q-lusher :key="currentIndex" v-if="questionData.value.type === 'lusher'" :questionData="questionData.value" @get-answer="getAnswer"/>
            </transition>
            <transition name="move" mode="out-in" v-leave-active-class="move-leave-active" v-enter-from-class="move-enter-from" v-leave-to-class="move-leave-to">
                <q-numbers :key="currentIndex" v-if="questionData.value.type === 'numbers'" :questionData="questionData.value" @get-answer="getAnswer"/>
            </transition>
        
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

        const getAnswer = (data) => {
            store.getAnswer(data)
            currentIndex.value++
            loadQuestionData(currentIndex.value)
        }

        return {
            questionData,
            totalQuestions,
            currentIndex,
            loadQuestionData,
            getAnswer
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
}

.move-enter-active, .move-leave-active {
    transition: transform 0.3s;
  }

  .move-enter-from {
    transform: translateX(100%);
  }
  
  .move-leave-to {
    transform: translateX(-100%);
  }
</style>