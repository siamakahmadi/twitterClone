<template>
  <div class="main-section">
    <div class="container">
      <p class="main-title">Home</p>

      <NewTweet />

      <Tweet v-for="item in tweets" :key="item.id" :userName="item.userName" :image="item.userProfile" :tweetTime="item.time" :userId="item.userId" :tweetBody="item.tweetBody" />

    </div>
  </div>
</template>


<script>
import NewTweet from "@/components/NewTweet/index.vue";
import Tweet from "@/components/Tweet/index.vue";
export default {
  data() {
    return {
      tweets: {
        1: {
          tweetBody:
            "UK govt defeated in the Lords 199 to 170  over its plans to introduce compulsory photo ID for voters in elections. I voted against the govt.Peers widened the range of documents a person could present to get a ballot paper.UK is on the road to fascism.",
          userName: "Siamak Ahmadi",
          userId: "@_siamakAhmadi",
          time: "1h",
          userProfile:
            "https://pbs.twimg.com/profile_images/1410509265874345985/ejh1OU2P_400x400.jpg",
        },
        2: {
          tweetBody:
            'Das neue HUAWEI MateBook 14 überzeugt mit 2K FullView-Display, Ultraschlankem Metall-Gehäuse und AMD Ryzen™ Prozessor. Jetzt bestellen und HUAWEI Display 23.8" gratis dazu sichern!',
          userName: "Geoff Handley",
          userId: "@HandleyGeoff",
          time: "2h",
          userProfile:
            "https://pbs.twimg.com/profile_images/1202590021322194944/2xHBTbch_400x400.jpg",
        },
        3: {
          tweetBody:
            "A stroll in the park for Palace, a far cry  from the great Everton sides I have watched over the years, what a shame.",
          userName: "Geoff Handley",
          userId: "@HandleyGeoff",
          time: "2h",
          userProfile:
            "https://pbs.twimg.com/profile_images/1202590021322194944/2xHBTbch_400x400.jpg",
        },
        4: {
          tweetBody:
            "Beauport after winning the Optimum Pay Handicap Hurdle for Jordan Nailor and Nigel Twiston-Davies",
          userName: "Molly Hunter",
          userId: "@mollhun",
          time: "35m",
          userProfile:
            "https://pbs.twimg.com/profile_images/1468546948957409280/uFjRecoJ_400x400.jpg",
        },
      },
    };
  },
  components: {
    NewTweet,
    Tweet
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>