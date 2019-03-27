<template>
  <div class="player-skills">
    <div class="palyer-skill">技能1</div>
    <div class="palyer-skill">技能2</div>
    <div class="palyer-skill">技能3</div>
    <div class="palyer-skill">技能4</div>
    <div class="palyer-skill">技能5</div>
    <div class="palyer-skill">技能6</div>
  </div>
</template>

<script>
    export default {
        name: "PlayerSkills"
    }
</script>

<style lang='stylus' scoped>
.player-skills
  position absolute
  top 520px
  left 6px
  height 60px
  width 328px
  padding-left 8px
  .palyer-skill
    display inline-block
    height 46px
    line-height 46px
    text-align center
    width 46px
    margin-top 5px
    border-radius 4px 4px 4px 4px
    border 2px dashed rgba(22, 22, 22, 1)
</style>
