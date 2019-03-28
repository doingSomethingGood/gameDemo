<template>
  <div class="container">
    <div
      class="foot-button"
      @click="footButtonClick"
      :class="{'clicked':this.playerUiShow===1}"
    >
      <span class="iconfont foot-icons" :class="{'change-color':this.playerUiShow===1}">&#xe60b;</span>
      <span class="foot-string" :class="{'change-color':this.playerUiShow===1}" :data-index="1">角色</span>
    </div>

    <div
      class="foot-button"
      :class="{'clicked':this.playerUiShow===2}"
      @click="footButtonClick"
      :equipmentList="this.equipmentsList"
    >
      <span class="iconfont foot-icons" :class="{'change-color':this.playerUiShow===2}">&#xe659;</span>
      <span class="foot-string" :class="{'change-color':this.playerUiShow===2}">技能</span>
    </div>

    <div
      class="foot-button"
      :class="{'clicked':this.playerUiShow===3}"
      @click="footButtonClick"
      :equipmentList="this.equipmentsList"
    >
      <span class="iconfont foot-icons" :class="{'change-color':this.playerUiShow===3}">&#xe615;</span>
      <span class="foot-string" :class="{'change-color':this.playerUiShow===3}">装备</span>
    </div>

    <div
      class="foot-button"
      :class="{'clicked':this.playerUiShow===4}"
      @click="footButtonClick"
    >
      <span class="iconfont foot-icons" :class="{'change-color':this.playerUiShow===4}">&#xe606;</span>
      <span class="foot-string" :class="{'change-color':this.playerUiShow===4}">背包</span>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "PublicFoot",
    props: {
      equipmentsList: Array,
    },
    data() {
      return {
        buttonList: {
          '角色': 1, '技能': 2, '装备': 3, '背包': 4
        },
        lastClick: null
      }
    },
    computed: {
      ...mapState(['playerUiShow'])
    },
    methods: {
      footButtonClick(e) {
        let _thisButton = e.currentTarget.innerText.substr(2, 4);
        let _clicked = this.buttonList[_thisButton];
        if (_clicked === this.lastClick && !(this.playerUiShow === -1)) {
          _clicked = -1;
          this.lastClick = null
        }
        this.lastClick = _clicked;
        this.changePlayerUiShow(_clicked);
      },
      ...mapMutations(['changePlayerUiShow'])
    },
  }
</script>

<style lang="stylus" scoped>
  @import "../assets/icons/iconfont.css"

  .container
    position relative
    display flex
    height 50px
    line-height 50px
    padding 5px 5px
    background rgba(31, 24, 14, .6)
    border-radius 5px
    .foot-button
      flex 1
      height 30px
      line-height 30px
      text-align center
      padding 10px
      margin 0 8px
      background-color rgba(73, 58, 38, 0.6)
      border-radius 8px
      .foot-icons
        font-size 18px !important
        font-weight 700
        color rgba(22, 22, 22, 1)
      .foot-string
        font-size 14px
        color rgba(22, 22, 22, 1)
      .change-color
        color rgba(244, 154, 26, .9)
    .clicked
      box-shadow -5px -5px 5px rgba(41, 41, 41, .9)
</style>
