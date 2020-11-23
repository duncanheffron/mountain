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

@NgModule({
  declarations: [
    AppComponent,
    HorseBehaviorTrainerComponent,
    BurgerComponent,
    PostnlComponent,
    SharevalueComponent,
    LondonComponent,
    BrandShapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
