import { Component, inject, Input } from '@angular/core';
import { InputData } from '../input-data';
import { IInputData } from '../i-input-data';

@Component({
  selector: 'app-extended-input',
  imports: [],
  template: `
    <div class="row mb-3">
      <label class="col-sm-2 col-form-label" [htmlFor]="inputData.id">{{ inputData.label }}</label>
      <div class="col-sm-10">
        <input class="form-control" [id]="inputData.id" [type]="inputData.type">
      </div>
    </div>
  `,
  styleUrl: './extended-input.scss',
})
export class ExtendedInput {
  @Input() inputData: IInputData = inject(InputData);
}
