/// <reference path="../declarations/jasmine.d.ts" />
import StandardZombie from './enemy/standardzombie'
import SimpleTower from './tower/simpletower'

describe("testing enemies", ()=>{
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

describe("testing towers", ()=>{
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

describe("testing mechanics", ()=>{
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