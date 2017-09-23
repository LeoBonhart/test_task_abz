import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarRightComponent, AdvertisementComponent,  FeaturedComponent, PeopleComponent } from './index';
import { SideBarRightRoutingModule } from './side-bar-right-routing.module';

@NgModule({
    imports: [CommonModule, SideBarRightRoutingModule],
    declarations: [
        SideBarRightComponent,
        AdvertisementComponent,
        FeaturedComponent,
        PeopleComponent
    ],
    exports: [
        SideBarRightComponent,
        AdvertisementComponent,
        FeaturedComponent,
        PeopleComponent
    ],
    providers: []

})
export class SideBarRightModule {

}
