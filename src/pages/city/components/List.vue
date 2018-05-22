<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-con">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-con" v-for="item of hotlist" :key="item.id">
            <div class="button" v-text="item.name"></div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom" v-text="key"></div>
        <div class="city-list" v-for="initem of item" :key="initem.id">
          <div class="city border-bottom" v-text="initem.name"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotlist: Array,
    cities: Object,
    listHead: String
  },
  mounted: function () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    listHead: function () {
      const element = this.$refs[this.listHead][0]
      if (this.listHead) {
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #000
    &:after
      border-color #000
  .list
    overflow hidden
    position absolute
    top 4.4rem
    right 0
    bottom 0
    left 0
    .title
      line-height 1.3rem
      width 100%
      color #444
      font-size .8rem
      background #eee
      padding-left .3rem
    .button-list
      overflow hidden
      padding .4rem 1.6rem .4rem .4rem
      .button-con
        width 33.33%
        float left
        .button
          margin .2rem
          padding .16rem 0
          border .1rem solid #ddd
          font-size .8rem
          text-align center
          color #333
          border-radius .3rem
    .city-list
      overflow hidden
      padding-left .6rem
      padding-right 2rem
      .city
        margin-top .1rem
        padding .2rem 0
        line-height 1.2rem
        width 100%
        font-size .9rem
        border-bottom .1rem solid  #eee
</style>
