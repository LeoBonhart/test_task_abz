"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../../shared/index");
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(service) {
        this.service = service;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.getServices();
    };
    NavigationComponent.prototype.getServices = function () {
        var _this = this;
        this.service.getJson("navigation.json").then(function (x) { return _this.model = x; });
    };
    NavigationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "navigation",
            templateUrl: "navigation.component.html",
            styleUrls: ["navigation.component.css"]
        }),
        __metadata("design:paramtypes", [index_1.NavigationPanelService])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map