import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule
  ]
})

export class AboutModule {}
