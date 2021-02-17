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
var quiz_component_1 = require("./components/quiz/quiz.component");
var home_component_1 = require("./components/home/home.component");
var true_or_false_component_1 = require("./components/quiz/true-or-false/true-or-false.component");
var share_component_1 = require("./components/quiz/true-or-false/share/share.component");
var user_not_found_component_1 = require("./components/user-not-found/user-not-found.component");
var routes = [
    { path: 'quiz/:quiz_name', component: quiz_component_1.QuizComponent },
    { path: 'quiz', redirectTo: '' },
    { path: '', component: home_component_1.HomeComponent },
    { path: 'true-or-false', component: true_or_false_component_1.TrueOrFalseComponent },
    { path: 'true-or-false/share/:user_id', component: share_component_1.ShareComponent },
    { path: 'true-or-false/share/', redirectTo: '' },
    { path: 'user-not-found', component: user_not_found_component_1.UserNotFoundComponent },
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
