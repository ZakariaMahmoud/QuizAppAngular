"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'quiz/:quiz_name',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./components/quiz/quiz.module'); }).then(function (m) { return m.QuizModule; });
        }
    },
    {
        path: 'true-or-false',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./components/quiz/true-or-false/true-or-false.module'); }).then(function (m) { return m.TrueOrFalseModule; });
        }
    },
    {
        path: 'true-or-false/share/:user_id',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./components/quiz/true-or-false/share/share.module'); }).then(function (m) { return m.ShareModule; });
        }
    },
    {
        path: 'user-not-found',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./components/user-not-found/user-not-found.module'); }).then(function (m) { return m.UserNotFoundModule; });
        }
    },
    { path: 'true-or-false/share/', redirectTo: '' },
    { path: 'quiz', redirectTo: '' },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
