import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  @Input() title = null;
  @Input() image = null;
}
