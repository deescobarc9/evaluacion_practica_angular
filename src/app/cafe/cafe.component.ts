import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  cafes: Array<Cafe> = [];
  tipos: Array<string> = [];
  tiposTotal: Array<string> = [];
  constructor(private cafeService: CafeService) { }

  getCafes() {
    this.cafeService.getCafes().subscribe((data) => {
      this.cafes = data;
    });
  }

  getTipos() {
    this.cafeService.getCafes().subscribe((data) => {
      this.tipos = [];
      data.forEach(cafe => {
        if (!this.tipos.includes(cafe.tipo)) {
          this.tipos.push(cafe.tipo);
        }
      });
      this.tipos.forEach(tipo => {
        let total: number = this.cafes.filter(cafe => cafe.tipo === tipo).length;
        this.tiposTotal.push(`Total ${tipo}: ${total}`);
      });
    });  
  }

  ngOnInit() {
    this.getCafes();
    this.getTipos();
  }

}
