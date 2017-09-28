import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormModel, DropDown, ContactUsError, Details} from './contact-us.model';


@Injectable()
export class ContactUsService {
    private APIPathGetDrpDwn: string = 'http://504080.com/api/v1/directories/enquiry-types';
    private APIPathPostDATA: string = 'http://504080.com/api/v1/support';

    public getAPI(): Observable<any|Array<DropDown>> {
        let drpdwn = this.http.get(this.APIPathGetDrpDwn)
            .map(this.parseDrpDwn)
            .catch(this.handleError);
        return drpdwn;
    }
    private parseDrpDwn(response: Response): Array<DropDown> {
        let res = response.json();
        let drpdwn: Array<DropDown> = new Array<DropDown>();
        for (let index = 0; index < res.data.length ; index++) {
            let option = new DropDown();
            option.id = index;
            option.name = res.data[index].name;
            drpdwn.push(option);
        }
        return drpdwn;
    }

    postAPI(formData: any): Observable<any|string> {// 	(◕‿◕) через фидлер определил, надоело доставать токены вручную.
        let had = new Headers();
        had.append('Content-Type', 'multipart/form-data');
        return this.http.post(this.APIPathPostDATA, formData, { headers: had })
                        .map((response: Response) => { return response.json().data.message })
                        .catch(this.handleError);
    }

    private handleError(error: any): any {
        let message = new ContactUsError;

        if (error instanceof Response) {
            let errorData = error.json().error || JSON.stringify(error.json());
            message.code = errorData.code;
            message.message = errorData.message;
            message.description = errorData.description;
            if (errorData.details) {
                message.details = new Array<Details>();
                for (let det of errorData.details) {
                    let detail = new Details();
                    detail.code = det.code;
                    detail.field = det.field;
                    detail.description = det.description;
                    message.details.push(detail);
                }
            };
        } else {
            message.message = error.message ? error.message : error.toString();
        }

        console.error(`${message.code} - ${message.message}`);
        return Observable.throw(message);
    }

    constructor(private http: Http) {
    }
}
