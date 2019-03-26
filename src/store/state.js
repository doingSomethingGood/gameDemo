let playerAttack = '10';
let playerMoney = '0';
let playerExp = '0';

try {
  if (localStorage.playerAttack) {
    playerAttack = localStorage.playerAttack;
  }
  if (localStorage.playerMoney) {
    playerMoney = localStorage.playerMoney;
  }
  if (localStorage.playerAttack) {
    playerExp = localStorage.playerExp;
  }
} catch (e) {

}

export default {
  playerAttack: playerAttack,
  playerMoney: playerMoney,
  playerExp: playerExp
}
