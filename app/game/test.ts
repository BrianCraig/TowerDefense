/// <reference path="../declarations/jasmine.d.ts" />
import StandardZombie from './enemy/standardzombie'
import SimpleTower from './tower/simpletower'

import GameMap from './map/map'
import FocusChunk from './map/focuschunk'
import PathChunk from './map/pathchunk'
import TowerChunk from './map/towerchunk'
import CastleChunk from './map/castlechunk'
import Dir from './directions'
import Game from './game'
import BasicRoundGenerator from './rounds/basicroundgenerator'

describe("Enemies", ()=>{
  describe("standard zombie", ()=>{
    let z = new StandardZombie()
    it("initial live", () => {
      expect(z.hearts()).toBe(20);
    })
    it("initial speed", () => {
      expect(z.speed()).toBe(0.7);
    })
    it("is alive", () => {
      expect(z.isAlive()).toBe(true);
    })
  })
})

describe("Towers", ()=>{
  describe("simple tower", ()=>{
    let t = new SimpleTower()
    it("0.2s attack interval", () => {
      expect(t.attackInterval()).toBe(0.2);
    })
    it("attack range", () => {
      expect(t.range()).toBe(3.5);
    })
    it("damage", () => {
      expect(t.damage()).toBe(5);
    })
  })
})

describe("Fight mechanics", ()=>{
  describe("simple towers vs standard zombie", ()=>{
    let z = new StandardZombie()
    let t = new SimpleTower()
    it("can force attack to zombie", () => {
      t.attack(z);
    })
    it("correct zombie status after one attack", () => {
      expect(z.hearts()).toBe(15);
      expect(z.isAlive()).toBe(true);
    })
    it("zombie died after 3 attacks", () => {
      t.attack(z);
      t.attack(z);
      t.attack(z);
      expect(z.isAlive()).toBe(false);
    })
  })
})

describe("Maps", ()=>{
  let m = new GameMap(3, 3)
  m.add(new FocusChunk(Dir.East))
  m.add(new PathChunk(Dir.East))
  m.add(new PathChunk(Dir.South))

  m.add(new TowerChunk())
  m.add(new TowerChunk())
  m.add(new PathChunk(Dir.South))

  m.add(new TowerChunk())
  m.add(new TowerChunk())
  m.add(new CastleChunk())

  it("should be ready", ()=>{
    expect(m.isReady()).toBeTruthy()
  })
})

describe("A Game", ()=>{
  beforeEach(()=>{
    let map = new GameMap(5,5)
    let rgen = new BasicRoundGenerator()
    this.g = new Game(map, rgen)
  })

  it("You can do ticks whenever you want",()=>{
    this.g.tick(0.03)
    this.g.tick(0.03)
    this.g.tick(0.03)
    expect(true).toBeTruthy()
  })

  it("You are alive on first time", ()=>{
    expect(this.g.isAlive()).toBeTruthy()
  })
})