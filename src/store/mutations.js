export default {
  changePlayerAttack(state, playerAttack) {
    state.playerAttack = playerAttack;
    // try {
    //   localStorage.playerAttack = playerAttack;
    // } catch (e) {
    // }
  },
  changePlayerMoney(state, playerMoney) {
    state.playerMoney += playerMoney;
    if(state.playerMoney <= 0){
      state.playerMoney = 0;
    }
  },
  changePlayerExp(state, playerExp) {
    state.playerExp = playerExp;
  },
  changePlayerUiShow(state, playerUiShow) {
    state.playerUiShow = playerUiShow;
  },
  changeEnemyLevel(state, enemyLevel) {
    state.enemyLevel = enemyLevel;
  },
  changeEnemyBlood(state, enemyBlood) {
    state.enemyBlood = enemyBlood;
  },
  changeStartAttackFlag(state, startAttackFlag) {
    state.startAttackFlag = startAttackFlag;
  },

  changePlayerSkills(state, dataBean) {
    let playerSkills = state.playerSkills;
    let _skill = dataBean.skills,
      _property = dataBean.property,
      _levelUp = dataBean.levelUp;
    playerSkills[_skill][_property] += _levelUp;
    if (_property === 'level') {
      playerSkills[_skill]['attack'] += playerSkills[_skill]['level'] * 1.5;
    } else if (_property === 'stage') {
      playerSkills[_skill]['attack'] += playerSkills[_skill]['stage'] * 10;
    }

  },
  changeEquipments(state, dataBean) {
    let equipments = state.equipments;
    let _skill = dataBean.skills,
      _property = dataBean.property,
      _levelUp = dataBean.levelUp;
    equipments[_skill][_property] += _levelUp;

    if (_property === 'level') {
      equipments[_skill]['attack'] += equipments[_skill]['level'] * 1.5;
    } else if (_property === 'stage') {
      equipments[_skill]['attack'] += equipments[_skill]['stage'] * 10;
    }

  }
}


