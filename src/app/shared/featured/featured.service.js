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
var featured_model_1 = require("./featured.model");
var FeaturedService = /** @class */ (function () {
    function FeaturedService(http) {
        this.http = http;
    }
    FeaturedService.prototype.getJson = function (path) {
        var featured = this.http.get("./app/shared/featured/" + path)
            .toPromise()
            .then(this.parseJSON);
        return featured;
    };
    FeaturedService.prototype.parseJSON = function (response) {
        var res = response.json();
        var featured = new featured_model_1.Featured();
        featured.title = res.title;
        featured.link = new featured_model_1.Link(res.link === undefined ? "" : res.link.name, res.link === undefined ? "" : res.link.url);
        featured.companys = new Array();
        for (var _i = 0, _a = res.companys; _i < _a.length; _i++) {
            var item = _a[_i];
            var company = new featured_model_1.Company();
            company.name = new featured_model_1.Link(item.name === undefined ? "" : item.name.name, item.name === undefined ? "" : item.name.url);
            company.location = item.location;
            company.activity = item.activity;
            company.image = item.image;
            company.link = new featured_model_1.Link(item.link === undefined ? "" : item.link.name, item.link === undefined ? "" : item.link.url);
            company.guid = item.guid;
            company.description = item.description;
            featured.companys.push(company);
        }
        return featured;
    };
    FeaturedService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FeaturedService);
    return FeaturedService;
}());
exports.FeaturedService = FeaturedService;
//# sourceMappingURL=featured.service.js.map