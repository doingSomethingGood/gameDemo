<template>
  <div class="equipments-container">
    <div class="bg bg-blur"></div>
    <div class="container">
      我是中间部分的一个div

    </div>
    <router-link
      class="closebtn"
      to="/"
    >
      点击关闭
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Equipment",
    props: {
      equipmentsList: Array
    }
  }
</script>

<style lang="stylus" scoped>
  .bg
    background url("../../assets/imgs/back.png")
    height 667px
    line-height 667px

  .bg-blur
    float left
    width 100%
    background-repeat no-repeat
    background-position center
    background-size cover
    -webkit-filter blur(15px)
    -moz-filter blur(15px)
    -o-filter blur(15px)
    -ms-filter blur(15px)
    filter blur(15px)

  .container
    position: absolute
    top 130px
    border 3px dashed rgba(22, 22, 22, 1)
    left 10px
    color rgba(22, 22, 22, 1)
    right 10px
    height 400px
    line-height 600px
    text-align center

  .closebtn
    position absolute
    left 120px
    top 560px
    font-size 25px
    padding 5px
    color rgba(22, 22, 22, 1)
    border-radius 10px 20px 30px 40px
    border 2px dashed rgba(22, 22, 22, 1)


</style>
