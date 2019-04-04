<template>
  <div>
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
            <li class="public-item-desc" v-for="(skill, key, index) of this.playerSkills" :key="key">
              <div class="public-icon">
                <img class="public-icon-img" :src="skill.icon" alt="">
              </div>
              <div class="public-desc">
                <div class="public-name-desc">
                  <span>{{skill.name}}</span>
                </div>
                <div class="public-attack-desc">
                  <span>攻击力：</span>
                  <span>{{skill.attack}}</span>
                </div>
                <div class="public-level-desc">
                  <span>阶别：</span>
                  <span>{{skill.stage}}</span>
                  <span>等级：</span>
                  <span>{{skill.level}}</span>
                </div>
              </div>
              <div class="public-level-up">
                <span class="public-level-up-1" @click="stageUpButton('skill',key)">升阶</span>
                <span class="public-level-up-2" @click="levelUpButton('skill',key)">升级</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="public-closebtn" @click="closebtn">点击关闭</div>
      </div>

      <div v-show="this.playerUiShow === 3" class="public-container-all">
        <div class="public-container">
          <ul>
            <li class="public-item-desc" v-for="(equipment, key, index) of this.equipments">
              <div class="public-icon">
                <img class="public-icon-img" :src="equipment.icon" alt="">
              </div>
              <div class="public-desc">
                <div class="public-name-desc">
                  <span>{{equipment.name}}</span>
                </div>
                <div class="public-attack-desc">
                  <span>攻击力：</span>
                  <span>{{equipment.attack}}</span>
                </div>
                <div class="public-level-desc">
                  <span>阶别：</span>
                  <span>{{equipment.stage}}</span>
                  <span>等级：</span>
                  <span>{{equipment.level}}</span>
                </div>
              </div>
              <div class="public-level-up">
                <span class="public-level-up-1" @click="stageUpButton('equipment',key)">升阶</span>
                <span class="public-level-up-2" @click="levelUpButton('equipment',key)">升级</span>
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

    <floating-window :floating="this.floating" @changeShowStated="changeShowState"></floating-window>
  </div>

</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import publicJs from '../../../components/publicJs'
  import FloatingWindow from '../../../components/FloatingWindow'

  export default {
    name: "HomeContainer",
    components: {
      FloatingWindow
    },
    props: {},
    data() {
      return {
        floating: {
          floatingShow: false,
          floatingMessage: '升级成功'
        }
      }
    },
    computed: {
      ...mapState(['playerUiShow']),
      ...mapState(['playerSkills']),
      ...mapState(['equipments']),
      ...mapState(['playerMoney'])
    },
    methods: {
      ...mapMutations(['changePlayerUiShow']),
      ...mapMutations(['changePlayerSkills']),
      ...mapMutations(['changeEquipments']),
      ...mapMutations(['changePlayerMoney']),
      closebtn() {
        this.changePlayerUiShow(-1);
      },
      stageUpButton(type, key) {
        let dataBean = {};
        if (type === 'skill') {
          dataBean.skills = key;
          dataBean.property = 'stage';
          dataBean.levelUp = 1;
          this.changePlayerSkills(dataBean);
        }
      },
      levelUpButton(type, key) {
        let dataBean = {};
        if (type === 'skill') {
          dataBean.skills = key;
          dataBean.property = 'level';
          dataBean.levelUp = 1;
          let _cost = publicJs.getSkillLevelUpCost(this.$store.state, key);
          this.changePlayerSkills(dataBean);
          this.changePlayerMoney(-_cost);
          this.floating.floatingShow = true;
        }
      },

      changeShowState(e) {
        this.floating.floatingShow = false;
      }


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
          border 1px dashed black
          background #cacaca
          .public-icon-img
            width 40px
            margin 5px
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
