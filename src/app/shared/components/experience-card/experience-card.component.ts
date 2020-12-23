import { Component, Input, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeNL from '@angular/common/locales/nl';
registerLocaleData(localeNL, 'nl');

@Component({
  selector: 'mt-experience-card',
  templateUrl: './experience-card.component.html'
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience;

  ngOnInit() {}
}
