import { Injectable } from '@angular/core';
import { CampoBasico } from '../model/campo-basico';
import { CampoInput } from '../model/campo-input';


@Injectable({
  providedIn: 'root',
})
export class CampoService {
  getCampos() {
    const campos: CampoBasico<string>[] = [
      new CampoInput({
        key: 'identificador',
        label: $localize`Identificador*`,
        type: 'text',
        required: true,
      }),
      new CampoInput({
        key: 'nombre',
        label: $localize`Nombre*`,
        type: 'text',
        required: true,
      })
    ]

    return campos;
  }
}
