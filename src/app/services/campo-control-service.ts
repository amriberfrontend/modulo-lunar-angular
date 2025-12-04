import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { CampoBasico } from '../model/campo-basico';
import { pattern } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class CampoControlService {
  toFormGroup(fields: CampoBasico<string>[]) {
    const group: any = {};

    fields.forEach((field) => {
      const validaors: ValidatorFn[] = [];
      if (field.required) {
        validaors.push(Validators.required);
      }
      if (field.maxLength != undefined) {
        validaors.push(Validators.maxLength(field.maxLength));
      }
      if (field.min != undefined) {
        validaors.push(Validators.min(field.min));
      }
      if (field.max != undefined) {
        validaors.push(Validators.max(field.max));
      }
      if (field.pattern) {
        validaors.push(Validators.pattern(field.pattern));
      }

      group[field.key] = new FormControl(field.value || '', validaors);
    });
    return new FormGroup(group);
  }
}
