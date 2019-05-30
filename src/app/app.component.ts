import { Component } from '@angular/core';
import { VGMODEL } from './mockVgModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vggo';
  vgModel = VGMODEL;
}
