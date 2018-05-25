<template>
  <div>
    <router-link tag="div" to="/" class="header-round" v-show="showAbs">
      <div class="iconfont back-icon">&#xe720;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityTop">
      <router-link to="/">
        <div class="header-fixed-left">
          <div class="iconfont fixed-back-icon">&#xe720;</div>
        </div>
      </router-link>
      <div class="header-fixed-title">
        景点详情
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data: function () {
    return {
      showAbs: true,
      opacityTop: {
        opacity: 0
      }
    }
  },
  methods: {
    handScroll: function () {
      const distance = document.documentElement.scrollTop
      if (distance >= 130) {
        let opacity = distance / 224
        opacity = opacity > 1 ? 1 : opacity
        this.opacityTop = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated: function () {
    window.addEventListener('scroll', this.handScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .header-round
    position absolute
    top .7rem
    left .7rem
    width 1.8rem
    height 1.8rem
    line-height 1.8rem
    text-align center
    background-color rgba(0,0,0,.3)
    border-radius 1rem
    .back-icon
      color rgba(255,255,255,.7)
      font-size 1.5rem
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    line-height: 2.2rem
    background: $bgColor
    color: #fff
    .header-fixed-left
      position absolute
      width: 2.2rem
      float: left
      .fixed-back-icon
        color #fff
        text-align: center
        font-size: 1.5rem
    .header-fixed-title
      margin 0 2rem
      text-align center
</style>
