import { Component, inject, inputBinding, OnInit, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { InputDataFactory } from '../../services/input-data-factory';
import { IInputData } from '../../services/i-input-data';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-extended-form',
  imports: [Field, ReactiveFormsModule],
  templateUrl: './extended-form.html',
  styleUrl: './extended-form.scss',
})
export class ExtendedForm implements OnInit {
  loginModel = signal({
    identificador: '',
    nombre: ''
  });

  labelLenght = '2';
  fieldLenght = '10';

  loginForm = form(this.loginModel);

  inputDataFactory = inject(InputDataFactory);

  fields: IInputData[] = [];

  identificadorData = this.inputDataFactory.getInputData("identificador", $localize `Identificador:`, "text", "loginForm.identificador");
  nombreData = this.inputDataFactory.getInputData("nombre", "Nombre:", "number", this.loginForm.nombre);

  ngOnInit(): void {
    this.fields.push(this.identificadorData);
    this.fields.push(this.nombreData)
  }



}
