import { inject, Injectable, input } from '@angular/core';
import { InputData } from './input-data';
import { SelectData } from './select-data';
import { Option } from './option';

@Injectable({
  providedIn: 'root',
})
export class InputDataFactory {
  getInputData(id: string, label: string, type: string): InputData {
    const inputData = inject(InputData);
    inputData.id = id;
    inputData.label = label;
    inputData.type = type;
    return inputData;
  }


  getSelectData(id: string, label: string, options: Option[]): SelectData {
    const selectData = inject(SelectData);
    selectData.id = id;
    selectData.label = label;
    selectData.options = options;
    return selectData;
  }
}
