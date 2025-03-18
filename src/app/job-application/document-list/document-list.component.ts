import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";

@Component({
  selector: 'app-document-list',
  imports: [
    MatButton,
    RouterLink,
    MatIcon,
    MatCheckbox,
    MatRadioButton,
    MatRadioGroup
  ],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentListComponent {

}
