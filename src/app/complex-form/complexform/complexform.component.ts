import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith, tap } from 'rxjs/operators';

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

showEmailCtrl$!: Observable<boolean>;
showPhoneCtrl$!: Observable<boolean>;


constructor(private formBuilder: FormBuilder) { }


ngOnInit(): void {
  this.initFormControls();
  this.initMainForm();
  this.initFormObservables();
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

private initFormObservables() {
    this.showEmailCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
        startWith(this.contactPreferenceCtrl.value),
        map(preference => preference === 'email'),
        tap(showEmailCtrl => this.setEmailValidator(showEmailCtrl))
    );
    this.showPhoneCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
        startWith(this.contactPreferenceCtrl.value),
        map(preference => preference === 'phone'),
        tap(showPhoneCtrl => this.setPhoneValidator(showPhoneCtrl))
    );
}

  private setEmailValidator(showEmailCtrl: boolean){
{
        if(showEmailCtrl){
          this.emailCtrl.addValidators([Validators.required, Validators.email]);
          this.confirmEmailCtrl.addValidators([Validators.required, Validators.email]);
        } else {
          this.emailCtrl.clearValidators();
          this.confirmEmailCtrl.clearValidators();
        }
        this.emailCtrl.updateValueAndValidity();
        this.confirmEmailCtrl.updateValueAndValidity()
      }
  }

  private setPhoneValidator(showPhoneCtrl: boolean){
    {
        if(showPhoneCtrl){
          this.phoneCtrl.addValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
        } else {
          this.phoneCtrl.clearValidators();
        }
        this.phoneCtrl.updateValueAndValidity();
      }
  }

onSubmitForm(): void {
console.log(this.mainForm.value)
}

getFormCtrlErrorText(ctrl: AbstractControl){
  if (ctrl.hasError('required')){
    return 'Ce champ est requis';
  } else if (ctrl.hasError('email')) {
    return 'Merci de rentrer une adresse mail valide';
  } else if (ctrl.hasError('minlength')) {
    return 'Ce numero contient pas assez de chiffres';
  } else if (ctrl.hasError('maxlength')) {
    return 'Ce numero contient trop de chiffres';
  }  else {
    return 'Ce champ contient une erreur';
  }
}
}
