<template>
    <button class="btn" :disabled="btnState">{{btnText}}</button>
</template>

<script>
export default {
    name: 'AppBtn',
    props: {
        btnText: {
            type: String
        },
        btnState: {
            type: Boolean,
            default: false
        }
    },
    setup() {

    }
}
</script>

<style lang="scss" scoped>
.btn {
    width: 189px;
    height: 44px;
    font-family: 'Merriweather';
    font-size: 14px;
    border: none;
    border-radius: 22px;
    background: #FFC700;
    color: #0D0C11;
    transition: background .3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #ffee00;
        transition: background .3s ease-in-out
    }

    &:disabled {
        background: #DADADA;
        color: #8E8E8E;
        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
        cursor: not-allowed;
    }
}
</style>