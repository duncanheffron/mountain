import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorseBehaviorTrainerComponent } from './bits/svg/brands/horse-behavior-trainer/horse-behavior-trainer.component';
import { BurgerComponent } from './bits/svg/brands/burger/burger.component';
import { PostnlComponent } from './bits/svg/brands/postnl/postnl.component';
import { SharevalueComponent } from './bits/svg/brands/sharevalue/sharevalue.component';
import { LondonComponent } from './bits/svg/country/london/london.component';
import { BrandShapeComponent } from './bits/svg/brand-shape/brand-shape.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { CasesComponent } from './components/cases/cases.component';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';
import { TravelsComponent } from './components/travels/travels.component';
import { AboutComponent } from './components/about/about.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HorseBehaviorTrainerComponent,
    BurgerComponent,
    PostnlComponent,
    SharevalueComponent,
    LondonComponent,
    BrandShapeComponent,
    NavbarComponent,
    MastheadComponent,
    ExperienceComponent,
    CasesComponent,
    SectionHeadingComponent,
    TravelsComponent,
    AboutComponent,
    CtaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
