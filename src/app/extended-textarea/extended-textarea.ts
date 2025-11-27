import { Component, inject, input } from '@angular/core';
import { IInputData } from '../i-input-data';
import { InputData } from '../input-data';
@Component({
  selector: 'app-extended-textarea',
  imports: [],
  template: `
    <div class="row mb-3">
      <label class="col-sm-{{labelWidth()}} col-form-label" [htmlFor]="inputData().id"> {{ inputData().label }} </label>
      <div class="col-sm-{{inputWidth()}}">
        <textarea class="form-control"></textarea>
      </div>
    </div>
  `,
  styleUrl: './extended-textarea.scss',
})
export class ExtendedTextarea {
  inputData = input<IInputData>(inject(InputData));
  labelWidth = input<string>('2');
  inputWidth = input<string>('10');
}
