import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExtendedForm } from "./extended-form/extended-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExtendedForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('modulo-lunar-angular');
}
