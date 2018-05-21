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
          <div class="button-con">
            <div class="button">北京</div>
          </div>
          <div class="button-con">
            <div class="button">北京</div>
          </div>
          <div class="button-con">
            <div class="button">北京</div>
          </div>
          <div class="button-con">
            <div class="button">北京</div>
          </div>
          <div class="button-con">
            <div class="button">北京</div>
          </div>
          <div class="button-con">
            <div class="button">北京</div>
          </div>
          <div class="button-con">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="city-list">
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="city-list">
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
          <div class="city border-bottom">阿拉善</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted: function () {
    this.scroll = new Bscroll(this.$refs.wrapper)
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
