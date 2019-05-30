import { Component, OnInit, Input } from '@angular/core';
import { LeftSideBarModel } from './leftsidebar.model';

@Component({
  selector: 'vg-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit {

  @Input()
  leftSideBarModel: LeftSideBarModel;

  constructor() { }

  ngOnInit() {
  }

}
