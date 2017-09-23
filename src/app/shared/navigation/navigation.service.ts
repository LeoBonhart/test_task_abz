import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Navigation } from './navigation.model';


@Injectable()
export class NavigationPanelService {

    public getJson(path: string): Observable<Array<Navigation>> {
        let navigation = this.http.get('./assets/json/' + path)
            .map(this.parseJSON);
        return navigation;
    }
    private parseJSON(response: Response): Array<Navigation> {
        let res = response.json();
        let navigations = new Array<Navigation>();
        for (let item of res){
            let navigation = new Navigation();
            navigation.name = item.name;
            navigation.action = item.action;
            navigation.svg = item.svg;
            navigation.fa_Ico = item.fa_Ico;
            navigations.push(navigation);
        }
        return navigations;
    }

    constructor(private http: Http) {
    }
}
