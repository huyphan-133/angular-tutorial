"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, false);
component.onClick();
console.log("likeCount: ".concat(component.likeCount));
component.onClick();
console.log("likeCount: ".concat(component.likeCount));
