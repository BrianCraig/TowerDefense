"use strict";
/// <reference path="../declarations/jasmine.d.ts" />
const standardzombie_1 = require('./enemy/standardzombie');
const simpletower_1 = require('./tower/simpletower');
const map_1 = require('./map/map');
const focuschunk_1 = require('./map/focuschunk');
const pathchunk_1 = require('./map/pathchunk');
const towerchunk_1 = require('./map/towerchunk');
const castlechunk_1 = require('./map/castlechunk');
describe("Enemies", () => {
    describe("standard zombie", () => {
        let z = new standardzombie_1.default();
        it("initial live", () => {
            expect(z.hearts()).toBe(20);
        });
        it("initial speed", () => {
            expect(z.speed()).toBe(0.7);
        });
        it("is alive", () => {
            expect(z.isAlive()).toBe(true);
        });
    });
});
describe("Towers", () => {
    describe("simple tower", () => {
        let t = new simpletower_1.default();
        it("0.2s attack interval", () => {
            expect(t.attackInterval()).toBe(0.2);
        });
        it("attack range", () => {
            expect(t.range()).toBe(3.5);
        });
        it("damage", () => {
            expect(t.damage()).toBe(5);
        });
    });
});
describe("Fight mechanics", () => {
    describe("simple towers vs standard zombie", () => {
        let z = new standardzombie_1.default();
        let t = new simpletower_1.default();
        it("can force attack to zombie", () => {
            t.attack(z);
        });
        it("correct zombie status after one attack", () => {
            expect(z.hearts()).toBe(15);
            expect(z.isAlive()).toBe(true);
        });
        it("zombie died after 3 attacks", () => {
            t.attack(z);
            t.attack(z);
            t.attack(z);
            expect(z.isAlive()).toBe(false);
        });
    });
});
describe("Maps", () => {
    let m = new map_1.default(3, 3);
    m.add(new focuschunk_1.default(1 /* East */));
    m.add(new pathchunk_1.default(1 /* East */));
    m.add(new pathchunk_1.default(2 /* South */));
    m.add(new towerchunk_1.default());
    m.add(new towerchunk_1.default());
    m.add(new pathchunk_1.default(2 /* South */));
    m.add(new towerchunk_1.default());
    m.add(new towerchunk_1.default());
    m.add(new castlechunk_1.default());
    it("should be ready", () => {
        expect(m.isReady()).toBeTruthy();
    });
});
