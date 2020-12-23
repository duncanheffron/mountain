import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'mt-case-card',
  templateUrl: './case-card.component.html'
})
export class CaseCardComponent implements OnInit {
  @Input() project;
  localEnv: boolean = environment.local;

  ngOnInit() {}
}
