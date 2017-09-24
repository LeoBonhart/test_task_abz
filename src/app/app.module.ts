import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { ContentModule, ContactUsModule } from './content/index';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceService, FeaturedService, AdvertisementService, PeopleService, NavigationPanelService } from './shared/index'; // сервисы


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContentModule,
        ContactUsModule,
        HttpModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ServiceService, FeaturedService, AdvertisementService, PeopleService, NavigationPanelService]
})
export class AppModule { }
