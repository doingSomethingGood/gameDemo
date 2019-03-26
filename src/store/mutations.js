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
    // try {
    //   localStorage.playerMoney = playerMoney;
    // } catch (e) {
    // }
  },
  changePlayerExp(state, playerExp) {
    state.playerExp= playerExp;
    // try {
    //   localStorage.playerExp = playerExp;
    // } catch (e) {
    // }
  }
}
