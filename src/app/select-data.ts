import { Injectable } from '@angular/core';
import { IInputData } from './i-input-data';
import { Option } from './option';

@Injectable({
  providedIn: 'root',
})
export class SelectData implements IInputData {
  id: string = '';
  label: string = '';
  readonly type: string = 'select';
  options: Option[] = [];
}
