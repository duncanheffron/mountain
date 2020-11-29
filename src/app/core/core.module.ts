import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { BrandingComponent } from '../shared/assets/branding/branding.component';
import { HeartShapeComponent } from '../shared/assets/branding/heart-shape/heart-shape.component';
import { BrandShapeComponent } from '../shared/assets/branding/brand-shape/brand-shape.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    CtaComponent,
    FooterComponent,
    BrandingComponent,
    BrandShapeComponent,
    HeartShapeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CtaComponent,
    FooterComponent,
    BrandingComponent,
    BrandShapeComponent,
    HeartShapeComponent
  ]
})
export class CoreModule {}
