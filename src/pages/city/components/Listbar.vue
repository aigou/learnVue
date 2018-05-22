<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item" v-text="item" @click="changeLeader" @touchstart="changeStart" @touchmove="changeMove" @touchend="changeEnd"></li>
  </ul>
</template>

<script>
export default {
  name: 'CityListbar',
  props: {
    cities: Object
  },
  data: function () {
    return {
      touchStatus: false,
      isChoose: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters: function () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated: function () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    changeLeader: function (e) {
      this.$emit('change', e.target.innerText)
    },
    changeStart: function () {
      this.touchStatus = true
    },
    changeMove: function (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const moveY = e.touches[0].clientY - 100
          const index = Math.floor((moveY - this.startY) / 19.2)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 20)
      }
    },
    changeEnd: function () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top: 5.3rem
    right 0
    bottom 0
    width 1.2rem
    .item
      font-size .95rem
      text-align center
      line-height 1.1rem
      color $bgColor
    .choose
      font-size 1rem
      text-align center
      line-height 1.3rem
      color $bgColor
</style>
