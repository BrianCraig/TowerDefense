import GameMap from './map/map'
import RoundGenerator from './rounds/roundgenerator'

/*
class Game {
  character: Character
  counter: number
  enemies: Set<Enemy>
  tickCounter: number
  paused: boolean = false
  context: Context
  constructor(context: Context){
    this.context = context
    this.character = new Character()
    this.enemies = new Set()
    this.tickCounter = 0
  }
  stop(){
    this.paused = true
    clearInterval(this.counter)
  }
  start(){
    this.paused = false
    this.counter = setInterval(()=>this.tick(), 10)
  }
  end(){
    this.stop()
    for(let enemy of this.enemies){
      this.context.instances().removeEnemy(enemy)
    }
  }
  isPaused(){return this.paused}
  tick(){
    this.tickCounter += 1
    if(this.tickCounter % 100 == 0) this.addEnemy()
    this.moveEnemys()
  }
  addEnemy(){
    let enemy = new Enemy()
    this.enemies.add(enemy)
    this.context.instances().addEnemy(enemy)
  }
  moveEnemys(){
    this.enemies.forEach((e)=>{e.tick()})
  }
  enemiesSet(): Set<Enemy>{
    return this.enemies
  }
}
*/
export default class Game{
  map: GameMap
  rgen: RoundGenerator
  alive: boolean = true

  constructor(map: GameMap, rgen: RoundGenerator){
    this.map = map
    this.rgen = rgen
  }

  tick(seconds: number){
    
  }

  isAlive(): boolean{ return this.alive }
}