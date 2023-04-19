<template>
    <header>
        <div class="menu__btn" @click="handleOpenMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
</template>

<script>


export default {
    name: 'AppHeader',
    setup(props, context) {
        const handleOpenMenu = () => {
            context.emit('menu', true)
        }
        return {
            handleOpenMenu
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 46px;
    background-color: #181818;
    padding: 0 15px;
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