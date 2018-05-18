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
      <li class="item border-bottom" v-for="item of commend" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.title">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Homecommend',
  data: function () {
   return {
      commend: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
          title: '北京欢乐谷',
          desc: '北京欢乐谷有着许多好玩的场景游戏'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '故宫有着许多好玩的场景游戏'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/7b/7b023b9728f0834fa3.img.jpg_200x200_5fddc1d8.jpg',
          title: '世界花卉大观园',
          desc: '世界花卉大观园有着许多好玩的场景游戏'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c8/c88bb5e69c9a9c5ea3.img.jpg_200x200_740720ff.jpg',
          title: '古北水镇',
          desc: '古北水镇有着许多好玩的场景游戏'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/d6/d62a708bc69472f5a3.img.jpg_200x200_5193a3b6.jpg',
          title: '十渡聚龙湾玻璃栈道',
          desc: '十渡聚龙湾玻璃栈道有着许多好玩的场景游戏'
        },
        {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_200x200_ce3d2658.jpg',
          title: '北京海洋馆',
          desc: '北京海洋馆有着许多好玩的场景游戏'
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
