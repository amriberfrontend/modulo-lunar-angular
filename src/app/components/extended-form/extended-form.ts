import { Component, computed, HostListener, inject, input, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CampoBasico } from '../../model/campo-basico';
import { CampoControlService } from '../../services/campo-control-service';
import { ExtendedFormField } from "../extended-form-field/extended-form-field";
import { ReducedFormField } from "../reduced-form-field/reduced-form-field";

@Component({
  selector: 'app-extended-form',
  imports: [ReactiveFormsModule, ExtendedFormField, ReducedFormField],
  templateUrl: './extended-form.html',
  styleUrl: './extended-form.scss',
})
export class ExtendedForm {

  private readonly campoControl = inject(CampoControlService);

  windowWidth = window.innerWidth;

  @HostListener("window:resize")
  onResize() {
    this.windowWidth = window.innerWidth;
  }

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
