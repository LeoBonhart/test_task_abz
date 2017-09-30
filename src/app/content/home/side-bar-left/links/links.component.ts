import { Component } from '@angular/core';

@Component({
    // moduleId: module.id.toString(),
    selector: 'links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent {
    private copyright: string = 'Denteez Copyright ' + this.getCurrentYear();

    private getCurrentYear (date: Date = new Date()): string {
        return date.getFullYear().toString();
    }
}
