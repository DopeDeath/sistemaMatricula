import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'semdf-rodape',
  templateUrl: './pag-map.component.html',
  styleUrls: ['./pag-map.component.css']
})
export class PagMapComponent implements OnInit {
  title: string = 'My first AGM project';
 lat: number = 51.678418;
 lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
