import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-london',
  templateUrl: './london.component.svg',
  styleUrls: ['./london.component.scss']
})
export class LondonComponent {
  @Input() fillColor;
}
