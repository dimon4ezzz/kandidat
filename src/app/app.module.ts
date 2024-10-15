import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ApplicationSelectorComponent } from './main-selector/application-selector.component';
import {MatButton} from "@angular/material/button";
import {MatProgressBar} from "@angular/material/progress-bar";
import { JobApplicationComponent } from './job-application/job-application.component';
import {MatStep, MatStepLabel, MatStepper, MatStepperIcon, MatStepperNext} from "@angular/material/stepper";
import {MatCheckbox} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatListOption, MatSelectionList} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ApplicationSelectorComponent,
    JobApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButton,
    MatProgressBar,
    MatStepper,
    MatStep,
    MatStepLabel,
    MatStepperNext,
    MatCheckbox,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatSelectionList,
    MatListOption,
    MatDivider,
    MatStepperIcon,
    MatIcon,
    NgOptimizedImage
  ],
  providers: [
    provideAnimationsAsync(),
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {
        displayDefaultIndicatorType: false,
        showError: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
