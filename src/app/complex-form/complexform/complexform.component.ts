import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complexform',
  templateUrl: './complexform.component.html',
  styleUrls: ['./complexform.component.scss']
})
export class ComplexformComponent implements OnInit {

mainForm!: FormGroup;
personalInfoForm!: FormGroup;
contactPreferenceCtrl!: FormControl;
emailCtrl!: FormControl;
confirmEmailCtrl!: FormControl;
emailForm!: FormGroup;
phoneCtrl!: FormControl;
passwordCtrl!: FormControl;
confirmPasswordCtrl!: FormControl;
loginInfoForm!: FormGroup;

constructor(private formBuilder: FormBuilder) { }


ngOnInit(): void {
  this.initFormControls();
  this.initMainForm();
}

private initMainForm(): void {
    this.mainForm = this.formBuilder.group({
        personalInfo: this.personalInfoForm,
        contactPreference: this.contactPreferenceCtrl,
        email: this.emailForm,
        phone: this.phoneCtrl,
        loginInfo: this.loginInfoForm
    });
}

 private initFormControls(): void {
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
    this.contactPreferenceCtrl = this.formBuilder.control('email');
    this.emailCtrl = this.formBuilder.control('');
    this.confirmEmailCtrl = this.formBuilder.control('');
    this.emailForm = this.formBuilder.group({
        email: this.emailCtrl,
        confirm: this.confirmEmailCtrl
});
    this.phoneCtrl = this.formBuilder.control('');
    this.passwordCtrl = this.formBuilder.control('', Validators.required);
    this.confirmPasswordCtrl = this.formBuilder.control('', Validators.required);
    this.loginInfoForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: this.passwordCtrl,
    confirmPassword: this.confirmPasswordCtrl
});
} 

onSubmitForm(): void {
console.log(this.mainForm.value)
}
}
