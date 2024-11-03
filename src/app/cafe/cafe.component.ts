import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { dataCafes } from './dataCafes';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  cafes: Array<Cafe> = [];
  constructor() { }
  getCafesList(): Array<Cafe> {
    return dataCafes;
  }

  ngOnInit() {
    this.cafes = this.getCafesList();
  }

}
