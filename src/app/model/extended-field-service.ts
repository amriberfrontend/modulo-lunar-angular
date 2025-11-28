import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExtendedFieldBase } from './extended-field-base';

@Injectable({
  providedIn: 'root',
})
export class ExtendedFieldService {
  toFormGroup(fields: ExtendedFieldBase<string>[]) {
    const group: any = {};

    fields.forEach((field) => {
      group[field.key] = field.required
        ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }

}
