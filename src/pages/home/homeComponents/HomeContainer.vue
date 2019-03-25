<template>
  <div class="container">
    <div class="container-button-first">看看自己怎么样</div>
    <div class="container-button-second">打个怪物试试</div>
  </div>
</template>

<script>
  export default {
    name: "HomeContainer"
  }
</script>

<style lang="stylus" scoped>
  .container
    position relative
    height 527px
    padding 5px
    background #ccc
    border-radius 5px
    .container-button-first,.container-button-second
      height 50px
      padding 10px
      line-height 50px
      width 300px
      text-align center
      margin-left 22px
      font-size 40px
      cursor pointer
      color rgba(22, 22, 22, 1)
      border-radius: 10px 40px 80px 100px
      border 1px dashed rgba(22, 22, 22, 1)
    .container-button-first
      margin-top 150px
    .container-button-second
      margin-top 40px

</style>
