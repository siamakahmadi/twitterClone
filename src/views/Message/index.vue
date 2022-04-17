<template>
  <div class="message-container">
    <PageTitle>
      <template v-slot:title> home </template>
      <template v-slot:icon> icon </template>
    </PageTitle>

    <DirectRow :isSelect="true"/>  





  </div>
</template>

<script>
import DirectRow from '../../components/DirectRow/index.vue'
export default {
  components:{
    DirectRow
  }
};
</script>

<style lang="scss">
@import './style.scss';
</style>