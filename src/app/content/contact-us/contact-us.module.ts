import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ContactUsComponent }  from './contact-us.component';
import { HeaderModule } from './header/index';
import { BodyComponent } from './body/index';
import { FooterModule } from './footer/index';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsService } from './../../shared/index';
@NgModule({
    imports: [CommonModule, ContactUsRoutingModule, FooterModule, HeaderModule, ReactiveFormsModule, FormsModule],
    declarations: [
        ContactUsComponent,
        BodyComponent
    ],
    exports: [
        ContactUsComponent,
        BodyComponent
    ],
    providers: [ContactUsService]

})
export class ContactUsModule {

}
