import { Component, HostListener, input, model } from '@angular/core';
import { CampoBasico } from '../../../model/campo-basico';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  imports: [ReactiveFormsModule],
  templateUrl: './textbox.html',
  styleUrl: './textbox.scss',
})
export class Textbox {
  windowWidth = window.innerWidth;

  readonly campo = input.required<CampoBasico<string>>();
  readonly form = input.required<FormGroup>();

  @HostListener("window:resize")
  onResize() {
    this.windowWidth = window.innerWidth;
  }

}
