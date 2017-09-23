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
var service_model_1 = require("./service.model");
var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.filter = "";
        this.seviceList = new Array();
        this.api_path = "http://504080.com/api/v1/services/categories";
        this.token = "7dc6a5ae1492cd768cc31ec58bc42ae14ec3596a";
        this.login = { "email": "test@abz.agency", "password": "123456" };
    }
    ServiceService.prototype.getData = function () {
        var _this = this;
        return this.seviceList.filter(function (x) {
            return x.actual == true &&
                x.name.search(new RegExp(_this.filter, "i"));
        });
    };
    ServiceService.prototype.filterData = function (filt) {
        this.filter = filt;
        return this.getData();
    };
    ServiceService.prototype.getAPI = function () {
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        var service = this.http.get(this.api_path, { headers: headers })
            .toPromise()
            .then(this.parseJSON);
        return service;
    };
    ServiceService.prototype.parseJSON = function (response) {
        var res = response.json();
        var services = new Array();
        for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
            var item = _a[_i];
            var service = new service_model_1.Service();
            service.id = item.id;
            service.name = item.title;
            service.icoUrl = item.icon;
            service.count = item.count;
            services.push(service);
        }
        return services;
    };
    ServiceService.prototype.createAuthorizationHeader = function (headers) {
        headers.append("Authorization", this.token);
    };
    ServiceService.prototype.getToken = function () {
        var _this = this;
        var had = new http_1.Headers();
        had.append("Content-Type", "application/json");
        return this.http.post("http://504080.com/api/v1/account/login", this.login, {
            headers: had
        }).toPromise().then(function (response) { _this.token = response.json().data.token; return _this; });
    };
    ServiceService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ServiceService);
    return ServiceService;
}());
exports.ServiceService = ServiceService;
//# sourceMappingURL=service.service.js.map