<template>
    <button class="btn">{{btnText}}</button>
</template>

<script>
export default {
    name: 'AppBtn',
    props: {
        btnText: {
            type: String
        }
    },
    setup() {
        
    }
}
</script>

<style lang="scss" scoped>
.btn {
    width: 189px;
    height: 41px;
    font-family: 'Merriweather';
    font-size: 14px;
    border: none;
    border-radius: 20px;
    background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
    color: #0D0C11;
}
</style>