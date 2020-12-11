import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../../core/core.module';

import { LondonComponent } from '../../../../shared/assets/trip-map/london/london.component';

@NgModule({
  declarations: [
    LondonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LondonComponent
  ]
})
export class TripRowModule {}
