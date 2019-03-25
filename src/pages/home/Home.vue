<template>
  <div>
    <public-header></public-header>
    <home-container></home-container>
    <home-foot></home-foot>
  </div>
</template>

<script>
  import PublicHeader from 'components/PublicHeader'
  import HomeContainer from 'home/homeComponents/HomeContainer'
  import HomeFoot from 'components/HomeFoot'

  export default {
    name: "Home",
    components: {
      PublicHeader,
      HomeContainer,
      HomeFoot
    }
  }
</script>

<style scoped>

</style>
