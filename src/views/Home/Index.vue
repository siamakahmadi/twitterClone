<template>
  <div class="main-section">
    <div class="container">
      <p class="main-title">Home</p>

      <NewTweet />

      <div v-for="tweet in tweets" :key="tweet.id" class="tweet-body">
        <div class="tweet-container">
          <div class="user-tweet">
            <div class="user-info-body">
              <div class="user-profile">
                <img :src="tweet.userProfile" alt="" />
              </div>
              <div class="user-info">
                <div class="body">
                  <div class="user-name">
                    <p>{{ tweet.userName }}</p>
                  </div>
                  <div class="tweet-time">
                    <p>{{ tweet.time }}</p>
                  </div>
                </div>
                <div class="id">
                  <div class="user-id">
                    <p>{{ tweet.userId }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="10" width="5" height="5" rx="2.5" fill="#686868" />
                <rect
                  x="9.21054"
                  y="10"
                  width="5"
                  height="5"
                  rx="2.5"
                  fill="#686868"
                />
                <rect
                  x="18.4211"
                  y="10"
                  width="5"
                  height="5"
                  rx="2.5"
                  fill="#686868"
                />
              </svg>
            </div>
          </div>

          <div class="tweet-content">
            <p>
              {{ tweet.tweetBody }}
            </p>
          </div>

          <div class="tweet-toolbar">
            <div class="item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                  stroke="#878787"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.9965 11H16.0054"
                  stroke="#878787"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.9955 11H12.0045"
                  stroke="#878787"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.99451 11H8.00349"
                  stroke="#878787"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.57999 5.15997H17.42C19.08 5.15997 20.42 6.49997 20.42 8.15997V11.48"
                  stroke="#878787"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.73999 2L3.57999 5.15997L6.73999 8.32001"
                  stroke="#878787"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.42 18.84H6.57999C4.91999 18.84 3.57999 17.5 3.57999 15.84V12.52"
                  stroke="#878787"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.26 22L20.42 18.84L17.26 15.68"
                  stroke="#878787"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.1 7.56 3.1C9.38 3.1 10.99 3.98 12 5.34C13.01 3.98 14.63 3.1 16.44 3.1C19.51 3.1 22 5.6 22 8.69C22 15.69 15.52 19.82 12.62 20.81Z"
                  stroke="#878787"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="item">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.44 8.9C20.04 9.21 21.51 11.06 21.51 15.11V15.24C21.51 19.71 19.72 21.5 15.25 21.5H8.74C4.27 21.5 2.48 19.71 2.48 15.24V15.11C2.48 11.09 3.93 9.24 7.47 8.91"
                  stroke="#878787"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15V3.62"
                  stroke="#878787"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.35 5.85L12 2.5L8.64999 5.85"
                  stroke="#878787"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NewTweet from "@/components/NewTweet/index.vue";
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
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>