import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-application-selector',
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './application-selector.component.html',
  styleUrl: './application-selector.component.scss',
  standalone: true
})
export class ApplicationSelectorComponent {
}
