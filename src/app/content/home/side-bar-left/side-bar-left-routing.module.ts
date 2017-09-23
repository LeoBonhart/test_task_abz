import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent, AskComponent, CompaniesComponent, FeedComponent } from './../center-main/index';

@NgModule({
    imports: [RouterModule.forChild([
        // { path: 'feed', outlet: 'center', component: FeedComponent },
        // { path: 'ask', outlet: 'center', component: AskComponent },
        // { path: 'companies', outlet: 'center', component: CompaniesComponent },
        // { path: 'services', outlet: 'center', component: ServicesComponent }
    ])],
    exports: [RouterModule]
})
export class SideBarLeftRoutingModule {

}
