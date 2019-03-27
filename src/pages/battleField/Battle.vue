<template>
  <div class="battle">
    <div class="battle-container">
      <enemy-level></enemy-level>
      <h-p-bar></h-p-bar>
      <battle-banner></battle-banner>
      <player-skills></player-skills>
    </div>
    <div class="battle-next">
      下一关
    </div>
    <router-link class="battle-back" to="/">
      退&nbsp&nbsp&nbsp出
    </router-link>
  </div>
</template>

<script>
  import EnemyLevel from './battleComponents/EnemyLevel'
  import HPBar from './battleComponents/HPBar'
  import BattleBanner from './battleComponents/BattleBanner'
  import PlayerSkills from './battleComponents/PlayerSkills'



  export default {
    name: "Battle",
    components:{
      EnemyLevel,
      HPBar,
      BattleBanner,
      PlayerSkills
    }
  }
</script>

<style lang="stylus" scoped>
  .battle
    position relative
    height 657px
    background #ccc
    border 5px solid rgba(22, 22, 22, 1)
    .battle-container
      position absolute
      top 0
      height 570px
      width 324px
      padding 10px
      margin 8px
      border 3px dashed rgba(22, 22, 22, 1)
    .battle-back, .battle-next
      position absolute
      padding 5px
      color rgba(22, 22, 22, 1)
      border 2px dashed rgba(22, 22, 22, 1)
    .battle-back
      top 620px
      left 20px
    .battle-next
      top 620px
      left 292px
</style>
