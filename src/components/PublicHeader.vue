<template>
  <div class="container">
    <div class="header-avatar"></div>
    <div class="resource-attack">
      <span class="iconfont resource-icon">&#xe636;</span>
      <span class="resource-number">{{this.playerAttack}}</span>
    </div>
    <div class="resources">
      <div class="resource">
        <span class="iconfont resource-icon">&#xe641;</span>
        <span class="resource-number">{{this.playerMoney}}</span>
      </div>
      <div class="resource">
        <span class="iconfont resource-icon">&#xe603;</span>
        <span class="resource-number">{{this.playerExp}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Header",
    computed:{
      ...mapState(['playerAttack']),
      ...mapState(['playerMoney']),
      ...mapState(['playerExp'])
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../assets/icons/iconfont.css"
  .container >>> .resource-icon
    float left
    font-size 22px

  .container
    position relative
    height 60px
    padding 5px
    background rgba(31,24,14,.6)
    border-radius 5px
    .header-avatar
      float left
      background #cacaca
      height 60px
      width 60px
    .resource-attack, .resources
      padding-left 5px
    .resources
      display flex
      .resource
        height 30px
        line-height 30px
        flex 1
        display inline-block
        font-size 14px
        .resource-number
          font-size 14px
          margin-left 5px
    .resource-attack
      height 30px
      line-height 30px
      flex 1
      display inline-block
      font-size 14px
      .resource-number
        font-size 14px
        margin-left 5px

</style>
