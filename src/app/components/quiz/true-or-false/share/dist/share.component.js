"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShareComponent = void 0;
var core_1 = require("@angular/core");
var ShareComponent = /** @class */ (function () {
    function ShareComponent(shared, router, db, _Activatedroute) {
        var _this = this;
        this.shared = shared;
        this.router = router;
        this.db = db;
        this._Activatedroute = _Activatedroute;
        this.state = -1;
        this.name_of_quiz = 'نعم أم لا';
        this.user_id = this._Activatedroute.snapshot.paramMap.get('user_id');
        this.user_name = '';
        this.user_responses = [];
        this.score = 0;
        this.score_list = [];
        this.questions = [];
        this.i = 0;
        this.active = 0;
        if (this.user_id) {
            db.list('users/' + this.user_id)
                .valueChanges()
                .subscribe(function (user) {
                if (Object.keys(user).length === 0) {
                    router.navigate(['user-not-found']);
                }
                else {
                    if (_this.getCookie('true-or-false/' + _this.user_id)) {
                        _this.score = parseInt(_this.getCookie('true-or-false/' + _this.user_id));
                        _this.state = 2;
                    }
                    else if (_this.getCookie('true-or-false/user_id') == _this.user_id) {
                        _this.state = 3;
                    }
                    else {
                        _this.state = 0;
                    }
                    _this.user = user;
                    _this.user_name = user[0];
                    _this.title =
                        '💪 أرسل لك 💪' +
                            _this.user_name +
                            '  🤛 تحدي صحيح أم خطأ ' +
                            '🤜 إبدأ التحدي اﻵن   ';
                    if (typeof _this.user[1] != 'undefined' &&
                        typeof _this.user[1].true_or_false != 'undefined') {
                        _this.user_responses = [];
                        _this.user_responses.push(user[1]);
                        _this.user_responses = _this.user_responses[0].true_or_false;
                    }
                    if (typeof _this.user[2] != 'undefined' &&
                        typeof _this.user[2].true_or_false != 'undefined') {
                        _this.score_list = _this.user[2].true_or_false;
                        _this.score_list.sort(function (a, b) { return (a.score <= b.score ? 1 : -1); });
                        if (_this.score === 0) {
                            _this.score_percentage = '0';
                        }
                        else {
                            _this.score_percentage = ((_this.score / _this.user[1].true_or_false.length || 10) * 100).toFixed(1);
                        }
                    }
                }
            });
            db.list('questions/QuestionsForVisitor')
                .valueChanges()
                .subscribe(function (questions) {
                _this.questions = questions[0];
                for (var i = 0; i < _this.questions.length; i++) {
                    _this.questions[i] = _this.questions[i].replace('$', _this.user_name);
                }
            });
        }
    }
    ShareComponent.prototype.ngOnInit = function () {
        this.href = window.location.href;
    };
    ShareComponent.prototype.copy = function () {
        var _this = this;
        var link = document.getElementById('link');
        link.select();
        document.execCommand('copy');
        this.active = 1;
        setTimeout(function () { return (_this.active = 0); }, 1000);
    };
    ShareComponent.prototype.setNameVisitor = function (name) {
        if (name) {
            this.visitor_name = name;
            $('#name').attr('style', '');
            if (this.getCookie('true-or-false/' + this.user_id)) {
                this.state = 2;
            }
            else {
                this.state = 1;
            }
        }
        else {
            $('#name').attr('style', 'border:2px solid red;');
        }
    };
    ShareComponent.prototype.setTrue = function () {
        if (this.i < this.questions.length) {
            if (this.user_responses[this.i] == true) {
                this.score++;
            }
            this.i++;
        }
        if (this.i >= this.questions.length) {
            this.push();
        }
    };
    ShareComponent.prototype.setFalse = function () {
        if (this.i < this.questions.length) {
            if (this.user_responses[this.i] == false) {
                this.score++;
            }
            this.i++;
        }
        if (this.i >= this.questions.length) {
            this.push();
        }
    };
    ShareComponent.prototype.push = function () {
        var _this = this;
        this.db
            .list('users/' + this.user_id)
            .valueChanges()
            .subscribe(function (user) {
            _this.user = user;
            if (typeof _this.user[2] != 'undefined' &&
                typeof _this.user[2].true_or_false != 'undefined') {
                _this.score_list = _this.user[2].true_or_false;
                _this.score_list.sort(function (a, b) { return (a.score <= b.score ? 1 : -1); });
            }
        });
        var visitor = {
            name: this.visitor_name,
            score: this.score
        };
        var visitor_id = '';
        if (typeof this.user[2] == 'undefined' ||
            typeof this.user[2].true_or_false == 'undefined') {
            visitor_id = '0';
        }
        else {
            visitor_id = Object.keys(this.user[2].true_or_false).length.toString();
        }
        this.db
            .list('users/' + this.user_id + '/visitors/true_or_false')
            .set(visitor_id, visitor)
            .then(function () {
            _this.setCookie('true-or-false/' + _this.user_id, _this.score, 30);
            _this.state = 2;
        });
    };
    ShareComponent.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = 'expires=' + d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    };
    ShareComponent.prototype.getCookie = function (cname) {
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
    ShareComponent = __decorate([
        core_1.Component({
            selector: 'app-share',
            templateUrl: './share.component.html',
            styleUrls: ['./share.component.scss']
        })
    ], ShareComponent);
    return ShareComponent;
}());
exports.ShareComponent = ShareComponent;
