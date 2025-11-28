import { Injectable } from '@angular/core';
import { IInputData } from './i-input-data';
import { Option } from './option';
import { FieldTree } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class SelectData implements IInputData {
  id: string = '';
  label: string = '';
  readonly type: string = 'select';
  field?: FieldTree<any, string | number>;
  options: Option[] = [];
  max?: number | undefined;
  min?: number | undefined;
}
