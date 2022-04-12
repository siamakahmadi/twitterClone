<template>
  <div class="navigation">
    <div class="items">
      <router-link class="item" :to="{ name: 'home' }">
        <HomeIcon/>
      </router-link>

      <router-link class="item" :to="{ name: 'notification' }">
        <ProfileIcon/>
      </router-link>

      <router-link class="item" :to="{ name: 'message' }">
        <MessageIcon/>
      </router-link>

      <router-link class="item" :to="{ name: 'profile' }">
        <NotificationIcon/>
      </router-link>
    </div>
  </div>
</template>

<script>
import HomeIcon from "./assets/icon/Home.vue";
import ProfileIcon from "./assets/icon/Profile.vue";
import MessageIcon from "./assets/icon/Message.vue";
import NotificationIcon from "./assets/icon/Notification.vue";
export default {
  name:"MobileNav",
  components:{
    HomeIcon,
    ProfileIcon,
    MessageIcon,
    NotificationIcon
  }
};
</script>

<style lang="scss">
@import "./assets/style/mobileNav.scss";
</style>