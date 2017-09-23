export class Featured {
    public title: string;
    public link: Link;
    public companys: Array<Company>;
}
export class Company {
    public guid: string;
    public name: Link;
    public activity: string;
    public location: string;
    public link: Link;
    public image: string;
    public description: string;
}
export class Link {
    public name: string;
    public url: string;
    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
    }
}