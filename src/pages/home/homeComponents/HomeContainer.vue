<template>
  <div>

    <div v-show="this.playerUiShow === -1" class="home-container">
      <div class="home-container-button-first">看看自己怎么样</div>
      <router-link
        class="home-container-button-second"
        to="/battle"
      >
        打个怪物试试
      </router-link>
    </div>

    <div v-show="this.playerUiShow === 1" class="public-container-all">
      <div class="public-container">
        我是角色展示界面
      </div>
      <div class="public-closebtn" @click="closebtn">点击关闭</div>
    </div>

    <div v-show="this.playerUiShow === 2" class="public-container-all">
      <div class="public-container">
        <ul>
          <li class="public-item-desc">
            <div class="public-icon"></div>
            <div class="public-desc">
              <div class="public-name-desc">
                <span>天王破敌枪</span>
              </div>
              <div class="public-attack-desc">
                <span>攻击力：</span>
                <span>10</span>
              </div>
              <div class="public-level-desc">
                <span>阶别：</span>
                <span>0</span>
                <span>等级：</span>
                <span>0</span>
              </div>
            </div>
            <div class="public-level-up">
              <span class="public-level-up-1">升阶</span>
              <span class="public-level-up-2">升级</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="public-closebtn" @click="closebtn">点击关闭</div>
    </div>

    <div v-show="this.playerUiShow === 3" class="public-container-all">
      <div class="public-container">
        <ul>
          <li class="public-item-desc">
            <div class="public-icon"></div>
            <div class="public-desc">
              <div class="public-attack-desc">
                <span>攻击力：</span>
                <span>10</span>
              </div>
              <div class="public-level-desc">
                <span>阶别：</span>
                <span>0</span>
                <span>等级：</span>
                <span>0</span>
              </div>
            </div>
            <div class="public-level-up">
              <span class="public-level-up-1">升阶</span>
              <span class="public-level-up-2">升级</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="public-closebtn" @click="closebtn">点击关闭</div>
    </div>

    <div v-show="this.playerUiShow === 4" class="public-container-all">
      <div class="public-container">
        <ul>
          <li class="public-item-desc">
            <div class="public-icon"></div>
          </li>
        </ul>
      </div>
      <div class="public-closebtn" @click="closebtn">点击关闭</div>
    </div>

  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "HomeContainer",
    props: {
      footList: Array
    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState(['playerUiShow'])
    },
    methods: {
      closebtn() {
        debugger;
        this.changePlayerUiShow(-1);
      },
      ...mapMutations(['changePlayerUiShow'])
    }
  }
</script>


<style lang="stylus" scoped>

  .public-container-all
    position relative
    height 521px
    padding 5px
    background #ccc
    border-radius 5px
    border 3px dashed rgba(22, 22, 22, 1)
    .public-container
      height 455px
      border 2px dashed rgba(22, 22, 22, 1)
      .public-item-desc
        position relative
        padding 5px
        height 55px
        border-bottom 2px dashed black
        .public-icon
          position absolute
          display inline-block
          top 5px
          left 5px
          width 50px
          height 50px
          border 1px solid red
          background #cacaca
        .public-desc
          display inline-block
          margin-left 8px
          .public-name-desc
            position absolute
            top 10px
            left 65px
          .public-attack-desc
            position absolute
            top 25px
            left 65px
          .public-level-desc
            position absolute
            top 41px
            left 65px
        .public-level-up
          display inline-block
          position absolute
          top 30px
          left 262px
          .public-level-up-1, .public-level-up-2
            display inline-block
            padding 4px
            border 1px dashed rgba(31, 24, 14, 0.6)
          .public-level-up-1
            margin-right 8px
    .public-closebtn
      position absolute
      top 480px
      left 120px
      font-size 25px
      padding 5px
      color rgba(22, 22, 22, 1)
      border-radius 10px 20px 30px 40px
      border 2px dashed rgba(22, 22, 22, 1)

  .home-container
    position relative
    height 527px
    padding 5px
    background #ccc
    border-radius 5px
    .home-container-button-first, .home-container-button-second
      display block
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
    .home-container-button-first
      margin-top 150px
    .home-container-button-second
      margin-top 40px

</style>
