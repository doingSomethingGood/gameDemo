<template>
  <div>
    <div class="player-skills">
      <ul class="ul-container">
        <li class="li-container" v-for="(skill, key, index) of this.playerSkills">
          <div class="palyer-skill">
            <img class="player-skill-img" :src="skill.icon" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "PlayerSkills",
    computed: {
      ...mapState(['playerSkills'])
    },
  }
</script>

<style lang='stylus' scoped>
  .player-skills
    position absolute
    top 520px
    left 4px
    height 60px
    width 328px
    padding-left 8px
    .ul-container
      margin-top 5px
      .li-container
        display inline-block
        margin-right 4px
        .palyer-skill
          display inline-block
          height 46px
          line-height 46px
          text-align center
          width 46px
          border-radius 4px 4px 4px 4px
          border 2px dashed rgba(22, 22, 22, 1)
          .player-skill-img
            width 40px
            margin 5px
</style>
