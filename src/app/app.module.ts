import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NavbarModule } from './navbar/navbar.module';
import { ContentModule } from './content/index'; //

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService, FeaturedService, AdvertisementService, PeopleService, NavigationPanelService } from './shared/index'; // сервисы


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        ContentModule,
        HttpModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ServiceService, FeaturedService, AdvertisementService, PeopleService, NavigationPanelService]
})
export class AppModule { }
