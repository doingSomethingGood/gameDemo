<template>
  <div class="container">
    <div
      class="foot-button"
      @click="footButtonClick"
      :class="{'clicked':isClicked[0]}"
    >
      <span class="iconfont foot-icons" :class="{'change-color':isClicked[0]}" :data-index="1">&#xe60b;</span>
      <span class="foot-string" :class="{'change-color':isClicked[0]}" :data-index="1">角色</span>
    </div>


    <div
      class="foot-button"
      :class="{'clicked':isClicked[1]}"
      @click="footButtonClick"
      :equipmentList="this.equipmentsList"
    >
      <span class="iconfont foot-icons" :class="{'change-color':isClicked[1]}">&#xe659;</span>
      <span class="foot-string" :class="{'change-color':isClicked[1]}">技能</span>
    </div>


    <div
      class="foot-button"
      :class="{'clicked':isClicked[2]}"
      @click="footButtonClick"
      :equipmentList="this.equipmentsList"
    >
      <span class="iconfont foot-icons" :class="{'change-color':isClicked[2]}">&#xe615;</span>
      <span class="foot-string" :class="{'change-color':isClicked[2]}">装备</span>
    </div>


    <div
      class="foot-button"
      :class="{'clicked':isClicked[3]}"
      @click="footButtonClick"
    >
      <span class="iconfont foot-icons" :class="{'change-color':isClicked[3]}">&#xe606;</span>
      <span class="foot-string" :class="{'change-color':isClicked[3]}">背包</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PublicFoot",
    props: {
      equipmentsList: Array,
      footList:Array
    },
    data() {
      return {
        buttonList: {
          '角色': 0, '技能': 1, '装备': 2, '背包': 3
        },
        isClicked: [0, 0, 0, 0],
        clicked: ''
      }
    },
    methods: {
      footButtonClick(e) {
        debugger;
        let _thisButton = e.currentTarget.innerText.substr(2, 4);
        if (this.clicked === _thisButton) {
          this.isClicked = [0, 0, 0, 0];
          this.clicked = '';
          this.$emit('footListChange', this.isClicked);
          return
        }
        let _button = this.buttonList[_thisButton];
        this.isClicked = [0, 0, 0, 0];
        this.isClicked[_button] = 1;
        this.clicked = _thisButton;
        this.$emit('footListChange', this.isClicked);
      }
    },
    watch:{
      footList(){
        debugger
        this.isClicked = this.footList;
      }
    }
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
