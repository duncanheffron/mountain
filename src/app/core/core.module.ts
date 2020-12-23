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
import { CaseCardComponent } from '../shared/components/case-card/case-card.component';
import { CaseCardSkeletonComponent } from '../shared/components/case-card-skeleton/case-card-skeleton.component';
import { ExperienceCardComponent } from '../shared/components/experience-card/experience-card.component';
import { ExperienceCardSkeletonComponent } from '../shared/components/experience-card-skeleton/experience-card-skeleton.component';
import { TripCardComponent } from '../shared/components/trip-card/trip-card.component';
import { TripCardSkeletonComponent } from '../shared/components/trip-card-skeleton/trip-card-skeleton.component';
import { MapComponent } from '../shared/assets/trip-map/map/map.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CtaComponent,
    FooterComponent,
    BrandingComponent,
    BrandShapeComponent,
    HeartShapeComponent,
    HeroComponent,
    CaseCardComponent,
    CaseCardSkeletonComponent,
    ExperienceCardComponent,
    ExperienceCardSkeletonComponent,
    TripCardComponent,
    TripCardSkeletonComponent,
    MapComponent
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
    HeroComponent,
    CaseCardComponent,
    CaseCardSkeletonComponent,
    ExperienceCardComponent,
    ExperienceCardSkeletonComponent,
    TripCardComponent,
    TripCardSkeletonComponent,
    MapComponent
  ]
})
export class CoreModule {}
