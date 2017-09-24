import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './index';
import { NavbarRoutingModule } from './navbar-routing.module';
@NgModule({
    imports: [CommonModule, NavbarRoutingModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
    providers: []

})
export class NavbarModule {

}
