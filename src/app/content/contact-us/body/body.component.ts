import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FormModel, DropDown, ContactUsService, ContactUsError, fileExtention, maxSizeMB, maxWidthHeigth } from './../../../shared/index';
let _URL = window.URL;
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
    public fileImage: string;

// #region свойства и методы отвечающие за работу с формой и валидацию
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
            fileImage: [this.fileImage],
            email: [this.model.email, [
                Validators.required,
                Validators.email
            ]]
        });
        this.contactUsForm.get('enquiry_type').disable();
        this.offValidationFile();
        this.contactUsForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }
    setValidationFile() {
        this.contactUsForm.get('fileExt').enable();
        this.contactUsForm.get('fileSize').enable();
        this.contactUsForm.get('fileWH').enable();
    }
    offValidationFile() {
        this.contactUsForm.get('fileExt').disable();
        this.contactUsForm.get('fileSize').disable();
        this.contactUsForm.get('fileWH').disable();
    }
// #endregion

    ngOnInit() {
        this.setValidation();
        this.getDrpDown();
    }

// #region методы работы с API
    private getDrpDown() {
        this.service.getAPI().subscribe(
            data => this.enquiry = data,
            error => this.errorMessage = error
        );
    }
    private postFormData(formData: any) {
        this.service.postAPI(formData).subscribe(
            data => {this.errorMessage.message = data; console.log('data:', data)},
            error => {this.errorMessage = error; console.log('data:', error); this.ShowModal()}
        );
    }
// #endregion

    private CloseModal() {
        this.errorMessageShow = '';
    }
    private ShowModal() {
        this.errorMessageShow = 'show-modal';
    }

    onSubmit(form: any, image: any) {
        if (image.files[0]) {
            // let reader = new FileReader();
            // reader.readAsDataURL(image.files[0]);
            // reader.onload = (e: FileReaderEvent) => {
            //     this.dataHelper( form, reader.result );
            // };
            this.fillFormData(form, image.files[0] );
        } else {
            this.fillFormData(form, '' );
            // this.dataHelper(form, '' );
        }
    }

    private dataHelper(form: any, image: any ) {
        let obj: FormModel = new FormModel();
        obj.user_name =  form.value.user_name;
        obj.subject = form.value.subject;
        obj.file = image;
        obj.enquiry_type = form.value.enquiry_type;
        obj.email = form.value.email;
        obj.description = form.value.description;
        obj.department = form.value.department;
        this.postFormData(obj);
    }

    private fillFormData(form: any, image: any ) {
        let formData: FormData = new FormData();
        formData.append('user_name', form.value.user_name);
        formData.append('subject', form.value.subject);
        formData.append('file', image);
        formData.append('enquiry_type', form.value.enquiry_type === undefined ? '' : form.value.enquiry_type);
        formData.append('email', form.value.email);
        formData.append('description', form.value.description);
        formData.append('department', form.value.department);
        // for (let pair in  new FormModel()) {
        //     console.log(pair + ' - ' + formData.get(pair));
        // }
        this.postFormData(formData);
    }

// #region методы отвечающие за обработку изображения
    onChangeImage(event: any) {
        this.setValidationFile();
        this.GetImage(event.target);
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
    // #region логика работы с изображением
        if (fSize.valid && fExt.valid) { // если размер файла и его расширение валидно, разрешается манипуляция с изображениями
            let img: HTMLImageElement;
            img = new Image();
            img.onload = () => {
                let wh = img.width + ',' + img.height;
                fWH.setValue(wh);
                if (fWH.valid) { // если размер (высоты и ширины) валидный, то прорисовка разрешается
                        let reader = new FileReader();
                        reader.onload = (e: FileReaderEvent) => {
                            this.lodedIMG = e.target.result;
                        };
                        reader.readAsDataURL(image);
                };
            };
            img.src = _URL.createObjectURL(image);
        } else {
            this.fileImage = '';
            this.lodedIMG = '';
        }
    // #endregion
    }
    removeImage(inputFile: any) {
        this.offValidationFile();
        inputFile.value = '';
        this.lodedIMG = '';
    }
// #endregion

    constructor(
        private fb: FormBuilder,
        private service: ContactUsService
    ) {};
}

// #region интерфейсы для корректной работы FileReader
    interface FileReaderEventTarget extends EventTarget {
        result: string
    }

    interface FileReaderEvent extends Event {
        target: FileReaderEventTarget;
        getMessage(): string;
    }
// #endregion
