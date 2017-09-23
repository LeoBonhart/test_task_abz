"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var index_1 = require("./index");
var center_main_routing_module_1 = require("./center-main-routing.module");
var CenterMainModule = /** @class */ (function () {
    function CenterMainModule() {
    }
    CenterMainModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, center_main_routing_module_1.CenterMainRoutingModule],
            declarations: [
                index_1.CenterMainComponent,
                index_1.ServicesComponent
            ],
            exports: [
                index_1.CenterMainComponent,
                index_1.ServicesComponent
            ],
            providers: []
        })
    ], CenterMainModule);
    return CenterMainModule;
}());
exports.CenterMainModule = CenterMainModule;
//# sourceMappingURL=center-main.module.js.map