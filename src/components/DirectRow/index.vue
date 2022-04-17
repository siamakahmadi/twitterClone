<template>
  <div :class="isSelect ? 'direct-row select' : 'direct-row'">
    <div class="direct">
      <div class="user">
        <div class="profile">
          <img src="../../assets/images/profile1.jpg" alt="" />
        </div>

        <div class="info">
          <div class="user-info">
            <div class="username"><p class="text">Siamak Ahmadi</p></div>
            <div class="userid"><p class="text">@_siamakahmadi</p></div>
          </div>
          <div class="message-summary">
            <p class="text">See That , The Best tweet the same freamwork ...</p>
          </div>
        </div>
      </div>

      <div class="toolbar">
        <div class="time"><p class="text">17h</p></div>
        <div class="more-icon">
          <img src="./icon/More.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSelect: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>