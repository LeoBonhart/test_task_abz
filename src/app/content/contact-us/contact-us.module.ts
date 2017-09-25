import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsComponent }  from './contact-us.component';
import { HeaderModule } from './header/index';
import { BodyComponent } from './body/index';
import { FooterModule } from './footer/index';
import { ContactUsRoutingModule } from './contact-us-routing.module';

@NgModule({
    imports: [CommonModule, ContactUsRoutingModule, FooterModule, HeaderModule],
    declarations: [
        ContactUsComponent,
        BodyComponent
    ],
    exports: [
        ContactUsComponent,
        BodyComponent
    ],
    providers: []

})
export class ContactUsModule {

}
