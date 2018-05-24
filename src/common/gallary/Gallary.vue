<template>
  <div class="container" @click="hiddenImgs">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default: function () {
        return []
      }
    },
    imgsShow: Boolean
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    hiddenImgs: function () {
      this.$emit('changeImgs')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background-color #000
    .wrapper
      height 0
      width 100%
      padding-bottom 66.5%
      background #eee
      .gallary-img
        width 100%
      .swiper-pagination
        color #fff
        bottom -10rem
</style>
