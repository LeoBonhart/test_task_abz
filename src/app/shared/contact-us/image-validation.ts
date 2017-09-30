import { AbstractControl, ValidatorFn } from '@angular/forms';

export function maxSizeMB(predicate: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let imageSize = control.value;
        let maxSize: number = predicate * 1024 * 1024; // конвертация в байты, т.к. задается предикат в мегабайтах
        if (isNaN(maxSize)) {
            return { 'maxSizeMB': { imageSize } };
        } else if (maxSize < imageSize) {
            return { 'maxSizeMB': { imageSize } };
        } else {
            return null;
        }
    }
}

export function fileExtention(... ext: Array<string>): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let extention: string = control.value;
        if (!ext) {
            return { 'fileExtention': { extention } };
        } else if ( ext.indexOf(extention.toLowerCase()) === -1 ) {
            return { 'fileExtention': { extention } };
        } else {
            return null;
        }
    }
}

export function maxWidthHeigth(maxWidth: number, maxHeigth: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let WH: Array<string> = control.value.split(/\,/);
        let elemH = +WH[1];
        let elemW = +WH[1];
        if (isNaN(elemH) || isNaN(elemW)) {
            return { 'maxWidthHeigth': { WH } };
        } else if (elemW > maxWidth || elemH > maxHeigth) {
            return { 'maxWidthHeigth': { WH } };
        } else {
            return null;
        }
    }
}
