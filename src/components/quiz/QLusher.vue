<template>
    <div class="quiz__block">
        <div class="quiz__block-title">{{questionData.question}}</div>
        <div class="quiz__block-grid">
            <div class="quiz__block-btn" v-for="answer in questionData.answer" :key="answer">
                <input class="lusher__btn" type="radio" :id="answer.value" :value="answer.value" v-model="selectedAnswer" @change="getAnswer">
                <label :for="answer.value"><span :style="{ 'background-color': answer.color }"></span></label>
            </div>
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
            context.emit('choose-answer', selectedAnswer.value)
        }

        return {
            selectedAnswer,
            getAnswer
        }
    },
}
</script>

<style lang="scss" scoped>
.quiz__block {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 40px;
    color: #fff;    
    padding: 30px 15px;

    &-title {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
    }

    &-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
}

.lusher__btn {
    display: none;

    & + label > span {
        display: block;
        width: 100%;
        height: 85px;
        cursor: pointer;
    }

    &:checked + label > span {
        border: 6px solid #FFC700;
    }
}
</style>