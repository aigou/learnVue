<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl" :alt="item.title" style="opacity: 1;">
        </div>
        <p class="icon-desc">{{item.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeIcons',
  props: {
    iconlist: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      }
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.iconlist.forEach((item,index) => {
        const page = Math.floor(index / 8)
        if(!pages[page]) {
            pages[page] = []
        }
        pages[page].push(item) 
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mininx.styl';
  .icons >>> .swiper-pagination-bullet-active
    background $bgColor 
  .icons >>> .swiper-pagination-bullets
    bottom -1px    
  .icons >>> .swiper-container
    height 0;
    padding-bottom 50%;
  .icons
    margin-top .1rem
    background #fff
    padding-bottom 1rem
    .icon
      position relative;
      float left;
      height 0;
      width 25%;
      padding-bottom 25%;
      .icon-img
        position absolute;
        top 0;
        left 0;
        right 0;
        bottom 1rem ;
        box-sizing border-box;
        padding .5rem;
        .icon-img-content
            display block;
            margin 0 auto;
            height 100%;
      .icon-desc
        position absolute;
        left 0;
        right 0;
        bottom 0;
        height 1rem;
        line-height 1rem;
        text-align center;
        color $iconTextColor;
        ellipsis()
</style>
