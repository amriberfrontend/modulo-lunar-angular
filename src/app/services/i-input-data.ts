import { FieldTree } from "@angular/forms/signals";
import { Option } from "./option";

export interface IInputData {
  id: string;
  label: string;
  type: string;
  field?: FieldTree<any, string | number>;
  options?: Option[];
  max?: number;
  min?: number;

}
