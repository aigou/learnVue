<template>
    <div class="allContainer">
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :iconlist="iconList"></home-icons>
        <home-commend :commendlist="commendList"></home-commend>
        <home-weekend :weekendlist="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeCommend from './components/Commend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  data: function () {
    return {
      swiperList: [],
      iconList: [],
      commendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.commendList = data.commendList
        this.weekendList = data.weekend_img
      }
    }
  },
  mounted: function () {
    this.getHomeInfo()
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeCommend,
    HomeWeekend
  }
}
</script>

<style>

</style>
