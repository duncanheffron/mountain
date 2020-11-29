import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { IndexComponent } from './modules/index/index.component';
import { CaseComponent } from './modules/case/case.component';
import { IndexModule } from './modules/index/index.module';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CaseComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    CoreModule,
    IndexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
