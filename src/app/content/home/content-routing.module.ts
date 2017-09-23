import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent, AskComponent, CompaniesComponent, FeedComponent } from './center-main/index';
import { ContentComponent } from './index';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'home', component: ContentComponent, children: [
            { path: 'feed', children: [
                {path: '', outlet: 'center', component: FeedComponent},
                {path: '', component: FeedComponent}
            ]},
            { path: 'ask',   children: [
                {path: '', outlet: 'center', component: AskComponent },
                {path: '', component: AskComponent}
            ]},
            { path: 'companies', children: [
                {path: '', outlet: 'center', component: CompaniesComponent },
                {path: '', component: CompaniesComponent}
            ]},
            { path: 'services', children: [
                {path: '', outlet: 'center', component: ServicesComponent },
                {path: '', component: ServicesComponent}
            ]}
        ] }
    ])],
    exports: [RouterModule]
})
export class ContentRoutingModule {

}
