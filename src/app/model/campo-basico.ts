import { ValidatorFn } from "@angular/forms";

export class CampoBasico<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];
  validators: ValidatorFn[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      controlType?: string;
      type?: string;
      options?: {key: string, value: string}[];
      validators?: ValidatorFn[];
    } = {},
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.validators = options.validators || [];
  }
}
