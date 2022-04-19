<template>
  <div class="page-title">
      <p class="main-title">
        <slot name="title" />
      </p>
      <div class="icons">
        <slot name="icon" />
      </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Text,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>