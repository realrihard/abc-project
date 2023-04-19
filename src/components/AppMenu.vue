<template>
    <div class="menu">
        <div class="menu__header">
            <div class="close__btn" @click="handleCloseMenu">
            </div>
        </div>
        <ul class="menu__list">
            <li class="menu__list-item">Главная</li>
            <li class="menu__list-item">Информация о тесте</li>
            <li class="menu__list-item">Пройти тест</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AppMenu',
    setup(props, context) {
        const handleCloseMenu = () => {
            context.emit('menu', false)
        }

        return {
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
            color: #fff;
            text-transform: uppercase;
            padding: 15px 0;
            transition: color .3s ease-in-out;
            
            &:hover {
                color: #F4CE0C;
                cursor: pointer;
                transition: color .3s ease-in-out;
            }
        }
    }
}

.close__btn {
    position: relative;
    width: 28px;
    height: 28px;
    display: block;

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