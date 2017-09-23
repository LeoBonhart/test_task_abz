import { Component, OnInit } from '@angular/core';
import { Social, PeopleService } from '../../../../shared/index';

@Component({
    // moduleId: module.id.toString(),
    selector: 'people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
    model: Social;

    constructor(private service: PeopleService) { }

    ngOnInit() {
        this.getServices();
    }

    private getServices() {
        this.service.getJson('people.json').subscribe(x => this.model = x );
    }
}
