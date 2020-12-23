import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-trip-card',
  templateUrl: './trip-card.component.html'
})
export class TripCardComponent implements OnInit {
  @Input() travel;

  ngOnInit() {}
}
