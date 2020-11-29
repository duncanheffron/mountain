import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CaseRowModule } from './components/case-row/case-row.module';

import { MastheadComponent } from './components/masthead/masthead.component';
import { ExperienceRowComponent } from './components/experience-row/experience-row.component';
import { CaseRowComponent } from './components/case-row/case-row.component';
import { TripRowComponent } from './components/trip-row/trip-row.component';
import { AboutComponent } from './components/about/about.component';
import { TripRowModule } from './components/trip-row/trip-row.module';

@NgModule({
  declarations: [
    MastheadComponent,
    ExperienceRowComponent,
    CaseRowComponent,
    TripRowComponent,
    AboutComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule,
    CaseRowModule,
    TripRowModule
  ],
  exports: [
    MastheadComponent,
    ExperienceRowComponent,
    CaseRowComponent,
    TripRowComponent,
    AboutComponent
  ]
})
export class IndexModule {}
