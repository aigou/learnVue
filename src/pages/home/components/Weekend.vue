<template>
  <div>
    <div class="space"></div>
    <div class="title">
      <div class="title-love">
        <img src="../../../../static/love.png" alt="爱心">
      </div>
      <div class="title-text">
         周末去哪儿
      </div>
    </div>
    <ul>
      <li class="item" v-for="item of weekendlist" :key="item.id">
        <div class="item-img-container">
          <img class="item-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendlist: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mininx.styl';
  .space
    height .5rem
    background #eeeeee
  .title
    line-height 2rem
    text-indent .2rem
    .title-love
      float left
      img
        position relative
        top .2rem
        width 1rem
  .item
    .item-img-container
      overflow hidden
      width 100%
      height 0
      padding-bottom 36.9%
      .item-img
        width 100%
    .item-info
      padding .5rem
      min-width 0
      .item-title
        line-height 1.2rem
        font-size 1.1rem
        color #212121
        ellipisis()
      .item-desc
        line-height 2.5rem
        ellipisis()
</style>
