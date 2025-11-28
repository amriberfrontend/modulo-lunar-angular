import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExtendedFieldBase } from '../../model/extended-field-base';

@Component({
  selector: 'app-extended-form-field',
  imports: [ReactiveFormsModule],
  templateUrl: './extended-form-field.html',
  styleUrl: './extended-form-field.scss',
})
export class ExtendedFormField {

  // What do these two do?
  // Well this defines the field, of course. (I still don't get the structure, tho)
  // It doesn't define it, it gets it from the parent! Okay, okay. I'm starting to catch on.
  readonly field = input.required<ExtendedFieldBase<string>>();
  // This creates a form group, right? Oh! No, it doesn't! It _gets_ the group!
  readonly form = input.required<FormGroup>();

  // So this returns if it is valid or not, simple enough.
  // Hold on. Why get? Why not make it a function?
  // Ah, it must be so the parent can get it. A parent can't access a childs functions... probably.
  get isValid() {
    return this.form().controls[this.field().key].valid;
  }
}
