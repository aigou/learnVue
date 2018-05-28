<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position relative
    left .1rem
    top .2rem
    display: inline-block
    width: 1rem
    height: 1rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.2rem no-repeat
    padding-top rem
    background-size: 1.2rem 8.4rem
  .item-title
    line-height 2.2rem
    width 100%
    font-size .95rem
    padding 0 .5rem
    border-bottom .01rem solid #eee
  .item-children
    padding 0 1rem
</style>
