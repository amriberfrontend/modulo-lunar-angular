import { Injectable } from '@angular/core';
import { CampoBasico } from '../model/campo-basico';
import { CampoInput } from '../model/campo-input';
import { Validators } from '@angular/forms';
import { CampoDropdown } from '../model/campo-dropdown';
import { CampoTextarea } from '../model/campo-textarea';


@Injectable({
  providedIn: 'root',
})
export class CampoService {
  getCampos() {
    const campos: CampoBasico<string>[] = [
      new CampoInput({
        key: 'identificador',
        label: $localize`Identificador* (LLNNNNLL)`,
        type: 'text',
        required: true,
        pattern: /[A-Z]{2}[0-9]{4}[A-Z]{2}/,
        maxLength: 8,
      }),
      new CampoInput({
        key: 'nombre',
        label: $localize`Nombre*`,
        type: 'text',
        required: true,
      }),
      new CampoDropdown({
        key: 'grupo',
        label: $localize`Grupo*`,
        required: true,
        options: [
          {key: 'ignea', value: $localize`Ígnea`},
          {key: 'metamorfica', value: $localize`Metamórfica`},
          {key: 'sedimentaria', value: $localize`Sedimentaria`},
        ],
      }),
      new CampoInput({
        key: 'dureza',
        label: $localize`Dureza (0-10)`,
        type: 'number',
        min: 0,
        max: 10,
      }),
      new CampoDropdown({
        key: 'tamanyoGrano',
        label: $localize`Tamaño del grano`,
        required: true,
        options: [
          {key: 'muy-grueso', value: $localize`Muy grueso`},
          {key: 'grueso', value: $localize`Grueso`},
          {key: 'medio', value: $localize`Medio`},
          {key: 'fino', value: $localize`Fino`},
        ],
      }),
      new CampoDropdown({
        key: 'clasificacion',
        label: $localize`Clasificación`,
        options: [
          {key: 'construccion', value: $localize`Construccion`},
          {key: 'ornamental', value: $localize`Ornamental`},
          {key: 'utensilios', value: $localize`Utesilios`},
          {key: 'machacar', value: $localize`Machacar`},
        ],

      }),
      new CampoInput({
        key: 'tamanyoCristales',
        label: $localize`Tamaño de cristales (0-10)`,
        type: 'number',
        min: 0,
        max: 10,
      }),
      new CampoInput({
        key: 'temperaturaFormacion',
        label: $localize`Temperatura de formación (K) (0-1500)`,
        type: 'number',
        min: 0,
        max: 1500,
      }),
      new CampoTextarea({
        key: 'estructura',
        label: $localize`Estructura`,
      }),
      new CampoTextarea({
        key: 'formaGrano',
        label: $localize`Forma de grano`,
      }),
      new CampoDropdown({
        key: 'textura',
        label: $localize`Textura*`,
        required: true,
        options: [
          {key: 'vitrea', value: $localize`Vítrea`},
          {key: 'afanitica', value: $localize`Afanítica`},
          {key: 'faneritica', value: $localize`Fanerítica`},
        ],
      })
    ]

    return campos;
  }
}
