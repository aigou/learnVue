<template>
  <div>
    <div class="banner" @click="seeimgs">
      <img class="banner-img" :src="this.bannerImg" alt="故宫">
      <div class="banner-info">
        <div class="banner-title">{{this.bannerTitle}}</div>
        <div class="banner-count">
          <span class="iconfont bannericon">&#xe650;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="gallaryImgs" v-show="imgsShow" @changeImgs="closeImgs"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    gallaryImgs: Array,
    bannerTitle: String
  },
  data: function () {
    return {
      imgsShow: false
    }
  },
  methods: {
    seeimgs: function () {
      this.imgsShow = true
    },
    closeImgs: function () {
      this.imgsShow = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    width 100%
    height 0
    padding-bottom 54%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      padding 0 1rem .3rem 1rem
      min-height 1rem
      color #ffffff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        flex 1
      .banner-count
        margin-top .2rem
        padding 0 .5rem
        height .7rem
        border-radius .4rem
        font-size .7rem
        background-color rgba(0,0,0,.5)
        .bannericon
          font-size .7rem
</style>
