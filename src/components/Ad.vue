<template>
  <div class="ad">
    <div class="inner-ad" v-html="content"></div>
  </div>
</template>

<script>
  export default {
    name: 'ad',
    data () {
      return {
        content: null
      }
    },
    created () {
      this.fetchAd()
    },
    methods: {
      fetchAd: function () {
        let id = this.id
        this.$http.get('https://voxadserver.herokuapp.com/ads/ad-' + id).then(response => {
          this.content = response.body
          this.$el.classList.add('ad-loaded')
        }, response => {
          console.log('Ad ' + id + ' failed to load.')
        })
      }
    },
    props: ['id']
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
