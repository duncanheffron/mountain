import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from '../../../../shared/assets/trip-map/map/map.component';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapComponent
  ]
})
export class TripRowModule {}
