import { ExtendedFieldBase } from "./extended-field-base";

export class ExtendedFieldDropdown extends ExtendedFieldBase<string> {
  override controlType = 'dropdown';
}
