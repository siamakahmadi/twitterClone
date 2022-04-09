<template>
  <div class="profile">
    <div class="profile-container">
      <div class="top-bar">
        <div class="left-section">
          <div class="back-icon">
            <LeftIcon />
          </div>
          <div class="user-info">
            <div class="user-name"><p>Sennatela Angell</p></div>
            <div class="tweet-number"><p>23.9l tweets</p></div>
          </div>
        </div>
        <div class="right-section">
          <div class="more-icon">
            <MoreIcon />
          </div>
        </div>
      </div>

      <div class="user-profile">
        <div class="user-profile-container">
          <div class="profile-cover">
            <img src="https://images.unsplash.com/photo-1649528817667-b09da56af19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div class="profile-detail">
            <div class="profile-image">
              <div class="image">
                <img src="../../assets/images/profile1.jpg" alt="" />
              </div>
              <div class="follow-status"><a >follow</a></div>
            </div>
            <div class="user-info">
              <div class="user-name">
                <p class="text">Sennatela Angell</p>
              </div>
              <div class="profile-id">
                <p class="text">@Sennatela</p>
              </div>
            </div>
            <div class="user-bio">
              <p class="text">I'm a DataSince team lead at <span class="mention">@Google</span> in the United States.My hobbies are watching movies and sports </p>
            </div>
            <div class="profile-follow-detail">
              <div class="following">
                <p class="following">12.6k</p>
                <p class="title">Following</p>
              </div>
              <div class="followers">
                <p class="followers">2000</p>
                <div class="title">Followers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LeftIcon from "./Icon/LeftIcon.vue";
import MoreIcon from "./Icon/MoreIcon.vue";
</script>

<style lang="scss">
@import "./style.scss";
</style>