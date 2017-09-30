import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormModel, DropDown, ContactUsService, ContactUsError, fileExtention, maxSizeMB, maxWidthHeigth } from './../../../shared/index';

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
    public lodedIMG: string;
    public fileImage: any;
    // Объект с ошибками, которые будут выведены в пользовательском интерфейсе
    formErrors = {
        user_name: '',
        department: '',
        enquiry_type: '',
        description: '',
        subject: '',
        fileExt: '',
        fileSize: '',
        fileWH: '',
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
        enquiry_type: {
            'required': 'Required field'
        },
        description: {
            'required': 'Required field',
            'maxlength': 'The value cannot exceed 1000 characters',
        },
        subject: {
            'required': 'Required field'
        },
        fileExt: {
            'fileExtention': 'Only images are requered'
        },
        fileSize: {
            'maxSizeMB': 'Maximum image size exceeded'
        },
        fileWH: {
            'maxWidthHeigth': 'Maximum image size exceeded'
        },
        email: {
            'required': 'Required field',
            'email': 'Invalid email address'
        }
    };

    onChangeDepartment(val: string) {
        if (val !== '6') {
            this.contactUsForm.get('enquiry_type').disable();
        } else {
            this.contactUsForm.get('enquiry_type').enable();
        };
    }
    onValueChanged(data?: any) {
        if (!this.contactUsForm) { return };
        let form = this.contactUsForm;
        for (let field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field) && this.validationMessages.hasOwnProperty(field)) {
                this.formErrors[field] = '';
                let control = form.get(field);
                console.log(field, control.dirty, !control.valid, control && control.dirty && !control.valid )
                if (control && control.dirty && !control.valid) {
                    let message = this.validationMessages[field];
                    console.log(field, message)
                    for (let key in control.errors) {
                        if (message.hasOwnProperty(key)) {
                            console.log(field, key)
                            this.formErrors[field] += message[key] + ' ';
                            if (field === 'fileExt')
                            console.log(this.formErrors[field]);
                        }
                    }
                }
            }
        }
    }

    ngOnInit() {
        this.setValidation();
        this.getDrpDown();
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
            enquiry_type: [this.model.enquiry_type, [
                Validators.required
            ]],
            description: [this.model.description, [
                Validators.required,
                Validators.maxLength(1000)
            ]],
            subject: [this.model.subject, [
                Validators.required
            ]],
            // к сожалению красиво не получилось, FormControl не поддерживает type'file', пришлось хайден инпутами
            fileExt: ['', [
                fileExtention('jpeg', 'jpg', 'gif', 'png'),
            ]],
            fileSize: ['', [
                maxSizeMB(5)
            ]],
            fileWH: ['', [
                maxWidthHeigth(300, 300)
            ]],
            email: [this.model.email, [
                Validators.required,
                Validators.email
            ]]
        });
        this.contactUsForm.get('enquiry_type').disable();
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
    onChangeImage(event: any) {
        this.GetImage(event.target);
    }
    onSubmit(form: any) {
        // this.postFormData(form);
        let obj: FormModel = new FormModel();
        obj.user_name =  form.value.user_name;
        obj.subject = form.value.subject;
        obj.file = form.value.file;
        obj.enquiry_type = form.value.enquiry_type;
        obj.email = form.value.email;
        obj.description = form.value.description;
        obj.department = form.value.department;
        console.log(obj);
    }

    GetImage(inputFile: any) {
        let image: File = inputFile.files[0];
        let ext = /[^.]+$/.exec(image.name)[0];
        let fSize = this.contactUsForm.get('fileSize');
        let fExt = this.contactUsForm.get('fileExt');
        let fWH = this.contactUsForm.get('fileWH');
        fSize.markAsDirty();
        fExt.markAsDirty();
        fWH.markAsDirty();
        fSize.setValue(image.size);
        fExt.setValue(ext);
        fWH.setValue('300,300');
        if (fSize.valid && fExt.valid && fWH.valid) {
            let reader = new FileReader();
            reader.onload = (e: FileReaderEvent) => {
                this.lodedIMG = e.target.result;
            };
            reader.readAsDataURL(image);
        } else {
            this.fileImage = '';
            this.lodedIMG = '';
        }
    }
    onLoadCallback(e: Event) {
        this.lodedIMG = e.target['result'];
    }
    checkSize(elem: File, predicate: number) {
        let fileSize = elem.size;
        let maxSize: number = predicate * 1024 * 1024;
        if (fileSize > maxSize) {
            this.setManualValidationErrorForInputFile('file', 'maxSizeMB');
        } else {
            this.clearManualValidationErrorForInputFile('file');
        }
    }
    setManualValidationErrorForInputFile(field: string, key: string) {
        this.formErrors[field] = '';
        let message = this.validationMessages[field];
        this.formErrors[field] += message[key] + ' ';
    }
    clearManualValidationErrorForInputFile(field: string) {
        this.formErrors[field] = undefined;
    }
    constructor(
        private fb: FormBuilder,
        private service: ContactUsService
    ) {};
}

// интерфейсы для корректной работы FileReader
interface FileReaderEventTarget extends EventTarget {
    result: string
}

interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage(): string;
}
