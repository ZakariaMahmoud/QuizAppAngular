"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return sessionStorage.getItem('name');
        },
        set: function (name) {
            sessionStorage.setItem('name', name);
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.setResponses = function (quiz_name, responses) { };
    return User;
}());
exports.User = User;
