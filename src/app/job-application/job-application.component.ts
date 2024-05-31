import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-job-application',
  templateUrl: 'job-application.component.html',
  styleUrls: ['job-application.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobApplicationComponent {
  arrestedApplicationFormGroup = this._formBuilder.group({
    applicationHasReceived: [false, Validators.requiredTrue]
  });

  constructor(private _formBuilder: FormBuilder) { }

  public copyToClipboard(): void {
    navigator.clipboard.writeText("spravka.hr@urfu.ru");
  }
}
