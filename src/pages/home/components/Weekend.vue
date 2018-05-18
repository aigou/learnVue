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
      <li class="item border-bottom" >
        <img class="item-img" src="" :alt="">
        <div class="item-info">
          <p class="item-title"></p>
          <p class="item-desc"></p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  // data: function () {
  //  return {
  //     weekend: [
  //       {
  //         id: '001',
  //         imgUrl: '',
  //         title: '',
  //         desc: ''
  //       },
  //       {
  //         id: '002',
  //         imgUrl: '',
  //         title: '',
  //         desc: ''
  //       },
  //       {
  //         id: '003',
  //         imgUrl: '',
  //         title: '',
  //         desc: ''
  //       },
  //       {
  //         id: '004',
  //         imgUrl: '',
  //         title: '',
  //         desc: ''
  //       }
  //     ]
  //   }
  // }
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
</style>
