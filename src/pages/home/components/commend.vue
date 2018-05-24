<template>
  <div>
    <div class="space"></div>
    <div class="title">
      <div class="title-fire">
        <img src="../../../../static/fire.png" alt="火焰">
      </div>
      <div class="title-text">
         猜你喜欢
      </div>
    </div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item of commendlist" :key="item.id" :to="'/detail/'+item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.title">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Homecommend',
  props: {
    commendlist: Array
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
    .title-fire
      float left
      img
        position relative
        top .2rem
        width 1rem
  .item
    display flex
    overflow hidden
    height 7rem
    .item-img
      width 5rem
      height 5rem
      padding .5rem
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
      .item-button
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        border-width 0
        padding .2rem .3rem
        color #fff
</style>
