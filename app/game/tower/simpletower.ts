export default class {

  attackInterval():number{ return 0.2 }
  damage():number{ return 5}
  range():number{ return 3.5}

  attack(enemy: any){
    enemy.receiveDamage(this.damage())
  }
}