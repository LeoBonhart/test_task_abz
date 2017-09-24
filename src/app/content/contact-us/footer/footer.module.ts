import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer.component';
import { FooterRoutingModule } from './footer-routing.module';
import { FooComponent } from './foo/foo.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [CommonModule, FooterRoutingModule],
    declarations: [FooterComponent, FooComponent, AboutComponent],
    exports: [FooterComponent, FooComponent, AboutComponent],
    providers: []
})
export class FooterModule {

}
