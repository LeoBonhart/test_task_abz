import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
    // moduleId: module.id.toString(),
    selector: 'foo',
    templateUrl: './foo.component.html',
    styleUrls: ['./foo.component.scss']
})
export class FooComponent {
    private copyright: string = 'Denteez Copyright ' + this.getCurrentYear();
    private info: Array<string> = ['Support', 'Privacy Policy', 'Terms of use'];

    private getCurrentYear (date: Date = new Date()): string {
        return date.getFullYear().toString();
    }
}
