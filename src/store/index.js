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
        let skillkey = 'skill' + (i + 1);
        _playerAttack += playerSkill[skillkey].attack;
      }
      //加上装备攻击加成
      let equipments = state['equipments'];
      for (let k = 0; k < 6; k++) {
        let equipmentkey = 'equipment' + (k + 1);
        _playerAttack += equipments[equipmentkey].attack;
      }


      return _playerAttack;
    }
  }
})
