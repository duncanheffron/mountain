import { Component, Input} from '@angular/core';

@Component({
  selector: 'mt-sharevalue',
  templateUrl: './sharevalue.component.svg'
})
export class SharevalueComponent {
  @Input() fillColor;
}
