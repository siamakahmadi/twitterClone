<template>
  <div class="left-sidebar">
    <div class="container">
      <p class="title">Twitter</p>
      <div class="navigation">
        <router-link class="nav-item" :to="{ name: 'home' }">
          <div class="icon">
            <Home />
          </div>
          <p class="nav-title">Home</p>
        </router-link>

        <router-link :to="{ name: 'explore' }" class="nav-item">
          <div class="icon">
            <Explore />
          </div>
          <p class="nav-title">Explore</p>
        </router-link>

        <router-link :to="{ name: 'notification' }" class="nav-item">
          <div class="icon">
            <Notification />
          </div>
          <p class="nav-title">Notifications</p>
        </router-link>

        <router-link :to="{ name: 'message' }" class="nav-item">
          <div class="icon">
            <Message />
          </div>
          <p class="nav-title">Message</p>
        </router-link>

        <router-link :to="{ name: 'bookmarks' }" class="nav-item">
          <div class="icon">
            <Bookmark />
          </div>
          <p class="nav-title">Bookmarks</p>
        </router-link>

        <router-link :to="{ name: 'lists' }" class="nav-item">
          <div class="icon">
            <List />
          </div>
          <p class="nav-title">Lists</p>
        </router-link>

        <router-link :to="{ name: 'profile' }" class="nav-item">
          <div class="icon">
            <List />
          </div>
          <p class="nav-title">Profile</p>
        </router-link>
        
        <div class="nav-item">
          <div class="icon">
            <Profile />
          </div>
          <p class="nav-title">More</p>
        </div>
      </div>
      <a class="btn tweet">
        <p class="btn-title">Tweet</p>
      </a>
      <div class="profile-summary">
        <div class="profile-img">
          <img src="@/assets/images/profile1.jpg" alt="" />
        </div>
        <div class="profile-info">
          <p class="name">Siamak Ahmadi</p>
          <p class="user-name">_siamakahmadi</p>
        </div>
        <div class="modal-icon">
          <More />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./assets/icon/Home.vue";
import Explore from "./assets/icon/Explore.vue";
import Notification from "./assets/icon/Notification.vue";
import Message from "./assets/icon/Message.vue";
import Bookmark from "./assets/icon/Bookmark.vue";
import List from "./assets/icon/List.vue";
import Profile from "./assets/icon/Profile.vue";
import More from "./assets/icon/More.vue";
export default {
  components: {
    Home,
    Explore,
    Notification,
    Message,
    Bookmark,
    List,
    Profile,
    More,
  },
};
</script>

<style lang="scss">
@import "./assets/style/leftSidebar.scss";
</style>