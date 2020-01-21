class Fighter {
  constructor(name, damage, strength, agility, hp) {
    this.name = name;
    this.damage = damage;
    this.strength = strength;
    this.agility = agility;
    this.hp = hp;
    this.wins = 0;
    this.losses = 0;
  }

  getName() {
    return this.name;
  }

  getDamage() {
    return this.damage;
  }

  getStrength() {
    return this.strength;
  }

  getAgility() {
    return this.agility;
  }

  getHealth() {
    return this.hp;
  }

  setHealth(chngHp) {
    this.hp = chngHp;
  }

  getWins() {
    return this.wins;
  }

  setWins() {
    this.wins += 1;
    return this.wins;
  }

  getLosses() {
    return this.losses;
  }

  setLosses() {
    this.losses += 1;
    return this.losses;
  }

  attack(defender) {
    let userAgility = defender.getAgility();
    let userStrength = defender.getStrength();
    let maxProbability = 100;
    let probability = maxProbability - userAgility - userStrength;
    let userProbability = probability / maxProbability;
    if (Math.random() < userProbability) {
      console.log(this.getName() + ' make ' + this.getDamage() + ' damage to ' + defender.getName());
      defender.dealDamage(this.getDamage());
    } else {
      console.log(this.getName() + ' attack missed');
    }
  }

  logCombatHistory() {
    console.log('Name: ' + this.getName() + ', Wins: ' + this.getWins() + ', Losses: ' + this.getLosses());
  }

  heal(addHP) {
    this.setMainHP();
    if (this.getHealth() + addHP > this.mainHealth) {
      this.setHealth(this.mainHealth);
    } else {
      this.setHealth(this.getHealth() + addHP);
    }
  }

  dealDamage(subtractionHP) {
    if (this.getHealth() - subtractionHP < 0) {
      this.setHealth(0);
    } else {
      this.setHealth(this.getHealth() - subtractionHP);
    }
  }

  addWin() {
    this.setWins();
  }

  setMainHP() {
    let str = this.getName();
    if (str.match(FighterName1)) {
      this.mainHealth = MainHealth1;
    } else {
      this.mainHealth = MainHealth2;
    }
  }

  addLose() {
    this.setLosses();
  }
}

function battle(fighter1, fighter2) {
  let fighter1HP = fighter1.getHealth();
  let fighter2HP = fighter2.getHealth();
  if (fighter1HP === 0) {
    console.log(fighter1.getName() + ' is dead and can\'t fight');
    console.log(fighter2.getName() + ' has won');
    return;
  }
  if (fighter2HP === 0) {
    console.log(fighter2.getName() + ' is dead and can\'t fight');
    console.log(fighter1.getName() + ' has won');
    return;
  }
  while (fighter1HP > 0 && fighter2HP > 0) {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
    fighter1HP = fighter1.getHealth();
    fighter2HP = fighter2.getHealth();
  }
  if (fighter1HP === 0) {
    fighter2.addWin();
    fighter1.addLose();
  }
  if (fighter2HP === 0) {
    fighter1.addWin();
    fighter2.addLose();
  }
  return;
}
const FighterName1 = 'Sub-Zero';
const FighterName2 = 'Scorpion';
const damage1 = 20;
const damage2 = 25;
const strength1 = 20;
const strength2 = 25;
const agility1 = 15;
const agility2 = 20;
const MainHealth1 = 100;
const MainHealth2 = 90;
let Fighter1 = new Fighter(
  FighterName1,
  damage1,
  strength1,
  agility1,
  MainHealth1
);
let Fighter2 = new Fighter(
  FighterName2,
  damage2,
  strength2,
  agility2,
  MainHealth2
);
battle(Fighter1, Fighter2);
battle(Fighter1, Fighter2);
Fighter1.logCombatHistory();
Fighter2.logCombatHistory();
const heal1 = 50;
const heal2 = 50;
Fighter1.heal(heal1);
Fighter2.heal(heal2);
battle(Fighter1, Fighter2);
Fighter1.logCombatHistory();
Fighter2.logCombatHistory();
