import { Component } from '@angular/core';
import { AdvertisementService, Advertisement } from '../../../../shared/index';

@Component({
    // moduleId: module.id.toString(),
    selector: 'advertisement',
    templateUrl: './advertisement.component.html',
    styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent {
    private advertisementList: Array<Advertisement>;
    private index: number = 0;
    private time: number = 10000;

    public title: string = 'Advertisement';
    public description: string = 'Ads By Denteez.com';

    ngOnInit() {
        this.getServices();
        this.setTimerForAdv();
    }
    setTimerForAdv() {
        let _this = this;
        setTimeout(function(){
            // console.log(this,_this.time);
            if (_this.index >= _this.advertisementList.length - 1) {
                _this.index = 0;
                _this.time = _this.advertisementList[_this.index].timeMS;
            } else {
                _this.index++;
                _this.time = _this.advertisementList[_this.index].timeMS;
            }
            _this.setTimerForAdv();
        }, this.time);
    }
    private getServices() {
        this.service.getAdvertisement('advertisement.json').subscribe(x => {
            this.advertisementList = x.filter( z => z.side === 2);
        });
    }

    constructor(private service: AdvertisementService) { }
}
