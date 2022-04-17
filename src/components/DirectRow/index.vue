<template>
  <div :class="isActive ? 'direct-row select' : 'direct-row'">
    <div class="direct">
      <div class="user">
        <div class="profile">
          <img :src="data.profileUrl" alt="" />
        </div>

        <div class="info">
          <div class="user-info">
            <div class="username">
              <p class="text">{{ data.name }}</p>
            </div>
            <div class="userid"><p class="text">@_siamakahmadi</p></div>
          </div>
          <div class="message-summary">
            <p class="text">{{data.messageSummary}}</p>
          </div>
        </div>
      </div>

      <div class="toolbar">
        <div class="time"><p class="text">{{data.messageTime}}</p></div>
        <div class="more-icon">
          <img src="./icon/More.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isActive: Boolean,
  data: Object,
});
</script>

<style lang="scss">
@import "./style.scss";
</style>