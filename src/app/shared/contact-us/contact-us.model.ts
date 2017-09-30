
export class FormModel {
    public department: number;
    public description: string;
    public email: string;
    public enquiry_type: string;
    public file: any;
    public subject: string;
    public user_name: string;
    constructor() {
        this.department = 0;
        this.description = '';
        this.email = '';
        this.enquiry_type = '';
        this.file = '';
        this.subject = '';
        this.user_name = '';
    }
}

export class DropDown {
    public id: number;
    public name: string;
}

export class ContactUsError {
    public code: number;
    public message: string;
    public description: string;
    public details: Array<Details>;
}

export class Details {
    public field: string;
    public code: number;
    public description: string;
}
