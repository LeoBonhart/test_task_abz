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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var navigation_model_1 = require("./navigation.model");
var NavigationPanelService = /** @class */ (function () {
    function NavigationPanelService(http) {
        this.http = http;
    }
    NavigationPanelService.prototype.getJson = function (path) {
        var navigation = this.http.get("./app/shared/navigation/" + path)
            .toPromise()
            .then(this.parseJSON);
        return navigation;
    };
    NavigationPanelService.prototype.parseJSON = function (response) {
        var res = response.json();
        var navigations = new Array();
        for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
            var item = res_1[_i];
            var navigation = new navigation_model_1.Navigation();
            navigation.name = item.name;
            navigation.action = item.action;
            navigation.svg = item.svg;
            navigation.fa_Ico = item.fa_Ico;
            navigations.push(navigation);
        }
        return navigations;
    };
    NavigationPanelService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], NavigationPanelService);
    return NavigationPanelService;
}());
exports.NavigationPanelService = NavigationPanelService;
//# sourceMappingURL=navigation.service.js.map