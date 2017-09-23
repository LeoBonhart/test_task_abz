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
var people_model_1 = require("./people.model");
var PeopleService = /** @class */ (function () {
    function PeopleService(http) {
        this.http = http;
    }
    PeopleService.prototype.getJson = function (path) {
        var social = this.http.get("./app/shared/people/" + path)
            .toPromise()
            .then(this.parseJSON);
        return social;
    };
    PeopleService.prototype.parseJSON = function (response) {
        var res = response.json();
        var social = new people_model_1.Social();
        social.title = res.title;
        social.link = new people_model_1.Link(res.link === undefined ? "" : res.link.name, res.link === undefined ? "" : res.link.url);
        social.peoples = new Array();
        for (var _i = 0, _a = res.peoples; _i < _a.length; _i++) {
            var item = _a[_i];
            var people = new people_model_1.People();
            people.name = new people_model_1.Link(item.name === undefined ? "" : item.name.name, item.name === undefined ? "" : item.name.url);
            people.location = item.location;
            people.activity = item.activity;
            people.image = item.image;
            people.link = new people_model_1.Link(item.link === undefined ? "" : item.link.name, item.link === undefined ? "" : item.link.url);
            people.guid = item.guid;
            social.peoples.push(people);
        }
        return social;
    };
    PeopleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map