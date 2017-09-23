import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])],
    exports: [RouterModule]
})
export class SideBarRightRoutingModule {

}
