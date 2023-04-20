<template>
    <div class="statusbar__wrapper">
        <div class="statusbar">
            <div class="statusbar__line" :style="{'width': statusActiveWidth}"></div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    name: 'Statusbar',
    props: {
        totalSteps: {
            type: Number
        },
        currentStep: {
            type: Number
        }
    },
    setup(props) {
        const statusActiveWidth = computed(() => {
            return Math.round((props.currentStep/props.totalSteps) * 100) + '%'
        })
        return {
            statusActiveWidth
        }
    }
}
</script>

<style lang="scss" scoped>
.statusbar {
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #F2F3F3;

    &__wrapper {
        padding: 15px 30px;
    }

    &__line {
        height: 10px;
        border-radius: 5px;
        background-color: #3BDE7C;
    }
}
</style>