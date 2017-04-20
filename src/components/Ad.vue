<template>
  <lazy-component @show="fetchAd">
    <div class="ad" v-bind:class="{'ad-loaded': adLoaded}">
      <div class="inner-ad" v-html="content"></div>
    </div>
  </lazy-component>
</template>

<script>
  import SessionData from '../session-data.js'

  export default {
    name: 'ad',
    data () {
      return {
        content: null
      }
    },
    created () {
      this.adLoaded = false
    },
    methods: {
      fetchAd: function () {
        let adId = this.adId
        this.$http.get('https://voxadserver.herokuapp.com/ads/' + adId).then(response => {
          this.content = response.body
          this.adLoaded = true
          this.emitAdSessionData(adId, Date.now())
        }, response => {
          console.log(adId + ' failed to load.')
        })
      },
      emitAdSessionData (adId, adLoadTime) {
        let timeSinceAdLoad = adLoadTime - this.$parent.startTime
        let adSessionData = {
          'id': adId,
          'time': timeSinceAdLoad
        }
        SessionData.$emit(adId, adSessionData)
      }
    },
    props: ['adId']
  }
</script>

<style scoped>
  h1 {
    font-size: 2rem;
  }

  .ad.ad-loaded {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    min-height: 600px;
  }

  .ad-loaded > .inner-ad {
    height: 600px;
  }
</style>
