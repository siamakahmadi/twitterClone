<template>
  <div class="new-tweet">
    <div class="write-tweet">
      <div class="user-profile">
        <img src="@/assets/images/profile1.jpg" alt="" />
      </div>
      <div class="input">
        <textarea
          @focusin="activeFocus"
          @focusout="notActiveFocus"
          type="text"
          value=""
          placeholder="Wat,s happening?"
        ></textarea>
      </div>
    </div>
    <div :class="showToolbar ? 'tools active' : 'tools'">
      <div class="items">
        <div class="item">
          <galleryVue />
        </div>
        <div class="item">
          <locationVue />
        </div>
        <div class="item">
          <microphone />
        </div>
        <div class="item">
          <emoji />
        </div>
      </div>
      <div class="tweet">
        <a class="btn tweet1">tweet</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import galleryVue from "./Assets/Icon/gallery.vue";
import locationVue from "./Assets/Icon/location.vue";
import microphone from "./Assets/Icon/microphone.vue";
import emoji from "./Assets/Icon/emoji.vue";

import { ref } from "vue";

const showToolbar = ref(false);

function activeFocus() {
  showToolbar.value = true;
}

function notActiveFocus() {
  showToolbar.value = false;
}
</script>
<style>
</style>