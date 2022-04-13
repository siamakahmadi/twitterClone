<template>
  <div class="profile">
    <div class="profile-container">
      <div class="top-bar">
        <div class="left-section">
          <div class="back-icon">
            <LeftIcon />
          </div>
          <div class="user-info">
            <div class="user-name"><p>Sennatela Angell</p></div>
            <div class="tweet-number"><p>23.9l tweets</p></div>
          </div>
        </div>
        <div class="right-section">
          <div class="more-icon">
            <MoreIcon />
          </div>
        </div>
      </div>

      <div class="user-profile">
        <div class="user-profile-container">
          <div class="profile-cover">
            <img
              src="https://images.unsplash.com/photo-1649528817667-b09da56af19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div class="profile-detail">
            <div class="profile-image">
              <div class="image">
                <img src="../../assets/images/profile1.jpg" alt="" />
              </div>
              <div class="follow-status"><a>follow</a></div>
            </div>
            <div class="user-info">
              <div class="user-name">
                <p class="text">Sennatela Angell</p>
              </div>
              <div class="profile-id">
                <p class="text">@Sennatela</p>
              </div>
            </div>
            <div class="user-bio">
              <p class="text">
                I'm a DataSince team lead at
                <span class="mention">@Google</span> in the United States.My
                hobbies are watching movies and sports
              </p>
            </div>
            <div class="profile-follow-detail">
              <div class="following">
                <p class="following">12.6k</p>
                <p class="title">Following</p>
              </div>
              <div class="followers">
                <p class="followers">2000</p>
                <div class="title">Followers</div>
              </div>
            </div>
            <div class="profile-navigate">
              <div class="profile-navigate-item active">
                <p class="text">Tweets</p>
              </div>
              <div class="profile-navigate-item">
                <p class="text">Tweets & Replies</p>
              </div>
              <div class="profile-navigate-item"><p class="text">Media</p></div>
              <div class="profile-navigate-item"><p class="text">Likes</p></div>
            </div>
          </div>
        </div>
      </div>

      <div class="user-tweets">
        <!-- <Tweet
          v-for="item in tweets"
          :key="item.id"
          :userName="item.userName"
          :image="item.userProfile"
          :tweetTime="item.time"
          :userId="item.userId"
          :tweetBody="item.tweetBody"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import LeftIcon from "./Icon/LeftIcon.vue";
import MoreIcon from "./Icon/MoreIcon.vue";
// import Tweet from "@/components/Tweet/index.vue";

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
    LeftIcon,
    MoreIcon,
    // Tweet,
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>