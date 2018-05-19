<template>
  <div>
    <div class="header">
      <router-link to="/">
        <div class="header-left">
          <div class="iconfont back-icon">&#xe720;</div>
        </div>
      </router-link>
      <div class="header-title">
        选择城市
      </div>
    </div>
    <div class="city-search">
      <input class="search-input" type="text" placeholder="请输入城市名">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .header
    position relative
    line-height: 2.2rem
    background: $bgColor
    color: #fff
    .header-left
      position absolute
      width: 2.2rem
      float: left
      .back-icon
        color #fff 
        text-align: center
        font-size: 1.5rem
    .header-title
      margin 0 2rem
      text-align center
  .city-search
    height 1.8rem
    background-color $bgColor
    padding .2rem .8rem
    .search-input
      box-sizing border-box
      width 100%
      height 1.8rem
      padding 0 .3rem
      line-height 1.8rem
      font-size .9rem
      text-align center
      color #666
      border-width 0
      border-radius .2rem
      &:focus
        outline-color #fff
</style>
