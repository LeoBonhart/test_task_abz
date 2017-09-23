import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Advertisement } from './advertisement.model';


@Injectable()
export class AdvertisementService {

    public getAdvertisement(path: string): Observable<Array<Advertisement>> {
        let advertisment = this.http.get('./assets/json/' + path)
            .map(this.parseJSON);
        return advertisment;
    }
    private parseJSON(response: Response) {
        let res = response.json();
        let advertisements: Array<Advertisement> = new Array<Advertisement>();
        for (let adv of res) {
            let advertisement = new Advertisement();
            advertisement.guid = adv.guid;
            advertisement.name = adv.name;
            advertisement.image = adv.image;
            advertisement.timeMS = adv.timeMS;
            advertisement.side = adv.side;
            advertisements.push(advertisement);
        }

        return advertisements;
    }

    constructor(private http: Http) {

    }
}
