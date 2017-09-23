import { Component, OnInit } from '@angular/core';
import { Featured, FeaturedService } from '../../../../shared/index';

@Component({
    // moduleId: module.id.toString(),
    selector: 'featured',
    templateUrl: './featured.component.html',
    styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
    model: Featured;

    constructor(private service: FeaturedService) { }

    ngOnInit() {
        this.getServices();
    }

    private getServices() {
        this.service.getJson('featured-right.json').subscribe(x => this.model = x );
    }
}
