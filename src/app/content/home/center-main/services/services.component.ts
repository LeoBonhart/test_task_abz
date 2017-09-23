import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild  } from '@angular/core';
import { Service, ServiceService, Error } from '../../../../shared/index';

@Component({
    // moduleId: module.id.toString(),
    selector: 'services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {
    services: Array<Service>;
    errorMessage: Error;
    @ViewChild('modal') el: ElementRef;
    constructor(private service: ServiceService, private rd: Renderer2) { }

    ngOnInit() {
        // this.getServices(); // для проверки отрабатываения модалки ошибки
        this.getToken()

    }
    ngAfterViewInit() {
        // console.log(this.rd, this.el.nativeElement, this.el);
    }
    private getServices() {
        this.service.getAPI().subscribe(
            data => this.services = data,
            error => this.errorMessage = error
        );
    }
    private getToken() {
        this.service.getToken().subscribe(x => x.getAPI().subscribe(
            data => this.services = data,
            error => this.errorMessage = error
        ));
    }

}
