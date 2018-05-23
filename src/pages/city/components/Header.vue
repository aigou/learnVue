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
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li v-for="item of list" class="search-list" v-text="item.name" :key="item.id"></li>
        <li class="search-list" v-show="noData">没有匹配的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityHeader',
  props: {
    cities: Object
  },
  data: function () {
    return {
      keyword: '',
      list: [],
      timer: null,
      nolist: false
    }
  },
  computed: {
    noData: {
      get: function () {
        return this.nolist
      },
      set: function () {
        if (this.list.length === 0) {
          this.nolist = true
        } else {
          this.nolist = false
        }
        return this.nolist
      }
    }
  },
  watch: {
    keyword: function () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const res = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              res.push(value)
            }
          })
        }
        this.list = res
      }, 100)
    }
  },
  mounted: function () {
    this.scroll = new Bscroll(this.$refs.search)
  }
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
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 4.3rem
    left 0
    right 0
    bottom 0
    background-color #eee
    .search-list
      line-height 1.6rem
      font-size .9rem
      color #555
      padding-left 1rem
      background-color #fff
      border-bottom .05rem solid #ddd
</style>
