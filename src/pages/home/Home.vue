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
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data: function () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      commendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json?city=' + this.city)
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
  computed: {
    ...mapState({
      city: 'city'
    })
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeCommend,
    HomeWeekend
  },
  mounted: function () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated: function () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
