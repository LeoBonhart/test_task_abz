import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRouterModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { TitleTextComponent } from './title-text/title-text.component';
import { TitleHeaderComponent } from './title-header/title-header.component';

@NgModule({
    imports: [ CommonModule, HeaderRouterModule ],
    exports: [ HeaderComponent, TitleTextComponent, TitleHeaderComponent ],
    declarations: [ HeaderComponent, TitleTextComponent, TitleHeaderComponent ],
    providers: []
})
export class HeaderModule {

}
