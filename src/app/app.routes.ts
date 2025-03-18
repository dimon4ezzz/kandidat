import { Routes } from '@angular/router';
import {ApplicationSelectorComponent} from "./application-selector/application-selector.component";
import {ArrestedApplicationComponent} from "./job-application/arrested-application/arrested-application.component";
import {DocumentListComponent} from "./job-application/document-list/document-list.component";

export const routes: Routes = [
    { path: '', component: ApplicationSelectorComponent },
    { path: 'arrested-application', component: ArrestedApplicationComponent },
    { path: 'document-list', component: DocumentListComponent },
];
