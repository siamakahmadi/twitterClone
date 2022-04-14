<template>
  <div class="container">
    <LeftSidebarVue />
    <slot />
    <RightSidebarVue>
      <template v-slot:Content>
        <div class="container">
          <div class="search-box">
            <input type="text" value="" placeholder="Search Twitter" />
          </div>

          <NewsSection />

          <DirectMessageMini />
        </div>
      </template>
    </RightSidebarVue>

    <div class="navigationMobile">
      <MobilaNavVue />
    </div>
  </div>
</template>

<script >
import RightSidebarVue from "../Components/RightSidebar.vue";
import LeftSidebarVue from "../Components/LeftSidebar.vue";
import MobilaNavVue from "../Components/MobilaNav.vue";
import DirectMessageMini from "@/components/DirectMessageMini/index.vue";
import NewsSection from "@/components/NewsSection/index.vue";
export default {
  name: "HomeLayout",
  components: {
    MobilaNavVue,
    RightSidebarVue,
    LeftSidebarVue,
    DirectMessageMini,
    NewsSection,
  },
};
</script>

