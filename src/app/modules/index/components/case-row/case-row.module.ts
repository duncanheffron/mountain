import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BurgerComponent } from '../../../../shared/assets/case-brand/burger/burger.component';
import { PostnlComponent } from '../../../../shared/assets/case-brand/postnl/postnl.component';
import { SharevalueComponent } from '../../../../shared/assets/case-brand/sharevalue/sharevalue.component';
// tslint:disable-next-line:max-line-length
import { HorseBehaviorTrainerComponent } from '../../../../shared/assets/case-brand/horse-behavior-trainer/horse-behavior-trainer.component';

@NgModule({
  declarations: [
    BurgerComponent,
    PostnlComponent,
    SharevalueComponent,
    HorseBehaviorTrainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BurgerComponent,
    PostnlComponent,
    SharevalueComponent,
    HorseBehaviorTrainerComponent
  ]
})
export class CaseRowModule {}
