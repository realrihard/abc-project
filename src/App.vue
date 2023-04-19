<template>
  <div class="container" :class="showMenu ? 'noscroll' : ''">
    <app-header @menu="handleMenuState"/>
    <app-menu v-show="showMenu" @menu="handleMenuState"/>

    <RouterView />
  </div>
</template>

<script>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

export default {
  setup() {
    const showMenu = ref(false)

    const handleMenuState = (data) => {
      showMenu.value = data
    }
    return {
      showMenu,
      handleMenuState
    }
  }
}
</script>

<style lang="scss">
div {
  box-sizing: border-box;
}
.container {
  position: relative;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;

  &.noscroll {
    height: 100vh;
    overflow: hidden;
  }
}

p {
  margin: 0;
}
</style>

