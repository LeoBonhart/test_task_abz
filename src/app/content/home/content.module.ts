import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './index';
import { ContentRoutingModule } from './content-routing.module';
import { NavbarModule } from './navbar/index';
import { SideBarLeftModule } from './side-bar-left/index';
import { CenterMainModule } from './center-main/index';
import { SideBarRightModule } from './side-bar-right/index';

@NgModule({
    imports: [CommonModule, ContentRoutingModule, SideBarLeftModule, CenterMainModule, SideBarRightModule, NavbarModule ],
    declarations: [ContentComponent],
    exports: [ContentComponent],
    providers: []

})
export class ContentModule {

}
