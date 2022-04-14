<template>
  <div class="direct-continer">
    <div class="toolbar">
      <div class="user-info">
        <div class="user-image">
          <img src="../../assets/images/profile1.jpg" alt="" />
        </div>
        <div class="user-detail">
          <p class="name">SiamakAhmadi</p>
          <p class="username">@_Siamakahmadi</p>
        </div>
      </div>
      <div class="icon">
          <img src="./icon/info.svg" alt="">
      </div>
    </div>
    <div class="body"></div>
    <div class="tools">
        <div class="option">
            <div class="gallery">
                <img src="./icon/gallery.svg" alt="">
            </div>
            <div class="microphone">
                <img src="./icon/microphone.svg" alt="">
            </div>
        </div>
        <div class="input-container">
            <input type="text" value="" placeholder="type your message">
        </div>
        <div class="share">
            <img src="./icon/send.svg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./style.scss";
</style>