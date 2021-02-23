"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TrueOrFalseModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_spinner_1 = require("ngx-spinner");
var true_or_false_routing_module_1 = require("./true-or-false-routing.module");
var true_or_false_component_1 = require("./true-or-false.component");
var TrueOrFalseModule = /** @class */ (function () {
    function TrueOrFalseModule() {
    }
    TrueOrFalseModule = __decorate([
        core_1.NgModule({
            declarations: [true_or_false_component_1.TrueOrFalseComponent],
            imports: [common_1.CommonModule, true_or_false_routing_module_1.TrueOrFalseRoutingModule, ngx_spinner_1.NgxSpinnerModule]
        })
    ], TrueOrFalseModule);
    return TrueOrFalseModule;
}());
exports.TrueOrFalseModule = TrueOrFalseModule;
