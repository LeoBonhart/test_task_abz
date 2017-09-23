"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var navbar_module_1 = require("./navbar/navbar.module");
var content_module_1 = require("./content/content.module");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var nav_module_1 = require("./nav/nav.module");
var index_1 = require("./shared/index");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                nav_module_1.NavModule,
                navbar_module_1.NavbarModule,
                content_module_1.ContentModule,
                http_1.HttpModule
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [index_1.ServiceService, index_1.FeaturedService, index_1.AdvertisementService, index_1.PeopleService, index_1.NavigationPanelService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map