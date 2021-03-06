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
var side_bar_right_routing_module_1 = require("./side-bar-right-routing.module");
var SideBarRightModule = /** @class */ (function () {
    function SideBarRightModule() {
    }
    SideBarRightModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, side_bar_right_routing_module_1.SideBarRightRoutingModule],
            declarations: [
                index_1.SideBarRightComponent,
                index_1.AdvertisementComponent,
                index_1.FeaturedComponent,
                index_1.PeopleComponent
            ],
            exports: [
                index_1.SideBarRightComponent,
                index_1.AdvertisementComponent,
                index_1.FeaturedComponent,
                index_1.PeopleComponent
            ],
            providers: []
        })
    ], SideBarRightModule);
    return SideBarRightModule;
}());
exports.SideBarRightModule = SideBarRightModule;
//# sourceMappingURL=side-bar-right.module.js.map