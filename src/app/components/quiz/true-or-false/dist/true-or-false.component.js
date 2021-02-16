"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TrueOrFalseComponent = void 0;
var core_1 = require("@angular/core");
var TrueOrFalseComponent = /** @class */ (function () {
    function TrueOrFalseComponent(shared, router, db) {
        var _this = this;
        this.shared = shared;
        this.router = router;
        this.db = db;
        this.active = 0;
        this.questions = [];
        this.responses = [];
        this.i = 0;
        if (this.shared.user.name) {
            db.list('questions/QuestionsForUser').valueChanges().subscribe(function (questions) {
                _this.questions = questions[0];
            });
        }
        else {
            this.router.navigate(['quiz/true-or-false']);
        }
    }
    TrueOrFalseComponent.prototype.ngOnInit = function () {
    };
    TrueOrFalseComponent.prototype.setTrue = function () {
        var _this = this;
        this.active = 2;
        setTimeout(function () { return _this.active = 0; }, 500);
        if (this.i < this.questions.length) {
            this.responses.push(true);
            this.i++;
        }
        if (this.i >= this.questions.length) {
            this.push();
        }
    };
    TrueOrFalseComponent.prototype.setFalse = function () {
        var _this = this;
        this.active = 1;
        setTimeout(function () { return _this.active = 0; }, 500);
        if (this.i < this.questions.length) {
            this.responses.push(false);
            this.i++;
        }
        if (this.i >= this.questions.length) {
            this.push();
        }
    };
    TrueOrFalseComponent.prototype.push = function () {
    };
    TrueOrFalseComponent = __decorate([
        core_1.Component({
            selector: 'app-true-or-false',
            templateUrl: './true-or-false.component.html',
            styleUrls: ['./true-or-false.component.scss']
        })
    ], TrueOrFalseComponent);
    return TrueOrFalseComponent;
}());
exports.TrueOrFalseComponent = TrueOrFalseComponent;
