<template>
  <div class="container">
    <div class="container-text">
      第{{this.enemyLevel}}关
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "EnemyLevel",
    computed: {
      ...mapState(['enemyLevel'])
    }
  }

</script>

<style lang='stylus' scoped>
.container
  position relative
  .container-text
    position absolute
    top 10px
    left 67px
    height 30px
    width 200px
    text-align center
    line-height 30px
    font-size 20px
    font-weight 700
    border-radius 5px 5px 5px 5px
    border 3px dashed rgba(22, 22, 22, 1)
</style>
