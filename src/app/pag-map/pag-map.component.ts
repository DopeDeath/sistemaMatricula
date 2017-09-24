import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'semdf-pagMap',
  templateUrl: './pag-map.component.html',
  styleUrls: ['./pag-map.component.css']
})
export class PagMapComponent implements OnInit {
  
 lat: number = -15.7801;
 lng: number = -47.9292;

  constructor() { }

  ngOnInit() {
  }

}
