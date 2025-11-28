import { inject, Injectable, input } from '@angular/core';
import { InputData } from './input-data';
import { SelectData } from './select-data';
import { Option } from './option';
import { FieldTree } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class InputDataFactory {
  getInputData(id: string, label: string, type: string, field: FieldTree<any, string | number>, max?: number, min?: number): InputData {
    const inputData = new InputData();
    inputData.id = id;
    inputData.label = label;
    inputData.type = type;
    inputData.field = field;
    inputData.max = max;
    inputData.min = min;
    return inputData;
  }


  getSelectData(id: string, label: string, options: Option[], field: FieldTree<any, string | number>): SelectData {
    const selectData = new SelectData();
    selectData.id = id;
    selectData.label = label;
    selectData.options = options;
    selectData.field = field;
    return selectData;
  }
}
