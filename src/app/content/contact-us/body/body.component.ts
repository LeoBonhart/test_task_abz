import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormModel, DropDown, ContactUsService, ContactUsError} from './../../../shared/index';

@Component({
    // moduleId: module.id.toString(),
    selector: 'body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss']
})
export class BodyComponent {
    public enquiry: Array<DropDown>;
    public errorMessage: ContactUsError;
    public errorMessageShow: string = 'show-modal';
    public model: FormModel = new FormModel();
    public contactUsForm: FormGroup;

    // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
    formErrors = {
        user_name: '',
        department: '',
        // enquiry_type: '',
        other_department: '',
        description: '',
        subject: '',
        // file: '',
        email: ''
    };

    // Объект с сообщениями ошибок
    validationMessages = {
        user_name: {
            'required': 'Required field'
        },
        department: {
            'required': 'Required field'
        },
        // enquiry_type: {
        //     'required': 'Required field'
        // },
        other_department: {
            'required': 'Required field'
        },
        description: {
            'required': 'Required field',
            'maxlength': 'The value cannot exceed 1000 characters',
        },
        subject: {
            'required': 'Required field'
        },
        // file: {
        //     'required': 'Required field'
        // },
        email: {
            'required': 'Required field',
            'email': 'Invalid email address'
        }
    };

    onChangeDepartment(val: string) {
        if (val !== '6') {
            this.contactUsForm.get('other_department').disable();
        } else {
            this.contactUsForm.get('other_department').enable();
        };
    }
    onValueChanged(data?: any) {
        if (!this.contactUsForm) { return };
        let form = this.contactUsForm;
        for (let field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field) && this.validationMessages.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                let control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    let message = this.validationMessages[field];
                    for (let key in control.errors) {
                        if (message.hasOwnProperty(key)) {
                            this.formErrors[field] += message[key] + ' ';
                        }
                    }
                }
            }
        }
    }

    ngOnInit() {
        this.getDrpDown();
        this.setValidation();
    }
    private setValidation() {
        this.contactUsForm = this.fb.group({
            user_name: [this.model.user_name, [
                Validators.required
            ]],
            department: [this.model.department, [
                Validators.required,
                Validators.pattern('\\d+')
            ]],
            // enquiry_type: [this.model.enquiry_type, [
            //     Validators.required
            // ]],
            other_department: [this.model.other_department, [
                Validators.required
            ]],
            description: [this.model.description, [
                Validators.required,
                Validators.maxLength(1000)
            ]],
            subject: [this.model.subject, [
                Validators.required
            ]],
            // file: [this.model.file, [
            //     Validators.required
            // ]],
            email: [this.model.email, [
                Validators.required,
                Validators.email
            ]]
        });
        this.contactUsForm.get('other_department').disable();
        this.contactUsForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }
    private getDrpDown() {
        this.service.getAPI().subscribe(
            data => this.enquiry = data,
            error => this.errorMessage = error
        );
    }
    private postFormData(formData: any) {
        this.service.postAPI(formData).subscribe(
            data => {this.errorMessage.message = data; console.log('data:', data)},
            error => {this.errorMessage = error; console.log('data:', error)}
        );
    }
    private CloseModal() {
        this.errorMessageShow = '';
    }
    private ShowModal() {
        this.errorMessageShow = 'show-modal';
    }

    onSubmit(form: any) {
        // this.postFormData(form);
        let obj: FormModel = new FormModel();
        obj.user_name =  form.value.user_name;
        obj.subject = form.value.subject;
        obj.other_department = form.value.other_department;
        obj.file = form.value.file;
        obj.enquiry_type = form.value.enquiry_type;
        obj.email = form.value.email;
        obj.description = form.value.description;
        obj.department = form.value.department;
        console.log(obj);
    }

    constructor(private fb: FormBuilder, private service: ContactUsService) {};
}
// uploaded image should not exceed 300x300 pixels;
// validate that the image was chosen and not an arbitrary file;
// maximum size of the uploaded image should not exceed 5MB;
