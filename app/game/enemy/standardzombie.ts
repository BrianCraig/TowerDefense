export default class {
  _hearts = 20

  hearts():number{ return this._hearts}
  speed():number{ return 0.7}
  isAlive():boolean{ return this.hearts() > 0}

  receiveDamage(quant: number){
    this._hearts = Math.max(this._hearts - quant, 0)
  }
}