import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatCheckbox} from "@angular/material/checkbox";
import {NgOptimizedImage} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-arrested-application',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatCheckbox,
    NgOptimizedImage,
    MatButton,
    MatIcon,
    RouterLink
  ],
  templateUrl: './arrested-application.component.html',
  styleUrl: './arrested-application.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ArrestedApplicationComponent {
  public copyToClipboard(): void {
    navigator.clipboard.writeText("spravka.hr@urfu.ru");
  }
}
