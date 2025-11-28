import { Injectable } from '@angular/core';
import { IInputData } from './i-input-data';
import { FieldTree } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class InputData implements IInputData {
  id: string = '';
  label: string = '';
  type: string = '';
  field?: FieldTree<any, string | number>;
  max?: number;
  min?: number;
}
