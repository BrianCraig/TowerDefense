"use strict";
class default_1 {
    attackInterval() { return 0.2; }
    damage() { return 5; }
    range() { return 3.5; }
    attack(enemy) {
        enemy.receiveDamage(this.damage());
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
