"use strict";
exports.__esModule = true;
exports.Quiz = void 0;
var Quiz = /** @class */ (function () {
    function Quiz() {
    }
    Object.defineProperty(Quiz.prototype, "name", {
        get: function () {
            return sessionStorage.getItem('quiz_name');
        },
        set: function (name) {
            sessionStorage.setItem('quiz_name', name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quiz.prototype, "name_ar", {
        get: function () {
            switch (sessionStorage.getItem('quiz_name')) {
                case 'true-or-false': {
                    this._name_ar = 'صحيح أم خطأ';
                    break;
                }
            }
            return this._name_ar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quiz.prototype, "questions", {
        get: function () {
            return this._questions;
        },
        set: function (questions) {
            this._questions = questions;
        },
        enumerable: false,
        configurable: true
    });
    return Quiz;
}());
exports.Quiz = Quiz;
