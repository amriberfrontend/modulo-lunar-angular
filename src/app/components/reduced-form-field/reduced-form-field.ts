import { Component, input } from '@angular/core';
import { CampoBasico } from '../../model/campo-basico';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reduced-form-field',
  imports: [ReactiveFormsModule],
  templateUrl: './reduced-form-field.html',
  styleUrl: './reduced-form-field.scss',
})
export class ReducedFormField {


  classes: string[] = [];
  
  // What do these two do?
  // Well this defines the field, of course. (I still don't get the structure, tho)
  // It doesn't define it, it gets it from the parent! Okay, okay. I'm starting to catch on.
  readonly campo = input.required<CampoBasico<string>>();
  // This creates a form group, right? Oh! No, it doesn't! It _gets_ the group!
  readonly form = input.required<FormGroup>();

  // So this returns if it is valid or not, simple enough.
  // Hold on. Why get? Why not make it a function?
  // Ah, it must be so the parent can get it. A parent can't access a childs functions... probably.
  get isValid() {
    return this.form().controls[this.campo().key].valid;
  }

  ngOnInit(): void {
    if (this.campo().controlType == "dropdown") {
      this.classes.push("form-select");
    } else {
      this.classes.push("form-control")
    }

  }
}
