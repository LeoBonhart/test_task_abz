import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Service, Error } from './service.model';


@Injectable()
export class ServiceService {
    private filter: string = '';
    private seviceList: Array<Service> = new Array<Service>();
    private api_path: string = 'http://504080.com/api/v1/services/categories';
    private token: string = '7dc6a5ae1492cd768cc31ec58bc42ae14ec3596a';
    private login: object = {'email': 'test@abz.agency', 'password': '123456'};

    getData(): Array<Service> {
        return this.seviceList.filter(x =>
            x.actual === true &&
            x.name.search(new RegExp(this.filter, 'i'))
        );
    }

    filterData(filt: string): Array<Service> {
        this.filter = filt;
        return this.getData();
    }
    public getAPI(): Observable<any|Array<Service>> {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        let service = this.http.get(this.api_path, {headers: headers})
            .map(this.parseJSON)
            .catch(this.handleError);
        return service;
    }
    private parseJSON(response: Response): Array<Service> {
        let res = response.json();
        let services: Array<Service> = new Array<Service>();
        for (let item of res.data) {
            let service = new Service();
            service.id = item.id;
            service.name = item.title;
            service.icoUrl = item.icon;
            service.count = item.count;
            services.push(service);
        }
        return services;
    }
    private handleError(error: any): any {
        let message = new Error;

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message.code = errorData.code;
            message.message = errorData.message;
            message.description = errorData.description;
        } else {
            message.message = error.message ? error.message : error.toString();
        }

        console.error(`${message.code} - ${message.message}`);
        return Observable.throw(message);
    }
    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', this.token);
    }
    getToken(): Observable<ServiceService> {// 	(◕‿◕) через фидлер определил, надоело доставать токены вручную.
        let had = new Headers();
        had.append('Content-Type', 'application/json');
        return this.http.post('http://504080.com/api/v1/account/login', this.login, { headers: had })
                        .map((response: Response) => { this.token = response.json().data.token; return this; });
    }
    constructor(private http: Http) {
    }
}
