import { Component, Input } from '@angular/core';

@Component({
  selector: 'mt-horse-behavior-trainer',
  templateUrl: './horse-behavior-trainer.component.svg'
})
export class HorseBehaviorTrainerComponent {
  @Input() fillColor;
}
