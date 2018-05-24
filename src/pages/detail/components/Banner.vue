<template>
  <div>
    <div class="banner" @click="seeimgs">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg" alt="故宫">
      <div class="banner-info">
        <div class="banner-title">故宫(AAAAA景区)</div>
        <div class="banner-count">
          <span class="iconfont bannericon">&#xe650;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="imgsShow" @changeImgs="closeImgs"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data: function () {
    return {
      imgsShow: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg',
        'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg'
      ]
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
