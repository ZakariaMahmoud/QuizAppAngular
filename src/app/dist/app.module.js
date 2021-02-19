"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var fire_1 = require("@angular/fire");
var database_1 = require("@angular/fire/database");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var quiz_component_1 = require("./components/quiz/quiz.component");
var home_component_1 = require("./components/home/home.component");
var true_or_false_component_1 = require("./components/quiz/true-or-false/true-or-false.component");
var environment_1 = require("src/environments/environment");
var shared_service_1 = require("./shared/shared.service");
var share_component_1 = require("./components/quiz/true-or-false/share/share.component");
var user_not_found_component_1 = require("./components/user-not-found/user-not-found.component");
var footer_component_1 = require("./components/footer/footer.component");
var ngx_spinner_1 = require("ngx-spinner");
var animations_1 = require("@angular/platform-browser/animations");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                quiz_component_1.QuizComponent,
                home_component_1.HomeComponent,
                true_or_false_component_1.TrueOrFalseComponent,
                share_component_1.ShareComponent,
                user_not_found_component_1.UserNotFoundComponent,
                footer_component_1.FooterComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase, 'QuizApp'),
                database_1.AngularFireDatabaseModule,
                ngx_spinner_1.NgxSpinnerModule,
                animations_1.BrowserAnimationsModule,
            ],
            providers: [shared_service_1.SharedService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
