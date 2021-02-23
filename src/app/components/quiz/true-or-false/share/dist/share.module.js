"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShareModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var share_routing_module_1 = require("./share-routing.module");
var share_component_1 = require("./share.component");
var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = __decorate([
        core_1.NgModule({
            declarations: [share_component_1.ShareComponent],
            imports: [common_1.CommonModule, share_routing_module_1.ShareRoutingModule]
        })
    ], ShareModule);
    return ShareModule;
}());
exports.ShareModule = ShareModule;
