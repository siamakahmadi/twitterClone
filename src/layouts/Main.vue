<template>
  <div class="container">
    <LeftSidebarVue />
    <slot />

    <RightSidebarVue />

    <div class="navigationMobile">
      <MobilaNavVue />
    </div>
  </div>
</template>

<script>
import MobilaNavVue from "./Components/MobilaNav.vue";
import LeftSidebarVue from "./Components/LeftSidebar.vue";
import RightSidebarVue from "./Components/RightSidebar.vue";
export default {
  name: "MainLayout",
  components: {
    MobilaNavVue,
    LeftSidebarVue,
    RightSidebarVue,
  },
};
</script>

<style>
</style>