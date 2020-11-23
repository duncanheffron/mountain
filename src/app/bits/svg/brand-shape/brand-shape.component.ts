import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-brand-shape',
  templateUrl: './brand-shape.component.svg',
  styleUrls: ['./brand-shape.component.scss']
})
export class BrandShapeComponent {
  @Input() fillColor;
}
