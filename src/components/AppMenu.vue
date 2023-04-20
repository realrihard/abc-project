<template>
    <div class="menu">
        <div class="menu__header">
            <div class="close__btn" @click="handleCloseMenu">
            </div>
        </div>
        <ul class="menu__list">
            <li class="menu__list-item">
                <router-link to="/">Главная</router-link>
            </li>
            <li class="menu__list-item">
                <router-link to="/results">Информация о тесте</router-link>
            </li>
            <li class="menu__list-item">
                <router-link to="/quiz">Пройти тест</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name: 'AppMenu',
    setup(props, context) {
        const router = useRouter()
        const handleCloseMenu = () => {
            context.emit('menu', false)
        }

        router.afterEach(() => {
            handleCloseMenu();

        });

        return {
            router,
            handleCloseMenu
        }
    }
}
</script>

<style lang="scss" scoped>
.menu {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
    background-color: #181818;
    z-index: 10;

    &__header {
        display: flex;
        justify-content: flex-end;
    }

    &__list {
        padding: 40px 0 0 0;
        margin: 0;
        list-style: none;

        &-item {
            font-family: 'Roboto';
            font-weight: 300;
            font-size: 16px;
            line-height: 22px;
            text-transform: uppercase;
            padding: 15px 0;

            a {
                color: #fff;
                text-decoration: none;
                transition: color .3s ease-in-out;

                &:hover {
                    color: #F4CE0C;
                    transition: color .3s ease-in-out;
                }
            }
        }
    }
}

.close__btn {
    position: relative;
    width: 28px;
    height: 28px;
    display: block;
    cursor: pointer;

    &::after {
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        content: '';
        width: 100%;
        height: 3px;
        background-color: #FFC700;
        transform: rotate(45deg);
    }
    &::before {
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        content: '';
        width: 100%;
        height: 3px;
        background-color: #FFC700;
        transform: rotate(-45deg);
    }
}
</style>