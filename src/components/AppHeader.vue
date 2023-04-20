<template>
    <header>
        <div class="menu__btn" @click="handleOpenMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="header__info" v-if="$route.meta.headerText">
            <div class="header__info-image"><img :src="imagePath" alt=""></div>
            <div class="header__info-text">{{ $route.meta.headerText }}</div>
        </div>
    </header>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'


export default {
    name: 'AppHeader',
    props: {
        headerText: {
            type: String
        }
    },
    setup(props, context) {
        const route = useRoute();
        const handleOpenMenu = () => {
            context.emit('menu', true)
        }

        const imagePath = computed(() => {
            return 'src/assets/' + route.meta.headerImage
        })

        return {
            route,
            handleOpenMenu,
            imagePath
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    box-sizing: border-box;
    display: flex;
    column-gap: 20px;
    align-items: center;
    width: 100%;
    height: 46px;
    background-color: #181818;
    padding: 0 15px;
}
.header {
    &__info {
        color: #fff;
        display: flex;
        column-gap: 10px;
        align-items: center;

        &-image {
            width: 48px;
            img {
                width: 100%;
            }
        }

        &-text {
            font-family: 'Yeseva One';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            text-transform: uppercase;
            color: #FFC700;
        }
    }
}
.menu__btn {
    width: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 3px;

    span {
        height: 3px;
        background-color: #DADADA;
        transition: background .3s ease-in-out;
    }

    &:hover {
        cursor: pointer;

        span {
            background-color: #fff;
            transition: background .3s ease-in-out;
        }
    }
}
</style>