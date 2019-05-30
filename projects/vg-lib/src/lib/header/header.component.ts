import { Component, OnInit, Input } from '@angular/core';
import { HeaderModel } from './header.model';

@Component({
  selector: 'vg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  headerModel: HeaderModel;

  constructor() { }

  ngOnInit() {
  }

}
