<template>
    <button class="btn">{{btnText}}</button>
</template>

<script>
export default {
    name: 'AppBtn',
    props: {
        btnText: {
            type: String,
            default: ''
        }
    },
    setup() {
        
    }
}
</script>

<style lang="scss" scoped>
.btn {
    width: 200px;
    height: 44px;
    font-family: 'Merriweather';
    font-weight: 700;
    font-size: 14px;
    border: 1px solid #fff;
    border-radius: 22px;
    background: transparent;
    color: #fff;
    transition: all .3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #fff;
        color: #222;
        transition: all .3s ease-in-out;
    }
}
</style>