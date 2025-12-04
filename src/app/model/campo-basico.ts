import { ValidatorFn } from "@angular/forms";

export class CampoBasico<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];
  maxLength: number | undefined;
  min: number | undefined;
  max: number | undefined;
  pattern: RegExp | undefined;

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      controlType?: string;
      type?: string;
      options?: {key: string, value: string}[];
      maxLength?: number;
      min?: number;
      max?: number;
      pattern?: RegExp;
    } = {},
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.max = options.max;
    this.min = options.min;
    this.maxLength = options.maxLength;
    this.pattern = options.pattern;
  }
}
