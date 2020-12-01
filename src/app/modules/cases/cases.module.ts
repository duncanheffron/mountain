import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CasesComponent } from './cases.component';
import { CoreModule } from '../../core/core.module';
import { CaseDetailComponent } from './case-detail/case-detail.component';

@NgModule({
  declarations: [
    CasesComponent,
    CaseDetailComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule
  ]
})

export class CasesModule {}
