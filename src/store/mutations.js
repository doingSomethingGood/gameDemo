export default {
  changePlayerAttack(state, playerAttack) {
    state.playerAttack = playerAttack;
    // try {
    //   localStorage.playerAttack = playerAttack;
    // } catch (e) {
    // }
  },
  changePlayerMoney(state, playerMoney) {
    state.playerMoney = playerMoney;
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
  }
}
