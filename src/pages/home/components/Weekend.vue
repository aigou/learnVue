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
      <li class="item" v-for="item of weekend_img" :key="item.id">
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
  data: function () {
    return {
      weekend_img: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg',
          title: '北京赏花好地方',
          desc: '乱花渐欲迷人眼，京城赏花大搜索'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title: '北京必游TOP10',
          desc: '>来北京必去的景点非这些地方莫属'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '寻找北京的皇城范儿',
          desc: '数百年的宫廷庙宇，至今依旧威严霸气'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
          title: '学生最爱的博物馆',
          desc: '周末干嘛？北京很多博物馆已经免费开放啦'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
          title: '儿童剧场，孩子的乐园',
          desc: '带宝贝观看演出，近距离体验艺术的无穷魅力'
        }
      ]
    }
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
