<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe720;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe741;</span>
            请输入城市/游玩主题
        </div>
        <router-link to="City">
          <div class="header-right">
            {{this.city}}<span class="iconfont">&#xe749;</span>
          </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      city: 'city'
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .header
    display: flex
    line-height: 2.2rem
    background: $bgColor
    color: #fff
    .header-left
      width: 2.2rem
      float: left
      .back-icon
        text-align: center
        font-size: 1.5rem
    .header-input
      flex: 1
      margin-top: 0.3rem
      margin-right: 0.4rem
      height: 1.5rem
      line-height: 1.5rem
      padding-left: 0.4rem
      background: #fff
      border-radius: 0.3rem
      color: #ccc
    .header-right
      margin-right .4rem
      float: right
      font-size .9rem
      text-align: center
      color #fff
      span
        font-size: 1rem
</style>
