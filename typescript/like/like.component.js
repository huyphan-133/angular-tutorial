"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likeCount, _isLiked) {
        this._likeCount = _likeCount;
        this._isLiked = _isLiked;
    }
    Object.defineProperty(LikeComponent.prototype, "likeCount", {
        get: function () {
            return this._likeCount;
        },
        enumerable: false,
        configurable: true
    });
    LikeComponent.prototype.onClick = function () {
        if (this._isLiked) {
            this._likeCount--;
        }
        else {
            this._likeCount++;
        }
        this._isLiked = !this._isLiked;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
