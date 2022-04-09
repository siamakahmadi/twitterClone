<template>
  <div :class="directActive? 'direct-message active':'direct-message' " >
    <div class="direct-message-toolbar"  @click="directActiveToggle">
      <p class="title">Message</p>
      <div class="toolbar">
        <div class="new-message">
         <DirectIcon/>
        </div>
        <div class="open-direct">
            <FlashIcon/>
        </div>
      </div>
    </div>

    <div v-for="item in directList" :key="item.id" class="direct-message-body">
      <div class="user-direct">
        <div class="user-image">
          <img :src="item.profileUrl" alt="" />
        </div>
        <div class="user-info">
          <div class="user-name"><p>{{item.name}}</p></div>
          <div class="message-summary">
            <p>{{item.messageSummary}}.</p>
          </div>
        </div>
        <div class="direct-time"><p>{{item.messageTime}}</p></div>
      </div>
    </div>

    
  </div>
</template>

<script setup>
import DirectIcon from './assets/icon/Direct.vue'
import FlashIcon from './assets/icon/Flash.vue'
import { ref } from 'vue';

    const directActive = ref(false);

    function directActiveToggle(){
        directActive.value ? directActive.value = false : directActive.value = true;
    }

    const directList = ref([
        {id:1,name:'SiamakAhmad',messageSummary:'i have go to the gym',messageTime:'25m',profileUrl:'https://pbs.twimg.com/profile_images/1409956076171190280/KrOnjrOU_400x400.jpg'},
        {id:2,name:'Sina Ahmadi',messageSummary:'are you ok?',messageTime:'1h',profileUrl:'https://pbs.twimg.com/profile_images/1510983363347333121/qNb_N_F-_400x400.jpg'},
        {id:3,name:'I Hani',messageSummary:'watsupp?',messageTime:'2h ago',profileUrl:'https://pbs.twimg.com/profile_images/1490601661382934530/e1-TBLWF_400x400.jpg'},
        {id:4,name:'Alireza Kargar',messageSummary:'i riding to your house',messageTime:'1h ',profileUrl:'https://pbs.twimg.com/profile_images/1509650694319620102/BoZ08g1u_400x400.jpg'},
        {id:5,name:'Mojtaba Mansori',messageSummary:'you are the best player',messageTime:'1h',profileUrl:'https://pbs.twimg.com/profile_images/1508711484758626308/-tJD8n_i_400x400.jpg'},
        {id:6,name:'Mohammad M',messageSummary:'this is amazing',messageTime:'13h',profileUrl:'https://pbs.twimg.com/profile_images/1454580164428541954/-_FLLs6k_400x400.jpg'},
        {id:7,name:'Morteza Ahmadi',messageSummary:'i have go to the gym',messageTime:'32h',profileUrl:'https://pbs.twimg.com/profile_images/1449140119735357443/2loXWe3w_400x400.jpg'},
        
        
    ])


</script>

<style lang="scss">
@import './assets/style.scss';
</style>