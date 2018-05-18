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
  data: function () {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      },
      iconList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          title: '景点门票'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          title: '必游榜单'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          title: '踏青赏花'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          title: '一日游'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          title: '动植物园'
        },
        {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          title: '故宫'
        },
        {
          id: '007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
          title: '古北水镇'
        },
        {
          id: '008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          title: '全部玩乐'
        },
        {
          id: '009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          title: '全部玩乐'
        }
      ]
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.iconList.forEach((item,index) => {
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
