import { Component, VERSION } from '@angular/core';
import { modules } from './modules.constants';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  modules = modules;
}
