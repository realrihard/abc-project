<template>
    <div class="quiz__block">
        <div class="quiz__block-title">{{questionData.question}}</div>
        <div class="quiz__block-list">
            <div class="quiz__block-btn" v-for="answer in questionData.answer" :key="answer.title">
                <input class="list__btn" type="radio" :id="answer.value" :value="answer.value" v-model="selectedAnswer" @change="chooseAnswer">
                <label :for="answer.value">
                    <span><span class="round"></span>{{ answer.title }}</span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
export default {
    name: 'QList',
    props: {
        questionData: {
            type: Object
        }
    },
    setup(props, context) {
        const selectedAnswer = ref(null)

        const chooseAnswer = () => {
            context.emit('choose-answer', selectedAnswer.value)
        }

        const btnState = computed(() => {
            return selectedAnswer.value === null
        })

        return {
            btnState,
            selectedAnswer,
            chooseAnswer
        }
    },
}
</script>

<style lang="scss" scoped>
.quiz__block {
    width: 100%;
    min-width: 320px;
    position: relative;
    display: flex;
    flex-direction: column;
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
        padding: 0 30px;
    }

    &-list {
        display: flex;
        flex-direction: column;
    }
}
.list__btn {
    display: none;

    & + label {
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        box-sizing: border-box;
        width: 100%;
        min-height: 50px;
        margin-top: 8px;
        display: flex;
        column-gap: 20px;
        align-items: center;
    }

    & + label > span {
        display: grid;
        grid-template-columns: 20px 1fr;
        column-gap: 20px;
        align-items: center;
        width: 100%;
        min-height: 50px;
        background-color: rgba(255, 255, 255, .5);
        padding: 10px 35px;
        transition: all .3s ease-in-out;
        cursor: pointer;

        & > .round {
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 10px;
            border: 1px solid #fff;
            background-color: transparent;
            transition: all .3s ease-in-out;
        }
    }

    &:checked + label > span {
        background-color: #FFC700;
        color: #000;
        transition: all .3s ease-in-out;

        & > span {
            background-color: #2950C2;
            border: 1px solid #000;
            transition: all .3s ease-in-out;
        }
    }
}
</style>