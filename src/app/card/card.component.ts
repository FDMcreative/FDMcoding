import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-card', //when building resusable component, prefix them to avoid clashing
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
