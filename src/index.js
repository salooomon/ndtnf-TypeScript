"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = hello;
var world = 'world';
function hello(word) {
    if (word === void 0) { word = world; }
    return "Hello ".concat(world, "! ");
}
hello();
