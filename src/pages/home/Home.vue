<template>
    <div class="allContainer">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-commend></home-commend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeCommend from './components/Commend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components:{
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
