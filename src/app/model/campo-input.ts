import { CampoBasico } from "./campo-basico";

export class CampoInput extends CampoBasico<string> {
  override controlType = 'textbox';
}
