<template>
  <div class="tweet-body">
    <div class="tweet-container">
      <div class="user-tweet">
        <div class="user-info-body">
          <div class="tweet_user-profile">
            <img :src="image" alt="" />
          </div>
          <div class="user-info">
            <div class="body">
              <div class="user-name">
                <p>{{ userName }}</p>
              </div>
              <div class="tweet-time">
                <p>{{ tweetTime }}</p>
              </div>
            </div>
            <div class="id">
              <div class="user-id">
                <p>{{ userId }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="icon">
          <More />
        </div>
      </div>

      <div class="tweet-content">
        <p>
          {{ tweetBody }}
        </p>
      </div>

      <div class="tweet-toolbar">
        <div class="item">
          <Comment />
        </div>

        <div class="item">
          <Retweet />
        </div>

        <div class="item">
          <Like />
        </div>

        <div class="item">
          <Share />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "./Icon/Comment.vue";
import Retweet from "./Icon/Retweet.vue";
import Like from "./Icon/Like.vue";
import Share from "./Icon/Share.vue";
import More from "./Icon/More.vue";

export default {
  props: {
    image: {
      type: URL,
      default: "",
    },
    userName: {
      type: Text,
      default: "",
    },
    tweetTime: {
      type: Text,
      default: "",
    },
    userId: {
      type: Text,
      default: "",
    },
    tweetBody: {
      type: Text,
      default: "",
    },
  },
  components: {
    Comment,
    Retweet,
    Like,
    Share,
    More,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>