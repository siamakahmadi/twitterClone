<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
  name: "App",
  setup() {
    const route = new useRoute();
    const layout = computed(() => {
      return route.meta.layout + "Layout";
    });

    return {
      layout,
    };
  },
};
</script>

<style lang="scss">
  @import './assets/scss/layouts/main.scss';
</style>

