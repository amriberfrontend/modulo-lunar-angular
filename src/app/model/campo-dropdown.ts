import { CampoBasico } from "./campo-basico";

export class CampoDropdown extends CampoBasico<string> {
  override controlType = 'dropdown';
}
