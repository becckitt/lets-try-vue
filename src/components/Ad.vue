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
        var id = this.id
        this.$http.get('https://voxadserver.herokuapp.com/ads/ad-' + id).then(function (response) {
          this.content = response.body
        }, function (response) {
          this.content = 'Ad failed to load.'
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

  .ad {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    min-height: 600px;
  }

  .inner-ad {
    height: 600px;
  }
</style>
