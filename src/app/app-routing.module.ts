import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ApplicationSelectorComponent} from "./main-selector/application-selector.component";
import {JobApplicationComponent} from "./job-application/job-application.component";

const routes: Routes = [
  { path: '', component: ApplicationSelectorComponent },
  { path: 'job-application', component: JobApplicationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
