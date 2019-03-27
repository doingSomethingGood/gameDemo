<template>
  <div class="container">
    <div class="enemy-desc">
      <div class="enemy-name">老潘</div>
    </div>
    <div class="hp-bar">
      <div class="hp-bar-inner" :style="{width: this.hpBarWidth+'px'}" ref="hpBarInner"></div>
    </div>
    <div class="time-bar">
      <div class="time-bar-inner"></div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: "HPBar",
    data() {
      return {
        hpBarWidth: 250
      }
    },
    methods: {
      /***
       *
       * 开始攻击，这里是计算怪物血量的方法
       * **/
      hpStartDecrease() {
        debugger;
        let barwidth = this.hpBarWidth;
        let enemyBlood = this.enemyBlood;
        let playerAttack = this.playerAttack;
        let barDecrease = (barwidth * playerAttack) / enemyBlood;
        let timeRun = window.setInterval(() => {
          this.hpBarWidth -= barDecrease;
          if (barwidth <= 0) {
            this.enemyDied();
            window.clearInterval(timeRun);
          }
        }, 1000);
      },

      /***
       * 怪物死了以后调用的方法
       */
      enemyDied() {
        debugger;
        this.changeStartAttackFlag(false);
      },
      ...mapMutations(['changeStartAttackFlag'])
    },
    computed: {
      ...mapState(['enemyBlood']),
      ...mapState(['playerAttack']),
      ...mapState(['startAttackFlag'])
    },
    watch: {
      startAttackFlag() {
        debugger;
        if (this.startAttackFlag === true) {
          this.hpStartDecrease();
        }
      }
    }
  }
</script>

<style lang='stylus' scoped>
  .container
    position relative
    .enemy-desc
      position absolute
      top 60px
      left 6px
      height 30px
      line-height 30px
      width 50px
      font-size 16px
      font-weight bold
      text-align center
      border-radius 5px 5px 5px 5px
      border 2px dashed rgba(22, 22, 22, 1)
    .hp-bar
      position absolute
      top 70px
      left 66px
      height 10px
      width 250px
      border-radius 4px 4px 4px 4px
      border 2px dashed rgba(22, 22, 22, 1)
      .hp-bar-inner
        height 10px
        /*width 200px*/
        background rgba(31, 24, 14, 0.6);
        border-radius 4px 4px 4px 4px
</style>
