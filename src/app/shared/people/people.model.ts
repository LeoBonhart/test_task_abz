export class Social {
    public title: string;
    public link: Link;
    public peoples: Array<People>;
}
export class People {
    public guid: string;
    public name: Link;
    public activity: string;
    public location: string;
    public link: Link;
    public image: string;
}
export class Link {
    public name: string;
    public url: string;
    constructor(name: string, url: string){
        this.name = name;
        this.url = url;
    }
}