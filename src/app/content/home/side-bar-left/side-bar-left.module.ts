import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SideBarLeftComponent, AdvertisementComponent, NavigationComponent,  FeaturedComponent, LinksComponent} from './index';
import {SideBarLeftRoutingModule} from './side-bar-left-routing.module';

@NgModule({
    imports: [CommonModule, SideBarLeftRoutingModule],
    declarations: [
        SideBarLeftComponent,
        AdvertisementComponent,
        NavigationComponent,
        FeaturedComponent,
        LinksComponent
    ],
    exports: [
        SideBarLeftComponent,
        AdvertisementComponent,
        NavigationComponent,
        FeaturedComponent,
        LinksComponent
    ],
    providers: []

})
export class SideBarLeftModule {

}
