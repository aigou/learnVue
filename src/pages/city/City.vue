<template>
  <div class="city">
    <city-header></city-header>
    <city-list></city-list>
    <city-listbar></city-listbar>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CityList from './components/List'
import CityListbar from './components/Listbar'
export default {
  name: 'City',
  components:{
    CityHeader,
    CityList,
    CityListbar
  }
}
</script>

<style lang="stylus" scoped>

</style>
