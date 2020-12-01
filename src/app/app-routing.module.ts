import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './modules/index/index.component';
import { CasesComponent } from './modules/cases/cases.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ExperiencesComponent } from './modules/experiences/experiences.component';
import { TripsComponent } from './modules/trips/trips.component';
import { CaseDetailComponent } from './modules/cases/case-detail/case-detail.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'cases', component: CasesComponent },
  { path: 'case/:string', component: CaseDetailComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'trips', component: TripsComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
