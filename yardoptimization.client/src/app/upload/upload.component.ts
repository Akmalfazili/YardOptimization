import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Upload } from './upload';
import { BaseFormComponent } from '../base-form.component'

@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent extends BaseFormComponent implements OnInit{
  constructor() {
    super();
  }
  upload?: Upload;

  ngOnInit() {
    this.form = new FormGroup({
      containerId: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]),
      arrival: new FormControl('', [Validators.required, this.validateDateTime]),
      departure: new FormControl('', [ Validators.required, this.validateDateTime]),
      destination: new FormControl('', Validators.required),
      weight: new FormControl('', [Validators.required, Validators.min(0)])
    })
  }
  private validateDateTime(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    //check if its a valid date object or valid date string
    const parsedDate = new Date(value);
    if (!value || isNaN(parsedDate.getTime())) {
      return { 'dateTime': true };
    } else {
      return null;
    }
  }
}
