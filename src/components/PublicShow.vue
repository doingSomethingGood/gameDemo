<template>
  <div>
    <public-header></public-header>

    <div class="container-all">
      <div class="container">
        <ul>
          <li class="item-desc">
            <div class="icon"></div>
            <div class="desc">
              <div class="attack-desc">
                <span>攻击力：</span>
                <span>10</span>
              </div>
              <div class="level-desc">
                <span>阶别：</span>
                <span>0</span>
                <span>等级：</span>
                <span>0</span>
              </div>
            </div>
            <div class="level-up">
              <span class="level-up-1">升阶</span>
              <span class="level-up-2">升级</span>
            </div>
          </li>
          <li class="item-desc">
            <div class="icon"></div>
            <div class="desc">
              <div class="attack-desc">
                <span>攻击力：</span>
                <span>10</span>
              </div>
              <div class="level-desc">
                <span>阶别：</span>
                <span>0</span>
                <span>等级：</span>
                <span>0</span>
              </div>
            </div>
            <div class="level-up">
              <span class="level-up-1">升阶</span>
              <span class="level-up-2">升级</span>
            </div>
          </li>
        </ul>
      </div>
      <router-link class="closebtn" to="/">点击关闭</router-link>
    </div>

    <public-foot></public-foot>
  </div>
</template>

<script>
  import PublicHeader from './PublicHeader'
  import PublicFoot from './PublicFoot'

  export default {
    name: "PublicShow",
    props: {
      equipmentsList: Array,
    },
    data() {
      return {}
    },
    components: {
      PublicHeader,
      PublicFoot
    }
  }
</script>

<style lang="stylus" scoped>
  .container-all
    position relative
    height 521px
    padding 5px
    background #ccc
    border-radius 5px
    border 3px dashed rgba(22, 22, 22, 1)
    .container
      height 455px
      border 2px dashed rgba(22, 22, 22, 1)
      .item-desc
        position relative
        padding 5px
        height 55px
        border-bottom 2px dashed black
        .icon
          position absolute
          display inline-block
          top 5px
          left 5px
          width 50px
          height 50px
          border 1px solid red
          background #cacaca
        .desc
          display inline-block
          margin-left 8px
          .attack-desc
            position absolute
            top 20px
            left 65px
          .level-desc
            position absolute
            top 41px
            left 65px
        .level-up
          display inline-block
          position absolute
          top 30px
          left 262px
          .level-up-1,.level-up-2
            display inline-block
            padding 4px
            border 1px dashed rgba(31,24,14,0.6)
          .level-up-1
            margin-right 8px
    .closebtn
      position absolute
      top 480px
      left 120px
      font-size 25px
      padding 5px
      color rgba(22, 22, 22, 1)
      border-radius 10px 20px 30px 40px
      border 2px dashed rgba(22, 22, 22, 1)
</style>
