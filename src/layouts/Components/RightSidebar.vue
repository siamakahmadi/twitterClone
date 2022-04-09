<template>
      <div class="right-sidebar">
      <div class="container">
        <div class="search-box">
          <input type="text" value="" placeholder="Search Twitter" />
        </div>
      
        <NewsSection/>

        <DirectMessageMini/>
      </div>
    </div>
</template>

<script setup>
  import DirectMessageMini from '@/components/DirectMessageMini/index.vue'
  import NewsSection from '@/components/NewsSection/index.vue'
</script>

<style>

</style>