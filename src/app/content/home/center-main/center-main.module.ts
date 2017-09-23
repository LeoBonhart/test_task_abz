import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesComponent, AskComponent, CompaniesComponent, FeedComponent }  from './index';
import { CenterMainRoutingModule } from './center-main-routing.module';

@NgModule({
    imports: [CommonModule, CenterMainRoutingModule],
    declarations: [
        ServicesComponent,
        AskComponent,
        CompaniesComponent,
        FeedComponent
    ],
    exports: [
        ServicesComponent,
        AskComponent,
        CompaniesComponent,
        FeedComponent
    ],
    providers: []

})
export class CenterMainModule {

}
