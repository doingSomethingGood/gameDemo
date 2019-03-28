<template>
  <div class="container">
    <div class="enemy-desc">
      <div class="enemy-name">老潘</div>
    </div>
    <div class="hp-bar">
      <div class="hp-bar-inner" :style="{width: this.hpBarWidth+'px'}" ref="hpBarInner"></div>
    </div>
    <div class="time-bar">
      <div class="time-bar-inner" :style="{width: this.timeBarWidth+'px'}"></div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters} from 'vuex'

  export default {
    name: "HPBar",
    data() {
      return {
        hpBarWidth: 250,
        timeBarWidth: 250
      }
    },
    methods: {
      /***
       *
       * 开始攻击，这里是计算怪物血量的方法
       * **/
      hpStartDecrease() {
        let _this = this;
        let barwidth = this.hpBarWidth;
        let enemyBlood = this.enemyBlood;
        let playerAttack = this.playerAttack;
        let barDecrease = (barwidth * playerAttack) / enemyBlood;
        let timeRun = window.setInterval(() => {
          _this.hpBarWidth -= barDecrease;
          if (_this.hpBarWidth <= 0) {
            this.enemyDied();
            window.clearInterval(timeRun);
          }
        }, 1000);
      },
      timeStartDecrease() {
        let _this = this;
        let barwidth = this.timeBarWidth;
        let time = 5;//单位是秒
        let barDecrease = barwidth / (time * 10);
        let timeRun = window.setInterval(() => {
          _this.timeBarWidth -= barDecrease;
          if (_this.timeBarWidth <= 0) {
            this.timeOver();
            window.clearInterval(timeRun);
          }
        }, 100);
      },

      /***
       * 怪物死了以后调用的方法
       */
      enemyDied() {
        this.hpBarWidth = 0;

        /**
         * 这里用来处理怪物死了以后的处理逻辑
         */

        this.hpBarWidth = 250;
        this.changeStartAttackFlag(false);
      },
      /**
       * 时间结束以后调用的方法
       */
      timeOver(){
        this.timeBarWidth = 0;

        /**
         *这里用来写时间结束以后的逻辑处理
         */

        this.timeBarWidth = 250;
        this.changeStartAttackFlag(false);
      },
      ...mapMutations(['changeStartAttackFlag'])
    },
    computed: {
      ...mapState(['enemyBlood']),
      ...mapGetters(['playerAttack']),
      ...mapState(['startAttackFlag'])
    },
    watch: {
      startAttackFlag() {
        if (this.startAttackFlag === true) {
          this.hpStartDecrease();
          this.timeStartDecrease();
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

    .time-bar
      position absolute
      top 88px
      left 66px
      height 2px
      width 250px
      border-radius 2px 2px 2px 2px
      border 1px dashed rgba(22, 22, 22, 1)
      .time-bar-inner
        height 2px
        /*width 200px*/
        background rgba(31, 24, 14, 0.6);
        border-radius 4px 4px 4px 4px
</style>
