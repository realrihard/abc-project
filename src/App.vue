<template>
  <div class="container" :class="showMenu ? 'noscroll' : ''">
    <app-header @menu="handleMenuState"/>
    <app-menu v-show="showMenu" @menu="handleMenuState"/>
    <RouterView />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { RouterView, useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const showMenu = ref(false)

    const handleMenuState = (data) => {
      showMenu.value = data
    }

    return {
      route,
      showMenu,
      handleMenuState
    }
  }
}
</script>

<style lang="scss">
@import 'normalize.css';

div, span {
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

