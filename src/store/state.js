let playerAttack = 10;
let playerMoney = 1000000000;
let playerExp = 0;
let playerUiShow = -1;
let enemyLevel = 1;
let enemyBlood = 500;
let startAttackFlag = false;
let playerSkills = {
  skill1: {
    id:'skill1',
    name:'天王破敌枪',
    icon:'../../../../static/imgs/skills/skill1.png',
    level: 1,
    stage: 1,
    attack: 10,
    levelUpCost: 1,
    stageUpCost:1
  },
  skill2: {
    id:'skill2',
    name:'五庄八挂阵',
    icon:'../../../../static/imgs/skills/skill2.png',
    level: 1,
    stage: 1,
    attack: 10,
    levelUpCost: 1,
    stageUpCost:1
  },
  skill3: {
    id:'skill3',
    name:'广寒紫月箭',
    icon:'../../../../static/imgs/skills/skill3.png',
    level: 1,
    stage: 1,
    attack: 10,
    levelUpCost: 1,
    stageUpCost:1
  },
  skill4: {
    id:'skill4',
    name:'凌烟飘渺术',
    icon:'../../../../static/imgs/skills/skill4.png',
    level: 1,
    stage: 1,
    attack: 10,
    levelUpCost: 1,
    stageUpCost:1
  },
  skill5: {
    id:'skill5',
    name:'狮驼碎金吼',
    icon:'../../../../static/imgs/skills/skill5.png',
    level: 1,
    stage: 1,
    attack: 10,
    levelUpCost: 1,
    stageUpCost:1
  },
  skill6: {
    id:'skill6',
    name:'普陀伏魔术',
    icon:'../../../../static/imgs/skills/skill6.png',
    level: 1,
    stage: 1,
    attack: 10,
    levelUpCost: 1,
    stageUpCost:1
  }
};
let equipments = {
  equipment1: {
    id:'equipment1',
    name:'武器',
    icon:'../../../../static/imgs/equipments/ewq.png',
    level: 1,
    stage: 1,
    attack: 10,
    levelUpCost: 1,
    stageUpCost:1
  },
  equipment2: {
    id:'equipment2',
    name:'头盔',
    icon:'../../../../static/imgs/equipments/etk.png',
    level: 1,
    stage: 1,
    attack: 10,
    levelUpCost: 1,
    stageUpCost:1
  },
  equipment3: {
    id:'equipment3',
    name:'护甲',
    icon:'../../../../static/imgs/equipments/ehj.png',
    level: 1,
    stage: 1,
    attack: 10,
    levelUpCost: 1,
    stageUpCost:1
  },
  equipment4: {
    id:'equipment4',
    name:'手套',
    icon:'../../../../static/imgs/equipments/est.png',
    level: 1,
    stage: 1,
    attack: 10,
    levelUpCost: 1,
    stageUpCost:1
  },
  equipment5: {
    id:'equipment5',
    name:'护腿',
    icon:'../../../../static/imgs/equipments/eht.png',
    level: 1,
    stage: 1,
    attack: 10,
    levelUpCost: 1,
    stageUpCost:1
  },
  equipment6: {
    id:'equipment6',
    name:'鞋子',
    icon:'../../../../static/imgs/equipments/exz.png',
    level: 1,
    stage: 1,
    attack: 10,
    levelUpCost: 1,
    stageUpCost:1
  }
};


// try {
//   if (localStorage.playerAttack) {
//     playerAttack = localStorage.playerAttack;
//   }
// } catch (e) {
//
// }

export default {
  playerAttack: playerAttack,
  playerMoney: playerMoney,
  playerExp: playerExp,
  playerUiShow: playerUiShow,
  enemyLevel: enemyLevel,
  enemyBlood: enemyBlood,
  startAttackFlag: startAttackFlag,
  playerSkills: playerSkills,
  equipments:equipments
}
