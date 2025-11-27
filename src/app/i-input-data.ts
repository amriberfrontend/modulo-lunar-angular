import { Option } from "./option";

export interface IInputData {
  id: string;
  label: string;
  type: string;
  options?: Option[];
}
