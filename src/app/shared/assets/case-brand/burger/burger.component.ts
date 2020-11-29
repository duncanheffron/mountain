import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-burger',
  templateUrl: './burger.component.svg'
})
export class BurgerComponent {
  @Input() fillColor;
}
