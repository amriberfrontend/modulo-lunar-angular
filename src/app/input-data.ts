import { Injectable } from '@angular/core';
import { IInputData } from './i-input-data';

@Injectable({
  providedIn: 'root',
})
export class InputData implements IInputData {
  id: string = '';
  label: string = '';
  type: string = '';
}
