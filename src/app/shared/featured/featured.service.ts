import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Featured, Company, Link } from './featured.model';



@Injectable()
export class FeaturedService {

    public getJson(path: string): Observable<Featured> {
        let featured = this.http.get('./assets/json/' + path)
            .map(this.parseJSON);
        return featured;
    }
    private parseJSON(response: Response): Featured {
        let res = response.json();
        let featured: Featured = new Featured();
        featured.title = res.title;
        featured.link = new Link(res.link === undefined ? '' : res.link.name,
                                 res.link === undefined ? '' : res.link.url);
        featured.companys = new Array<Company>();
        for (let item of res.companys){
            let company = new Company();
            company.name = new Link(item.name === undefined ? '' : item.name.name,
                                    item.name === undefined ? '' : item.name.url);
            company.location = item.location;
            company.activity = item.activity;
            company.image = item.image;
            company.link = new Link(item.link === undefined ? '' : item.link.name,
                                    item.link === undefined ? '' : item.link.url);
            company.guid = item.guid;
            company.description = item.description;
            featured.companys.push(company);
        }
        return featured;
    }

    constructor(private http: Http) {
    }
}
