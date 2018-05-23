<template>
  <div class="city">
    <city-header :cities="cities"></city-header>
    <city-list :listHead="listHead" :hotlist="hotCities" :cities="cities"></city-list>
    <city-listbar :cities="cities" @change="changeListBar"></city-listbar>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import CityListbar from './components/Listbar'
import axios from 'axios'
export default {
  name: 'City',
  data: function () {
    return {
      hotCities: [],
      cities: {},
      listHead: ''
    }
  },
  methods: {
    getCityInfo: function () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc: function (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    changeListBar: function (e) {
      this.listHead = e
    }
  },
  mounted: function () {
    this.getCityInfo()
  },
  components: {
    CityHeader,
    CityList,
    CityListbar
  }
}
</script>

<style lang="stylus" scoped>

</style>
