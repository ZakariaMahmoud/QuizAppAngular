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
        if (this.getCookie('true-or-false/user_id')) {
            this.router.navigate([
                'true-or-false/share/' + this.getCookie('true-or-false/user_id'),
            ]);
        }
        if (this.shared.user.name) {
            db.list('questions/QuestionsForUser')
                .valueChanges()
                .subscribe(function (questions) {
                _this.questions = questions[0];
            });
        }
        else {
            this.router.navigate(['quiz/true-or-false']);
        }
    }
    TrueOrFalseComponent.prototype.ngOnInit = function () { };
    TrueOrFalseComponent.prototype.setTrue = function () {
        var _this = this;
        this.active = 2;
        setTimeout(function () { return (_this.active = 0); }, 500);
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
        setTimeout(function () { return (_this.active = 0); }, 500);
        if (this.i < this.questions.length) {
            this.responses.push(false);
            this.i++;
        }
        if (this.i >= this.questions.length) {
            this.push();
        }
    };
    TrueOrFalseComponent.prototype.push = function () {
        var user = {
            name: this.shared.user.name,
            quiz: {
                true_or_false: this.responses
            }
        };
        var unique_id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now())).toString();
        if (this.getCookie('user_id')) {
            var unique_id = this.getCookie('true-or-false/user_id');
            this.db.list('users').update(unique_id, user);
            this.router.navigate(['true-or-false/share/' + unique_id]);
        }
        else {
            this.setCookie('true-or-false/user_id', unique_id, 30);
            this.db.list('users').update(unique_id, user);
            this.router.navigate(['true-or-false/share/' + unique_id]);
        }
    };
    TrueOrFalseComponent.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    };
    TrueOrFalseComponent.prototype.getCookie = function (cname) {
        var name = cname + '=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
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
