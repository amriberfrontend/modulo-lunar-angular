import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CampoBasico } from '../model/campo-basico';

@Injectable({
  providedIn: 'root',
})
export class CampoControlService {
  toFormGroup(fields: CampoBasico<string>[]) {
    const group: any = {};

    fields.forEach((field) => {
      group[field.key] = field.required
        ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
