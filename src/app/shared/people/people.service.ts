import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { People, Social, Link } from './people.model';


@Injectable()
export class PeopleService {

    public getJson(path: string): Observable<Social> {
        let social = this.http.get('./assets/json/' + path)
            .map(this.parseJSON);
        return social;
    }
    private parseJSON(response: Response): Social {
        let res = response.json();
        let social: Social = new Social();
        social.title = res.title;
        social.link = new Link(res.link === undefined ? '' : res.link.name,
                                 res.link === undefined ? '' : res.link.url);
        social.peoples = new Array<People>();
        for (let item of res.peoples){
            let people = new People();
            people.name = new Link(item.name === undefined ? '' : item.name.name,
                                    item.name === undefined ? '' : item.name.url);
            people.location = item.location;
            people.activity = item.activity;
            people.image = item.image;
            people.link = new Link(item.link === undefined ? '' : item.link.name,
                                    item.link === undefined ? '' : item.link.url);
            people.guid = item.guid;
            social.peoples.push(people);
        }
        return social;
    }

    constructor(private http: Http) {
    }
}
