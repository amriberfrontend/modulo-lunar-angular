import { Component, computed, inject, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CampoBasico } from '../../model/campo-basico';
import { CampoControlService } from '../../services/campo-control-service';
import { ExtendedFormField } from "../extended-form-field/extended-form-field";

@Component({
  selector: 'app-extended-form',
  imports: [ReactiveFormsModule, ExtendedFormField],
  templateUrl: './extended-form.html',
  styleUrl: './extended-form.scss',
})
export class ExtendedForm {

  private readonly campoControl = inject(CampoControlService);

  // So this gets the field list from the parent, ok
  readonly campos = input<CampoBasico<string>[]|null>([]);

  readonly form = computed<FormGroup>(() =>
    this.campoControl.toFormGroup(this.campos() as CampoBasico<string>[]),
  );

  payload = '';

  onSubmit() {
    this.payload = JSON.stringify(this.form().getRawValue());


  }


}
