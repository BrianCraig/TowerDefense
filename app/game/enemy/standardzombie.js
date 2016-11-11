"use strict";
class default_1 {
    constructor() {
        this._hearts = 20;
    }
    hearts() { return this._hearts; }
    speed() { return 0.7; }
    isAlive() { return this.hearts() > 0; }
    receiveDamage(quant) {
        this._hearts = Math.max(this._hearts - quant, 0);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
