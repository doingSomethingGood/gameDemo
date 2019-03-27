<template>
  <div>
    <div class="battle">
      <div class="battle-player"></div>
      <div class="battle-enemy"></div>
    </div>
    <div class="battle-start" @click="startAttack">
      开始战斗
    </div>

  </div>

</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: "BattleBanner",
    methods:{
      startAttack(){
        this.changeStartAttackFlag(true);
      },
      ...mapMutations(['changeStartAttackFlag'])
    },
    computed: {
      ...mapState(['startAttackFlag'])
    },
  }
</script>

<style lang='stylus' scoped>
  .battle
    position relative
    top 140px
    left 16px
    height 300px
    width 290px
    border-radius 4px 4px 4px 4px
    border 2px dashed rgba(22, 22, 22, 1)
  .battle-start
    position relative
    top 156px
    left 110px
    height 40px
    line-height 40px
    text-align center
    width 100px
    font-size 24px
    border-radius 6px 6px 6px 6px
    border 2px dashed rgba(22, 22, 22, 1)
</style>
