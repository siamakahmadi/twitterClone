<template>
  <div class="news">
    <p class="news-title">What’s happening</p>
    <div class="news-list">
      <NewsBlock />
      <NewsBlock />
      <NewsBlock />

    </div>
  </div>
</template>

<script setup>
import NewsBlock from "./microComponent/NewsBlock.vue";
</script>

<style lang="scss">
@import "./style.scss";
</style>