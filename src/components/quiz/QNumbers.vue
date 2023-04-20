<template>
    <div class="quiz__block">
        <div class="quiz__block-title">{{questionData.question}}</div>
        <div class="quiz__block-image"><img :src="imagePath" alt=""></div>
        <div class="quiz__block-numbers">
            <div class="quiz__block-item" v-for="answer in questionData.answer" :key="answer">
                <input class="num__btn" type="radio" :id="answer.value" :value="answer.value" v-model="selectedAnswer">
                <label :for="answer.value"><span>{{answer.title}}</span></label>
            </div>
            
        </div>
        <div class="quiz__block-next">
            <app-btn btnText="Далее" :btnState="btnState" @click="getAnswer"></app-btn>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
    name: 'QList',
    props: {
        questionData: {
            type: Object
        }
    },
    setup(props, context) {
        const selectedAnswer = ref(null)

        const getAnswer = () => {
            context.emit('get-answer', selectedAnswer.value)
            selectedAnswer.value = null
        }

        const btnState = computed(() => {
            return selectedAnswer.value === null
        })

        const imagePath = computed(() => {
            return '../assets/' + props.questionData.image
        })

        return {
            btnState,
            selectedAnswer,
            getAnswer,
            imagePath
        }
    },
}
</script>

<style lang="scss" scoped>
.quiz__block {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 40px;
    color: #fff;    
    padding: 30px 0;

    &-title {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        padding: 0 15px;
    }

    &-image {
        display: flex;
        justify-content: center;
        padding: 0 15px;
    }

    &-numbers {
        display: flex;
        justify-content: space-around;
        border-top: 4px solid #F2F3F3;
        padding: 20px 15px 0;
    }

    &-item {
        width: 40px;
        height: 40px;
    }

    &-next {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 40px 0;
    }
}

.num__btn {
    display: none;

    & + label > span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: #fff;
        color: #000;
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        cursor: pointer;
    }

    &:checked + label > span {
        border: 6px solid #FFC700;
    }
}
</style>