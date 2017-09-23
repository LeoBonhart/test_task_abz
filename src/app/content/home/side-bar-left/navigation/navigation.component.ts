import { Component, OnInit } from '@angular/core';
import { Navigation, NavigationPanelService } from '../../../../shared/index';

@Component({
    // moduleId: module.id.toString(),
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    model: Array<Navigation>;
    selectedItem: any;

    constructor(private service: NavigationPanelService) { }

    ngOnInit() {
        this.getServices();
    }

    private getServices() {
        this.service.getJson('navigation.json').subscribe(x => this.model = x );
    }

    setActive(event: any, elem: any) {
        // console.log(event, elem)
        this.selectedItem = elem;
    }
}
