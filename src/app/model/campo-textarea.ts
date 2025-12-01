import { CampoBasico } from "./campo-basico";

export class CampoTextarea extends CampoBasico<string> {
  override controlType = 'textarea';
}
