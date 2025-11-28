import { ExtendedFieldBase } from "./extended-field-base";

export class ExtendedFieldText extends ExtendedFieldBase<string> {
  override controlType = 'textbox';
}
