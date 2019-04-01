import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import publicJs from '../components/publicJs'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  publicJs,
  getters: {

    /**
     * 获取当前攻击力
     * @param state
     * @returns {getters.playerAttack|(function(*))|number}
     */
    playerAttack(state) {
      let playerSkill = state['playerSkills'];
      let _playerAttack = state['playerAttack'];
      //加上技能攻击加成


      for (let i = 0; i < 6; i++) {
        let key = 'skill' + (i + 1);
        _playerAttack += playerSkill[key].attack;
      }


      // for(let skill of playerSkill){
      //     let _attack = skill['attack'];
      //     _playerAttack += _attack;
      // }

      return _playerAttack;
    }
  }
})
