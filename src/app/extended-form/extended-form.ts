import { Component, inject, inputBinding, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { ExtendedTextarea } from "../extended-textarea/extended-textarea";
import { InputDataFactory } from '../input-data-factory';

@Component({
  selector: 'app-extended-form',
  imports: [Field, ExtendedTextarea],
  templateUrl: './extended-form.html',
  styleUrl: './extended-form.scss',
})
export class ExtendedForm {
  loginModel = signal({
    identificador: '',
    nombre: ''
  });

  loginForm = form(this.loginModel);

  inputDataFactory = inject(InputDataFactory);

  identificadorData = this.inputDataFactory.getInputData("identificador", "Identificador:", "text");
  nombreData = this.inputDataFactory.getInputData("nombre", "Nombre:", "text");

}
