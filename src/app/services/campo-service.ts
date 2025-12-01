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
        label: 'Identificador',
        type: 'text',
        required: true,
      }),
      new CampoInput({
        key: 'nombre',
        label: 'Nombre',
        type: 'text',
        required: true,
      })
    ]

    return campos;
  }
}
