import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExtendedForm } from "./components/extended-form/extended-form";
import { CampoControlService } from './services/campo-control-service';
import { CampoService } from './services/campo-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExtendedForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('modulo-lunar-angular');

  campos = inject(CampoService).getCampos();
}
