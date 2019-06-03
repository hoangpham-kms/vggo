import { Component, OnInit } from '@angular/core';
import { VGMODEL } from './simplelayout.model';

@Component({
  selector: 'app-simplelayout',
  templateUrl: './simplelayout.component.html',
  styleUrls: ['./simplelayout.component.scss']
})
export class SimplelayoutComponent implements OnInit {

  vgModel = VGMODEL;

  constructor() { }

  ngOnInit() {
  }

}
