<template>
  <div class="container">
    <LeftSidebar />
    <slot />
    <RightSidebar>
      <!-- <template v-slot:Content>
        <StartMessage />
      </template> -->

      <template v-slot:Direct>
        <DirectChat />
      </template>
    </RightSidebar>

    <div class="navigationMobile">
      <MobilaNav />
    </div>
  </div>
</template>

<script>
import LeftSidebar from "../Components/LeftSidebar.vue";
import MobilaNav from "../Components/MobilaNav.vue";
import RightSidebar from "../Components/RightSidebar.vue";
import StartMessage from "../../components/StartMessage/index.vue";
import DirectChat from "../../components/DirectChat/index.vue";
export default {
  name: "DirectLayout",
  components: {
    LeftSidebar,
    MobilaNav,
    RightSidebar,
    StartMessage,
    DirectChat
  },
};
</script>

<style>
</style>