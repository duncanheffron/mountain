import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { BrandingComponent } from '../shared/assets/branding/branding.component';
import { HeartShapeComponent } from '../shared/assets/branding/heart-shape/heart-shape.component';
import { BrandShapeComponent } from '../shared/assets/branding/brand-shape/brand-shape.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CtaComponent,
    FooterComponent,
    BrandingComponent,
    BrandShapeComponent,
    HeartShapeComponent,
    HeroComponent
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
    HeartShapeComponent,
    HeroComponent
  ]
})
export class CoreModule {}
