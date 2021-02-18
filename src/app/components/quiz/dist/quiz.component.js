"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuizComponent = void 0;
var core_1 = require("@angular/core");
var $ = require("jquery");
var QuizComponent = /** @class */ (function () {
    function QuizComponent(shared, router, _Activatedroute) {
        this.shared = shared;
        this.router = router;
        this._Activatedroute = _Activatedroute;
        this.name_of_quiz = '';
        this.shared.quiz.name = this._Activatedroute.snapshot.paramMap.get('quiz_name');
    }
    QuizComponent.prototype.ngOnInit = function () { };
    QuizComponent.prototype.setNameUser = function (name) {
        if (name) {
            this.shared.user.name = name;
            $('#name').attr('style', '');
            this.router.navigate([this.shared.quiz.name]);
        }
        else {
            $('#name').attr('style', 'border:2px solid red;');
        }
    };
    QuizComponent = __decorate([
        core_1.Component({
            selector: 'app-quiz',
            templateUrl: './quiz.component.html',
            styleUrls: ['./quiz.component.scss']
        })
    ], QuizComponent);
    return QuizComponent;
}());
exports.QuizComponent = QuizComponent;
