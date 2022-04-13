<template>
  <div class="container">
    <LeftSidebarVue/>
    <slot />
    <RightSidebarVue/>


    <div class="navigationMobile">
      <MobilaNavVue/>
    </div>
  </div>
</template>

<script >
import RightSidebarVue from "../Components/RightSidebar.vue";
import LeftSidebarVue from "../Components/LeftSidebar.vue";
import MobilaNavVue from "../Components/MobilaNav.vue";
export default {
  name:"HomeLayout",
  components:{
      MobilaNavVue,
      RightSidebarVue,
      LeftSidebarVue
  }
};
</script>

